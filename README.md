# Privacy First Setup

Guía interactiva y herramientas de código abierto para configurar una wallet
Bitcoin con buenas prácticas de privacidad desde el primer recibo — coin
control, labels, Payjoin, Silent Payments — sin necesidad de ser una persona
técnica.

Todo corre client-side. No hay backend, no hay cuentas, no hay analítica, y
ninguna de las dos herramientas envía datos a un servidor:

- **Guía / Wizard** (`/wizard`) — según tu nivel (principiante/intermedio) y
  el uso que le vas a dar a la wallet (ahorro, gasto diario, donaciones),
  genera una checklist priorizada y descargable en Markdown.
- **Privacy Score** (`/privacy-score`) — cuestionario de hábitos + detector
  de reutilización de direcciones (comparación de texto 100% local, sin
  llamadas a exploradores de blockchain).

Pensado especialmente para usuarios en LATAM, África y países con censura
financiera o controles de capital — pero útil para cualquiera que no quiera
que su patrimonio sea de lectura pública.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Sin base de datos,
sin API routes: el sitio entero se puede servir como estático.

## Desarrollo

```bash
npm install
npm run dev
```

Tests (Vitest, sin DOM — corren la lógica de scoring y validan que no falte
ninguna traducción):

```bash
npm run test
```

## Estado / roadmap

- [x] Wizard de configuración por nivel + caso de uso
- [x] Privacy Score con cuestionario ponderado + detector de reutilización
- [x] Offline (PWA / service worker)
- [x] 4 idiomas — es, en, pt, fr — estructura lista para sumar más
- [x] Open Graph / Twitter card, sitemap.xml, robots.txt
- [x] Glosario de términos técnicos + indicador offline
- [x] Header responsive (menú mobile)
- [x] Tests unitarios para el motor de scoring y la integridad de contenido
- [x] Auditoría de accesibilidad (contraste WCAG, foco, labels)
- [x] Link de referencia externa verificado por principio + vista imprimible del checklist
- [x] Feedback sin analytics (link a GitHub Issues)
- [ ] Importar descriptors/xpub en modo watch-only para auditoría automática (fase futura, gated por financiamiento)
- [ ] Integración PSBT con wallets externas — Sparrow, Electrum (fase futura, gated por financiamiento)

Los textos de contenido (`src/lib/principles.ts`, `src/lib/dictionaries.ts`)
están separados del código de UI específicamente para facilitar traducciones
y correcciones de contenido vía PR. Ver [CONTRIBUTING.md](./CONTRIBUTING.md)
para la guía completa (cómo agregar un idioma, estilo de código, alcance del
proyecto).

## Licencia

MIT — ver [LICENSE](./LICENSE).
