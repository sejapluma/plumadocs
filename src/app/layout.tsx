import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlumaDocs | Documentos Psicológicos Profissionais",
  description: "Crie documentos psicológicos profissionais em minutos. Modelos prontos e atualizados seguindo as normas do CFP. Laudos, relatórios e declarações com qualidade e segurança.",
  keywords: "documentos psicológicos, laudos psicológicos, relatórios psicológicos, prontuários, CFP, psicologia, modelos de documentos, documentação psicológica",
  authors: [{ name: "Pluma" }],
  creator: "Pluma",
  publisher: "Pluma",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://docs.sejapluma.com",
  },
  openGraph: {
    title: "PlumaDocs | Documentos Psicológicos Profissionais",
    description: "Crie documentos psicológicos profissionais em minutos. Modelos prontos e atualizados seguindo as normas do CFP. Laudos, relatórios e declarações com qualidade e segurança.",
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
    description: "Crie documentos psicológicos profissionais em minutos. Modelos prontos e atualizados seguindo as normas do CFP. Laudos, relatórios e declarações com qualidade e segurança.",
    images: ["/og-image.jpg"],
    creator: "@sejapluma",
    site: "@sejapluma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "adicione_seu_codigo_do_google_search_console",
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
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17002733860"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17002733860');
          `}
        </Script>

        {/* Google Ads Conversion Tracking */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17002733860/mDRRCMbM6LcaEKTCxKs_',
                  'value': 1.0,
                  'currency': 'BRL',
                  'transaction_id': '',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

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
          <div style={{ display: 'none' }}>
            <Image
              src="https://www.facebook.com/tr?id=2131985867237144&ev=PageView&noscript=1"
              alt=""
              width={1}
              height={1}
              unoptimized
              priority
            />
          </div>
        </noscript>

        {children}
      </body>
    </html>
  );
}
