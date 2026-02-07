import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { branchen } from '@/lib/branchen-data';

export const metadata: Metadata = {
  title: 'Minijob-Branchen – 538-Euro-Jobs nach Branche finden',
  description:
    'Finde Minijobs in allen Branchen: Gastronomie, Einzelhandel, Lager, Lieferung, Buero, Events, Reinigung, Nachhilfe, Pflege und Sport. Jetzt 538-Euro-Job finden!',
  alternates: { canonical: '/branchen' },
  openGraph: {
    title: 'Minijob-Branchen | Minijobgenie',
    description: 'Alle Branchen fuer 538-Euro-Jobs und Nebenjobs auf einen Blick.',
    url: 'https://minijobgenie.de/branchen',
  },
};

export default function BranchenPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Branchen' },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Hero */}
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-amber-100 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Branchen</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Minijobs nach Branche
            </h1>
            <p className="text-lg text-amber-100 mb-8 max-w-2xl">
              Entdecke {branchen.length} Branchen mit tausenden 538-Euro-Jobs und Nebenjobs. Finde die Branche, die zu dir passt.
            </p>
          </div>
        </div>

        {/* Branchen Grid */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {branchen.map((b) => (
                <Link
                  key={b.slug}
                  href={`/branchen/${b.slug}`}
                  className="group rounded-2xl border border-gray-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 mb-2">{b.name}</h2>
                  <p className="text-gray-600 text-sm mb-4">{b.beschreibung}</p>
                  <div className="text-sm text-amber-600 font-medium">{b.gehaltsspanne}</div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {b.beispielJobs.slice(0, 3).map((job) => (
                      <span key={job} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">{job}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
