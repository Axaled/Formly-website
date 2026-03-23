import Link from "next/link"

const footerNavigation = {
  produit: [
    { name: "Démo", href: "/demo" },
    { name: "Tarification", href: "/tarification" },
  ],
  entreprise: [
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "CGU", href: "/cgu" },
  ],
  support: [
    { name: "Centre d'aide", href: "/aide" },
    { name: "Documentation", href: "/documentation" },
  ],
}

export function PublicFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-lg shadow-primary/25">
                <span className="text-lg font-bold text-primary-foreground">F</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Formly</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              La solution SaaS qui automatise le remplissage des formulaires d&apos;assurance pour les courtiers professionnels.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Produit</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.produit.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Entreprise</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.entreprise.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Légal</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Support</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Formly. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
