"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { nav, profile } from "@/lib/portfolio"
import { cn } from "@/lib/utils"

export function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  // Track which section is in view so the current nav item is marked.
  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0 || !("IntersectionObserver" in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(`#${visible[0].target.id}`)
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav aria-label="Navigation principale" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#contenu" className="font-display text-xl leading-none" onClick={() => setOpen(false)}>
          {profile.firstName}
          <span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className="pf-link inline-flex items-baseline gap-1.5 py-1 text-sm"
              >
                <span className="font-mono text-[10px] text-muted-foreground">{item.index}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="inline-flex h-9 items-center border border-foreground px-3.5 text-sm transition-colors hover:bg-foreground hover:text-background">
              Me contacter
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="-mr-2 inline-flex h-11 items-center px-2 text-sm md:hidden"
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </nav>

      <div
        id="menu-mobile"
        hidden={!open}
        className={cn("fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto bg-background px-5 pt-6 md:hidden")}
      >
        <ul className="divide-y divide-border border-y border-border">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display flex items-baseline gap-4 py-5 text-3xl"
              >
                <span className="font-mono text-xs text-muted-foreground">{item.index}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="font-display flex items-baseline gap-4 py-5 text-3xl text-primary">
              <span className="font-mono text-xs text-muted-foreground">05</span>
              Me contacter
            </a>
          </li>
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">{profile.email}</p>
      </div>
    </header>
  )
}
