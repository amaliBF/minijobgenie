import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getStadtBySlug, getAllStaedteSlugs, getNachbarstaedte } from '@/lib/staedte-data';
import { branchen } from '@/lib/branchen-data';

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
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-amber-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/minijobs" className="hover:text-amber-600">Minijobs</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{stadt.name}</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Minijobs in {stadt.name}
          </h1>
          <p className="text-lg text-gray-600 mb-8">{stadt.beschreibung}</p>

          {/* Stadt-Info */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-amber-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-500">Bundesland</div>
              <div className="font-semibold text-gray-900">{stadt.bundesland}</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-500">Einwohner</div>
              <div className="font-semibold text-gray-900">{stadt.einwohner.toLocaleString('de-DE')}</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-500">Lebenshaltung</div>
              <div className="font-semibold text-gray-900 capitalize">{stadt.lebenshaltung}</div>
            </div>
          </div>

          {/* OEPNV */}
          {stadt.oepnv && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Nahverkehr in {stadt.name}</h2>
              <p className="text-gray-600">{stadt.oepnv}</p>
            </section>
          )}

          {/* Beliebte Branchen */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Beliebte Minijob-Branchen in {stadt.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {branchen.slice(0, 6).map((b) => (
                <Link
                  key={b.slug}
                  href={`/branchen/${b.slug}`}
                  className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
                >
                  <span className="text-lg">{b.icon}</span>
                  <span className="text-sm font-medium text-gray-900">{b.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Besonderheiten */}
          {stadt.besonderheiten.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Besonderheiten</h2>
              <ul className="space-y-2">
                {stadt.besonderheiten.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">&#10003;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Nachbarstaedte */}
          {nachbarn.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Minijobs in der Naehe</h2>
              <div className="flex flex-wrap gap-2">
                {nachbarn.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/minijobs/${n.slug}`}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-amber-100 hover:text-amber-700 rounded-full text-sm font-medium text-gray-700 transition-colors"
                  >
                    Minijobs {n.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Minijob in {stadt.name} finden</h2>
            <p className="mb-6 text-amber-100">
              Entdecke passende 538-Euro-Jobs und Nebenjobs in {stadt.name} per Swipe-Matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/branchen"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-amber-700 font-semibold hover:bg-amber-50 transition-colors"
              >
                Alle Branchen ansehen
              </Link>
              <Link
                href="/ratgeber"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Minijob-Ratgeber
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
