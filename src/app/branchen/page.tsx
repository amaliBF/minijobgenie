import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { branchen } from '@/lib/branchen-data';
import { Banknote, ArrowRight, TrendingUp, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Minijob-Branchen – 538-Euro-Jobs nach Branche finden',
  description:
    'Finde Minijobs in allen Branchen: Gastronomie, Einzelhandel, Lager, Lieferung, Büro, Events, Reinigung, Nachhilfe, Pflege und Sport. Jetzt 538-Euro-Job finden!',
  alternates: { canonical: '/branchen' },
  openGraph: {
    title: 'Minijob-Branchen | Minijobgenie',
    description: 'Alle Branchen für 538-Euro-Jobs und Nebenjobs auf einen Blick.',
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
      <main className="min-h-screen bg-[#F0FDF4]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 pt-24 pb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 cash-dots opacity-10" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-40 bg-green-400/15 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Branchen</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="quick-tag">
                <Banknote className="w-3.5 h-3.5" />
                Quick Cash
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Minijobs nach <span className="text-emerald-200">Branche</span>
            </h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl">
              Entdecke {branchen.length} Branchen mit tausenden 538-Euro-Jobs und Nebenjobs.
              Finde die Branche, die zu dir passt.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-5 py-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-gray-900">{branchen.length} Branchen</span>
              </div>
              <div className="glass-card px-5 py-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-gray-900">Bis zu 538€/Monat</span>
              </div>
            </div>
          </div>
        </section>

        {/* Branchen Grid */}
        <section className="bg-[#F0FDF4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="cash-divider mb-10">
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Alle Branchen</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {branchen.map((b) => (
                <Link
                  key={b.slug}
                  href={`/branchen/${b.slug}`}
                  className="group glow-card rounded-2xl p-6"
                >
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 mb-2 transition-colors">
                    {b.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{b.beschreibung}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="euro-highlight text-sm font-bold text-emerald-700">{b.gehaltsspanne}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {b.beispielJobs.slice(0, 3).map((job) => (
                      <span key={job} className="cash-badge text-xs">{job}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Branche entdecken <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="quick-tag mx-auto mb-6 w-fit">
              <Banknote className="w-3.5 h-3.5" />
              Jetzt starten
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Bereit für deinen <span className="gradient-text-cash">Minijob</span>?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Als Arbeitgeber erreichst du tausende motivierte Minijobber. Erstelle jetzt dein Unternehmensprofil.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://dashboard.genieportal.de/register"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/25"
              >
                Kostenlos registrieren
              </Link>
              <Link
                href="/minijobs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-emerald-500/30 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-colors"
              >
                Minijobs nach Stadt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
