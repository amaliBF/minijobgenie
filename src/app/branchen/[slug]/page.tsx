import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBrancheBySlug, getAllBranchenSlugs, branchen } from '@/lib/branchen-data';

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
              <li><Link href="/branchen" className="hover:text-amber-600">Branchen</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{branche.name}</li>
            </ol>
          </nav>

          <div className="text-5xl mb-4">{branche.icon}</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Minijobs in {branche.name}
          </h1>
          <p className="text-lg text-gray-600 mb-8">{branche.beschreibung}</p>

          {/* Gehalt */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Typisches Gehalt</h2>
            <p className="text-2xl font-bold text-amber-600">{branche.gehaltsspanne}</p>
            <p className="text-sm text-gray-500 mt-1">Abhaengig von Erfahrung, Region und Arbeitgeber</p>
          </div>

          {/* Beispiel-Jobs */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Typische Minijobs in {branche.name}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {branche.beispielJobs.map((job) => (
                <div key={job} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200">
                  <span className="text-amber-500">&#10003;</span>
                  <span className="text-gray-800">{job}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Andere Branchen */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Andere Branchen entdecken</h2>
            <div className="grid grid-cols-2 gap-3">
              {andereBranchen.map((b) => (
                <Link
                  key={b.slug}
                  href={`/branchen/${b.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
                >
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{b.name}</div>
                    <div className="text-xs text-gray-500">{b.gehaltsspanne}</div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/branchen"
              className="inline-block mt-3 text-sm text-amber-600 hover:text-amber-700 font-medium"
            >
              Alle Branchen ansehen &rarr;
            </Link>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Minijob in {branche.name} finden</h2>
            <p className="mb-6 text-amber-100">
              Entdecke passende 538-Euro-Jobs im Bereich {branche.name} per Swipe-Matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/minijobs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-amber-700 font-semibold hover:bg-amber-50 transition-colors"
              >
                Minijobs nach Stadt
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
