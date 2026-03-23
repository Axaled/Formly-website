"use client"

import { ExtranetHeader } from "@/components/extranet/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter,
  CheckCircle2,
  Clock,
  FileText,
  User,
  ArrowRight
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useState } from "react"

const history = [
  {
    id: "1",
    type: "fill",
    client: "Marie Martin",
    insurer: "AXA",
    product: "Auto",
    fields: 24,
    duration: "1.8s",
    timestamp: "Aujourd'hui, 14:32",
    status: "success",
  },
  {
    id: "2",
    type: "fill",
    client: "Pierre Durand",
    insurer: "Allianz",
    product: "Habitation",
    fields: 18,
    duration: "1.2s",
    timestamp: "Aujourd'hui, 11:45",
    status: "success",
  },
  {
    id: "3",
    type: "fill",
    client: "Sophie Bernard",
    insurer: "MAIF",
    product: "Auto",
    fields: 22,
    duration: "2.1s",
    timestamp: "Hier, 16:20",
    status: "partial",
  },
  {
    id: "4",
    type: "create",
    client: "Jean-Paul Leroy",
    insurer: "-",
    product: "Pro",
    fields: null,
    duration: null,
    timestamp: "Hier, 10:15",
    status: "success",
  },
  {
    id: "5",
    type: "fill",
    client: "Claire Moreau",
    insurer: "MMA",
    product: "Auto",
    fields: 20,
    duration: "1.5s",
    timestamp: "Il y a 2 jours",
    status: "success",
  },
  {
    id: "6",
    type: "update",
    client: "Thomas Petit",
    insurer: "-",
    product: "Habitation",
    fields: null,
    duration: null,
    timestamp: "Il y a 3 jours",
    status: "success",
  },
]

function getTypeConfig(type: string) {
  switch (type) {
    case "fill":
      return { label: "Remplissage", color: "bg-primary/10 text-primary", icon: FileText }
    case "create":
      return { label: "Creation", color: "bg-blue-100 text-blue-700", icon: User }
    case "update":
      return { label: "Modification", color: "bg-chart-4/10 text-chart-4", icon: FileText }
    default:
      return { label: type, color: "bg-muted text-muted-foreground", icon: FileText }
  }
}

export default function HistoriquePage() {
  const [search, setSearch] = useState("")

  const filteredHistory = history.filter((item) =>
    item.client.toLowerCase().includes(search.toLowerCase()) ||
    item.insurer.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <ExtranetHeader 
        title="Historique" 
        description="Consultez l'historique de vos actions et remplissages"
      />

      <div className="p-6 space-y-6">
        {/* Stats summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">124</p>
                <p className="text-sm text-muted-foreground">Remplissages ce mois</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12h 45min</p>
                <p className="text-sm text-muted-foreground">Temps gagne</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">98.2%</p>
                <p className="text-sm text-muted-foreground">Taux de reussite</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Type
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Tous</DropdownMenuItem>
              <DropdownMenuItem>Remplissages</DropdownMenuItem>
              <DropdownMenuItem>Creations</DropdownMenuItem>
              <DropdownMenuItem>Modifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* History list */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="divide-y divide-border">
            {filteredHistory.map((item) => {
              const typeConfig = getTypeConfig(item.type)
              const TypeIcon = typeConfig.icon
              
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-smooth"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-medium text-sm">
                      {item.client.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{item.client}</p>
                        <span className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                          typeConfig.color
                        )}>
                          <TypeIcon className="h-3 w-3" />
                          {typeConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <span>{item.product}</span>
                        {item.insurer !== "-" && (
                          <>
                            <ArrowRight className="h-3 w-3" />
                            <span>{item.insurer}</span>
                          </>
                        )}
                        {item.fields && (
                          <>
                            <span className="text-muted-foreground/50">|</span>
                            <span>{item.fields} champs</span>
                          </>
                        )}
                        {item.duration && (
                          <>
                            <span className="text-muted-foreground/50">|</span>
                            <span>{item.duration}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      {item.status === "success" ? (
                        <span className="inline-flex items-center gap-1 text-sm text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                          Succes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-sm text-chart-4">
                          <Clock className="h-4 w-4" />
                          Partiel
                        </span>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">{item.timestamp}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
