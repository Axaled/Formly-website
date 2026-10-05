# ailance.fr

Site personnel d'Alexandre Croquette : automatisations IA et outils web pour les PME.

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- Aucune base de données, aucun service externe : le site est entièrement statique côté contenu
- Tout le contenu (textes, projets, liens) est dans `lib/portfolio.ts`

## Développer

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

## Déployer sur le VPS

Le build produit un serveur Node autonome (`output: 'standalone'`), empaqueté par le `Dockerfile`.

```bash
docker compose up -d --build
```

Le conteneur écoute sur `127.0.0.1:3010`. Derrière Caddy :

```caddyfile
ailance.fr, www.ailance.fr {
    reverse_proxy 127.0.0.1:3010
}
```

L'URL publique est fixée à `https://ailance.fr` (variable `NEXT_PUBLIC_SITE_URL`, utilisée pour
l'image de partage, le sitemap et l'URL canonique). Pour une autre origine, passez-la en argument de
build : `docker compose build --build-arg NEXT_PUBLIC_SITE_URL=https://exemple.fr`.

## Structure

```
app/                  routes : /, /realisations, icônes, image de partage, robots, sitemap
components/portfolio/ sections de page
lib/portfolio.ts      contenu
public/work/          captures des projets
```
