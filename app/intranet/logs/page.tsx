"use client"

import { useState } from "react"
import { IntranetHeader } from "@/components/intranet/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter,
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle2,
  RefreshCw,
  Clock,
  ExternalLink
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const logs = [
  {
    id: "1",
    level: "error",
    message: "Erreur de mapping sur selecteur #immat - Element non trouve",
    source: "Extension",
    cabinet: "Cabinet Dupont",
    insurer: "AXA",
    timestamp: "2024-01-15 14:32:45",
    user: "j.dupont@cabinet.fr",
  },
  {
    id: "2",
    level: "warning",
    message: "Champ vehicule.modele non reconnu - Valeur par defaut utilisee",
    source: "Extension",
    cabinet: "Assur & Co",
    insurer: "Allianz",
    timestamp: "2024-01-15 14:28:12",
    user: "m.lambert@assurandco.fr",
  },
  {
    id: "3",
    level: "info",
    message: "Formulaire rempli avec succes - 24/24 champs",
    source: "Extension",
    cabinet: "Martin Courtage",
    insurer: "MAIF",
    timestamp: "2024-01-15 14:25:33",
    user: "p.martin@martin-courtage.fr",
  },
  {
    id: "4",
    level: "error",
    message: "Timeout lors de la connexion au portail assureur",
    source: "API",
    cabinet: "Protect Assurances",
    insurer: "MMA",
    timestamp: "2024-01-15 14:20:18",
    user: "System",
  },
  {
    id: "5",
    level: "success",
    message: "Synchronisation des profils terminee - 47 profils",
    source: "Sync",
    cabinet: "Conseil Assur",
    insurer: "-",
    timestamp: "2024-01-15 14:15:00",
    user: "System",
  },
  {
    id: "6",
    level: "warning",
    message: "Structure du formulaire modifiee - Verification necessaire",
    source: "Monitoring",
    cabinet: "-",
    insurer: "Generali",
    timestamp: "2024-01-15 14:10:45",
    user: "System",
  },
  {
    id: "7",
    level: "error",
    message: "Erreur d'authentification - Token expire",
    source: "Extension",
    cabinet: "Cabinet Dupont",
    insurer: "SwissLife",
    timestamp: "2024-01-15 14:05:22",
    user: "j.dupont@cabinet.fr",
  },
  {
    id: "8",
    level: "info",
    message: "Nouvelle version de l'extension detectee - v2.1.4",
    source: "System",
    cabinet: "-",
    insurer: "-",
    timestamp: "2024-01-15 14:00:00",
    user: "System",
  },
]

const levelConfig = {
  error: {
    icon: AlertCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    label: "Erreur",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-chart-4",
    bg: "bg-chart-4/10",
    label: "Warning",
  },
  info: {
    icon: Info,
    color: "text-blue-600",
    bg: "bg-blue-100",
    label: "Info",
  },
  success: {
    icon: CheckCircle2,
    color: "text-primary",
    bg: "bg-primary/10",
    label: "Succes",
  },
}

export default function LogsPage() {
  const [search, setSearch] = useState("")
  const [levelFilter, setLevelFilter] = useState("Tous")

  const filteredLogs = logs.filter((log) => {
    const matchesSearch = log.message.toLowerCase().includes(search.toLowerCase()) ||
      log.cabinet.toLowerCase().includes(search.toLowerCase()) ||
      log.insurer.toLowerCase().includes(search.toLowerCase())
    const matchesLevel = levelFilter === "Tous" || log.level === levelFilter.toLowerCase()
    return matchesSearch && matchesLevel
  })

  const errorCount = logs.filter(l => l.level === "error").length
  const warningCount = logs.filter(l => l.level === "warning").length

  return (
    <>
      <IntranetHeader 
        title="Logs & Support" 
        description="Surveillez les erreurs et l'activite du systeme"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold text-foreground">{errorCount}</p>
                <p className="text-sm text-muted-foreground">Erreurs (24h)</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-chart-4/30 bg-chart-4/5 p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-chart-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">{warningCount}</p>
                <p className="text-sm text-muted-foreground">Warnings (24h)</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <RefreshCw className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold text-foreground">1.2s</p>
                <p className="text-sm text-muted-foreground">Temps moyen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher dans les logs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Niveau
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {["Tous", "Error", "Warning", "Info", "Success"].map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setLevelFilter(option)}
                    className={cn(levelFilter === option && "bg-accent")}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Rafraichir
          </Button>
        </div>

        {/* Logs table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50 border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Niveau
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Source
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                    Cabinet / Assureur
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {filteredLogs.map((log) => {
                  const config = levelConfig[log.level as keyof typeof levelConfig]
                  const Icon = config.icon
                  
                  return (
                    <tr key={log.id} className="hover:bg-secondary/30 transition-smooth">
                      <td className="px-4 py-3">
                        <span className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                          config.bg,
                          config.color
                        )}>
                          <Icon className="h-3.5 w-3.5" />
                          {config.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-foreground max-w-md truncate">{log.message}</p>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="text-muted-foreground">{log.source}</span>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <div>
                          <p className="text-foreground">{log.cabinet}</p>
                          <p className="text-xs text-muted-foreground">{log.insurer}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-muted-foreground font-mono text-xs">{log.timestamp}</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
