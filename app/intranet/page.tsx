"use client"

import { IntranetHeader } from "@/components/intranet/header"
import { 
  Building2, 
  Users, 
  FileText, 
  AlertTriangle,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    name: "Cabinets actifs",
    value: "127",
    change: "+12",
    changeType: "positive",
    icon: Building2,
  },
  {
    name: "Utilisateurs totaux",
    value: "843",
    change: "+58",
    changeType: "positive",
    icon: Users,
  },
  {
    name: "Formulaires ce mois",
    value: "12,456",
    change: "+2,340",
    changeType: "positive",
    icon: FileText,
  },
  {
    name: "Erreurs 24h",
    value: "23",
    change: "+5",
    changeType: "negative",
    icon: AlertTriangle,
  },
]

const recentActivity = [
  { id: "1", action: "Nouveau cabinet", cabinet: "Assur & Co", time: "Il y a 2h", type: "new" },
  { id: "2", action: "Licence activee", cabinet: "Cabinet Martin", time: "Il y a 3h", type: "activation" },
  { id: "3", action: "Erreur mapping", cabinet: "AXA - Auto", time: "Il y a 4h", type: "error" },
  { id: "4", action: "Mise a jour regles", cabinet: "Allianz - MRH", time: "Il y a 5h", type: "update" },
  { id: "5", action: "Nouveau cabinet", cabinet: "Courtage Plus", time: "Il y a 6h", type: "new" },
]

const topCabinets = [
  { name: "Cabinet Dupont & Associes", usage: 2450, trend: "+15%" },
  { name: "Assur & Co", usage: 1890, trend: "+8%" },
  { name: "Martin Courtage", usage: 1654, trend: "+12%" },
  { name: "Protect Assurances", usage: 1432, trend: "-2%" },
  { name: "Conseil Assur", usage: 1298, trend: "+5%" },
]

const systemHealth = [
  { name: "API Gateway", status: "operational", uptime: "99.99%" },
  { name: "Base de donnees", status: "operational", uptime: "99.97%" },
  { name: "Extension sync", status: "operational", uptime: "99.95%" },
  { name: "Moteur de regles", status: "degraded", uptime: "98.50%" },
]

function getActivityColor(type: string) {
  switch (type) {
    case "new":
      return "bg-primary/10 text-primary"
    case "activation":
      return "bg-blue-100 text-blue-700"
    case "error":
      return "bg-destructive/10 text-destructive"
    case "update":
      return "bg-chart-4/10 text-chart-4"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "operational":
      return "bg-primary"
    case "degraded":
      return "bg-chart-4"
    case "down":
      return "bg-destructive"
    default:
      return "bg-muted"
  }
}

export default function IntranetDashboard() {
  return (
    <>
      <IntranetHeader 
        title="Dashboard Admin" 
        description="Vue d'ensemble de l'activite Formly"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="rounded-xl border border-border bg-card p-6 transition-smooth hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-xs font-medium",
                  stat.changeType === "positive" ? "text-primary" : "text-destructive"
                )}>
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent activity */}
          <div className="lg:col-span-2 rounded-xl border border-border bg-card">
            <div className="border-b border-border p-4">
              <h2 className="font-semibold text-foreground">Activite recente</h2>
            </div>
            <div className="divide-y divide-border">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-smooth"
                >
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                      getActivityColor(activity.type)
                    )}>
                      {activity.action}
                    </span>
                    <span className="text-sm font-medium text-foreground">{activity.cabinet}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System health */}
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border p-4">
              <h2 className="font-semibold text-foreground">Sante du systeme</h2>
            </div>
            <div className="p-4 space-y-4">
              {systemHealth.map((system) => (
                <div key={system.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "h-2.5 w-2.5 rounded-full",
                      getStatusColor(system.status)
                    )} />
                    <span className="text-sm text-foreground">{system.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{system.uptime}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top cabinets */}
        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border p-4">
            <h2 className="font-semibold text-foreground">Top cabinets (usage mensuel)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Rang
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Cabinet
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Formulaires
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Tendance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {topCabinets.map((cabinet, index) => (
                  <tr key={cabinet.name} className="hover:bg-secondary/30 transition-smooth">
                    <td className="px-6 py-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-foreground">{cabinet.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-foreground">{cabinet.usage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "inline-flex items-center gap-1 text-sm font-medium",
                        cabinet.trend.startsWith("+") ? "text-primary" : "text-destructive"
                      )}>
                        {cabinet.trend.startsWith("+") ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        {cabinet.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
