import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StaedteSearch from '@/components/StaedteSearch';
import { staedte, bundeslaender, getStaedteByBundesland, getTopStaedte } from '@/lib/staedte-data';
import { Banknote, MapPin, TrendingUp, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Minijobs nach Stadt – 538-Euro-Jobs in deiner Nähe',
  description:
    'Finde Minijobs, 538-Euro-Jobs und Nebenjobs in deiner Stadt. Über 80 Städte in ganz Deutschland. Jetzt Minijob in deiner Nähe finden!',
  alternates: { canonical: '/minijobs' },
  openGraph: {
    title: 'Minijobs nach Stadt | Minijobgenie',
    description: 'Finde 538-Euro-Jobs und Nebenjobs in deiner Stadt. Jetzt Minijob in deiner Nähe finden!',
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
      <main className="min-h-screen bg-[#F0FDF4]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 cash-dots opacity-10" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-40 bg-green-400/15 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Minijobs nach Stadt</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="quick-tag">
                <MapPin className="w-3.5 h-3.5" />
                Städte-Finder
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Minijobs in <span className="text-emerald-200">deiner Stadt</span>
            </h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl">
              Finde 538-Euro-Jobs und Nebenjobs in über {staedte.length} Städten deutschlandweit.
              Wähle deine Stadt und entdecke passende Minijobs.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-5 py-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-gray-900">{staedte.length}+ Städte</span>
              </div>
              <div className="glass-card px-5 py-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-gray-900">Bis zu 538€/Monat</span>
              </div>
              <div className="glass-card px-5 py-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-gray-900">Sofort bewerben</span>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#F0FDF4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Search */}
            <StaedteSearch staedte={searchStaedte} />

            {/* Top Städte */}
            <section className="mb-14">
              <div className="cash-divider mb-8">
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Top-Städte für Minijobs</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {topStaedte.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/minijobs/${s.slug}`}
                    className="group glow-card p-4 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-emerald-500" />
                      <div className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{s.name}</div>
                    </div>
                    <div className="text-xs text-gray-500 ml-6">{s.bundesland}</div>
                  </Link>
                ))}
              </div>
            </section>

            {/* By Bundesland */}
            {bundeslaender.map((bl) => {
              const blStaedte = getStaedteByBundesland(bl.name);
              if (blStaedte.length === 0) return null;
              return (
                <section key={bl.slug} className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full" />
                    {bl.name}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {blStaedte.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/minijobs/${s.slug}`}
                        className="text-sm text-gray-700 hover:text-emerald-600 transition-colors py-1.5 flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                        Minijobs {s.name}
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="quick-tag mx-auto mb-6 w-fit">
              <Banknote className="w-3.5 h-3.5" />
              Quick Cash
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Noch keine passende Stadt gefunden?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Entdecke Minijobs nach Branche oder lies unsere Ratgeber-Artikel für Tipps rund um den Minijob.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/branchen"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/25"
              >
                Alle Branchen ansehen
              </Link>
              <Link
                href="/ratgeber"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-emerald-500/30 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-colors"
              >
                Minijob-Ratgeber
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
