import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBrancheBySlug, getAllBranchenSlugs, branchen } from '@/lib/branchen-data';
import { Banknote, ArrowRight, CheckCircle2, Euro, ChevronRight } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBranchenSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const branche = getBrancheBySlug(params.slug);
  if (!branche) return { title: 'Branche nicht gefunden' };

  return {
    title: `Minijobs in ${branche.name} – 538-Euro-Jobs & Nebenjobs`,
    description: `Finde Minijobs im Bereich ${branche.name}. ${branche.beschreibung} Gehalt: ${branche.gehaltsspanne}.`,
    alternates: { canonical: `/branchen/${branche.slug}` },
    openGraph: {
      title: `${branche.name} Minijobs | Minijobgenie`,
      description: `538-Euro-Jobs und Nebenjobs im Bereich ${branche.name}. Jetzt Minijob finden!`,
      url: `https://minijobgenie.de/branchen/${branche.slug}`,
    },
  };
}

export default function BrancheDetailPage({ params }: Props) {
  const branche = getBrancheBySlug(params.slug);
  if (!branche) notFound();

  const andereBranchen = branchen.filter((b) => b.slug !== branche.slug).slice(0, 4);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Branchen', item: 'https://minijobgenie.de/branchen' },
      { '@type': 'ListItem', position: 3, name: branche.name },
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
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href="/branchen" className="hover:text-white transition-colors">Branchen</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">{branche.name}</li>
              </ol>
            </nav>

            <div className="text-5xl mb-4">{branche.icon}</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Minijobs in <span className="text-emerald-200">{branche.name}</span>
            </h1>
            <p className="text-lg text-emerald-100">{branche.beschreibung}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Gehalt */}
          <div className="glow-card rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Euro className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">Typisches Gehalt</h2>
            </div>
            <p className="text-2xl font-bold gradient-text-cash">{branche.gehaltsspanne}</p>
            <p className="text-sm text-gray-500 mt-1">Abhängig von Erfahrung, Region und Arbeitgeber</p>
          </div>

          {/* Beispiel-Jobs */}
          <section className="mb-10">
            <div className="cash-divider mb-6">
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Typische Minijobs</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {branche.beispielJobs.map((job) => (
                <div key={job} className="speed-line flex items-center gap-3 p-4 rounded-xl bg-white border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{job}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Andere Branchen */}
          <section className="mb-10">
            <div className="cash-divider mb-6">
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Andere Branchen</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {andereBranchen.map((b) => (
                <Link
                  key={b.slug}
                  href={`/branchen/${b.slug}`}
                  className="group glow-card flex items-center gap-3 p-4 rounded-xl"
                >
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">{b.name}</div>
                    <div className="text-xs text-gray-500">{b.gehaltsspanne}</div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/branchen"
              className="inline-flex items-center gap-1 mt-4 text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              Alle Branchen ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 rounded-2xl p-8 text-center overflow-hidden relative">
            <div className="absolute inset-0 cash-dots opacity-5" />
            <div className="relative">
              <div className="quick-tag mx-auto mb-4 w-fit">
                <Banknote className="w-3.5 h-3.5" />
                Quick Cash
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Minijob in {branche.name} finden
              </h2>
              <p className="mb-6 text-gray-400">
                Entdecke passende 538-Euro-Jobs im Bereich {branche.name} per Swipe-Matching.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/minijobs"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/25"
                >
                  Minijobs nach Stadt
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
        </div>
      </main>
      <Footer />
    </>
  );
}
