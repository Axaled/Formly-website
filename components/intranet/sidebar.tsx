"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Building2, 
  GitBranch, 
  AlertTriangle,
  Settings,
  LogOut, 
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"

const navigation = [
  { name: "Dashboard", href: "/intranet", icon: LayoutDashboard },
  { name: "Cabinets", href: "/intranet/cabinets", icon: Building2 },
  { name: "Moteur de regles", href: "/intranet/mapping", icon: GitBranch },
  { name: "Logs & Support", href: "/intranet/logs", icon: AlertTriangle },
  { name: "Configuration", href: "/intranet/config", icon: Settings },
]

export function IntranetSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={cn(
      "flex flex-col border-r border-border bg-[#1a1f2e] transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
        {!collapsed && (
          <Link href="/intranet" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">F</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-white">Formly</span>
              <span className="ml-2 text-xs text-white/50 bg-white/10 px-1.5 py-0.5 rounded">Admin</span>
            </div>
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
            "rounded-md p-1 text-white/50 hover:bg-white/10 hover:text-white transition-smooth",
            collapsed && "absolute -right-3 top-6 z-10 rounded-full border border-border bg-[#1a1f2e] shadow-md"
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
              (item.href !== "/intranet" && pathname.startsWith(item.href))
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-smooth",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
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
      </nav>

      {/* User profile */}
      <div className="border-t border-white/10 p-4">
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary font-medium">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin Formly</p>
              <p className="text-xs text-white/50 truncate">admin@formly.fr</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white/50 hover:text-red-400 hover:bg-white/10" onClick={logout}>
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Deconnexion</span>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary font-medium text-sm">
              AD
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white/50 hover:text-red-400 hover:bg-white/10" asChild>
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
