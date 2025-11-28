import type { Metadata } from "next";
import { Bellota_Text } from "next/font/google";
import "./globals.css";

const bellotaText = Bellota_Text({
  weight: ["400", "700"],
  variable: "--font-bellota-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Buněčné kvantové léčení (CRQH) Brno | Renata Sasová | Kvantová terapie",
    template: "%s | Renata Sasová - Kvantová terapie Brno"
  },
  icons: {
    icon: "/favicon.png",
  },
  description: "Buněčné kvantové léčení (CRQH) v Brně s Renatou Sasovou. Moderní terapeutická metoda pro obnovu rovnováhy těla, mysli a duše. Pomáháme s neplodností, úzkostmi, depresemi, psychosomatickými obtížemi a dalšími bloky. Ošetření v Brně - Královo Pole.",
  keywords: [
    "kvantové léčení",
    "CRQH",
    "buněčné kvantové léčení",
    "kvantová terapie",
    "Brno",
    "Renata Sasová",
    "alternativní terapie",
    "holistická léčba",
    "neplodnost",
    "úzkosti",
    "deprese",
    "psychosomatika",
    "energetická terapie",
    "kvantová fyzika léčba",
    "terapie Brno",
    "Královo Pole"
  ],
  authors: [{ name: "Renata Sasová" }],
  creator: "Renata Sasová",
  publisher: "Renata Sasová",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kvantovaterapiebrno.cz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://kvantovaterapiebrno.cz",
    title: "Buněčné kvantové léčení (CRQH) Brno | Renata Sasová",
    description: "Buněčné kvantové léčení (CRQH) v Brně s Renatou Sasovou. Moderní terapeutická metoda pro obnovu rovnováhy těla, mysli a duše. Ošetření v Brně - Královo Pole.",
    siteName: "Kvantová terapie Brno - Renata Sasová",
    emails: ["renata@kvantovaterapiebrno.cz"],
    phoneNumbers: ["+420739445520"],
    countryName: "Czech Republic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buněčné kvantové léčení (CRQH) Brno | Renata Sasová",
    description: "Moderní terapeutická metoda pro obnovu rovnováhy těla, mysli a duše. Ošetření v Brně.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kvantovaterapiebrno.cz",
  "name": "Buněčné kvantové léčení - Renata Sasová",
  "alternateName": "Kvantová terapie Brno",
  "description": "Buněčné kvantové léčení (CRQH) - moderní terapeutická metoda pro obnovu rovnováhy těla, mysli a duše",
  "url": "https://kvantovaterapiebrno.cz",
  "telephone": "+420739445520",
  "email": "renata@kvantovaterapiebrno.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Božetěchova 102b",
    "addressLocality": "Brno",
    "addressRegion": "Jihomoravský kraj",
    "postalCode": "612 00",
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.2244",
    "longitude": "16.5944"
  },
  "priceRange": "3000 CZK",
  "currenciesAccepted": "CZK",
  "paymentAccepted": "Cash",
  "areaServed": {
    "@type": "City",
    "name": "Brno"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Terapeutické služby",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Buněčné kvantové léčení (CRQH)",
          "description": "Terapeutické ošetření trvající přibližně 2 hodiny",
          "provider": {
            "@type": "Person",
            "name": "Renata Sasová"
          }
        },
        "price": "3000",
        "priceCurrency": "CZK"
      }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Renata Sasová"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${bellotaText.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
