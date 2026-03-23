"use client"

import { useState } from "react"
import { ExtranetHeader } from "@/components/extranet/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  ArrowLeft, 
  Save,
  User,
  Car,
  Home,
  FileText,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "civil", label: "Etat civil", icon: User },
  { id: "vehicule", label: "Vehicule", icon: Car },
  { id: "habitation", label: "Habitation", icon: Home },
  { id: "antecedents", label: "Antecedents", icon: FileText },
]

export default function NouveauProfilPage() {
  const [activeTab, setActiveTab] = useState("civil")
  const [formData, setFormData] = useState({
    // Etat civil
    civilite: "",
    nom: "",
    prenom: "",
    dateNaissance: "",
    lieuNaissance: "",
    adresse: "",
    codePostal: "",
    ville: "",
    email: "",
    telephone: "",
    profession: "",
    // Vehicule
    marque: "",
    modele: "",
    immatriculation: "",
    dateCirculation: "",
    puissanceFiscale: "",
    energie: "",
    usageVehicule: "",
    kmAnnuel: "",
    datePermis: "",
    // Habitation
    typeHabitation: "",
    superficie: "",
    nombrePieces: "",
    etage: "",
    anneeConstruction: "",
    typeResidence: "",
    alarme: "",
    // Antecedents
    nbSinistres: "",
    bonusMalus: "",
    resiliationAssureur: "",
    suspensionPermis: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "civil":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="civilite">Civilite</Label>
              <select
                id="civilite"
                value={formData.civilite}
                onChange={(e) => handleChange("civilite", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selectionner...</option>
                <option value="M">Monsieur</option>
                <option value="Mme">Madame</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom">Nom</Label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => handleChange("nom", e.target.value)}
                placeholder="Dupont"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prenom">Prenom</Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) => handleChange("prenom", e.target.value)}
                placeholder="Jean"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateNaissance">Date de naissance</Label>
              <Input
                id="dateNaissance"
                type="date"
                value={formData.dateNaissance}
                onChange={(e) => handleChange("dateNaissance", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lieuNaissance">Lieu de naissance</Label>
              <Input
                id="lieuNaissance"
                value={formData.lieuNaissance}
                onChange={(e) => handleChange("lieuNaissance", e.target.value)}
                placeholder="Paris"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profession">Profession</Label>
              <Input
                id="profession"
                value={formData.profession}
                onChange={(e) => handleChange("profession", e.target.value)}
                placeholder="Ingenieur"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="adresse">Adresse</Label>
              <Input
                id="adresse"
                value={formData.adresse}
                onChange={(e) => handleChange("adresse", e.target.value)}
                placeholder="123 rue de la Paix"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="codePostal">Code postal</Label>
              <Input
                id="codePostal"
                value={formData.codePostal}
                onChange={(e) => handleChange("codePostal", e.target.value)}
                placeholder="75001"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ville">Ville</Label>
              <Input
                id="ville"
                value={formData.ville}
                onChange={(e) => handleChange("ville", e.target.value)}
                placeholder="Paris"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="jean.dupont@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone">Telephone</Label>
              <Input
                id="telephone"
                value={formData.telephone}
                onChange={(e) => handleChange("telephone", e.target.value)}
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>
        )
      case "vehicule":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="marque">Marque</Label>
              <Input
                id="marque"
                value={formData.marque}
                onChange={(e) => handleChange("marque", e.target.value)}
                placeholder="Peugeot"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modele">Modele</Label>
              <Input
                id="modele"
                value={formData.modele}
                onChange={(e) => handleChange("modele", e.target.value)}
                placeholder="308"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="immatriculation">Immatriculation</Label>
              <Input
                id="immatriculation"
                value={formData.immatriculation}
                onChange={(e) => handleChange("immatriculation", e.target.value)}
                placeholder="AB-123-CD"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateCirculation">Date de 1ere circulation</Label>
              <Input
                id="dateCirculation"
                type="date"
                value={formData.dateCirculation}
                onChange={(e) => handleChange("dateCirculation", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="puissanceFiscale">Puissance fiscale</Label>
              <Input
                id="puissanceFiscale"
                value={formData.puissanceFiscale}
                onChange={(e) => handleChange("puissanceFiscale", e.target.value)}
                placeholder="7 CV"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="energie">Energie</Label>
              <select
                id="energie"
                value={formData.energie}
                onChange={(e) => handleChange("energie", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selectionner...</option>
                <option value="essence">Essence</option>
                <option value="diesel">Diesel</option>
                <option value="hybride">Hybride</option>
                <option value="electrique">Electrique</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="usageVehicule">Usage du vehicule</Label>
              <select
                id="usageVehicule"
                value={formData.usageVehicule}
                onChange={(e) => handleChange("usageVehicule", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selectionner...</option>
                <option value="priveTrajet">Prive + trajet travail</option>
                <option value="priveUniquement">Prive uniquement</option>
                <option value="professionnel">Professionnel</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="kmAnnuel">Kilometrage annuel</Label>
              <Input
                id="kmAnnuel"
                value={formData.kmAnnuel}
                onChange={(e) => handleChange("kmAnnuel", e.target.value)}
                placeholder="15000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="datePermis">Date d&apos;obtention du permis</Label>
              <Input
                id="datePermis"
                type="date"
                value={formData.datePermis}
                onChange={(e) => handleChange("datePermis", e.target.value)}
              />
            </div>
          </div>
        )
      case "habitation":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="typeHabitation">Type d&apos;habitation</Label>
              <select
                id="typeHabitation"
                value={formData.typeHabitation}
                onChange={(e) => handleChange("typeHabitation", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selectionner...</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="studio">Studio</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="typeResidence">Type de residence</Label>
              <select
                id="typeResidence"
                value={formData.typeResidence}
                onChange={(e) => handleChange("typeResidence", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selectionner...</option>
                <option value="principale">Residence principale</option>
                <option value="secondaire">Residence secondaire</option>
                <option value="location">Location</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="superficie">Superficie (m2)</Label>
              <Input
                id="superficie"
                value={formData.superficie}
                onChange={(e) => handleChange("superficie", e.target.value)}
                placeholder="75"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nombrePieces">Nombre de pieces</Label>
              <Input
                id="nombrePieces"
                value={formData.nombrePieces}
                onChange={(e) => handleChange("nombrePieces", e.target.value)}
                placeholder="4"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="etage">Etage</Label>
              <Input
                id="etage"
                value={formData.etage}
                onChange={(e) => handleChange("etage", e.target.value)}
                placeholder="3"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="anneeConstruction">Annee de construction</Label>
              <Input
                id="anneeConstruction"
                value={formData.anneeConstruction}
                onChange={(e) => handleChange("anneeConstruction", e.target.value)}
                placeholder="1985"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alarme">Alarme / Protection</Label>
              <select
                id="alarme"
                value={formData.alarme}
                onChange={(e) => handleChange("alarme", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selectionner...</option>
                <option value="aucune">Aucune</option>
                <option value="alarme">Alarme</option>
                <option value="telesurveillance">Telesurveillance</option>
              </select>
            </div>
          </div>
        )
      case "antecedents":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nbSinistres">Nombre de sinistres (3 dernieres annees)</Label>
              <select
                id="nbSinistres"
                value={formData.nbSinistres}
                onChange={(e) => handleChange("nbSinistres", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selectionner...</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3 ou plus</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bonusMalus">Coefficient bonus/malus</Label>
              <Input
                id="bonusMalus"
                value={formData.bonusMalus}
                onChange={(e) => handleChange("bonusMalus", e.target.value)}
                placeholder="0.50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resiliationAssureur">Resiliation par assureur</Label>
              <select
                id="resiliationAssureur"
                value={formData.resiliationAssureur}
                onChange={(e) => handleChange("resiliationAssureur", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selectionner...</option>
                <option value="non">Non</option>
                <option value="oui">Oui</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="suspensionPermis">Suspension de permis</Label>
              <select
                id="suspensionPermis"
                value={formData.suspensionPermis}
                onChange={(e) => handleChange("suspensionPermis", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selectionner...</option>
                <option value="non">Non</option>
                <option value="oui">Oui</option>
              </select>
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
        title="Nouveau profil" 
        description="Creez un nouveau profil client pour le remplissage automatique."
      />

      <div className="p-6">
        {/* Back button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/extranet/profils">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux profils
          </Link>
        </Button>

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

          {/* Form content */}
          <div className="rounded-xl border border-border bg-card p-6">
            {renderTabContent()}
          </div>

          {/* Sync indicator */}
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Les champs remplis seront automatiquement synchronises avec l&apos;extension</span>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/extranet/profils">Annuler</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Save className="mr-2 h-4 w-4" />
              Enregistrer le profil
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
