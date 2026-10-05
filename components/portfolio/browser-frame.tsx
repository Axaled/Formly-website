import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-border bg-card",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-border" />
          <span className="h-2.5 w-2.5 rounded-full border border-border" />
          <span className="h-2.5 w-2.5 rounded-full border border-border" />
        </div>
        <div className="flex-1 truncate rounded-md bg-foreground/5 px-3 py-1 text-center font-mono text-[10px] text-muted-foreground">
          {url}
        </div>
      </div>
      {children}
    </div>
  )
}
