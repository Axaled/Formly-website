"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  ChevronLeft,
  ChevronRight,
  Clock,
  HelpCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navigation = [
  { name: "Tableau de bord", href: "/extranet", icon: LayoutDashboard },
  { name: "Profils Assures", href: "/extranet/profils", icon: Users },
  { name: "Historique", href: "/extranet/historique", icon: Clock },
  { name: "Parametres", href: "/extranet/parametres", icon: Settings },
]

const secondaryNavigation = [
  { name: "Centre d'aide", href: "#", icon: HelpCircle },
]

export function ExtranetSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={cn(
      "flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!collapsed && (
          <Link href="/extranet" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">F</span>
            </div>
            <span className="text-lg font-semibold text-sidebar-foreground">Formly</span>
          </Link>
        )}
        {collapsed && (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary mx-auto">
            <span className="text-sm font-bold text-primary-foreground">F</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "rounded-md p-1 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-smooth",
            collapsed && "absolute -right-3 top-6 z-10 rounded-full border border-sidebar-border bg-sidebar shadow-md"
          )}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/extranet" && pathname.startsWith(item.href))
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-smooth",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Secondary navigation */}
        <div className="mt-8">
          {!collapsed && (
            <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Support
            </p>
          )}
          <ul className="space-y-1">
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-smooth"
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* User profile */}
      <div className="border-t border-sidebar-border p-4">
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Jean Dupont</p>
              <p className="text-xs text-muted-foreground truncate">Cabinet Dupont</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" asChild>
              <Link href="/">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Deconnexion</span>
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-medium text-sm">
              JD
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" asChild>
              <Link href="/">
                <LogOut className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </aside>
  )
}
