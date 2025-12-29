import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

// Fontes Otimizadas pelo Next.js
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Estalagem Mirante",
    default: "Estalagem Mirante | Chalés em Aiuruoca, MG",
  },
  description:
    "Refúgio de charme na Serra da Mantiqueira. Chalés com vista para o Pico do Papagaio e cachoeiras em Aiuruoca.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://estalagemmirante.com.br"
  ),
  robots: "index, follow",
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estalagem Mirante - Aiuruoca MG",
      },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-stone-50 text-stone-800">
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
