"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface IntranetHeaderProps {
  title: string
  description?: string
}

export function IntranetHeader({ title, description }: IntranetHeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/95 backdrop-blur px-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher..."
            className="w-64 pl-9 h-9"
          />
        </div>

        {/* System status */}
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Systeme operationnel</span>
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="h-9 w-9 relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
            5
          </span>
          <span className="sr-only">Notifications</span>
        </Button>
      </div>
    </header>
  )
}
