"use client"

import { useState } from "react"
import { ExtranetHeader } from "@/components/extranet/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  MousePointerClick,
  Pencil,
  Trash2,
  Eye
} from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

// Mock data
const profiles = [
  {
    id: "1",
    name: "Marie Martin",
    email: "marie.martin@email.com",
    phone: "06 12 34 56 78",
    type: "Auto",
    status: "A traiter",
    createdAt: "2024-01-15",
    lastUpdated: "Il y a 2 heures",
    completion: 100,
  },
  {
    id: "2",
    name: "Pierre Durand",
    email: "p.durand@email.com",
    phone: "06 98 76 54 32",
    type: "Habitation",
    status: "Etudie",
    createdAt: "2024-01-10",
    lastUpdated: "Il y a 5 heures",
    completion: 85,
  },
  {
    id: "3",
    name: "Sophie Bernard",
    email: "sophie.b@email.com",
    phone: "07 11 22 33 44",
    type: "Auto + Habitation",
    status: "A traiter",
    createdAt: "2024-01-08",
    lastUpdated: "Hier",
    completion: 100,
  },
  {
    id: "4",
    name: "Jean-Paul Leroy",
    email: "jp.leroy@email.com",
    phone: "06 55 44 33 22",
    type: "Pro",
    status: "Finalise",
    createdAt: "2024-01-05",
    lastUpdated: "Il y a 2 jours",
    completion: 100,
  },
  {
    id: "5",
    name: "Claire Moreau",
    email: "c.moreau@email.com",
    phone: "07 66 77 88 99",
    type: "Auto",
    status: "En cours",
    createdAt: "2024-01-03",
    lastUpdated: "Il y a 3 jours",
    completion: 60,
  },
  {
    id: "6",
    name: "Thomas Petit",
    email: "thomas.petit@email.com",
    phone: "06 00 11 22 33",
    type: "Habitation",
    status: "A traiter",
    createdAt: "2024-01-01",
    lastUpdated: "Il y a 4 jours",
    completion: 100,
  },
]

const statusOptions = ["Tous", "A traiter", "En cours", "Etudie", "Finalise"]
const typeOptions = ["Tous", "Auto", "Habitation", "Auto + Habitation", "Pro"]

function getStatusColor(status: string) {
  switch (status) {
    case "A traiter":
      return "bg-chart-4/10 text-chart-4"
    case "En cours":
      return "bg-blue-100 text-blue-700"
    case "Etudie":
      return "bg-primary/10 text-primary"
    case "Finalise":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function ProfilsPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("Tous")
  const [typeFilter, setTypeFilter] = useState("Tous")

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch = profile.name.toLowerCase().includes(search.toLowerCase()) ||
      profile.email.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "Tous" || profile.status === statusFilter
    const matchesType = typeFilter === "Tous" || profile.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <>
      <ExtranetHeader 
        title="Profils Assures" 
        description="Gerez vos profils clients et lancez des remplissages automatiques."
      />

      <div className="p-6 space-y-6">
        {/* Actions bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-1 gap-3 w-full sm:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Filters */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Statut
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {statusOptions.map((option) => (
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Type
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {typeOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setTypeFilter(option)}
                    className={cn(typeFilter === option && "bg-accent")}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/extranet/profils/nouveau">
              <Plus className="mr-2 h-4 w-4" />
              Nouveau profil
            </Link>
          </Button>
        </div>

        {/* Profiles table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50 border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Contact
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                    Completion
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                    Mis a jour
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredProfiles.map((profile) => (
                  <tr key={profile.id} className="hover:bg-secondary/30 transition-smooth">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-medium text-sm flex-shrink-0">
                          {profile.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{profile.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <p className="text-sm text-foreground">{profile.email}</p>
                      <p className="text-xs text-muted-foreground">{profile.phone}</p>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-foreground">{profile.type}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(profile.status)}`}>
                        {profile.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden max-w-[100px]">
                          <div 
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${profile.completion}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{profile.completion}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden sm:table-cell">
                      <p className="text-sm text-muted-foreground">{profile.lastUpdated}</p>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground hidden sm:flex">
                          <MousePointerClick className="mr-1 h-4 w-4" />
                          Remplir
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/extranet/profils/${profile.id}`}>
                                <Eye className="mr-2 h-4 w-4" />
                                Voir le profil
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/extranet/profils/${profile.id}/edit`}>
                                <Pencil className="mr-2 h-4 w-4" />
                                Modifier
                              </Link>
                            </DropdownMenuItem>
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

          {/* Empty state */}
          {filteredProfiles.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-muted-foreground">Aucun profil trouve</p>
            </div>
          )}
        </div>

        {/* Pagination info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>{filteredProfiles.length} profil(s) affiche(s)</p>
        </div>
      </div>
    </>
  )
}
