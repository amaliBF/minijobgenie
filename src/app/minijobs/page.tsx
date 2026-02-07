import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StaedteSearch from '@/components/StaedteSearch';
import { staedte, bundeslaender, getStaedteByBundesland, getTopStaedte } from '@/lib/staedte-data';

export const metadata: Metadata = {
  title: 'Minijobs nach Stadt – 538-Euro-Jobs in deiner Naehe',
  description:
    'Finde Minijobs, 538-Euro-Jobs und Nebenjobs in deiner Stadt. Ueber 80 Staedte in ganz Deutschland. Jetzt Minijob in deiner Naehe finden!',
  alternates: { canonical: '/minijobs' },
  openGraph: {
    title: 'Minijobs nach Stadt | Minijobgenie',
    description: 'Finde 538-Euro-Jobs und Nebenjobs in deiner Stadt. Jetzt Minijob in deiner Naehe finden!',
    url: 'https://minijobgenie.de/minijobs',
  },
};

export default function MinijobsPage() {
  const topStaedte = getTopStaedte(12);
  const searchStaedte = staedte.map((s) => ({
    slug: s.slug,
    name: s.name,
    bundesland: s.bundesland,
    einwohner: s.einwohner,
  }));

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Minijobs nach Stadt' },
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
                <li className="text-white font-medium">Minijobs nach Stadt</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Minijobs in deiner Stadt
            </h1>
            <p className="text-lg text-amber-100 mb-8 max-w-2xl">
              Finde 538-Euro-Jobs und Nebenjobs in ueber {staedte.length} Staedten deutschlandweit. Waehle deine Stadt und entdecke passende Minijobs.
            </p>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Search */}
            <StaedteSearch staedte={searchStaedte} />

            {/* Top Staedte */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Top-Staedte fuer Minijobs</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {topStaedte.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/minijobs/${s.slug}`}
                    className="group p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900 group-hover:text-amber-700">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.bundesland}</div>
                  </Link>
                ))}
              </div>
            </section>

            {/* By Bundesland */}
            {bundeslaender.map((bl) => {
              const blStaedte = getStaedteByBundesland(bl.name);
              if (blStaedte.length === 0) return null;
              return (
                <section key={bl.slug} className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{bl.name}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {blStaedte.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/minijobs/${s.slug}`}
                        className="text-sm text-gray-700 hover:text-amber-600 transition-colors py-1"
                      >
                        Minijobs {s.name}
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
