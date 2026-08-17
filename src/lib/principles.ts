export type Level = "beginner" | "intermediate";
export type UseCase = "savings" | "daily" | "donations";
export type Category = "setup" | "habit" | "advanced";

export type Principle = {
  id: string;
  category: Category;
  /** Peso relativo dentro del Privacy Score (1-3). */
  weight: 1 | 2 | 3;
  levels: Level[];
  useCases: UseCase[];
  es: { title: string; body: string; question: string };
  en: { title: string; body: string; question: string };
};

export const PRINCIPLES: Principle[] = [
  {
    id: "hd-descriptors",
    category: "setup",
    weight: 2,
    levels: ["beginner", "intermediate"],
    useCases: ["savings", "daily", "donations"],
    es: {
      title: "Usá una wallet HD basada en descriptors",
      body: "Elegí software libre y auditable (Sparrow, BlueWallet, Electrum) que genere una dirección nueva por cada recibo a partir de un mismo seed, en vez de reutilizar una dirección fija.",
      question: "¿Tu wallet genera una dirección nueva automáticamente en cada recibo?",
    },
    en: {
      title: "Use an HD wallet built on descriptors",
      body: "Choose free, auditable software (Sparrow, BlueWallet, Electrum) that derives a fresh address per receive from one seed, instead of a fixed address.",
      question: "Does your wallet generate a new address automatically for every receive?",
    },
  },
  {
    id: "coin-control",
    category: "setup",
    weight: 3,
    levels: ["beginner", "intermediate"],
    useCases: ["savings", "daily", "donations"],
    es: {
      title: "Activá coin control",
      body: "Elegí manualmente qué UTXOs gastar en vez de dejar que la wallet los combine automáticamente. Combinar UTXOs de orígenes distintos le regala a un observador la certeza de que son de la misma persona.",
      question: "¿Elegís manualmente qué UTXOs gastar (coin control activo)?",
    },
    en: {
      title: "Turn coin control on",
      body: "Manually choose which UTXOs to spend instead of letting the wallet auto-combine them. Combining UTXOs from different sources hands an observer proof they belong to the same person.",
      question: "Do you manually pick which UTXOs to spend (coin control enabled)?",
    },
  },
  {
    id: "labels",
    category: "habit",
    weight: 2,
    levels: ["beginner", "intermediate"],
    useCases: ["savings", "daily", "donations"],
    es: {
      title: "Etiquetá cada dirección y cada UTXO",
      body: "Un label ('ahorro largo plazo', 'pago proveedor X', 'donación campaña Y') te deja recordar el origen y destino de cada fondo sin depender de la memoria ni de reutilizar direcciones para 'reconocerlas'.",
      question: "¿Le ponés un label a cada dirección/UTXO nuevo?",
    },
    en: {
      title: "Label every address and UTXO",
      body: "A label ('long-term savings', 'vendor X payment', 'campaign Y donation') lets you track origin and destination without relying on memory or reusing addresses to 'recognize' them.",
      question: "Do you label every new address/UTXO?",
    },
  },
  {
    id: "no-reuse",
    category: "habit",
    weight: 3,
    levels: ["beginner", "intermediate"],
    useCases: ["savings", "daily", "donations"],
    es: {
      title: "Nunca reutilices una dirección",
      body: "Cada dirección reutilizada le dice a cualquiera que mire la blockchain que esos pagos van a la misma billetera, arruinando de un solo golpe todo lo demás que hayas hecho por privacidad.",
      question: "¿Nunca reutilizás la misma dirección para recibir más de un pago?",
    },
    en: {
      title: "Never reuse an address",
      body: "Every reused address tells anyone watching the chain that those payments land in the same wallet, undoing every other privacy step in one move.",
      question: "Do you never reuse the same address for more than one payment?",
    },
  },
  {
    id: "verify-change",
    category: "habit",
    weight: 2,
    levels: ["intermediate"],
    useCases: ["savings", "daily", "donations"],
    es: {
      title: "Verificá cuál output es el cambio",
      body: "Antes de firmar, confirmá en tu wallet o hardware wallet cuál de los outputs vuelve a vos. Un cambio mal identificado puede filtrar cuánto tenías originalmente.",
      question: "¿Revisás cuál output es el cambio antes de firmar cada transacción?",
    },
    en: {
      title: "Verify which output is the change",
      body: "Before signing, confirm in your wallet or hardware device which output returns to you. A misidentified change output can leak your original balance.",
      question: "Do you check which output is change before signing each transaction?",
    },
  },
  {
    id: "own-node",
    category: "advanced",
    weight: 2,
    levels: ["intermediate"],
    useCases: ["savings", "daily", "donations"],
    es: {
      title: "Conectá tu wallet a tu propio nodo (o Electrum vía Tor)",
      body: "Si consultás saldos a través de un servidor de terceros sin protección, ese servidor puede vincular tus direcciones con tu IP. Correr tu propio nodo (o Electrum Personal Server) elimina ese punto de fuga.",
      question: "¿Tu wallet consulta un nodo propio o un servidor Electrum a través de Tor?",
    },
    en: {
      title: "Connect your wallet to your own node (or Electrum over Tor)",
      body: "Querying balances through an unprotected third-party server can link your addresses to your IP. Running your own node (or an Electrum Personal Server) closes that leak.",
      question: "Does your wallet query your own node or an Electrum server over Tor?",
    },
  },
  {
    id: "tor",
    category: "setup",
    weight: 1,
    levels: ["beginner", "intermediate"],
    useCases: ["savings", "daily", "donations"],
    es: {
      title: "Navegá y sincronizá a través de Tor",
      body: "Muchas wallets (Sparrow, BlueWallet, Wasabi) tienen un interruptor de Tor integrado. Activarlo evita que tu proveedor de internet o el servidor que consultás vea qué direcciones son tuyas.",
      question: "¿Usás Tor para sincronizar tu wallet?",
    },
    en: {
      title: "Sync and browse over Tor",
      body: "Many wallets (Sparrow, BlueWallet, Wasabi) ship a built-in Tor toggle. Enabling it stops your ISP or the server you query from seeing which addresses are yours.",
      question: "Do you sync your wallet over Tor?",
    },
  },
  {
    id: "payjoin",
    category: "advanced",
    weight: 1,
    levels: ["beginner", "intermediate"],
    useCases: ["daily", "donations"],
    es: {
      title: "Preferí Payjoin cuando esté disponible",
      body: "Payjoin (BIP-78) hace que el pagador y el receptor aporten UTXOs a la misma transacción, rompiendo la heurística más común de análisis de blockchain. Wallets como BTCPay Server, Sparrow y JoinMarket lo soportan.",
      question: "¿Usás o le ofrecés Payjoin a tus contrapartes cuando la wallet lo soporta?",
    },
    en: {
      title: "Prefer Payjoin where available",
      body: "Payjoin (BIP-78) has both payer and payee contribute inputs to the same transaction, breaking the most common chain-analysis heuristic. BTCPay Server, Sparrow, and JoinMarket support it.",
      question: "Do you use or offer Payjoin to counterparties when your wallet supports it?",
    },
  },
  {
    id: "silent-payments",
    category: "advanced",
    weight: 1,
    levels: ["intermediate"],
    useCases: ["donations", "daily"],
    es: {
      title: "Considerá Silent Payments (BIP-352) para direcciones públicas",
      body: "Si publicás una dirección de donación de forma permanente, una wallet con soporte de Silent Payments deriva una dirección on-chain distinta para cada pago sin que vos tengas que rotarla manualmente. La adopción todavía es reciente: revisá las notas de tu wallet.",
      question: "¿Tu wallet soporta Silent Payments para tu dirección pública?",
    },
    en: {
      title: "Consider Silent Payments (BIP-352) for public addresses",
      body: "If you publish a standing donation address, a Silent-Payments-aware wallet derives a distinct on-chain address per payment without manual rotation. Adoption is still emerging — check your wallet's release notes.",
      question: "Does your wallet support Silent Payments for your public address?",
    },
  },
  {
    id: "no-public-xpub",
    category: "habit",
    weight: 3,
    levels: ["beginner", "intermediate"],
    useCases: ["savings", "daily", "donations"],
    es: {
      title: "Nunca compartas tu xpub públicamente",
      body: "Un xpub filtrado permite reconstruir todas las direcciones pasadas y futuras de esa wallet. Compartilo solo con software de watch-only en el que confiés, nunca en foros, tickets de soporte o redes sociales.",
      question: "¿Nunca publicaste ni compartiste tu xpub/zpub fuera de una wallet watch-only de confianza?",
    },
    en: {
      title: "Never share your xpub publicly",
      body: "A leaked xpub lets anyone reconstruct every past and future address of that wallet. Share it only with watch-only software you trust — never in forums, support tickets, or social media.",
      question: "Have you never posted or shared your xpub/zpub outside a trusted watch-only setup?",
    },
  },
  {
    id: "passphrase",
    category: "advanced",
    weight: 2,
    levels: ["intermediate"],
    useCases: ["savings"],
    es: {
      title: "Usá una passphrase (wallet oculta) para ahorro de largo plazo",
      body: "Una passphrase BIP-39 adicional crea una wallet completamente distinta a partir del mismo seed. Es tanto protección contra coacción como una forma de separar tu ahorro grande de tu wallet de uso diario.",
      question: "¿Tu wallet de ahorro usa una passphrase adicional (wallet oculta)?",
    },
    en: {
      title: "Use a passphrase (hidden wallet) for long-term savings",
      body: "An extra BIP-39 passphrase derives a completely different wallet from the same seed. It's both duress protection and a way to separate large savings from your daily wallet.",
      question: "Does your savings wallet use an additional passphrase (hidden wallet)?",
    },
  },
  {
    id: "separate-wallets",
    category: "setup",
    weight: 2,
    levels: ["beginner", "intermediate"],
    useCases: ["savings"],
    es: {
      title: "Separá tu wallet de ahorro de tu wallet de gasto",
      body: "Usar seeds distintos para 'guardar' y para 'gastar' evita que un análisis de tus pagos cotidianos revele el tamaño de tus ahorros.",
      question: "¿Usás un seed distinto para ahorro que para gasto diario?",
    },
    en: {
      title: "Keep your savings wallet separate from your spending wallet",
      body: "Using different seeds for 'holding' and 'spending' stops an analysis of your daily payments from revealing the size of your savings.",
      question: "Do you use a different seed for savings than for daily spending?",
    },
  },
  {
    id: "verify-receive",
    category: "habit",
    weight: 1,
    levels: ["beginner", "intermediate"],
    useCases: ["savings", "daily", "donations"],
    es: {
      title: "Verificá la dirección de recibo en el dispositivo",
      body: "Si usás hardware wallet, confirmá siempre la dirección en su pantalla antes de compartirla. Esto es seguridad, pero también evita que malware te haga publicar una dirección que no es la tuya.",
      question: "¿Verificás la dirección de recibo directamente en tu hardware wallet?",
    },
    en: {
      title: "Verify the receive address on-device",
      body: "If you use a hardware wallet, always confirm the address on its screen before sharing it. This is security, but it also stops malware from getting you to publish an address that isn't yours.",
      question: "Do you verify the receive address directly on your hardware wallet?",
    },
  },
  {
    id: "coinjoin",
    category: "advanced",
    weight: 1,
    levels: ["intermediate"],
    useCases: ["savings", "daily"],
    es: {
      title: "Considerá un CoinJoin para UTXOs con historial expuesto",
      body: "Si recibiste fondos de un exchange KYC u otra fuente que rompe tu privacidad, un CoinJoin coordinado (por ejemplo vía JoinMarket) mezcla tus UTXOs con los de otros participantes antes de volver a gastarlos.",
      question: "¿Considerás o usás CoinJoin para UTXOs que vienen de un exchange u origen identificable?",
    },
    en: {
      title: "Consider a CoinJoin for UTXOs with exposed history",
      body: "If you received funds from a KYC exchange or another privacy-breaking source, a coordinated CoinJoin (e.g. via JoinMarket) mixes your UTXOs with other participants' before you spend them again.",
      question: "Do you consider or use CoinJoin for UTXOs coming from an exchange or identifiable source?",
    },
  },
  {
    id: "batching",
    category: "habit",
    weight: 1,
    levels: ["intermediate"],
    useCases: ["daily", "donations"],
    es: {
      title: "Cuidado con el batching de pagos a distintos destinatarios",
      body: "Agrupar varios pagos en una transacción ahorra fees, pero le muestra a un observador que todos esos destinatarios recibieron fondos de la misma fuente al mismo tiempo. Evaluá si el ahorro vale ese costo de privacidad.",
      question: "¿Evitás agrupar (batch) pagos a destinatarios distintos que no deberían verse vinculados?",
    },
    en: {
      title: "Watch out for batching payments to different payees",
      body: "Batching several payments into one transaction saves fees, but shows an observer that all those payees were funded by the same source at the same time. Weigh the savings against that privacy cost.",
      question: "Do you avoid batching payments to different payees who shouldn't appear linked?",
    },
  },
];

export function principlesFor(level: Level, useCase: UseCase): Principle[] {
  return PRINCIPLES.filter(
    (p) => p.levels.includes(level) && p.useCases.includes(useCase),
  );
}
