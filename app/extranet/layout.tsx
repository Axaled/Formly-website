"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { ExtranetSidebar } from "@/components/extranet/sidebar"

export default function ExtranetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const isLoginPage = pathname === "/extranet/login"

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isLoginPage) {
      router.push("/extranet/login")
    }
  }, [isAuthenticated, isLoading, router, isLoginPage])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background text-muted-foreground italic">
        Chargement...
      </div>
    )
  }

  if (!isAuthenticated && !isLoginPage) {
    return null
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {!isLoginPage && <ExtranetSidebar />}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
