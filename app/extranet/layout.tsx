import { ExtranetSidebar } from "@/components/extranet/sidebar"

export const metadata = {
  title: "Extranet - Formly",
  description: "Gerez vos profils clients et automatisez vos formulaires d'assurance.",
}

export default function ExtranetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <ExtranetSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
