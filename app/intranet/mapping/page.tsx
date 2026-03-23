"use client"

import { useState } from "react"
import { IntranetHeader } from "@/components/intranet/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Search, 
  Plus,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Code,
  Save,
  Trash2,
  RefreshCw
} from "lucide-react"
import { cn } from "@/lib/utils"

// Mock insurers with their mapping status
const insurers = [
  { id: "1", name: "AXA", logo: "AXA", status: "complete", fields: 42, lastUpdated: "Il y a 2 jours" },
  { id: "2", name: "Allianz", logo: "ALZ", status: "complete", fields: 38, lastUpdated: "Il y a 3 jours" },
  { id: "3", name: "MAIF", logo: "MAI", status: "partial", fields: 35, lastUpdated: "Il y a 1 semaine" },
  { id: "4", name: "MAAF", logo: "MAA", status: "complete", fields: 40, lastUpdated: "Il y a 5 jours" },
  { id: "5", name: "Groupama", logo: "GRP", status: "partial", fields: 28, lastUpdated: "Il y a 2 semaines" },
  { id: "6", name: "MMA", logo: "MMA", status: "complete", fields: 36, lastUpdated: "Il y a 4 jours" },
  { id: "7", name: "Generali", logo: "GEN", status: "error", fields: 15, lastUpdated: "Il y a 1 mois" },
  { id: "8", name: "SwissLife", logo: "SWL", status: "complete", fields: 32, lastUpdated: "Il y a 1 semaine" },
]

// Mock mapping rules for selected insurer
const mappingRules = [
  { id: "1", formlyField: "client.nom", selector: "#nom_assure", type: "text", status: "active" },
  { id: "2", formlyField: "client.prenom", selector: "#prenom_assure", type: "text", status: "active" },
  { id: "3", formlyField: "client.dateNaissance", selector: "input[name='date_naissance']", type: "date", status: "active" },
  { id: "4", formlyField: "client.adresse", selector: "#adresse_complete", type: "text", status: "active" },
  { id: "5", formlyField: "vehicule.marque", selector: "select#marque_vehicule", type: "select", status: "active" },
  { id: "6", formlyField: "vehicule.modele", selector: "select#modele_vehicule", type: "select", status: "warning" },
  { id: "7", formlyField: "vehicule.immatriculation", selector: "#immat", type: "text", status: "error" },
]

function getStatusColor(status: string) {
  switch (status) {
    case "complete":
    case "active":
      return "text-primary"
    case "partial":
    case "warning":
      return "text-chart-4"
    case "error":
      return "text-destructive"
    default:
      return "text-muted-foreground"
  }
}

function getStatusBg(status: string) {
  switch (status) {
    case "complete":
      return "bg-primary/10"
    case "partial":
      return "bg-chart-4/10"
    case "error":
      return "bg-destructive/10"
    default:
      return "bg-muted"
  }
}

export default function MappingPage() {
  const [search, setSearch] = useState("")
  const [selectedInsurer, setSelectedInsurer] = useState(insurers[0])
  const [editingRule, setEditingRule] = useState<string | null>(null)

  const filteredInsurers = insurers.filter((insurer) =>
    insurer.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <IntranetHeader 
        title="Moteur de Regles (Mapping)" 
        description="Associez les champs Formly aux selecteurs DOM des sites assureurs"
      />

      <div className="flex h-[calc(100vh-64px)]">
        {/* Left panel - Insurers list */}
        <div className="w-80 border-r border-border bg-secondary/20 flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un assureur..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            {filteredInsurers.map((insurer) => (
              <button
                key={insurer.id}
                onClick={() => setSelectedInsurer(insurer)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 text-left border-b border-border transition-smooth",
                  selectedInsurer.id === insurer.id
                    ? "bg-primary/5 border-l-2 border-l-primary"
                    : "hover:bg-secondary/50"
                )}
              >
                <div className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold",
                  getStatusBg(insurer.status),
                  getStatusColor(insurer.status)
                )}>
                  {insurer.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{insurer.name}</p>
                  <p className="text-xs text-muted-foreground">{insurer.fields} champs</p>
                </div>
                <div className="flex items-center gap-1">
                  {insurer.status === "complete" && (
                    <CheckCircle2 className={cn("h-4 w-4", getStatusColor(insurer.status))} />
                  )}
                  {insurer.status === "partial" && (
                    <AlertCircle className={cn("h-4 w-4", getStatusColor(insurer.status))} />
                  )}
                  {insurer.status === "error" && (
                    <AlertCircle className={cn("h-4 w-4", getStatusColor(insurer.status))} />
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
          <div className="p-4 border-t border-border">
            <Button variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un assureur
            </Button>
          </div>
        </div>

        {/* Right panel - Mapping rules */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Insurer header */}
          <div className="flex items-center justify-between border-b border-border p-4 bg-card">
            <div className="flex items-center gap-3">
              <div className={cn(
                "flex h-12 w-12 items-center justify-center rounded-lg text-sm font-bold",
                getStatusBg(selectedInsurer.status),
                getStatusColor(selectedInsurer.status)
              )}>
                {selectedInsurer.logo}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">{selectedInsurer.name}</h2>
                <p className="text-sm text-muted-foreground">
                  Derniere mise a jour: {selectedInsurer.lastUpdated}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Tester
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Save className="mr-2 h-4 w-4" />
                Sauvegarder
              </Button>
            </div>
          </div>

          {/* Rules table */}
          <div className="flex-1 overflow-auto p-4">
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Champ Formly
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Selecteur DOM
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-mono text-sm">
                  {mappingRules.map((rule) => (
                    <tr key={rule.id} className="hover:bg-secondary/30 transition-smooth">
                      <td className="px-4 py-3">
                        <code className="text-primary">{rule.formlyField}</code>
                      </td>
                      <td className="px-4 py-3">
                        {editingRule === rule.id ? (
                          <Input
                            defaultValue={rule.selector}
                            className="font-mono text-xs h-8"
                            onBlur={() => setEditingRule(null)}
                            autoFocus
                          />
                        ) : (
                          <code 
                            className="text-foreground cursor-pointer hover:bg-secondary/50 px-1 rounded"
                            onClick={() => setEditingRule(rule.id)}
                          >
                            {rule.selector}
                          </code>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                          <Code className="h-3 w-3" />
                          {rule.type}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={cn(
                          "inline-flex items-center gap-1.5 text-xs",
                          getStatusColor(rule.status)
                        )}>
                          {rule.status === "active" && <CheckCircle2 className="h-3.5 w-3.5" />}
                          {rule.status === "warning" && <AlertCircle className="h-3.5 w-3.5" />}
                          {rule.status === "error" && <AlertCircle className="h-3.5 w-3.5" />}
                          {rule.status === "active" ? "Actif" : rule.status === "warning" ? "Attention" : "Erreur"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add new rule */}
            <div className="mt-4 flex justify-center">
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter une regle
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
