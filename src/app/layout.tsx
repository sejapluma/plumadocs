import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlumaDocs | Documentos Psicológicos Profissionais",
  description: "Crie documentos psicológicos profissionais em minutos. Modelos prontos e atualizados seguindo as normas do CFP.",
  keywords: "documentos psicológicos, laudos, relatórios, prontuários, CFP, psicologia",
  openGraph: {
    title: "PlumaDocs | Documentos Psicológicos Profissionais",
    description: "Crie documentos psicológicos profissionais em minutos. Modelos prontos e atualizados seguindo as normas do CFP.",
    url: "https://docs.sejapluma.com",
    siteName: "PlumaDocs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlumaDocs - Documentos Psicológicos Profissionais"
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlumaDocs | Documentos Psicológicos Profissionais",
    description: "Crie documentos psicológicos profissionais em minutos. Modelos prontos e atualizados seguindo as normas do CFP.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true
  },
  metadataBase: new URL("https://docs.sejapluma.com")
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
