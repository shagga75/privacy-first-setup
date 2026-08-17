import type { Lang } from "./dictionaries";

type GlossaryCopy = { term: string; definition: string };

export type GlossaryEntry = { id: string } & Record<Lang, GlossaryCopy>;

export const GLOSSARY: GlossaryEntry[] = [
  {
    id: "address",
    es: {
      term: "Dirección",
      definition:
        "El identificador público al que alguien te envía Bitcoin. Se deriva de tu wallet pero no revela tu identidad por sí sola — a menos que la reutilices o la vincules a tu nombre en otro lado.",
    },
    en: {
      term: "Address",
      definition:
        "The public identifier someone sends Bitcoin to. It's derived from your wallet but doesn't reveal your identity on its own — unless you reuse it or link it to your name elsewhere.",
    },
    pt: {
      term: "Endereço",
      definition:
        "O identificador público para o qual alguém te envia Bitcoin. É derivado da sua carteira, mas não revela sua identidade por si só — a menos que você o reutilize ou o vincule ao seu nome em outro lugar.",
    },
    fr: {
      term: "Adresse",
      definition:
        "L'identifiant public auquel quelqu'un t'envoie du Bitcoin. Elle est dérivée de ton wallet mais ne révèle pas ton identité en soi — sauf si tu la réutilises ou la relies à ton nom ailleurs.",
    },
  },
  {
    id: "utxo",
    es: {
      term: "UTXO",
      definition:
        "Unspent Transaction Output — un 'billete' individual de Bitcoin que tu wallet controla. Cada vez que recibís un pago se crea un UTXO nuevo; cada vez que gastás, tu wallet elige qué UTXO(s) usar.",
    },
    en: {
      term: "UTXO",
      definition:
        "Unspent Transaction Output — an individual Bitcoin 'note' your wallet controls. Every payment you receive creates a new UTXO; every time you spend, your wallet picks which UTXO(s) to use.",
    },
    pt: {
      term: "UTXO",
      definition:
        "Unspent Transaction Output — uma 'nota' individual de Bitcoin que sua carteira controla. Cada pagamento recebido cria um UTXO novo; cada vez que você gasta, sua carteira escolhe quais UTXOs usar.",
    },
    fr: {
      term: "UTXO",
      definition:
        "Unspent Transaction Output — un 'billet' individuel de Bitcoin que ton wallet contrôle. Chaque paiement reçu crée un nouvel UTXO ; chaque dépense implique que ton wallet choisisse quel(s) UTXO(s) utiliser.",
    },
  },
  {
    id: "seed",
    es: {
      term: "Seed / semilla",
      definition:
        "Las 12 o 24 palabras que generan toda tu wallet — todas las direcciones pasadas y futuras salen de ahí. Quien tenga tu seed tiene tus fondos.",
    },
    en: {
      term: "Seed",
      definition:
        "The 12 or 24 words that generate your entire wallet — every past and future address comes from it. Whoever has your seed has your funds.",
    },
    pt: {
      term: "Seed",
      definition:
        "As 12 ou 24 palavras que geram toda a sua carteira — todos os endereços passados e futuros vêm dali. Quem tiver sua seed tem seus fundos.",
    },
    fr: {
      term: "Seed / graine",
      definition:
        "Les 12 ou 24 mots qui génèrent tout ton wallet — chaque adresse passée et future en découle. Quiconque a ta seed a tes fonds.",
    },
  },
  {
    id: "hd-wallet",
    es: {
      term: "Wallet HD",
      definition:
        "Una wallet que deriva todas sus direcciones a partir de una sola seed, siguiendo un árbol predecible. Es lo que permite generar una dirección nueva por cada recibo sin tener que guardar cada clave por separado.",
    },
    en: {
      term: "HD wallet",
      definition:
        "A wallet that derives all its addresses from a single seed, following a predictable tree. It's what lets you generate a fresh address per receive without storing each key separately.",
    },
    pt: {
      term: "Carteira HD",
      definition:
        "Uma carteira que deriva todos os seus endereços a partir de uma única seed, seguindo uma árvore previsível. É o que permite gerar um endereço novo a cada recebimento sem precisar guardar cada chave separadamente.",
    },
    fr: {
      term: "Wallet HD",
      definition:
        "Un wallet qui dérive toutes ses adresses à partir d'une seule seed, en suivant un arbre prévisible. C'est ce qui permet de générer une nouvelle adresse à chaque réception sans avoir à stocker chaque clé séparément.",
    },
  },
  {
    id: "descriptor",
    es: {
      term: "Descriptor",
      definition:
        "Una receta que describe exactamente cómo tu wallet deriva direcciones a partir de la seed (qué tipo de dirección, qué ruta de derivación). Permite reconstruir o importar una wallet en otro software sin ambigüedad.",
    },
    en: {
      term: "Descriptor",
      definition:
        "A recipe that describes exactly how your wallet derives addresses from the seed (which address type, which derivation path). It lets you reconstruct or import a wallet in different software without ambiguity.",
    },
    pt: {
      term: "Descriptor",
      definition:
        "Uma receita que descreve exatamente como sua carteira deriva endereços a partir da seed (qual tipo de endereço, qual caminho de derivação). Permite reconstruir ou importar uma carteira em outro software sem ambiguidade.",
    },
    fr: {
      term: "Descriptor",
      definition:
        "Une recette qui décrit exactement comment ton wallet dérive les adresses à partir de la seed (quel type d'adresse, quel chemin de dérivation). Elle permet de reconstruire ou d'importer un wallet dans un autre logiciel sans ambiguïté.",
    },
  },
  {
    id: "xpub",
    es: {
      term: "xpub / zpub",
      definition:
        "Una clave pública extendida: permite generar y ver todas las direcciones de una wallet (y su saldo) sin poder gastar los fondos. Muy útil para wallets watch-only, pero filtrarla en público expone todo tu historial.",
    },
    en: {
      term: "xpub / zpub",
      definition:
        "An extended public key: lets you generate and view every address of a wallet (and its balance) without being able to spend the funds. Great for watch-only wallets, but leaking it publicly exposes your entire history.",
    },
    pt: {
      term: "xpub / zpub",
      definition:
        "Uma chave pública estendida: permite gerar e ver todos os endereços de uma carteira (e seu saldo) sem poder gastar os fundos. Muito útil para carteiras watch-only, mas vazá-la publicamente expõe todo o seu histórico.",
    },
    fr: {
      term: "xpub / zpub",
      definition:
        "Une clé publique étendue : permet de générer et voir toutes les adresses d'un wallet (et son solde) sans pouvoir dépenser les fonds. Très utile pour les wallets watch-only, mais la divulguer publiquement expose tout ton historique.",
    },
  },
  {
    id: "coin-control",
    es: {
      term: "Coin control",
      definition:
        "La opción de elegir manualmente qué UTXOs específicos gastar en una transacción, en vez de dejar que la wallet los combine automáticamente.",
    },
    en: {
      term: "Coin control",
      definition:
        "The option to manually choose which specific UTXOs to spend in a transaction, instead of letting the wallet auto-combine them.",
    },
    pt: {
      term: "Coin control",
      definition:
        "A opção de escolher manualmente quais UTXOs específicos gastar em uma transação, em vez de deixar a carteira combiná-los automaticamente.",
    },
    fr: {
      term: "Coin control",
      definition:
        "L'option de choisir manuellement quels UTXOs précis dépenser dans une transaction, plutôt que de laisser le wallet les combiner automatiquement.",
    },
  },
  {
    id: "label",
    es: {
      term: "Label",
      definition:
        "Una etiqueta de texto libre que le ponés a una dirección o UTXO para recordar su origen o destino, sin depender de la memoria ni de patrones visibles en la blockchain.",
    },
    en: {
      term: "Label",
      definition:
        "A free-text tag you attach to an address or UTXO to remember its origin or destination, without relying on memory or patterns visible on the blockchain.",
    },
    pt: {
      term: "Label",
      definition:
        "Uma etiqueta de texto livre que você coloca em um endereço ou UTXO para lembrar sua origem ou destino, sem depender da memória nem de padrões visíveis na blockchain.",
    },
    fr: {
      term: "Label",
      definition:
        "Une étiquette de texte libre que tu attaches à une adresse ou un UTXO pour te souvenir de son origine ou sa destination, sans dépendre de ta mémoire ni de motifs visibles sur la blockchain.",
    },
  },
  {
    id: "psbt",
    es: {
      term: "PSBT",
      definition:
        "Partially Signed Bitcoin Transaction — un formato estándar para transacciones sin firmar (o firmadas parcialmente) que se puede pasar entre dispositivos, por ejemplo de tu wallet de software a un hardware wallet offline, sin exponer tu seed.",
    },
    en: {
      term: "PSBT",
      definition:
        "Partially Signed Bitcoin Transaction — a standard format for unsigned (or partially signed) transactions that can be passed between devices, for example from your software wallet to an offline hardware wallet, without exposing your seed.",
    },
    pt: {
      term: "PSBT",
      definition:
        "Partially Signed Bitcoin Transaction — um formato padrão para transações não assinadas (ou parcialmente assinadas) que pode ser passado entre dispositivos, por exemplo da sua carteira de software para uma hardware wallet offline, sem expor sua seed.",
    },
    fr: {
      term: "PSBT",
      definition:
        "Partially Signed Bitcoin Transaction — un format standard pour les transactions non signées (ou partiellement signées) qui peut être transmis entre appareils, par exemple de ton wallet logiciel vers un hardware wallet hors ligne, sans exposer ta seed.",
    },
  },
  {
    id: "watch-only",
    es: {
      term: "Watch-only",
      definition:
        "Una wallet configurada solo con el xpub (sin la seed), que puede ver saldos y direcciones pero nunca firmar ni gastar. Útil para monitorear fondos desde un dispositivo menos seguro.",
    },
    en: {
      term: "Watch-only",
      definition:
        "A wallet set up with only the xpub (no seed), which can see balances and addresses but never sign or spend. Useful for monitoring funds from a less secure device.",
    },
    pt: {
      term: "Watch-only",
      definition:
        "Uma carteira configurada apenas com o xpub (sem a seed), que consegue ver saldos e endereços mas nunca assinar nem gastar. Útil para monitorar fundos a partir de um dispositivo menos seguro.",
    },
    fr: {
      term: "Watch-only",
      definition:
        "Un wallet configuré uniquement avec le xpub (sans la seed), capable de voir les soldes et adresses mais jamais de signer ni dépenser. Utile pour surveiller des fonds depuis un appareil moins sécurisé.",
    },
  },
  {
    id: "own-node",
    es: {
      term: "Nodo propio / Electrum",
      definition:
        "Un nodo es tu propia copia validada de la blockchain; consultarlo en vez de un servidor de terceros evita que ese servidor vincule tus direcciones con tu IP. Electrum Personal Server hace algo similar sin correr un nodo completo.",
    },
    en: {
      term: "Own node / Electrum",
      definition:
        "A node is your own validated copy of the blockchain; querying it instead of a third-party server stops that server from linking your addresses to your IP. Electrum Personal Server does something similar without running a full node.",
    },
    pt: {
      term: "Node próprio / Electrum",
      definition:
        "Um node é sua própria cópia validada da blockchain; consultá-lo em vez de um servidor de terceiros evita que esse servidor vincule seus endereços ao seu IP. O Electrum Personal Server faz algo parecido sem rodar um node completo.",
    },
    fr: {
      term: "Nœud personnel / Electrum",
      definition:
        "Un nœud est ta propre copie validée de la blockchain ; l'interroger plutôt qu'un serveur tiers empêche ce serveur de relier tes adresses à ton IP. Electrum Personal Server fait quelque chose de similaire sans faire tourner un nœud complet.",
    },
  },
  {
    id: "tor",
    es: {
      term: "Tor",
      definition:
        "Una red que enruta tu tráfico de internet a través de varios saltos cifrados para ocultar tu IP de origen. Muchas wallets lo integran para sincronizar sin revelar desde dónde te conectás.",
    },
    en: {
      term: "Tor",
      definition:
        "A network that routes your internet traffic through several encrypted hops to hide your originating IP. Many wallets integrate it to sync without revealing where you're connecting from.",
    },
    pt: {
      term: "Tor",
      definition:
        "Uma rede que roteia seu tráfego de internet por vários saltos criptografados para ocultar seu IP de origem. Muitas carteiras a integram para sincronizar sem revelar de onde você está se conectando.",
    },
    fr: {
      term: "Tor",
      definition:
        "Un réseau qui achemine ton trafic internet à travers plusieurs sauts chiffrés pour cacher ton IP d'origine. Beaucoup de wallets l'intègrent pour se synchroniser sans révéler d'où tu te connectes.",
    },
  },
  {
    id: "payjoin",
    es: {
      term: "Payjoin",
      definition:
        "Una transacción (BIP-78) en la que el pagador y el receptor aportan cada uno al menos un UTXO, rompiendo la suposición común de que todos los inputs de una transacción pertenecen a la misma persona.",
    },
    en: {
      term: "Payjoin",
      definition:
        "A transaction (BIP-78) where both payer and payee each contribute at least one UTXO, breaking the common assumption that every input in a transaction belongs to the same person.",
    },
    pt: {
      term: "Payjoin",
      definition:
        "Uma transação (BIP-78) na qual pagador e recebedor contribuem cada um com pelo menos um UTXO, quebrando a suposição comum de que todos os inputs de uma transação pertencem à mesma pessoa.",
    },
    fr: {
      term: "Payjoin",
      definition:
        "Une transaction (BIP-78) où le payeur et le destinataire apportent chacun au moins un UTXO, cassant l'hypothèse courante selon laquelle tous les inputs d'une transaction appartiennent à la même personne.",
    },
  },
  {
    id: "silent-payments",
    es: {
      term: "Silent Payments",
      definition:
        "Un estándar (BIP-352) que permite publicar una sola dirección pública fija, pero que cada pago que recibís por ahí aterriza en una dirección on-chain distinta y no vinculable, derivada automáticamente.",
    },
    en: {
      term: "Silent Payments",
      definition:
        "A standard (BIP-352) that lets you publish a single fixed public address, but every payment you receive through it lands on a distinct, unlinkable on-chain address, derived automatically.",
    },
    pt: {
      term: "Silent Payments",
      definition:
        "Um padrão (BIP-352) que permite publicar um único endereço público fixo, mas cada pagamento recebido por ali cai em um endereço on-chain distinto e não vinculável, derivado automaticamente.",
    },
    fr: {
      term: "Silent Payments",
      definition:
        "Une norme (BIP-352) qui permet de publier une seule adresse publique fixe, mais chaque paiement reçu par ce biais atterrit sur une adresse on-chain distincte et non reliable, dérivée automatiquement.",
    },
  },
  {
    id: "coinjoin",
    es: {
      term: "CoinJoin",
      definition:
        "Una transacción coordinada entre varios participantes que mezcla sus UTXOs, dificultando que un observador determine quién pagó a quién.",
    },
    en: {
      term: "CoinJoin",
      definition:
        "A coordinated transaction between multiple participants that mixes their UTXOs, making it harder for an observer to determine who paid whom.",
    },
    pt: {
      term: "CoinJoin",
      definition:
        "Uma transação coordenada entre vários participantes que mistura seus UTXOs, dificultando que um observador determine quem pagou a quem.",
    },
    fr: {
      term: "CoinJoin",
      definition:
        "Une transaction coordonnée entre plusieurs participants qui mélange leurs UTXOs, rendant plus difficile pour un observateur de déterminer qui a payé qui.",
    },
  },
  {
    id: "passphrase",
    es: {
      term: "Passphrase (wallet oculta)",
      definition:
        "Una palabra o frase adicional a tu seed de 12/24 palabras (BIP-39) que deriva una wallet completamente distinta. Sin ella, tu seed sola abre una wallet 'señuelo' vacía o con fondos menores.",
    },
    en: {
      term: "Passphrase (hidden wallet)",
      definition:
        "A word or phrase added to your 12/24-word seed (BIP-39) that derives a completely different wallet. Without it, your seed alone opens an empty or lower-value 'decoy' wallet.",
    },
    pt: {
      term: "Passphrase (carteira oculta)",
      definition:
        "Uma palavra ou frase adicional à sua seed de 12/24 palavras (BIP-39) que deriva uma carteira completamente diferente. Sem ela, sua seed sozinha abre uma carteira 'isca' vazia ou com fundos menores.",
    },
    fr: {
      term: "Passphrase (wallet caché)",
      definition:
        "Un mot ou une phrase ajoutée à ta seed de 12/24 mots (BIP-39) qui dérive un wallet complètement différent. Sans elle, ta seed seule ouvre un wallet 'leurre' vide ou avec des fonds moindres.",
    },
  },
  {
    id: "kyc",
    es: {
      term: "KYC",
      definition:
        "Know Your Customer — la verificación de identidad que piden los exchanges regulados. Los fondos que pasaron por un exchange KYC quedan vinculados a tu identidad legal en sus registros, incluso después de retirarlos a tu propia wallet.",
    },
    en: {
      term: "KYC",
      definition:
        "Know Your Customer — the identity verification regulated exchanges require. Funds that passed through a KYC exchange stay linked to your legal identity in their records, even after you withdraw them to your own wallet.",
    },
    pt: {
      term: "KYC",
      definition:
        "Know Your Customer — a verificação de identidade exigida por exchanges regulamentadas. Fundos que passaram por uma exchange KYC ficam vinculados à sua identidade legal nos registros dela, mesmo depois de você sacá-los para sua própria carteira.",
    },
    fr: {
      term: "KYC",
      definition:
        "Know Your Customer — la vérification d'identité exigée par les exchanges régulés. Les fonds passés par un exchange KYC restent liés à ton identité légale dans leurs registres, même après que tu les as retirés vers ton propre wallet.",
    },
  },
];
