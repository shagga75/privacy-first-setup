# Contribuir a Privacy First Setup

Gracias por el interés. Esta es una herramienta educativa de código abierto,
sin backend — cualquier cambio corre en el navegador del usuario.

## Setup local

```bash
npm install
npm run dev
```

Antes de abrir un PR, corré:

```bash
npx tsc --noEmit
npm run lint
npm run test
npm run build
```

Los cuatro tienen que terminar sin errores. TypeScript está configurado
para rechazar el build si falta un string en cualquiera de los 4 idiomas, y
los tests (`src/lib/*.test.ts`, Vitest) validan además que no haya ids
duplicados en `principles.ts`/`glossary.ts` ni strings vacíos — así que una
traducción o un dato incompleto no puede llegar a producción por accidente.

## Traducir o corregir contenido

Todo el texto vive separado del código de UI, en dos archivos:

- `src/lib/dictionaries.ts` — textos de interfaz (nav, landing, wizard,
  privacy score). Cada idioma es un objeto `Dict` completo.
- `src/lib/principles.ts` — los 15 "principios de privacidad" que alimentan
  tanto el wizard como el cuestionario del Privacy Score. Cada uno tiene
  `title`/`body`/`question` por idioma.

Para corregir una traducción existente, alcanza con editar el string
correspondiente. No hace falta tocar ningún componente.

### Agregar un idioma nuevo

1. Sumá el código de idioma a `Lang` en `src/lib/dictionaries.ts`.
2. Agregá la entrada correspondiente en `LANG_NAMES` (en el idioma nativo,
   no traducido — así se ve en el selector sin importar qué idioma esté
   activo).
3. Completá un objeto `Dict` nuevo y agregalo a `dictionaries`.
4. Completá la traducción de los 15 principios en `principles.ts`.
5. `npx tsc --noEmit` te va a marcar cualquier campo que falte.

Si el idioma es RTL (árabe, hebreo, etc.), hay trabajo de layout adicional
más allá de la traducción — abrí un issue antes de empezar para coordinar.

## Estilo de código

- TypeScript estricto, sin `any` salvo casos ya marcados con
  `eslint-disable`.
- Sin comentarios salvo que expliquen un motivo no obvio (una restricción
  oculta, un workaround puntual). El código debería explicarse solo por
  nombres claros.
- Tailwind: `gap-*` en vez de `space-y-*`, tokens de color semánticos
  (`text-muted`, `bg-surface`) en vez de colores crudos.
- No agregar dependencias nuevas sin justificar por qué el proyecto las
  necesita — el objetivo es que un desarrollador individual lo pueda
  mantener.

## Alcance del proyecto

Este repo cubre deliberadamente solo la **capa educativa**: guía + Privacy
Score heurístico, sin tocar criptografía real. No hay integración con
bitcoinjs-lib, BDK, descriptors ni PSBT — el detector de reutilización de
direcciones compara texto plano pegado por el usuario, no valida ni deriva
nada. Esa integración más profunda (inspección/construcción real de
wallets) es una fase futura del proyecto sujeta a financiamiento, así que
PRs que agreguen dependencias Bitcoin reales probablemente no se van a
mergear todavía — abrí un issue primero para discutirlo.

## Privacidad del proyecto en sí

Ninguna herramienta acá debe hacer llamadas de red con datos del usuario
(direcciones, xpubs, etc.) a servicios de terceros. Si tu cambio necesita
consultar algo externo, tiene que ser explícitamente opt-in y con un aviso
claro en la UI de qué datos salen y adónde.
