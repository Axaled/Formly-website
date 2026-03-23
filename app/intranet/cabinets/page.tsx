"use client"

import { useState } from "react"
import { IntranetHeader } from "@/components/intranet/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  Eye,
  Pause,
  Play,
  Trash2
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const cabinets = [
  {
    id: "1",
    name: "Cabinet Dupont & Associes",
    email: "contact@dupont.fr",
    plan: "Cabinet",
    users: 8,
    maxUsers: 10,
    usage: 2450,
    status: "active",
    createdAt: "15/01/2024",
  },
  {
    id: "2",
    name: "Assur & Co",
    email: "admin@assurandco.fr",
    plan: "Enterprise",
    users: 25,
    maxUsers: null,
    usage: 1890,
    status: "active",
    createdAt: "10/01/2024",
  },
  {
    id: "3",
    name: "Martin Courtage",
    email: "contact@martin-courtage.fr",
    plan: "Standard",
    users: 1,
    maxUsers: 1,
    usage: 1654,
    status: "active",
    createdAt: "08/01/2024",
  },
  {
    id: "4",
    name: "Protect Assurances",
    email: "info@protect-assur.fr",
    plan: "Cabinet",
    users: 5,
    maxUsers: 10,
    usage: 1432,
    status: "suspended",
    createdAt: "05/01/2024",
  },
  {
    id: "5",
    name: "Conseil Assur",
    email: "contact@conseil-assur.fr",
    plan: "Cabinet",
    users: 7,
    maxUsers: 10,
    usage: 1298,
    status: "active",
    createdAt: "01/01/2024",
  },
]

const planColors: Record<string, string> = {
  Standard: "bg-muted text-muted-foreground",
  Cabinet: "bg-primary/10 text-primary",
  Enterprise: "bg-chart-4/10 text-chart-4",
}

export default function CabinetsPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("Tous")

  const filteredCabinets = cabinets.filter((cabinet) => {
    const matchesSearch = cabinet.name.toLowerCase().includes(search.toLowerCase()) ||
      cabinet.email.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "Tous" || 
      (statusFilter === "Actif" && cabinet.status === "active") ||
      (statusFilter === "Suspendu" && cabinet.status === "suspended")
    return matchesSearch && matchesStatus
  })

  return (
    <>
      <IntranetHeader 
        title="Gestion des Cabinets" 
        description="Gerez les abonnements et licences des cabinets clients"
      />

      <div className="p-6 space-y-6">
        {/* Actions bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un cabinet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Statut
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {["Tous", "Actif", "Suspendu"].map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setStatusFilter(option)}
                    className={cn(statusFilter === option && "bg-accent")}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="text-sm text-muted-foreground">
            {filteredCabinets.length} cabinet(s)
          </div>
        </div>

        {/* Cabinets table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50 border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Cabinet
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Utilisateurs
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Usage (mois)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                    Inscription
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredCabinets.map((cabinet) => (
                  <tr key={cabinet.id} className="hover:bg-secondary/30 transition-smooth">
                    <td className="px-4 py-4">
                      <div>
                        <p className="font-medium text-foreground">{cabinet.name}</p>
                        <p className="text-sm text-muted-foreground">{cabinet.email}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        planColors[cabinet.plan]
                      )}>
                        {cabinet.plan}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-foreground">
                        {cabinet.users}{cabinet.maxUsers && ` / ${cabinet.maxUsers}`}
                      </span>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="text-foreground">{cabinet.usage.toLocaleString()}</span>
                    </td>
                    <td className="px-4 py-4">
                      {cabinet.status === "active" ? (
                        <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                          Actif
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-sm text-destructive">
                          <XCircle className="h-4 w-4" />
                          Suspendu
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <span className="text-sm text-muted-foreground">{cabinet.createdAt}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Voir les details
                            </DropdownMenuItem>
                            {cabinet.status === "active" ? (
                              <DropdownMenuItem>
                                <Pause className="mr-2 h-4 w-4" />
                                Suspendre
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>
                                <Play className="mr-2 h-4 w-4" />
                                Reactiver
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
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
