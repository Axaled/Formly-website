"use client"

import { useState } from "react"
import { IntranetHeader } from "@/components/intranet/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Save,
  Server,
  Key,
  Bell,
  Shield
} from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "general", label: "General", icon: Server },
  { id: "api", label: "API & Cles", icon: Key },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Securite", icon: Shield },
]

export default function ConfigPage() {
  const [activeTab, setActiveTab] = useState("general")

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Configuration generale</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nom de l&apos;application</Label>
                  <Input defaultValue="Formly" />
                </div>
                <div className="space-y-2">
                  <Label>URL de base</Label>
                  <Input defaultValue="https://app.formly.fr" />
                </div>
                <div className="space-y-2">
                  <Label>Email de contact</Label>
                  <Input defaultValue="support@formly.fr" />
                </div>
                <div className="space-y-2">
                  <Label>Version actuelle</Label>
                  <Input defaultValue="2.1.3" disabled />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Limites systeme</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Max profils par cabinet (Standard)</Label>
                  <Input type="number" defaultValue="100" />
                </div>
                <div className="space-y-2">
                  <Label>Max profils par cabinet (Cabinet)</Label>
                  <Input type="number" defaultValue="500" />
                </div>
                <div className="space-y-2">
                  <Label>Timeout extension (ms)</Label>
                  <Input type="number" defaultValue="5000" />
                </div>
                <div className="space-y-2">
                  <Label>Intervalle de sync (s)</Label>
                  <Input type="number" defaultValue="300" />
                </div>
              </div>
            </div>
          </div>
        )

      case "api":
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Cles API</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Cle API publique</Label>
                  <Input defaultValue="pk_live_xxxxxxxxxxxxxxxxxxxxx" readOnly className="font-mono" />
                </div>
                <div className="space-y-2">
                  <Label>Cle API privee</Label>
                  <Input type="password" defaultValue="sk_live_xxxxxxxxxxxxxxxxxxxxx" className="font-mono" />
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm">
                  Regenerer les cles
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Webhooks</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>URL Webhook</Label>
                  <Input placeholder="https://your-server.com/webhook" />
                </div>
                <div className="space-y-2">
                  <Label>Secret Webhook</Label>
                  <Input type="password" placeholder="whsec_..." className="font-mono" />
                </div>
              </div>
            </div>
          </div>
        )

      case "notifications":
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Configuration email</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Serveur SMTP</Label>
                  <Input defaultValue="smtp.formly.fr" />
                </div>
                <div className="space-y-2">
                  <Label>Port</Label>
                  <Input type="number" defaultValue="587" />
                </div>
                <div className="space-y-2">
                  <Label>Utilisateur</Label>
                  <Input defaultValue="notifications@formly.fr" />
                </div>
                <div className="space-y-2">
                  <Label>Mot de passe</Label>
                  <Input type="password" />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Alertes</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Erreurs critiques</p>
                    <p className="text-sm text-muted-foreground">Notifier l&apos;equipe en cas d&apos;erreur grave</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Nouveaux cabinets</p>
                    <p className="text-sm text-muted-foreground">Notifier lors d&apos;une nouvelle inscription</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Rapport hebdomadaire</p>
                    <p className="text-sm text-muted-foreground">Envoyer un resume chaque lundi</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4 rounded border-border" />
                </div>
              </div>
            </div>
          </div>
        )

      case "security":
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Politique de securite</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Authentification 2FA obligatoire</p>
                    <p className="text-sm text-muted-foreground">Exiger la 2FA pour tous les admins</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Rotation des cles</p>
                    <p className="text-sm text-muted-foreground">Forcer la rotation tous les 90 jours</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Logs de connexion</p>
                    <p className="text-sm text-muted-foreground">Enregistrer toutes les connexions</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border" />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Sessions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Duree de session (minutes)</Label>
                  <Input type="number" defaultValue="60" />
                </div>
                <div className="space-y-2">
                  <Label>Tentatives de connexion max</Label>
                  <Input type="number" defaultValue="5" />
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      <IntranetHeader 
        title="Configuration" 
        description="Parametres systeme de la plateforme Formly"
      />

      <div className="p-6">
        <div className="max-w-4xl">
          {/* Tabs */}
          <div className="flex border-b border-border mb-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-smooth whitespace-nowrap",
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {renderTabContent()}

          {/* Save button */}
          <div className="mt-6 flex justify-end">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Save className="mr-2 h-4 w-4" />
              Enregistrer les modifications
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
