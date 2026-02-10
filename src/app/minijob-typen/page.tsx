import { Metadata } from 'next';
import Link from 'next/link';
import { Banknote, Clock, ChevronRight, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { minijobTypen, minijobKategorien, getMinijobTypenByCategory } from '@/lib/minijob-typen-data';

export const metadata: Metadata = {
  title: 'Minijob-Typen entdecken – 60 Nebenjobs im Überblick | Minijobgenie',
  description:
    `Entdecke ${minijobTypen.length} Minijob-Typen in 10 Kategorien: Gastronomie, Einzelhandel, Nachhilfe, Online und mehr. Stundenlohn, Aufgaben und Tipps.`,
  alternates: { canonical: '/minijob-typen' },
  openGraph: {
    title: 'Minijob-Typen entdecken | Minijobgenie',
    description: `${minijobTypen.length} Minijob-Typen mit Stundenlohn, Aufgaben und Bewerbungstipps.`,
    url: 'https://minijobgenie.de/minijob-typen',
  },
};

export default function MinijobTypenPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Minijob-Typen' },
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
        <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 cash-dots opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white/80 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">Minijob-Typen</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Banknote className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Minijob-Typen entdecken
              </h1>
            </div>
            <p className="text-lg text-white/90 max-w-2xl">
              Welcher Minijob passt zu dir? Entdecke {minijobTypen.length} Minijob-Typen mit Stundenlohn, Aufgaben und Bewerbungstipps.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">{minijobTypen.length}</div>
                <div className="text-sm text-white/70">Minijob-Typen</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">{minijobKategorien.length}</div>
                <div className="text-sm text-white/70">Kategorien</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">538€</div>
                <div className="text-sm text-white/70">Grenze</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Quick Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-2">
            {minijobKategorien.map((kat) => {
              const count = getMinijobTypenByCategory(kat.slug).length;
              if (count === 0) return null;
              return (
                <a
                  key={kat.slug}
                  href={`#${kat.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-emerald-50 hover:text-emerald-700 rounded-lg text-sm font-medium text-gray-700 transition-colors border border-emerald-100"
                >
                  <span>{kat.name}</span>
                  <span className="text-xs text-gray-400">({count})</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Typen by Category */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {minijobKategorien.map((kat) => {
            const katTypen = getMinijobTypenByCategory(kat.slug);
            if (katTypen.length === 0) return null;
            return (
              <section key={kat.slug} id={kat.slug} className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{kat.name}</h2>
                <p className="text-gray-600 mb-6">{kat.description}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {katTypen.map((typ) => (
                    <Link
                      key={typ.slug}
                      href={`/minijob-typen/${typ.slug}`}
                      className="group bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all p-5"
                    >
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                        {typ.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Banknote className="h-3.5 w-3.5" />
                          {typ.stundenlohn[0].toFixed(0)}–{typ.stundenlohn[1].toFixed(0)} €/Std.
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {typ.typischeStunden}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{typ.beschreibung}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {typ.geeignetFuer.slice(0, 3).map((g, i) => (
                          <span key={i} className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-xs">{g}</span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Minijob finden</h2>
            <p className="text-white/80 mb-6">Entdecke offene 538-Euro-Jobs bei Arbeitgebern in deiner Nähe.</p>
            <Link
              href="/stellen"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              Minijob-Stellen ansehen <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
