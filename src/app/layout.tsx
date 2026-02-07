import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://minijobgenie.de'),
  title: {
    default: 'Minijobgenie \u2013 Finde deinen Minijob per Swipe | 538\u20AC-Jobs, Nebenjobs & Aushilfen',
    template: '%s | Minijobgenie',
  },
  description:
    'Finde deinen perfekten Minijob, 538\u20AC-Job oder Nebenjob per Swipe. Kurzvideos von echten Arbeitgebern, Swipe-Matching und KI-Jobfinder. Kostenlos f\u00fcr Jobsuchende.',
  keywords: [
    'Minijob',
    '538 Euro Job',
    'Nebenjob',
    'Aushilfe',
    'Teilzeit',
    'geringf\u00fcgige Besch\u00e4ftigung',
    'Minijob finden',
    'Nebenjob Studenten',
    'Minijob Sch\u00fcler',
    'Aushilfsjob',
    'Jobsuche',
    'Swipe Matching',
    'Kurzvideos',
  ],
  authors: [{ name: 'Butterflies IT UG' }],
  creator: 'Minijobgenie',
  publisher: 'Butterflies IT UG (haftungsbeschr\u00e4nkt)',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Minijobgenie \u2013 Finde deinen Minijob per Swipe | 538\u20AC-Jobs & Nebenjobs',
    description:
      'Die Plattform die Jobsuchende und Arbeitgeber zusammenbringt. Minijobs, 538\u20AC-Jobs und Nebenjobs per Swipe-Matching finden.',
    url: 'https://minijobgenie.de',
    siteName: 'Minijobgenie',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minijobgenie \u2013 Finde deinen Minijob per Swipe | 538\u20AC-Jobs & Nebenjobs',
    description:
      'Finde deinen perfekten Minijob, 538\u20AC-Job oder Nebenjob per Swipe. Kurzvideos, Swipe-Matching, KI-Jobfinder. Kostenlos f\u00fcr Jobsuchende.',
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Minijobgenie',
  url: 'https://minijobgenie.de',
  description:
    'Die Plattform die Jobsuchende und Arbeitgeber zusammenbringt. Minijobs, 538\u20AC-Jobs und Nebenjobs per Swipe-Matching, Kurzvideos und KI-Jobfinder.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Kostenlos f\u00fcr Jobsuchende',
  },
  creator: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschr\u00e4nkt)',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hagenower Str. 73',
      addressLocality: 'Schwerin',
      postalCode: '19061',
      addressCountry: 'DE',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
