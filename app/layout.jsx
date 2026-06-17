import './globals.css';

export const metadata = {
  metadataBase: new URL('https://viriatusbrunch.pt'),
  title: {
    default: 'Viriatus Brunch Viseu | O Puro Prazer do Brunch',
    template: '%s | Viriatus Brunch Viseu',
  },
  description:
    'Viriatus Brunch em Viseu – O melhor brunch da cidade. Menu variado com tostas, hambúrgueres artesanais, ovos benedict, French toast e muito mais. Aberto de Terça a Domingo.',
  keywords: [
    'brunch Viseu',
    'Viriatus Brunch',
    'restaurante brunch Viseu',
    'brunch fim de semana Viseu',
    'brunch gourmet Viseu',
    'hambúrguer artesanal Viseu',
    'ovos benedict Viseu',
    'French toast Viseu',
    'café brunch Viseu',
  ],
  authors: [{ name: 'Viriatus Brunch', url: 'https://viriatusbrunch.pt' }],
  creator: 'E-Nimble',
  publisher: 'Viriatus Brunch',
  category: 'restaurant',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://viriatusbrunch.pt',
    siteName: 'Viriatus Brunch Viseu',
    title: 'Viriatus Brunch Viseu | O Puro Prazer do Brunch',
    description:
      'Viriatus Brunch em Viseu – O melhor brunch da cidade. Menu variado com tostas, hambúrgueres artesanais, ovos benedict, French toast e muito mais.',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Viriatus Brunch Viseu - Mesa com brunch completo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viriatus Brunch Viseu | O Puro Prazer do Brunch',
    description:
      'O melhor brunch de Viseu. Menu variado, ambiente acolhedor, e os melhores sabores.',
    images: ['/assets/images/og-image.jpg'],
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
  icons: {
    icon: '/icon.png',
  },
};

// Schema.org JSON-LD — Estruturado para Google (Restaurante)
const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Viriatus Brunch',
  description:
    'O Puro Prazer do Brunch em Viseu. Menu variado com tostas, hambúrgueres artesanais, ovos benedict, French toast e muito mais.',
  url: 'https://viriatusbrunch.pt',
  logo: 'https://viriatusbrunch.pt/assets/images/viriatus-brunch-logo.png',
  image: 'https://viriatusbrunch.pt/assets/images/og-image.jpg',
  servesCuisine: ['Brunch', 'Café', 'Americana'],
  priceRange: '€€',
  telephone: '+351963546006',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Gaspar Barreiros 24',
    addressLocality: 'Viseu',
    postalCode: '3500-222',
    addressCountry: 'PT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.6566,
    longitude: -7.9094,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:00',
      closes: '13:00',
    },
  ],
  sameAs: ['https://www.instagram.com/viriatusbrunch.viseu'],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

import { LanguageProvider } from '@/context/LanguageContext';
import LanguageModal from '@/components/LanguageModal';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body suppressHydrationWarning>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GJZE833Z8F"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GJZE833Z8F');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <LanguageProvider>
          <LanguageModal />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

