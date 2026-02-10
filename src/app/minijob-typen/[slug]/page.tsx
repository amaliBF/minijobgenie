import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Banknote, Clock, ChevronRight, CheckCircle2, Star, Users, Zap, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getMinijobTypBySlug,
  getAllMinijobTypenSlugs,
  getRelatedMinijobTypen,
  minijobKategorien,
} from '@/lib/minijob-typen-data';
import { staedte } from '@/lib/staedte-data';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllMinijobTypenSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const typ = getMinijobTypBySlug(params.slug);
  if (!typ) return { title: 'Nicht gefunden' };

  const title = `${typ.name} – Minijob mit ${typ.stundenlohn[0]}–${typ.stundenlohn[1]} €/Std. | Minijobgenie`;
  const description = `${typ.name} als Minijob: ${typ.stundenlohn[0]}–${typ.stundenlohn[1]} €/Std., ${typ.typischeStunden}. Aufgaben, Voraussetzungen und Tipps für deinen 538-Euro-Job.`;
  return {
    title,
    description,
    alternates: { canonical: `/minijob-typen/${typ.slug}` },
    openGraph: { title, description, url: `https://minijobgenie.de/minijob-typen/${typ.slug}`, type: 'article' },
  };
}

export default function MinijobTypDetailPage({ params }: Props) {
  const typ = getMinijobTypBySlug(params.slug);
  if (!typ) notFound();

  const related = getRelatedMinijobTypen(typ);
  const kategorie = minijobKategorien.find((k) => k.slug === typ.categorySlug);
  const topStaedte = staedte.slice(0, 6);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Minijob-Typen', item: 'https://minijobgenie.de/minijob-typen' },
      { '@type': 'ListItem', position: 3, name: typ.name },
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
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href="/minijob-typen" className="hover:text-white transition-colors">Minijob-Typen</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">{typ.name}</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {typ.name}
            </h1>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl border border-white/20">
                <Banknote className="w-4 h-4 text-emerald-200" />
                {typ.stundenlohn[0]}–{typ.stundenlohn[1]} €/Std.
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl border border-white/20">
                <Clock className="w-4 h-4 text-emerald-200" />
                {typ.typischeStunden}
              </span>
              {kategorie && (
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl border border-white/20">
                  <Zap className="w-4 h-4 text-emerald-200" />
                  {kategorie.name}
                </span>
              )}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Beschreibung */}
              <section className="glow-card rounded-2xl p-6">
                <div className="cash-divider mb-4">
                  <span className="text-sm font-semibold text-emerald-700 uppercase tracking-widest whitespace-nowrap">Überblick</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{typ.beschreibung}</p>
              </section>

              {/* Aufgaben */}
              <section className="glow-card rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  Typische Aufgaben
                </h2>
                <ul className="space-y-3">
                  {typ.aufgaben.map((aufgabe, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{aufgabe}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Voraussetzungen */}
              <section className="glow-card rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-emerald-600" />
                  Voraussetzungen
                </h2>
                <div className="flex flex-wrap gap-2">
                  {typ.voraussetzungen.map((v, i) => (
                    <span key={i} className="px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg text-sm font-medium border border-emerald-100">
                      {v}
                    </span>
                  ))}
                </div>
              </section>

              {/* Vorteile */}
              <section className="glow-card rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-emerald-600" />
                  Vorteile
                </h2>
                <ul className="space-y-2">
                  {typ.vorteile.map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <ChevronRight className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
                      {v}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tipps */}
              <section className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-emerald-600" />
                  Tipps für die Bewerbung
                </h2>
                <ul className="space-y-3">
                  {typ.tipps.map((tipp, i) => (
                    <li key={i} className="speed-line flex items-start gap-2.5 text-gray-700 py-2">
                      <span>{tipp}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Minijobs in Städten */}
              <section className="glow-card rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {typ.name} in deiner Stadt
                </h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {topStaedte.map((stadt) => (
                    <Link
                      key={stadt.slug}
                      href={`/minijobs/${typ.slug}-in-${stadt.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-emerald-50 transition-colors text-sm group"
                    >
                      <span className="text-emerald-500">📍</span>
                      <span className="text-gray-700 group-hover:text-emerald-700">{typ.name} in {stadt.name}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/minijobs"
                  className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-4"
                >
                  Alle Städte ansehen <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="mt-8 lg:mt-0 space-y-6">
              {/* Steckbrief */}
              <div className="glow-card rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Steckbrief</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Stundenlohn</dt>
                    <dd className="font-semibold gradient-text-cash text-lg">
                      {typ.stundenlohn[0]}–{typ.stundenlohn[1]} €/Std.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Arbeitszeit</dt>
                    <dd className="font-medium text-gray-900">{typ.typischeStunden}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Flexibilität</dt>
                    <dd className="font-medium text-gray-900">{typ.flexibilitaet}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Kategorie</dt>
                    <dd className="font-medium text-gray-900">{typ.category}</dd>
                  </div>
                </dl>
              </div>

              {/* Geeignet für */}
              <div className="glow-card rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-emerald-600" />
                  Geeignet für
                </h3>
                <div className="flex flex-wrap gap-2">
                  {typ.geeignetFuer.map((g, i) => (
                    <span key={i} className="cash-badge">{g}</span>
                  ))}
                </div>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="glow-card rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Ähnliche Minijobs</h3>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/minijob-typen/${r.slug}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600 transition-colors"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                          {r.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gray-900 rounded-2xl p-5 text-white relative overflow-hidden">
                <div className="absolute inset-0 cash-dots opacity-5" />
                <div className="relative">
                  <div className="quick-tag w-fit mb-3">
                    <Banknote className="w-3 h-3" />
                    Quick Cash
                  </div>
                  <h3 className="font-bold mb-2">{typ.name} finden</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Entdecke offene Minijob-Stellen und bewirb dich direkt über Minijobgenie.
                  </p>
                  <Link
                    href="/stellen"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:from-emerald-600 hover:to-green-700 transition-all"
                  >
                    Stellen ansehen
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
