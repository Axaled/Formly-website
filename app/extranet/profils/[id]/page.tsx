"use client"

import { ExtranetHeader } from "@/components/extranet/header"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  Pencil,
  MousePointerClick,
  User,
  Car,
  Home,
  FileText,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock data - would come from API in real app
const profileData = {
  id: "1",
  name: "Marie Martin",
  status: "A traiter",
  completion: 100,
  lastUpdated: "Il y a 2 heures",
  civil: {
    civilite: "Madame",
    nom: "Martin",
    prenom: "Marie",
    dateNaissance: "15/03/1985",
    lieuNaissance: "Lyon",
    adresse: "45 rue de la Republique",
    codePostal: "69001",
    ville: "Lyon",
    email: "marie.martin@email.com",
    telephone: "06 12 34 56 78",
    profession: "Cadre commercial",
  },
  vehicule: {
    marque: "Renault",
    modele: "Clio V",
    immatriculation: "EF-456-GH",
    dateCirculation: "01/06/2021",
    puissanceFiscale: "5 CV",
    energie: "Essence",
    usageVehicule: "Prive + trajet travail",
    kmAnnuel: "12000",
    datePermis: "20/06/2003",
  },
  habitation: {
    typeHabitation: "Appartement",
    typeResidence: "Residence principale",
    superficie: "68",
    nombrePieces: "3",
    etage: "4",
    anneeConstruction: "1995",
    alarme: "Aucune",
  },
  antecedents: {
    nbSinistres: "0",
    bonusMalus: "0.50",
    resiliationAssureur: "Non",
    suspensionPermis: "Non",
  },
}

function InfoRow({ label, value, synced = true }: { label: string; value: string; synced?: boolean }) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground text-right">{value || "-"}</span>
        {synced && value && (
          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
        )}
      </div>
    </div>
  )
}

function Section({ 
  title, 
  icon: Icon, 
  children 
}: { 
  title: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode 
}) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border bg-secondary/30 px-6 py-4">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <div className="px-6 py-2">
        {children}
      </div>
    </div>
  )
}

export default function ProfileDetailPage() {
  const params = useParams()

  return (
    <>
      <ExtranetHeader 
        title={profileData.name} 
        description={`Profil client - ${profileData.status}`}
      />

      <div className="p-6">
        {/* Back button & actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <Button variant="ghost" asChild>
            <Link href="/extranet/profils">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux profils
            </Link>
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href={`/extranet/profils/${params.id}/edit`}>
                <Pencil className="mr-2 h-4 w-4" />
                Modifier
              </Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <MousePointerClick className="mr-2 h-4 w-4" />
              Ouvrir & Remplir
            </Button>
          </div>
        </div>

        {/* Profile overview card */}
        <div className="rounded-xl border border-border bg-card p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-xl">
              {profileData.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">{profileData.name}</h2>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Mail className="h-4 w-4" />
                  {profileData.civil.email}
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  {profileData.civil.telephone}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {profileData.civil.ville}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-chart-4/10 text-chart-4">
                {profileData.status}
              </span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-24 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${profileData.completion}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{profileData.completion}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Etat civil */}
          <Section title="Etat civil" icon={User}>
            <InfoRow label="Civilite" value={profileData.civil.civilite} />
            <InfoRow label="Nom" value={profileData.civil.nom} />
            <InfoRow label="Prenom" value={profileData.civil.prenom} />
            <InfoRow label="Date de naissance" value={profileData.civil.dateNaissance} />
            <InfoRow label="Lieu de naissance" value={profileData.civil.lieuNaissance} />
            <InfoRow label="Adresse" value={profileData.civil.adresse} />
            <InfoRow label="Code postal" value={profileData.civil.codePostal} />
            <InfoRow label="Ville" value={profileData.civil.ville} />
            <InfoRow label="Email" value={profileData.civil.email} />
            <InfoRow label="Telephone" value={profileData.civil.telephone} />
            <InfoRow label="Profession" value={profileData.civil.profession} />
          </Section>

          {/* Vehicule */}
          <Section title="Vehicule" icon={Car}>
            <InfoRow label="Marque" value={profileData.vehicule.marque} />
            <InfoRow label="Modele" value={profileData.vehicule.modele} />
            <InfoRow label="Immatriculation" value={profileData.vehicule.immatriculation} />
            <InfoRow label="Date 1ere circulation" value={profileData.vehicule.dateCirculation} />
            <InfoRow label="Puissance fiscale" value={profileData.vehicule.puissanceFiscale} />
            <InfoRow label="Energie" value={profileData.vehicule.energie} />
            <InfoRow label="Usage" value={profileData.vehicule.usageVehicule} />
            <InfoRow label="Km annuel" value={profileData.vehicule.kmAnnuel} />
            <InfoRow label="Date permis" value={profileData.vehicule.datePermis} />
          </Section>

          {/* Habitation */}
          <Section title="Habitation" icon={Home}>
            <InfoRow label="Type" value={profileData.habitation.typeHabitation} />
            <InfoRow label="Residence" value={profileData.habitation.typeResidence} />
            <InfoRow label="Superficie" value={`${profileData.habitation.superficie} m2`} />
            <InfoRow label="Nombre de pieces" value={profileData.habitation.nombrePieces} />
            <InfoRow label="Etage" value={profileData.habitation.etage} />
            <InfoRow label="Annee construction" value={profileData.habitation.anneeConstruction} />
            <InfoRow label="Alarme" value={profileData.habitation.alarme} />
          </Section>

          {/* Antecedents */}
          <Section title="Antecedents" icon={FileText}>
            <InfoRow label="Sinistres (3 ans)" value={profileData.antecedents.nbSinistres} />
            <InfoRow label="Bonus/Malus" value={profileData.antecedents.bonusMalus} />
            <InfoRow label="Resiliation assureur" value={profileData.antecedents.resiliationAssureur} />
            <InfoRow label="Suspension permis" value={profileData.antecedents.suspensionPermis} />
          </Section>
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <span>Champ synchronise avec l&apos;extension</span>
        </div>
      </div>
    </>
  )
}
