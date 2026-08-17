export type Lang = "es" | "en";

type Dict = {
  nav: { brand: string; guide: string; score: string; github: string };
  landing: {
    kicker: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaGuide: string;
    ctaScore: string;
    redactedLabel: string;
    redactedAddress: string;
    redactedNote: string;
    problemKicker: string;
    problemTitle: string;
    problemBody: string;
    pillarsKicker: string;
    pillarsTitle: string;
    pillar1Title: string;
    pillar1Body: string;
    pillar2Title: string;
    pillar2Body: string;
    pillar3Title: string;
    pillar3Body: string;
    whoKicker: string;
    whoTitle: string;
    whoBody: string;
    footerNote: string;
  };
  wizard: {
    kicker: string;
    title: string;
    subtitle: string;
    stepLevel: string;
    stepUseCase: string;
    stepResult: string;
    levelHeading: string;
    levelBeginnerTitle: string;
    levelBeginnerBody: string;
    levelIntermediateTitle: string;
    levelIntermediateBody: string;
    useCaseHeading: string;
    useCaseSavingsTitle: string;
    useCaseSavingsBody: string;
    useCaseDailyTitle: string;
    useCaseDailyBody: string;
    useCaseDonationsTitle: string;
    useCaseDonationsBody: string;
    back: string;
    next: string;
    resultHeading: string;
    resultIntro: string;
    downloadButton: string;
    restartButton: string;
    categorySetup: string;
    categoryHabit: string;
    categoryAdvanced: string;
    scoreCta: string;
  };
  score: {
    kicker: string;
    title: string;
    subtitle: string;
    questionnaireHeading: string;
    yes: string;
    no: string;
    unsure: string;
    addressToolHeading: string;
    addressToolBody: string;
    addressPlaceholder: string;
    checkAddresses: string;
    reusedFound: (n: number) => string;
    noReuseFound: string;
    noAddressesYet: string;
    scoreLabel: string;
    verdictApproved: string;
    verdictReview: string;
    verdictCritical: string;
    breakdownHeading: string;
    resetButton: string;
    privacyNote: string;
  };
  common: { langToggle: string };
};

const es: Dict = {
  nav: {
    brand: "Privacy First Setup",
    guide: "Guía",
    score: "Privacy Score",
    github: "Código fuente",
  },
  landing: {
    kicker: "Dossier 001 · Autocustodia sin fugas",
    heroTitle: "Tu wallet ya está filtrando más de lo que pensás.",
    heroSubtitle:
      "Guía interactiva y herramientas de código abierto para configurar una wallet Bitcoin con buenas prácticas de privacidad desde el primer recibo. Sin cuentas, sin backend, sin que tus datos salgan de tu navegador.",
    ctaGuide: "Empezar la guía",
    ctaScore: "Auditar mi privacidad",
    redactedLabel: "Ejemplo — pasá el mouse para revelar",
    redactedAddress: "bc1q███████████████████████████",
    redactedNote:
      "Así ve un observador de la blockchain una dirección reutilizada: un patrón repetido que conecta todos tus pagos.",
    problemKicker: "El problema",
    problemTitle: "La privacidad no es el estado por defecto",
    problemBody:
      "La mayoría de las wallets, incluso las de usuarios que sí quieren privacidad, terminan reutilizando direcciones, mezclando UTXOs de orígenes distintos o usando herramientas demasiado técnicas para mantener el hábito. El resultado es el mismo que no cifrar nada: cualquiera con un explorador de blockchain puede reconstruir tu historial financiero completo.",
    pillarsKicker: "El método",
    pillarsTitle: "Tres capas, en orden",
    pillar1Title: "01 · Configuración",
    pillar1Body:
      "Wallet HD, coin control activado, conexión a tu propio nodo o vía Tor. Se define una sola vez.",
    pillar2Title: "02 · Hábitos",
    pillar2Body:
      "Labels, cero reutilización de direcciones, verificar el cambio en cada transacción. Se repite cada vez que usás la wallet.",
    pillar3Title: "03 · Técnicas avanzadas",
    pillar3Body:
      "Payjoin, Silent Payments, CoinJoin, passphrase. Se suman cuando ya tenés la base sólida.",
    whoKicker: "Para quién es esto",
    whoTitle: "Pensado para quien más lo necesita",
    whoBody:
      "Activistas, periodistas, disidentes, y cualquier persona en países con controles de capital, censura financiera o vigilancia estatal — pero también para cualquiera que simplemente no quiera que su empleador, su casero o un desconocido puedan ver su patrimonio. Todo el contenido es traducible y funciona sin conexión una vez cargado.",
    footerNote:
      "Código abierto, sin analítica, sin cuentas. Todo el cálculo del Privacy Score corre en tu navegador.",
  },
  wizard: {
    kicker: "Expediente en construcción",
    title: "Armá tu configuración recomendada",
    subtitle:
      "Tres pasos. Al final vas a tener una checklist concreta, ordenada por prioridad, para tu nivel y tu forma de usar Bitcoin.",
    stepLevel: "Nivel",
    stepUseCase: "Uso",
    stepResult: "Expediente",
    levelHeading: "¿Cuál es tu nivel con Bitcoin hoy?",
    levelBeginnerTitle: "Principiante",
    levelBeginnerBody:
      "Ya tenés o estás por instalar tu primera wallet. Priorizamos hábitos simples de aplicar desde el día uno.",
    levelIntermediateTitle: "Intermedio",
    levelIntermediateBody:
      "Ya usás coin control o corrés tu propio nodo. Sumamos técnicas más avanzadas: CoinJoin, passphrase, Payjoin.",
    useCaseHeading: "¿Para qué vas a usar principalmente esta wallet?",
    useCaseSavingsTitle: "Ahorro a largo plazo",
    useCaseSavingsBody:
      "Guardar sats por años. Prioridad: que nadie pueda estimar cuánto tenés.",
    useCaseDailyTitle: "Gastos cotidianos",
    useCaseDailyBody:
      "Pagos frecuentes a comercios, proveedores o personas. Prioridad: que tus pagos no se puedan vincular entre sí.",
    useCaseDonationsTitle: "Donaciones privadas",
    useCaseDonationsBody:
      "Recibís fondos de causas o campañas de forma pública. Prioridad: que una dirección pública no exponga a quién donó qué.",
    back: "Atrás",
    next: "Siguiente",
    resultHeading: "Tu expediente de configuración",
    resultIntro:
      "Ordenado por impacto en tu privacidad. Marcá cada punto a medida que lo aplicás en tu wallet.",
    downloadButton: "Descargar checklist (.md)",
    restartButton: "Empezar de nuevo",
    categorySetup: "Configuración inicial",
    categoryHabit: "Hábito recurrente",
    categoryAdvanced: "Técnica avanzada",
    scoreCta: "¿Ya tenés una wallet configurada? Medí tu Privacy Score →",
  },
  score: {
    kicker: "Auditoría de campo",
    title: "Privacy Score",
    subtitle:
      "Respondé el cuestionario con honestidad. Todo se calcula en tu navegador — nada se envía a ningún servidor.",
    questionnaireHeading: "Cuestionario de hábitos",
    yes: "Sí",
    no: "No",
    unsure: "No sé",
    addressToolHeading: "Detector de reutilización de direcciones",
    addressToolBody:
      "Pegá una lista de direcciones (una por línea) de tu historial de recibos. Se comparan localmente en tu navegador — no se envía ninguna a internet.",
    addressPlaceholder: "bc1q...\nbc1q...\nbc1q...",
    checkAddresses: "Analizar direcciones",
    reusedFound: (n: number) =>
      `Se encontraron ${n} dirección(es) repetida(s). Esto penaliza fuerte tu score.`,
    noReuseFound: "No se detectaron direcciones repetidas en la lista pegada.",
    noAddressesYet: "Todavía no analizaste ninguna lista de direcciones.",
    scoreLabel: "Score de privacidad",
    verdictApproved: "APROBADO",
    verdictReview: "A REVISAR",
    verdictCritical: "CRÍTICO",
    breakdownHeading: "Detalle por punto",
    resetButton: "Reiniciar cuestionario",
    privacyNote:
      "Nota de privacidad: esta herramienta no hace consultas a servidores externos ni de blockchain. El detector de reutilización compara texto plano localmente.",
  },
  common: {
    langToggle: "EN",
  },
};

const en: Dict = {
  nav: {
    brand: "Privacy First Setup",
    guide: "Guide",
    score: "Privacy Score",
    github: "Source code",
  },
  landing: {
    kicker: "Dossier 001 · Self-custody without leaks",
    heroTitle: "Your wallet is already leaking more than you think.",
    heroSubtitle:
      "Interactive guide and open-source tools to set up a Bitcoin wallet with good privacy practices from the first receive. No accounts, no backend, your data never leaves your browser.",
    ctaGuide: "Start the guide",
    ctaScore: "Audit my privacy",
    redactedLabel: "Example — hover to reveal",
    redactedAddress: "bc1q███████████████████████████",
    redactedNote:
      "This is what a chain observer sees from a reused address: a repeated pattern linking every payment you make.",
    problemKicker: "The problem",
    problemTitle: "Privacy isn't the default state",
    problemBody:
      "Most wallets — even for users who actively want privacy — end up reusing addresses, mixing UTXOs from different sources, or relying on tools too technical to keep the habit. The result is the same as not encrypting anything: anyone with a block explorer can reconstruct your entire financial history.",
    pillarsKicker: "The method",
    pillarsTitle: "Three layers, in order",
    pillar1Title: "01 · Setup",
    pillar1Body:
      "HD wallet, coin control enabled, connected to your own node or over Tor. Set once.",
    pillar2Title: "02 · Habits",
    pillar2Body:
      "Labels, zero address reuse, verifying change on every transaction. Repeats every time you use the wallet.",
    pillar3Title: "03 · Advanced techniques",
    pillar3Body:
      "Payjoin, Silent Payments, CoinJoin, passphrase. Layer these on once the base is solid.",
    whoKicker: "Who this is for",
    whoTitle: "Built for whoever needs it most",
    whoBody:
      "Activists, journalists, dissidents, and anyone in countries with capital controls, financial censorship, or state surveillance — but also anyone who simply doesn't want their employer, landlord, or a stranger to see their net worth. All content is translatable and works offline once loaded.",
    footerNote:
      "Open source, no analytics, no accounts. All Privacy Score math runs in your browser.",
  },
  wizard: {
    kicker: "Dossier in progress",
    title: "Build your recommended setup",
    subtitle:
      "Three steps. At the end you'll get a concrete, priority-ordered checklist for your level and how you use Bitcoin.",
    stepLevel: "Level",
    stepUseCase: "Use",
    stepResult: "Dossier",
    levelHeading: "What's your level with Bitcoin today?",
    levelBeginnerTitle: "Beginner",
    levelBeginnerBody:
      "You already have, or are about to install, your first wallet. We prioritize simple habits you can apply from day one.",
    levelIntermediateTitle: "Intermediate",
    levelIntermediateBody:
      "You already use coin control or run your own node. We add more advanced techniques: CoinJoin, passphrase, Payjoin.",
    useCaseHeading: "What will you mainly use this wallet for?",
    useCaseSavingsTitle: "Long-term savings",
    useCaseSavingsBody:
      "Holding sats for years. Priority: nobody should be able to estimate how much you hold.",
    useCaseDailyTitle: "Daily spending",
    useCaseDailyBody:
      "Frequent payments to merchants, vendors, or people. Priority: your payments shouldn't be linkable to each other.",
    useCaseDonationsTitle: "Private donations",
    useCaseDonationsBody:
      "You receive funds for causes or campaigns publicly. Priority: a public address shouldn't expose who donated what.",
    back: "Back",
    next: "Next",
    resultHeading: "Your setup dossier",
    resultIntro:
      "Ranked by privacy impact. Check off each item as you apply it to your wallet.",
    downloadButton: "Download checklist (.md)",
    restartButton: "Start over",
    categorySetup: "Initial setup",
    categoryHabit: "Recurring habit",
    categoryAdvanced: "Advanced technique",
    scoreCta: "Already have a wallet set up? Measure your Privacy Score →",
  },
  score: {
    kicker: "Field audit",
    title: "Privacy Score",
    subtitle:
      "Answer honestly. Everything is computed in your browser — nothing is sent to any server.",
    questionnaireHeading: "Habits questionnaire",
    yes: "Yes",
    no: "No",
    unsure: "Not sure",
    addressToolHeading: "Address reuse detector",
    addressToolBody:
      "Paste a list of addresses (one per line) from your receive history. They're compared locally in your browser — none are sent anywhere.",
    addressPlaceholder: "bc1q...\nbc1q...\nbc1q...",
    checkAddresses: "Analyze addresses",
    reusedFound: (n: number) =>
      `Found ${n} repeated address(es). This heavily penalizes your score.`,
    noReuseFound: "No repeated addresses found in the pasted list.",
    noAddressesYet: "You haven't analyzed an address list yet.",
    scoreLabel: "Privacy score",
    verdictApproved: "APPROVED",
    verdictReview: "NEEDS REVIEW",
    verdictCritical: "CRITICAL",
    breakdownHeading: "Item breakdown",
    resetButton: "Reset questionnaire",
    privacyNote:
      "Privacy note: this tool makes no calls to external or blockchain servers. The reuse detector compares plain text locally.",
  },
  common: {
    langToggle: "ES",
  },
};

export const dictionaries: Record<Lang, Dict> = { es, en };
