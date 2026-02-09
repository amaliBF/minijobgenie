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
    default: 'Minijobgenie – Finde deinen Minijob per Swipe | 538€-Jobs, Nebenjobs & Aushilfen',
    template: '%s | Minijobgenie',
  },
  description:
    'Finde deinen perfekten Minijob, 538€-Job oder Nebenjob per Swipe. Kurzvideos von echten Arbeitgebern, Swipe-Matching und KI-Jobfinder. Kostenlos für Jobsuchende.',
  keywords: [
    'Minijob',
    '538 Euro Job',
    'Nebenjob',
    'Aushilfe',
    'Teilzeit',
    'geringfügige Beschäftigung',
    'Minijob finden',
    'Nebenjob Studenten',
    'Minijob Schüler',
    'Aushilfsjob',
    'Jobsuche',
    'Swipe Matching',
    'Kurzvideos',
  ],
  authors: [{ name: 'Butterflies IT UG' }],
  creator: 'Minijobgenie',
  publisher: 'Butterflies IT UG (haftungsbeschränkt)',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Minijobgenie – Finde deinen Minijob per Swipe | 538€-Jobs & Nebenjobs',
    description:
      'Die Plattform die Jobsuchende und Arbeitgeber zusammenbringt. Minijobs, 538€-Jobs und Nebenjobs per Swipe-Matching finden.',
    url: 'https://minijobgenie.de',
    siteName: 'Minijobgenie',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minijobgenie – Finde deinen Minijob per Swipe | 538€-Jobs & Nebenjobs',
    description:
      'Finde deinen perfekten Minijob, 538€-Job oder Nebenjob per Swipe. Kurzvideos, Swipe-Matching, KI-Jobfinder. Kostenlos für Jobsuchende.',
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

const jsonLdOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Minijobgenie',
  url: 'https://minijobgenie.de',
  logo: 'https://minijobgenie.de/icon.png',
  description:
    'Die innovative Minijob-Plattform mit Kurzvideos, Swipe-Matching und KI-Jobfinder. 538€-Jobs, Nebenjobs und Aushilfen per Swipe finden.',
  founder: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschränkt)',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hagenower Str. 73',
    addressLocality: 'Schwerin',
    postalCode: '19061',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'minijob@genieportal.de',
    contactType: 'customer service',
    availableLanguage: 'German',
  },
  sameAs: [
    'https://instagram.com/minijobgenie',
    'https://tiktok.com/@minijobgenie',
    'https://youtube.com/@minijobgenie',
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
