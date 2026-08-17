export type Lang = "es" | "en" | "pt" | "fr";

export const LANG_NAMES: Record<Lang, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  fr: "Français",
};

type Dict = {
  nav: {
    brand: string;
    guide: string;
    score: string;
    glossary: string;
    github: string;
  };
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
    learnMore: string;
    printButton: string;
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
  glossary: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  common: {
    offlineNotice: string;
    menu: string;
    language: string;
    skipToContent: string;
    reportIssue: string;
  };
};

const es: Dict = {
  nav: {
    brand: "Privacy First Setup",
    guide: "Guía",
    score: "Privacy Score",
    glossary: "Glosario",
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
    learnMore: "Más información",
    printButton: "Imprimir checklist",
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
  glossary: {
    kicker: "Referencia",
    title: "Glosario",
    subtitle:
      "Los términos técnicos que vas a encontrar en la guía y el Privacy Score, explicados sin vueltas.",
  },
  common: {
    offlineNotice: "Sin conexión — mostrando la versión guardada en caché",
    menu: "Menú",
    language: "Idioma",
    skipToContent: "Saltar al contenido",
    reportIssue: "¿Encontraste un error? Reportalo en GitHub",
  },
};

const en: Dict = {
  nav: {
    brand: "Privacy First Setup",
    guide: "Guide",
    score: "Privacy Score",
    glossary: "Glossary",
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
    learnMore: "Learn more",
    printButton: "Print checklist",
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
  glossary: {
    kicker: "Reference",
    title: "Glossary",
    subtitle:
      "The technical terms you'll run into across the guide and the Privacy Score, explained plainly.",
  },
  common: {
    offlineNotice: "Offline — showing the cached version",
    menu: "Menu",
    language: "Language",
    skipToContent: "Skip to content",
    reportIssue: "Found a bug? Report it on GitHub",
  },
};

const pt: Dict = {
  nav: {
    brand: "Privacy First Setup",
    guide: "Guia",
    score: "Privacy Score",
    glossary: "Glossário",
    github: "Código fonte",
  },
  landing: {
    kicker: "Dossiê 001 · Autocustódia sem vazamentos",
    heroTitle: "Sua carteira já está vazando mais do que você imagina.",
    heroSubtitle:
      "Guia interativo e ferramentas de código aberto para configurar uma carteira Bitcoin com boas práticas de privacidade desde o primeiro recebimento. Sem contas, sem backend, sem que seus dados saiam do seu navegador.",
    ctaGuide: "Começar o guia",
    ctaScore: "Auditar minha privacidade",
    redactedLabel: "Exemplo — passe o mouse para revelar",
    redactedAddress: "bc1q███████████████████████████",
    redactedNote:
      "É assim que um observador da blockchain vê um endereço reutilizado: um padrão repetido que conecta todos os seus pagamentos.",
    problemKicker: "O problema",
    problemTitle: "A privacidade não é o estado padrão",
    problemBody:
      "A maioria das carteiras, mesmo as de usuários que realmente querem privacidade, acaba reutilizando endereços, misturando UTXOs de origens diferentes ou usando ferramentas técnicas demais para manter o hábito. O resultado é o mesmo que não criptografar nada: qualquer pessoa com um explorador de blockchain pode reconstruir todo o seu histórico financeiro.",
    pillarsKicker: "O método",
    pillarsTitle: "Três camadas, em ordem",
    pillar1Title: "01 · Configuração",
    pillar1Body:
      "Carteira HD, coin control ativado, conexão ao seu próprio node ou via Tor. Definido uma única vez.",
    pillar2Title: "02 · Hábitos",
    pillar2Body:
      "Labels, zero reutilização de endereços, verificar o troco em cada transação. Se repete toda vez que você usa a carteira.",
    pillar3Title: "03 · Técnicas avançadas",
    pillar3Body:
      "Payjoin, Silent Payments, CoinJoin, passphrase. Somam-se quando a base já está sólida.",
    whoKicker: "Para quem é isso",
    whoTitle: "Pensado para quem mais precisa",
    whoBody:
      "Ativistas, jornalistas, dissidentes, e qualquer pessoa em países com controles de capital, censura financeira ou vigilância estatal — mas também para quem simplesmente não quer que seu empregador, seu senhorio ou um desconhecido vejam o seu patrimônio. Todo o conteúdo é traduzível e funciona offline depois de carregado.",
    footerNote:
      "Código aberto, sem analytics, sem contas. Todo o cálculo do Privacy Score roda no seu navegador.",
  },
  wizard: {
    kicker: "Expediente em construção",
    title: "Monte sua configuração recomendada",
    subtitle:
      "Três passos. No final você vai ter uma checklist concreta, ordenada por prioridade, para o seu nível e a sua forma de usar Bitcoin.",
    stepLevel: "Nível",
    stepUseCase: "Uso",
    stepResult: "Expediente",
    levelHeading: "Qual é o seu nível com Bitcoin hoje?",
    levelBeginnerTitle: "Iniciante",
    levelBeginnerBody:
      "Você já tem ou está prestes a instalar sua primeira carteira. Priorizamos hábitos simples de aplicar desde o primeiro dia.",
    levelIntermediateTitle: "Intermediário",
    levelIntermediateBody:
      "Você já usa coin control ou roda seu próprio node. Somamos técnicas mais avançadas: CoinJoin, passphrase, Payjoin.",
    useCaseHeading: "Para que você vai usar principalmente essa carteira?",
    useCaseSavingsTitle: "Poupança de longo prazo",
    useCaseSavingsBody:
      "Guardar sats por anos. Prioridade: que ninguém consiga estimar quanto você tem.",
    useCaseDailyTitle: "Gastos do dia a dia",
    useCaseDailyBody:
      "Pagamentos frequentes a comércios, fornecedores ou pessoas. Prioridade: que seus pagamentos não possam ser vinculados entre si.",
    useCaseDonationsTitle: "Doações privadas",
    useCaseDonationsBody:
      "Você recebe fundos de causas ou campanhas publicamente. Prioridade: que um endereço público não exponha quem doou o quê.",
    back: "Voltar",
    next: "Próximo",
    resultHeading: "Seu expediente de configuração",
    resultIntro:
      "Ordenado por impacto na sua privacidade. Marque cada item conforme for aplicando na sua carteira.",
    downloadButton: "Baixar checklist (.md)",
    restartButton: "Começar de novo",
    categorySetup: "Configuração inicial",
    categoryHabit: "Hábito recorrente",
    categoryAdvanced: "Técnica avançada",
    scoreCta: "Já tem uma carteira configurada? Meça o seu Privacy Score →",
    learnMore: "Mais informações",
    printButton: "Imprimir checklist",
  },
  score: {
    kicker: "Auditoria de campo",
    title: "Privacy Score",
    subtitle:
      "Responda o questionário com honestidade. Tudo é calculado no seu navegador — nada é enviado a nenhum servidor.",
    questionnaireHeading: "Questionário de hábitos",
    yes: "Sim",
    no: "Não",
    unsure: "Não sei",
    addressToolHeading: "Detector de reutilização de endereços",
    addressToolBody:
      "Cole uma lista de endereços (um por linha) do seu histórico de recebimentos. São comparados localmente no seu navegador — nenhum é enviado para a internet.",
    addressPlaceholder: "bc1q...\nbc1q...\nbc1q...",
    checkAddresses: "Analisar endereços",
    reusedFound: (n: number) =>
      `Foram encontrados ${n} endereço(s) repetido(s). Isso penaliza fortemente o seu score.`,
    noReuseFound: "Nenhum endereço repetido foi detectado na lista colada.",
    noAddressesYet: "Você ainda não analisou nenhuma lista de endereços.",
    scoreLabel: "Score de privacidade",
    verdictApproved: "APROVADO",
    verdictReview: "A REVISAR",
    verdictCritical: "CRÍTICO",
    breakdownHeading: "Detalhe por item",
    resetButton: "Reiniciar questionário",
    privacyNote:
      "Nota de privacidade: esta ferramenta não faz consultas a servidores externos nem de blockchain. O detector de reutilização compara texto simples localmente.",
  },
  glossary: {
    kicker: "Referência",
    title: "Glossário",
    subtitle:
      "Os termos técnicos que você vai encontrar no guia e no Privacy Score, explicados sem rodeios.",
  },
  common: {
    offlineNotice: "Sem conexão — mostrando a versão salva em cache",
    menu: "Menu",
    language: "Idioma",
    skipToContent: "Pular para o conteúdo",
    reportIssue: "Encontrou um erro? Reporte no GitHub",
  },
};

const fr: Dict = {
  nav: {
    brand: "Privacy First Setup",
    guide: "Guide",
    score: "Privacy Score",
    glossary: "Glossaire",
    github: "Code source",
  },
  landing: {
    kicker: "Dossier 001 · Autogarde sans fuites",
    heroTitle: "Ton wallet fuite déjà plus que tu ne le penses.",
    heroSubtitle:
      "Guide interactif et outils open source pour configurer un wallet Bitcoin avec de bonnes pratiques de confidentialité dès la première réception. Sans compte, sans backend, sans que tes données ne quittent ton navigateur.",
    ctaGuide: "Commencer le guide",
    ctaScore: "Auditer ma confidentialité",
    redactedLabel: "Exemple — survole avec la souris pour révéler",
    redactedAddress: "bc1q███████████████████████████",
    redactedNote:
      "Voici ce qu'un observateur de la blockchain voit d'une adresse réutilisée : un motif répété qui relie tous tes paiements.",
    problemKicker: "Le problème",
    problemTitle: "La confidentialité n'est pas l'état par défaut",
    problemBody:
      "La plupart des wallets, même chez les utilisateurs qui veulent vraiment de la confidentialité, finissent par réutiliser des adresses, mélanger des UTXOs d'origines différentes, ou utiliser des outils trop techniques pour tenir l'habitude. Le résultat est le même que si rien n'était chiffré : n'importe qui avec un explorateur de blockchain peut reconstituer tout ton historique financier.",
    pillarsKicker: "La méthode",
    pillarsTitle: "Trois couches, dans l'ordre",
    pillar1Title: "01 · Configuration",
    pillar1Body:
      "Wallet HD, coin control activé, connexion à ton propre nœud ou via Tor. Se définit une seule fois.",
    pillar2Title: "02 · Habitudes",
    pillar2Body:
      "Labels, zéro réutilisation d'adresses, vérifier la monnaie à chaque transaction. Se répète à chaque utilisation du wallet.",
    pillar3Title: "03 · Techniques avancées",
    pillar3Body:
      "Payjoin, Silent Payments, CoinJoin, passphrase. S'ajoutent une fois la base bien solide.",
    whoKicker: "Pour qui c'est fait",
    whoTitle: "Pensé pour ceux qui en ont le plus besoin",
    whoBody:
      "Activistes, journalistes, dissidents, et toute personne dans des pays avec contrôle des capitaux, censure financière ou surveillance étatique — mais aussi pour quiconque ne veut simplement pas que son employeur, son propriétaire ou un inconnu puisse voir son patrimoine. Tout le contenu est traduisible et fonctionne hors ligne une fois chargé.",
    footerNote:
      "Open source, sans analytics, sans compte. Tout le calcul du Privacy Score s'exécute dans ton navigateur.",
  },
  wizard: {
    kicker: "Dossier en construction",
    title: "Construis ta configuration recommandée",
    subtitle:
      "Trois étapes. À la fin, tu auras une checklist concrète, classée par priorité, adaptée à ton niveau et à ton usage de Bitcoin.",
    stepLevel: "Niveau",
    stepUseCase: "Usage",
    stepResult: "Dossier",
    levelHeading: "Quel est ton niveau avec Bitcoin aujourd'hui ?",
    levelBeginnerTitle: "Débutant",
    levelBeginnerBody:
      "Tu as déjà ou tu es sur le point d'installer ton premier wallet. On priorise des habitudes simples à appliquer dès le premier jour.",
    levelIntermediateTitle: "Intermédiaire",
    levelIntermediateBody:
      "Tu utilises déjà le coin control ou tu fais tourner ton propre nœud. On ajoute des techniques plus avancées : CoinJoin, passphrase, Payjoin.",
    useCaseHeading: "À quoi va principalement servir ce wallet ?",
    useCaseSavingsTitle: "Épargne à long terme",
    useCaseSavingsBody:
      "Conserver des sats pendant des années. Priorité : que personne ne puisse estimer combien tu possèdes.",
    useCaseDailyTitle: "Dépenses quotidiennes",
    useCaseDailyBody:
      "Paiements fréquents à des commerces, prestataires ou particuliers. Priorité : que tes paiements ne puissent pas être reliés entre eux.",
    useCaseDonationsTitle: "Dons privés",
    useCaseDonationsBody:
      "Tu reçois des fonds pour des causes ou des campagnes publiquement. Priorité : qu'une adresse publique n'expose pas qui a donné quoi.",
    back: "Retour",
    next: "Suivant",
    resultHeading: "Ton dossier de configuration",
    resultIntro:
      "Classé par impact sur ta confidentialité. Coche chaque point au fur et à mesure que tu l'appliques dans ton wallet.",
    downloadButton: "Télécharger la checklist (.md)",
    restartButton: "Recommencer",
    categorySetup: "Configuration initiale",
    categoryHabit: "Habitude récurrente",
    categoryAdvanced: "Technique avancée",
    scoreCta: "Tu as déjà un wallet configuré ? Mesure ton Privacy Score →",
    learnMore: "En savoir plus",
    printButton: "Imprimer la checklist",
  },
  score: {
    kicker: "Audit de terrain",
    title: "Privacy Score",
    subtitle:
      "Réponds au questionnaire honnêtement. Tout est calculé dans ton navigateur — rien n'est envoyé à un serveur.",
    questionnaireHeading: "Questionnaire d'habitudes",
    yes: "Oui",
    no: "Non",
    unsure: "Je ne sais pas",
    addressToolHeading: "Détecteur de réutilisation d'adresses",
    addressToolBody:
      "Colle une liste d'adresses (une par ligne) de ton historique de réceptions. Elles sont comparées localement dans ton navigateur — aucune n'est envoyée sur internet.",
    addressPlaceholder: "bc1q...\nbc1q...\nbc1q...",
    checkAddresses: "Analyser les adresses",
    reusedFound: (n: number) =>
      `${n} adresse(s) répétée(s) trouvée(s). Cela pénalise fortement ton score.`,
    noReuseFound: "Aucune adresse répétée détectée dans la liste collée.",
    noAddressesYet: "Tu n'as pas encore analysé de liste d'adresses.",
    scoreLabel: "Score de confidentialité",
    verdictApproved: "APPROUVÉ",
    verdictReview: "À REVOIR",
    verdictCritical: "CRITIQUE",
    breakdownHeading: "Détail par point",
    resetButton: "Réinitialiser le questionnaire",
    privacyNote:
      "Note de confidentialité : cet outil n'effectue aucune requête vers des serveurs externes ni vers la blockchain. Le détecteur de réutilisation compare du texte brut localement.",
  },
  glossary: {
    kicker: "Référence",
    title: "Glossaire",
    subtitle:
      "Les termes techniques que tu vas croiser dans le guide et le Privacy Score, expliqués simplement.",
  },
  common: {
    offlineNotice: "Hors ligne — affichage de la version mise en cache",
    menu: "Menu",
    language: "Langue",
    skipToContent: "Aller au contenu",
    reportIssue: "Tu as trouvé un bug ? Signale-le sur GitHub",
  },
};

export const dictionaries: Record<Lang, Dict> = { es, en, pt, fr };
