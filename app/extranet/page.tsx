"use client"

import { ExtranetHeader } from "@/components/extranet/header"
import { Button } from "@/components/ui/button"
import { 
  Clock, 
  Users, 
  TrendingUp, 
  FileText, 
  ArrowRight, 
  Plus,
  MousePointerClick
} from "lucide-react"
import Link from "next/link"

const stats = [
  {
    name: "Temps gagne ce mois",
    value: "12h 45min",
    change: "+2h30",
    changeType: "positive",
    icon: Clock,
  },
  {
    name: "Profils actifs",
    value: "47",
    change: "+5",
    changeType: "positive",
    icon: Users,
  },
  {
    name: "Formulaires remplis",
    value: "124",
    change: "+18",
    changeType: "positive",
    icon: FileText,
  },
  {
    name: "Taux de completion",
    value: "98.2%",
    change: "+0.5%",
    changeType: "positive",
    icon: TrendingUp,
  },
]

const recentProfiles = [
  {
    id: "1",
    name: "Marie Martin",
    type: "Auto",
    status: "A traiter",
    lastUpdated: "Il y a 2 heures",
  },
  {
    id: "2",
    name: "Pierre Durand",
    type: "Habitation",
    status: "Etudie",
    lastUpdated: "Il y a 5 heures",
  },
  {
    id: "3",
    name: "Sophie Bernard",
    type: "Auto + Habitation",
    status: "A traiter",
    lastUpdated: "Hier",
  },
  {
    id: "4",
    name: "Jean-Paul Leroy",
    type: "Pro",
    status: "Finalise",
    lastUpdated: "Il y a 2 jours",
  },
]

const quickActions = [
  { name: "Nouveau profil", href: "/extranet/profils/nouveau", icon: Plus },
  { name: "Voir tous les profils", href: "/extranet/profils", icon: Users },
]

function getStatusColor(status: string) {
  switch (status) {
    case "A traiter":
      return "bg-chart-4/10 text-chart-4"
    case "Etudie":
      return "bg-primary/10 text-primary"
    case "Finalise":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function ExtranetDashboard() {
  return (
    <>
      <ExtranetHeader 
        title="Tableau de bord" 
        description="Bienvenue, Jean. Voici un apercu de votre activite."
      />

      <div className="p-6 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="rounded-xl border border-border bg-card p-6 transition-smooth hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <span className="text-xs font-medium text-primary">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent profiles */}
          <div className="lg:col-span-2 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="font-semibold text-foreground">Dossiers recents</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/extranet/profils">
                  Voir tout
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="divide-y divide-border">
              {recentProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-smooth"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-medium text-sm">
                      {profile.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{profile.name}</p>
                      <p className="text-sm text-muted-foreground">{profile.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(profile.status)}`}>
                        {profile.status}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{profile.lastUpdated}</p>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <MousePointerClick className="mr-1 h-4 w-4" />
                      Ouvrir
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions & Extension status */}
          <div className="space-y-6">
            {/* Quick actions */}
            <div className="rounded-xl border border-border bg-card p-4">
              <h2 className="font-semibold text-foreground mb-4">Actions rapides</h2>
              <div className="space-y-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.name}
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={action.href}>
                      <action.icon className="mr-2 h-4 w-4" />
                      {action.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Extension status card */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">F</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Extension Formly</p>
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-muted-foreground">Connectee</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version</span>
                  <span className="text-foreground font-medium">2.1.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Derniere sync</span>
                  <span className="text-foreground font-medium">Il y a 5 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Assureurs actifs</span>
                  <span className="text-primary font-medium">52</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="rounded-xl border border-border bg-secondary/30 p-4">
              <h3 className="font-medium text-foreground mb-2">Astuce du jour</h3>
              <p className="text-sm text-muted-foreground">
                Utilisez le raccourci <kbd className="px-1.5 py-0.5 text-xs bg-background rounded border border-border font-mono">Ctrl+Shift+F</kbd> pour activer Formly rapidement sur n&apos;importe quel site assureur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
