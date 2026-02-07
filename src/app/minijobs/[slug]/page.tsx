import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getStadtBySlug, getAllStaedteSlugs, getNachbarstaedte } from '@/lib/staedte-data';
import { branchen } from '@/lib/branchen-data';
import { Banknote, MapPin, Users, Wallet, Train, CheckCircle2, ChevronRight } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllStaedteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) return { title: 'Stadt nicht gefunden' };

  return {
    title: `Minijobs in ${stadt.name} – 538-Euro-Jobs & Nebenjobs`,
    description: `Finde Minijobs, 538-Euro-Jobs und Nebenjobs in ${stadt.name} (${stadt.bundesland}). ${stadt.beschreibung.slice(0, 120)}`,
    alternates: { canonical: `/minijobs/${stadt.slug}` },
    openGraph: {
      title: `Minijobs in ${stadt.name} | Minijobgenie`,
      description: `538-Euro-Jobs und Nebenjobs in ${stadt.name}. Jetzt Minijob finden!`,
      url: `https://minijobgenie.de/minijobs/${stadt.slug}`,
    },
  };
}

export default function MinijobsStadtPage({ params }: Props) {
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) notFound();

  const nachbarn = getNachbarstaedte(stadt);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Minijobs', item: 'https://minijobgenie.de/minijobs' },
      { '@type': 'ListItem', position: 3, name: stadt.name },
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
                <li><Link href="/minijobs" className="hover:text-white transition-colors">Minijobs</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">{stadt.name}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="quick-tag">
                <MapPin className="w-3.5 h-3.5" />
                {stadt.bundesland}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Minijobs in <span className="text-emerald-200">{stadt.name}</span>
            </h1>
            <p className="text-lg text-emerald-100">{stadt.beschreibung}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Stadt-Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="glow-card rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-sm text-gray-500">Bundesland</div>
              <div className="font-semibold text-gray-900">{stadt.bundesland}</div>
            </div>
            <div className="glow-card rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-sm text-gray-500">Einwohner</div>
              <div className="font-semibold text-gray-900">{stadt.einwohner.toLocaleString('de-DE')}</div>
            </div>
            <div className="glow-card rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-2">
                <Wallet className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-sm text-gray-500">Lebenshaltung</div>
              <div className="font-semibold text-gray-900 capitalize">{stadt.lebenshaltung}</div>
            </div>
          </div>

          {/* ÖPNV */}
          {stadt.oepnv && (
            <section className="mb-10">
              <div className="cash-divider mb-4">
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Nahverkehr</span>
              </div>
              <div className="glow-card rounded-xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Train className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 mb-1">Nahverkehr in {stadt.name}</h2>
                  <p className="text-gray-600">{stadt.oepnv}</p>
                </div>
              </div>
            </section>
          )}

          {/* Beliebte Branchen */}
          <section className="mb-10">
            <div className="cash-divider mb-6">
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Beliebte Branchen</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {branchen.slice(0, 6).map((b) => (
                <Link
                  key={b.slug}
                  href={`/branchen/${b.slug}`}
                  className="group glow-card flex items-center gap-2.5 p-3.5 rounded-xl"
                >
                  <span className="text-lg">{b.icon}</span>
                  <span className="text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">{b.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Besonderheiten */}
          {stadt.besonderheiten.length > 0 && (
            <section className="mb-10">
              <div className="cash-divider mb-6">
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Besonderheiten</span>
              </div>
              <ul className="space-y-3">
                {stadt.besonderheiten.map((b, i) => (
                  <li key={i} className="speed-line flex items-start gap-2.5 text-gray-700 py-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Nachbarstädte */}
          {nachbarn.length > 0 && (
            <section className="mb-10">
              <div className="cash-divider mb-6">
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Minijobs in der Nähe</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {nachbarn.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/minijobs/${n.slug}`}
                    className="cash-badge hover:bg-emerald-200 transition-colors"
                  >
                    <MapPin className="w-3 h-3" />
                    Minijobs {n.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gray-900 rounded-2xl p-8 text-center overflow-hidden relative">
            <div className="absolute inset-0 cash-dots opacity-5" />
            <div className="relative">
              <div className="quick-tag mx-auto mb-4 w-fit">
                <Banknote className="w-3.5 h-3.5" />
                Quick Cash
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Minijob in {stadt.name} finden
              </h2>
              <p className="mb-6 text-gray-400">
                Entdecke passende 538-Euro-Jobs und Nebenjobs in {stadt.name} per Swipe-Matching.
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
        </div>
      </main>
      <Footer />
    </>
  );
}
