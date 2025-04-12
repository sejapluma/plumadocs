import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMZL4HQN');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2131985867237144');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Meta Pixel Advanced Matching */}
        <Script id="meta-pixel-advanced" strategy="afterInteractive">
          {`
            fbq('init', '2131985867237144', {
              external_id: 'seu_id_externo'
            });
          `}
        </Script>

        {/* Meta Pixel Debug Mode */}
        <Script id="meta-pixel-debug" strategy="afterInteractive">
          {`
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
              fbq('set', 'debug', true);
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMZL4HQN"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2131985867237144&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
