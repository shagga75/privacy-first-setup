import type { Lang } from "./dictionaries";

export type Level = "beginner" | "intermediate";
export type UseCase = "savings" | "daily" | "donations";
export type Category = "setup" | "habit" | "advanced";

type PrincipleCopy = { title: string; body: string; question: string };

export type Principle = {
  id: string;
  category: Category;
  /** Peso relativo dentro del Privacy Score (1-3). */
  weight: 1 | 2 | 3;
  levels: Level[];
  useCases: UseCase[];
} & Record<Lang, PrincipleCopy>;

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
    pt: {
      title: "Use uma carteira HD baseada em descriptors",
      body: "Escolha um software livre e auditável (Sparrow, BlueWallet, Electrum) que gere um endereço novo a cada recebimento a partir da mesma seed, em vez de reutilizar um endereço fixo.",
      question: "Sua carteira gera um endereço novo automaticamente a cada recebimento?",
    },
    fr: {
      title: "Utilise un wallet HD basé sur des descriptors",
      body: "Choisis un logiciel libre et auditable (Sparrow, BlueWallet, Electrum) qui dérive une nouvelle adresse à chaque réception à partir d'une même seed, plutôt que de réutiliser une adresse fixe.",
      question: "Ton wallet génère-t-il automatiquement une nouvelle adresse à chaque réception ?",
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
    pt: {
      title: "Ative o coin control",
      body: "Escolha manualmente quais UTXOs gastar em vez de deixar a carteira combiná-los automaticamente. Combinar UTXOs de origens diferentes dá a um observador a certeza de que pertencem à mesma pessoa.",
      question: "Você escolhe manualmente quais UTXOs gastar (coin control ativo)?",
    },
    fr: {
      title: "Active le coin control",
      body: "Choisis manuellement quels UTXOs dépenser plutôt que de laisser le wallet les combiner automatiquement. Combiner des UTXOs d'origines différentes offre à un observateur la certitude qu'ils appartiennent à la même personne.",
      question: "Choisis-tu manuellement quels UTXOs dépenser (coin control actif) ?",
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
    pt: {
      title: "Rotule cada endereço e cada UTXO",
      body: "Um label ('poupança de longo prazo', 'pagamento fornecedor X', 'doação campanha Y') permite lembrar a origem e o destino de cada fundo sem depender da memória nem reutilizar endereços para 'reconhecê-los'.",
      question: "Você coloca um label em cada endereço/UTXO novo?",
    },
    fr: {
      title: "Étiquette chaque adresse et chaque UTXO",
      body: "Un label ('épargne long terme', 'paiement fournisseur X', 'don campagne Y') te permet de retenir l'origine et la destination de chaque fonds sans dépendre de ta mémoire ni réutiliser des adresses pour les 'reconnaître'.",
      question: "Mets-tu un label sur chaque nouvelle adresse/UTXO ?",
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
    pt: {
      title: "Nunca reutilize um endereço",
      body: "Cada endereço reutilizado diz a qualquer pessoa que observa a blockchain que esses pagamentos vão para a mesma carteira, arruinando de uma só vez tudo o mais que você fez pela privacidade.",
      question: "Você nunca reutiliza o mesmo endereço para receber mais de um pagamento?",
    },
    fr: {
      title: "Ne réutilise jamais une adresse",
      body: "Chaque adresse réutilisée indique à quiconque observe la blockchain que ces paiements arrivent dans le même wallet, annulant d'un coup tout le reste de tes efforts de confidentialité.",
      question: "Ne réutilises-tu jamais la même adresse pour recevoir plus d'un paiement ?",
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
    pt: {
      title: "Verifique qual output é o troco",
      body: "Antes de assinar, confirme na sua carteira ou hardware wallet qual dos outputs volta para você. Um troco mal identificado pode vazar quanto você tinha originalmente.",
      question: "Você confere qual output é o troco antes de assinar cada transação?",
    },
    fr: {
      title: "Vérifie quel output est la monnaie",
      body: "Avant de signer, confirme dans ton wallet ou ton hardware wallet lequel des outputs te revient. Une monnaie mal identifiée peut révéler ton solde d'origine.",
      question: "Vérifies-tu quel output est la monnaie avant de signer chaque transaction ?",
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
    pt: {
      title: "Conecte sua carteira ao seu próprio node (ou Electrum via Tor)",
      body: "Se você consulta saldos por um servidor de terceiros sem proteção, esse servidor pode vincular seus endereços ao seu IP. Rodar seu próprio node (ou Electrum Personal Server) elimina esse ponto de vazamento.",
      question: "Sua carteira consulta um node próprio ou um servidor Electrum via Tor?",
    },
    fr: {
      title: "Connecte ton wallet à ton propre nœud (ou Electrum via Tor)",
      body: "Si tu consultes tes soldes via un serveur tiers non protégé, ce serveur peut relier tes adresses à ton IP. Faire tourner ton propre nœud (ou un Electrum Personal Server) élimine cette fuite.",
      question: "Ton wallet interroge-t-il ton propre nœud ou un serveur Electrum via Tor ?",
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
    pt: {
      title: "Navegue e sincronize via Tor",
      body: "Muitas carteiras (Sparrow, BlueWallet, Wasabi) têm um interruptor de Tor integrado. Ativá-lo evita que seu provedor de internet ou o servidor consultado veja quais endereços são seus.",
      question: "Você usa Tor para sincronizar sua carteira?",
    },
    fr: {
      title: "Navigue et synchronise via Tor",
      body: "Beaucoup de wallets (Sparrow, BlueWallet, Wasabi) intègrent un interrupteur Tor. L'activer empêche ton fournisseur internet ou le serveur consulté de voir quelles adresses t'appartiennent.",
      question: "Synchronises-tu ton wallet via Tor ?",
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
    pt: {
      title: "Prefira Payjoin quando disponível",
      body: "O Payjoin (BIP-78) faz com que pagador e recebedor contribuam com UTXOs na mesma transação, quebrando a heurística mais comum de análise de blockchain. Carteiras como BTCPay Server, Sparrow e JoinMarket dão suporte.",
      question: "Você usa ou oferece Payjoin às suas contrapartes quando a carteira dá suporte?",
    },
    fr: {
      title: "Privilégie Payjoin quand c'est disponible",
      body: "Payjoin (BIP-78) fait en sorte que le payeur et le destinataire apportent tous deux des UTXOs à la même transaction, cassant l'heuristique la plus courante d'analyse de blockchain. BTCPay Server, Sparrow et JoinMarket le prennent en charge.",
      question: "Utilises-tu ou proposes-tu Payjoin à tes contreparties quand ton wallet le prend en charge ?",
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
    pt: {
      title: "Considere Silent Payments (BIP-352) para endereços públicos",
      body: "Se você publica um endereço de doação permanente, uma carteira com suporte a Silent Payments deriva um endereço on-chain distinto para cada pagamento sem que você precise trocá-lo manualmente. A adoção ainda é recente: confira as notas de versão da sua carteira.",
      question: "Sua carteira dá suporte a Silent Payments para o seu endereço público?",
    },
    fr: {
      title: "Envisage les Silent Payments (BIP-352) pour les adresses publiques",
      body: "Si tu publies une adresse de don permanente, un wallet compatible Silent Payments dérive une adresse on-chain distincte pour chaque paiement sans que tu aies à la changer manuellement. L'adoption est encore récente : vérifie les notes de version de ton wallet.",
      question: "Ton wallet prend-il en charge les Silent Payments pour ton adresse publique ?",
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
    pt: {
      title: "Nunca compartilhe seu xpub publicamente",
      body: "Um xpub vazado permite reconstruir todos os endereços passados e futuros dessa carteira. Compartilhe apenas com software watch-only em que você confia, nunca em fóruns, tickets de suporte ou redes sociais.",
      question: "Você nunca publicou nem compartilhou seu xpub/zpub fora de uma configuração watch-only confiável?",
    },
    fr: {
      title: "Ne partage jamais ton xpub publiquement",
      body: "Un xpub divulgué permet de reconstruire toutes les adresses passées et futures de ce wallet. Partage-le uniquement avec un logiciel watch-only de confiance, jamais sur des forums, tickets de support ou réseaux sociaux.",
      question: "N'as-tu jamais publié ni partagé ton xpub/zpub en dehors d'une configuration watch-only de confiance ?",
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
    pt: {
      title: "Use uma passphrase (carteira oculta) para poupança de longo prazo",
      body: "Uma passphrase BIP-39 adicional cria uma carteira completamente diferente a partir da mesma seed. É tanto proteção contra coação quanto uma forma de separar sua poupança grande da carteira de uso diário.",
      question: "Sua carteira de poupança usa uma passphrase adicional (carteira oculta)?",
    },
    fr: {
      title: "Utilise une passphrase (wallet caché) pour l'épargne long terme",
      body: "Une passphrase BIP-39 supplémentaire crée un wallet complètement différent à partir de la même seed. C'est à la fois une protection contre la contrainte et un moyen de séparer ta grosse épargne de ton wallet du quotidien.",
      question: "Ton wallet d'épargne utilise-t-il une passphrase supplémentaire (wallet caché) ?",
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
    pt: {
      title: "Separe sua carteira de poupança da carteira de gastos",
      body: "Usar seeds diferentes para 'guardar' e para 'gastar' evita que uma análise dos seus pagamentos cotidianos revele o tamanho da sua poupança.",
      question: "Você usa uma seed diferente para poupança e para gasto diário?",
    },
    fr: {
      title: "Sépare ton wallet d'épargne de ton wallet de dépenses",
      body: "Utiliser des seeds différentes pour 'conserver' et pour 'dépenser' empêche qu'une analyse de tes paiements quotidiens révèle la taille de ton épargne.",
      question: "Utilises-tu une seed différente pour l'épargne et pour les dépenses quotidiennes ?",
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
    pt: {
      title: "Verifique o endereço de recebimento no dispositivo",
      body: "Se você usa hardware wallet, sempre confirme o endereço na tela dele antes de compartilhá-lo. Isso é segurança, mas também evita que malware faça você publicar um endereço que não é seu.",
      question: "Você verifica o endereço de recebimento diretamente na sua hardware wallet?",
    },
    fr: {
      title: "Vérifie l'adresse de réception sur l'appareil",
      body: "Si tu utilises un hardware wallet, confirme toujours l'adresse sur son écran avant de la partager. C'est une question de sécurité, mais cela évite aussi qu'un malware te fasse publier une adresse qui n'est pas la tienne.",
      question: "Vérifies-tu l'adresse de réception directement sur ton hardware wallet ?",
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
    pt: {
      title: "Considere um CoinJoin para UTXOs com histórico exposto",
      body: "Se você recebeu fundos de uma exchange KYC ou outra fonte que compromete sua privacidade, um CoinJoin coordenado (por exemplo via JoinMarket) mistura seus UTXOs com os de outros participantes antes de você gastá-los novamente.",
      question: "Você considera ou usa CoinJoin para UTXOs vindos de uma exchange ou origem identificável?",
    },
    fr: {
      title: "Envisage un CoinJoin pour les UTXOs à l'historique exposé",
      body: "Si tu as reçu des fonds d'un exchange KYC ou d'une autre source qui compromet ta confidentialité, un CoinJoin coordonné (par exemple via JoinMarket) mélange tes UTXOs avec ceux d'autres participants avant que tu ne les dépenses à nouveau.",
      question: "Envisages-tu ou utilises-tu CoinJoin pour des UTXOs provenant d'un exchange ou d'une origine identifiable ?",
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
    pt: {
      title: "Cuidado com o batching de pagamentos a destinatários diferentes",
      body: "Agrupar vários pagamentos em uma transação economiza taxas, mas mostra a um observador que todos esses destinatários receberam fundos da mesma fonte ao mesmo tempo. Avalie se a economia vale esse custo de privacidade.",
      question: "Você evita agrupar (batch) pagamentos a destinatários diferentes que não deveriam parecer vinculados?",
    },
    fr: {
      title: "Attention au batching de paiements vers différents destinataires",
      body: "Regrouper plusieurs paiements dans une seule transaction économise des frais, mais montre à un observateur que tous ces destinataires ont été financés par la même source au même moment. Évalue si l'économie vaut ce coût en confidentialité.",
      question: "Évites-tu de regrouper (batch) des paiements vers des destinataires différents qui ne devraient pas sembler liés ?",
    },
  },
];

export function principlesFor(level: Level, useCase: UseCase): Principle[] {
  return PRINCIPLES.filter(
    (p) => p.levels.includes(level) && p.useCases.includes(useCase),
  );
}
