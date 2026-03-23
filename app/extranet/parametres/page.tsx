"use client"

import { useState } from "react"
import { ExtranetHeader } from "@/components/extranet/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  User,
  Users,
  Plug,
  Save,
  Plus,
  Trash2,
  CheckCircle2,
  XCircle,
  RefreshCw
} from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "profil", label: "Mon profil", icon: User },
  { id: "equipe", label: "Mon equipe", icon: Users },
  { id: "extension", label: "Extension", icon: Plug },
]

const teamMembers = [
  { id: "1", name: "Jean Dupont", email: "j.dupont@cabinet.fr", role: "Administrateur", status: "active" },
  { id: "2", name: "Marie Lambert", email: "m.lambert@cabinet.fr", role: "Collaborateur", status: "active" },
  { id: "3", name: "Pierre Martin", email: "p.martin@cabinet.fr", role: "Collaborateur", status: "pending" },
]

export default function ParametresPage() {
  const [activeTab, setActiveTab] = useState("profil")
  const [profile, setProfile] = useState({
    nom: "Dupont",
    prenom: "Jean",
    email: "j.dupont@cabinet.fr",
    telephone: "01 23 45 67 89",
    cabinet: "Cabinet Dupont & Associes",
    siret: "123 456 789 00012",
  })

  const renderTabContent = () => {
    switch (activeTab) {
      case "profil":
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Informations personnelles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prenom</Label>
                  <Input
                    id="prenom"
                    value={profile.prenom}
                    onChange={(e) => setProfile(p => ({ ...p, prenom: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input
                    id="nom"
                    value={profile.nom}
                    onChange={(e) => setProfile(p => ({ ...p, nom: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile(p => ({ ...p, email: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telephone">Telephone</Label>
                  <Input
                    id="telephone"
                    value={profile.telephone}
                    onChange={(e) => setProfile(p => ({ ...p, telephone: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-6">Informations du cabinet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cabinet">Nom du cabinet</Label>
                  <Input
                    id="cabinet"
                    value={profile.cabinet}
                    onChange={(e) => setProfile(p => ({ ...p, cabinet: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siret">SIRET</Label>
                  <Input
                    id="siret"
                    value={profile.siret}
                    onChange={(e) => setProfile(p => ({ ...p, siret: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Save className="mr-2 h-4 w-4" />
                Enregistrer les modifications
              </Button>
            </div>
          </div>
        )

      case "equipe":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Membres de l&apos;equipe</h3>
                <p className="text-sm text-muted-foreground">Gerez les acces de vos collaborateurs</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="mr-2 h-4 w-4" />
                Inviter un collaborateur
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Membre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-secondary/30 transition-smooth">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-medium text-sm">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground">{member.role}</span>
                      </td>
                      <td className="px-6 py-4">
                        {member.status === "active" ? (
                          <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                            Actif
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-sm text-chart-4">
                            <RefreshCw className="h-4 w-4" />
                            En attente
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case "extension":
        return (
          <div className="space-y-6">
            {/* Extension status */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">F</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">Extension Formly</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      Connectee
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Votre extension est correctement configuree et synchronisee.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Version</p>
                  <p className="text-sm font-medium text-foreground">2.1.3</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Navigateur</p>
                  <p className="text-sm font-medium text-foreground">Chrome 121</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Derniere sync</p>
                  <p className="text-sm font-medium text-foreground">Il y a 5 min</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Assureurs actifs</p>
                  <p className="text-sm font-medium text-primary">52</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Forcer la synchronisation
                </Button>
                <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                  <XCircle className="mr-2 h-4 w-4" />
                  Deconnecter l&apos;extension
                </Button>
              </div>
            </div>

            {/* Help */}
            <div className="rounded-xl border border-border bg-secondary/30 p-6">
              <h3 className="font-semibold text-foreground mb-2">Besoin d&apos;aide ?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Si vous rencontrez des problemes avec l&apos;extension, consultez notre centre d&apos;aide ou contactez le support.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">Centre d&apos;aide</Button>
                <Button variant="outline" size="sm">Contacter le support</Button>
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
      <ExtranetHeader 
        title="Parametres" 
        description="Gerez votre compte et votre equipe."
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
        </div>
      </div>
    </>
  )
}
