import { nav, profile } from "@/lib/portfolio"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <p className="text-muted-foreground">
          <span className="font-display text-base text-foreground">
            {profile.firstName}
            <span className="text-primary">.</span>
          </span>{" "}
          © {new Date().getFullYear()} · Conçu et codé à la main, sans gabarit.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-muted-foreground">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="pf-link">{n.label}</a>
            </li>
          ))}
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="pf-link">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
