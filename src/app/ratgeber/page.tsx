import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ratgeber, ratgeberKategorien, getRatgeberByCategory } from '@/lib/ratgeber-data';
import { Banknote, BookOpen, Layers, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Minijob-Ratgeber – Steuern, 538€-Grenze, Rechte & Bewerbungstipps',
  description:
    `${ratgeber.length}+ Ratgeber-Artikel rund um Minijobs: 538€-Grenze, Steuern, Krankenversicherung, Rechte als Minijobber und vieles mehr.`,
  alternates: { canonical: '/ratgeber' },
  openGraph: {
    title: 'Minijob-Ratgeber | Minijobgenie',
    description: `Über ${ratgeber.length} Ratgeber-Artikel rund um Minijobs, Steuern, Rechte und Bewerbungstipps.`,
    url: 'https://minijobgenie.de/ratgeber',
  },
};

const categoryIcons: Record<string, string> = {
  'minijob-basics': '📋',
  'steuern-recht': '⚖️',
  'bewerbung': '📝',
  'studium-nebenjob': '🎓',
  'arbeitgeber': '🏢',
};

export default function RatgeberPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber' },
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
                <li className="text-white font-medium">Ratgeber</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="quick-tag">
                <BookOpen className="w-3.5 h-3.5" />
                Wissen
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Minijob-<span className="text-emerald-200">Ratgeber</span>
            </h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl">
              {ratgeber.length}+ Artikel mit Tipps und Infos rund um Minijobs: 538€-Grenze, Steuern,
              Krankenversicherung, Rechte und Bewerbungstipps.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="glass-card px-5 py-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">{ratgeber.length}+</span>
                </div>
                <div className="text-sm text-gray-600">Artikel</div>
              </div>
              <div className="glass-card px-5 py-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Layers className="w-5 h-5 text-emerald-600" />
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">{ratgeberKategorien.length}</span>
                </div>
                <div className="text-sm text-gray-600">Kategorien</div>
              </div>
              <div className="glass-card px-5 py-4 text-center col-span-2 sm:col-span-1">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">100%</span>
                </div>
                <div className="text-sm text-gray-600">Kostenlos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="bg-[#F0FDF4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Category Quick Links */}
            <div className="flex flex-wrap gap-2 mb-12">
              {ratgeberKategorien.map((kat) => {
                const count = getRatgeberByCategory(kat.slug).length;
                if (count === 0) return null;
                return (
                  <a
                    key={kat.slug}
                    href={`#${kat.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 transition-all shadow-sm"
                  >
                    <span>{categoryIcons[kat.slug] || '📋'}</span>
                    <span>{kat.name}</span>
                    <span className="text-xs text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                      {count}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Articles by Category */}
            {ratgeberKategorien.map((kat) => {
              const katArtikel = getRatgeberByCategory(kat.slug);
              if (katArtikel.length === 0) return null;
              return (
                <section key={kat.slug} id={kat.slug} className="mb-14 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{categoryIcons[kat.slug] || '📋'}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{kat.name}</h2>
                    <span className="cash-badge text-xs">{katArtikel.length} Artikel</span>
                  </div>
                  <p className="text-gray-600 mb-5">{kat.description}</p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {katArtikel.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/ratgeber/${a.slug}`}
                        className="group glow-card p-5 rounded-xl"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-emerald-600 mb-2 transition-colors">
                          {a.title}
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-3">{a.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {new Date(a.publishDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                          <ArrowRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* CTA */}
            <section className="bg-gray-900 rounded-2xl p-8 text-center overflow-hidden relative mt-8 mb-16">
              <div className="absolute inset-0 cash-dots opacity-5" />
              <div className="relative">
                <div className="quick-tag mx-auto mb-4 w-fit">
                  <Banknote className="w-3.5 h-3.5" />
                  Quick Cash
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Bereit für deinen <span className="gradient-text-cash">Minijob</span>?
                </h2>
                <p className="mb-6 text-gray-400">
                  Finde den perfekten Minijob und bewirb dich direkt über unsere App.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/minijobs"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/25"
                  >
                    Alle Minijobs ansehen
                  </Link>
                  <Link
                    href="https://dashboard.ausbildungsgenie.de/register"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-emerald-500/30 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-colors"
                  >
                    Als Arbeitgeber registrieren
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
