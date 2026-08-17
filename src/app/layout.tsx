import type { Metadata, Viewport } from "next";
import { Special_Elite, IBM_Plex_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { OfflineBanner } from "@/components/OfflineBanner";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const title = "Privacy First Setup — Manual de campo para tu privacidad Bitcoin";
const description =
  "Guía interactiva open-source para configurar una wallet Bitcoin con buenas prácticas de privacidad desde el día uno: coin control, labels, Silent Payments y Payjoin.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Privacy Setup",
  },
  openGraph: {
    title,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#1e1b16",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${specialElite.variable} ${plexMono.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LangProvider>
          {children}
          <OfflineBanner />
        </LangProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
