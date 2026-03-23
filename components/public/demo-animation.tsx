"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { 
  Shield, PlayCircle, Activity, Globe, CheckCircle, Zap, AlertCircle 
} from 'lucide-react'
import { Button } from "@/components/ui/button"

type DemoState = 'idle' | 'running' | 'success'

interface StepData {
  id: number
  label: string
  value: string
  targetA: string
  targetB: string
}

interface FlyingData {
  value: string
  start: { x: number; y: number }
  endA: { x: number; y: number }
  endB: { x: number; y: number }
}

const stepsData: StepData[] = [
  { id: 1, label: "Assuré", value: "Jean Dupont", targetA: "Conducteur", targetB: "Nom de l'assuré" },
  { id: 2, label: "Véhicule", value: "Peugeot 308", targetA: "Immatriculation", targetB: "Modèle" },
  { id: 3, label: "Bonus", value: "0.50", targetA: "Bonus", targetB: "CRM" }
]

export function DemoAnimation() {
  const [demoState, setDemoState] = useState<DemoState>('idle')
  const [filledStepsA, setFilledStepsA] = useState<number[]>([])
  const [filledStepsB, setFilledStepsB] = useState<number[]>([])
  const [activeStep, setActiveStep] = useState(0)
  const [activeFlyingData, setActiveFlyingData] = useState<FlyingData | null>(null)
  const [mismatchStep, setMismatchStep] = useState<number | null>(null)

  const sourceRefs = useRef<(HTMLDivElement | null)[]>([])
  const targetARefs = useRef<(HTMLDivElement | null)[]>([])
  const targetBRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (demoState === 'running' && activeStep < 3) {
      timer = setTimeout(() => {
        const stepIndex = activeStep
        const currentData = stepsData[stepIndex]

        const sourceRect = sourceRefs.current[stepIndex]?.getBoundingClientRect()
        const targetARect = targetARefs.current[stepIndex]?.getBoundingClientRect()
        const targetBRect = targetBRefs.current[stepIndex]?.getBoundingClientRect()

        if (sourceRect && targetARect && targetBRect) {
          setActiveFlyingData({
            value: currentData.value,
            start: { x: sourceRect.left, y: sourceRect.top },
            endA: { x: targetARect.left, y: targetARect.top },
            endB: { x: targetBRect.left, y: targetBRect.top }
          })

          setTimeout(() => {
            setActiveFlyingData(null)
            setFilledStepsB(prev => [...prev, stepIndex])

            if (stepIndex === 1) { 
              setMismatchStep(stepIndex)
              setTimeout(() => {
                setMismatchStep(null)
                setActiveStep(prev => prev + 1)
              }, 1200)
            } else {
              setFilledStepsA(prev => [...prev, stepIndex])
              setActiveStep(prev => prev + 1)
              if (stepIndex === 2) {
                setTimeout(() => setDemoState('success'), 600)
              }
            }
          }, 800)
        }
      }, activeStep === 0 ? 500 : 800)
    }
    return () => clearTimeout(timer)
  }, [demoState, activeStep])

  const startDemo = useCallback(() => {
    setDemoState('running')
    setActiveStep(0)
    setFilledStepsA([])
    setFilledStepsB([])
    setMismatchStep(null)
  }, [])

  const resetDemo = useCallback(() => {
    setDemoState('idle')
    setActiveStep(0)
    setFilledStepsA([])
    setFilledStepsB([])
    setActiveFlyingData(null)
    setMismatchStep(null)
  }, [])

  const flyAKeyframes = activeFlyingData ? `
    @keyframes fly-a {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translate(${activeFlyingData.endA.x - activeFlyingData.start.x}px, ${activeFlyingData.endA.y - activeFlyingData.start.y}px) scale(0.8); opacity: 0; }
    }
  ` : ''

  const flyBKeyframes = activeFlyingData ? `
    @keyframes fly-b {
      0% { transform: translate(0,0) scale(1); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translate(${activeFlyingData.endB.x - activeFlyingData.start.x}px, ${activeFlyingData.endB.y - activeFlyingData.start.y}px) scale(0.8); opacity: 0; }
    }
  ` : ''

  return (
    <div className="relative overflow-hidden">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
        ${flyAKeyframes}
        ${flyBKeyframes}
      `}</style>

      {/* Flying elements */}
      {activeFlyingData && (
        <>
          <div 
            className="fixed z-[100] px-4 py-2 bg-primary text-primary-foreground rounded-full font-bold shadow-2xl pointer-events-none"
            style={{ 
              left: activeFlyingData.start.x, 
              top: activeFlyingData.start.y, 
              animation: 'fly-a 0.8s ease-in-out forwards' 
            }}
          >
            {activeFlyingData.value}
          </div>
          <div 
            className="fixed z-[100] px-4 py-2 bg-primary text-primary-foreground rounded-full font-bold shadow-2xl pointer-events-none"
            style={{ 
              left: activeFlyingData.start.x, 
              top: activeFlyingData.start.y, 
              animation: 'fly-b 0.8s ease-in-out forwards' 
            }}
          >
            {activeFlyingData.value}
          </div>
        </>
      )}

      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4">
            <Zap size={14} /> Synchronisation Intelligente
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            L&apos;automatisation qui ne se trompe pas.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Formly valide la cohérence de chaque champ. Si une donnée ne correspond pas, elle est rejetée pour garantir la qualité de votre saisie.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* SOURCE */}
          <div className="w-full lg:w-1/3 bg-card rounded-3xl shadow-2xl p-8 border border-border flex flex-col">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
              <div className="p-3 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                <Shield size={28} />
              </div>
              <h3 className="font-bold text-xl text-foreground">Source Formly</h3>
            </div>
            
            <div className="space-y-4 mb-10 flex-1">
              {stepsData.map((step, idx) => {
                const isActive = activeStep === idx && activeFlyingData
                const isDone = activeStep > idx
                return (
                  <div 
                    key={step.id} 
                    ref={el => { sourceRefs.current[idx] = el }}
                    className={`p-4 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary/10 border-primary scale-105 shadow-md' 
                        : isDone 
                          ? 'opacity-40 border-border bg-secondary/50' 
                          : 'bg-secondary/50 border-transparent'
                    }`}
                  >
                    <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">{step.label}</div>
                    <div className="font-bold text-lg text-foreground">{step.value}</div>
                  </div>
                )
              })}
            </div>

            <Button 
              onClick={demoState === 'success' ? resetDemo : startDemo} 
              disabled={demoState === 'running'}
              className={`w-full h-14 rounded-2xl font-bold text-base ${
                demoState === 'running' 
                  ? 'bg-secondary text-muted-foreground cursor-not-allowed' 
                  : demoState === 'success'
                    ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25'
              }`}
            >
              {demoState === 'running' ? (
                <>
                  <Activity size={20} className="animate-spin mr-2" /> 
                  Injection...
                </>
              ) : demoState === 'success' ? (
                'Réinitialiser'
              ) : (
                <>
                  <PlayCircle size={20} className="mr-2" /> 
                  Lancer la démo
                </>
              )}
            </Button>
          </div>

          {/* DESTINATIONS */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PORTAL A */}
            <div className="bg-card rounded-3xl shadow-xl border-t-4 border-blue-600 flex flex-col border border-border">
              <div className="px-6 py-4 border-b border-border bg-secondary/50 flex items-center justify-between rounded-t-3xl">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe size={16} />
                  <span className="font-bold text-xs uppercase tracking-wider">Portail Assureur A</span>
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1">
                {stepsData.map((step, idx) => {
                  const isError = mismatchStep === idx
                  const isFilled = filledStepsA.includes(idx)

                  return (
                    <div key={idx} ref={el => { targetARefs.current[idx] = el }}>
                      <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-2">{step.targetA}</label>
                      <div className={`h-12 rounded-xl border-2 flex items-center px-4 transition-all duration-300 ${
                        isError 
                          ? 'bg-destructive/10 border-destructive animate-shake' 
                          : isFilled 
                            ? 'bg-primary/10 border-primary' 
                            : 'bg-secondary/50 border-transparent'
                      }`}>
                        {isError ? (
                          <span className="text-destructive font-bold flex items-center gap-2">
                            {step.value} <AlertCircle size={14} />
                          </span>
                        ) : isFilled ? (
                          <span className="font-bold text-primary flex items-center gap-2">
                            {step.value} <CheckCircle size={14} />
                          </span>
                        ) : (
                          <span className="text-muted-foreground/50 italic text-sm">...</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* PORTAL B */}
            <div className="bg-card rounded-3xl shadow-xl border-t-4 border-red-500 flex flex-col border border-border">
              <div className="px-6 py-4 border-b border-border bg-secondary/50 flex items-center gap-2 rounded-t-3xl">
                <Globe size={16} className="text-red-500" />
                <span className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Portail Assureur B</span>
              </div>
              <div className="p-6 space-y-4 flex-1">
                {stepsData.map((step, idx) => {
                  const isFilled = filledStepsB.includes(idx)
                  return (
                    <div key={idx} ref={el => { targetBRefs.current[idx] = el }}>
                      <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-2">{step.targetB}</label>
                      <div className={`h-12 rounded-xl border-2 flex items-center px-4 transition-all duration-500 ${
                        isFilled 
                          ? 'bg-primary/10 border-primary' 
                          : 'bg-secondary/50 border-transparent'
                      }`}>
                        {isFilled ? (
                          <span className="font-bold text-primary flex items-center gap-2">
                            {step.value} <CheckCircle size={14} />
                          </span>
                        ) : (
                          <span className="text-muted-foreground/50 italic text-sm">...</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
        
        {/* Footer badges */}
        <div className="mt-12 text-center text-muted-foreground text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-4 flex-wrap">
          <span>Formly Logic</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
          <span>Saisie Sécurisée</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
          <span>Traitement Parallèle</span>
        </div>
      </div>
    </div>
  )
}
