# Portfolio — Cayo Legal

Sitio personal de un desarrollador FullStack. Construido con un enfoque en
rendimiento, SEO, accesibilidad e internacionalización.

🔗 **Live:** https://cayolegal.vercel.app

## Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) + React 19
- **Lenguaje:** TypeScript (modo `strict`)
- **Estilos:** CSS Modules
- **i18n:** [next-intl](https://next-intl-docs.vercel.app/) — español, inglés y portugués
- **Observabilidad:** [Sentry](https://sentry.io/) (errores + source maps)
- **Analytics:** Google Analytics (solo en producción)
- **Email:** API route propia que actúa de proxy validado hacia EmailJS
- **Tooling:** ESLint · Prettier · Husky + lint-staged · bundle analyzer
- **Deploy:** Vercel

## Características

- 🌐 Detección de idioma por cookie/`Accept-Language` con fallback a español
- 🔍 SEO: metadata dinámica, Open Graph/Twitter cards, `sitemap.ts`, `robots.ts` y JSON-LD (`schema.org/Person`)
- 🛡️ Endpoint de contacto con validación de campos, límite de longitud y honeypot anti-spam
- 🔒 Cabeceras de seguridad (CSP, `X-Frame-Options`, `X-Content-Type-Options`)
- ⚡ Fuentes optimizadas con `next/font`, animaciones con `IntersectionObserver`

## Estructura

```
src/
├── app/            # App Router: páginas, layout, API routes, sitemap/robots
├── components/     # Componentes de cada sección (Hero, Projects, Contact, ...)
├── core/           # Reutilizable: componentes UI, hooks, datos, tipos, config
└── i18n/           # Configuración y mensajes de next-intl (es / en / pt)
```

## Desarrollo

Requiere Node 20+ y [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev          # servidor de desarrollo (Turbopack) en http://localhost:3000
```

### Scripts

| Script               | Descripción                              |
| -------------------- | ---------------------------------------- |
| `pnpm dev`           | Servidor de desarrollo con Turbopack     |
| `pnpm build`         | Build de producción                      |
| `pnpm start`         | Sirve el build de producción             |
| `pnpm lint`          | Linting con ESLint                       |
| `pnpm check:types`   | Chequeo de tipos con `tsc --noEmit`      |

### Variables de entorno

Crear un archivo `.env.local`:

```bash
NEXT_PUBLIC_EMAIL_SERVICE_ID=...
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
NEXT_PUBLIC_GA_ID=...
```
