import { IntranetSidebar } from "@/components/intranet/sidebar"

export const metadata = {
  title: "Intranet Admin - Formly",
  description: "Espace administrateur Formly - Gestion des cabinets, mapping et support.",
}

export default function IntranetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <IntranetSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
