import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { staedte, getStadtBySlug, getAllStaedteSlugs, getNachbarstaedte } from '@/lib/staedte-data';
import { branchen } from '@/lib/branchen-data';
import { getMinijobTypBySlug, minijobTypen } from '@/lib/minijob-typen-data';
import { Banknote, MapPin, Users, Wallet, Train, Clock, CheckCircle2, ChevronRight, Star, Zap } from 'lucide-react';

interface Props {
  params: { slug: string };
}

// Top 30 Minijob-Typen für Kombinationsseiten (muss mit sitemap.ts übereinstimmen)
const topTypenSlugs = [
  'aushilfe-einzelhandel', 'kellner', 'nachhilfelehrer', 'babysitter', 'regalauffueller',
  'kassierer', 'kuechenhilfe', 'zeitungszusteller', 'reinigungskraft', 'empfangskraft',
  'buerokraft', 'lagerarbeiter', 'barkeeper', 'pizzalieferant', 'hundesitter',
  'gartenhelfer', 'umzugshelfer', 'promoter', 'messehostess', 'inventurhelfer',
  'datenerfasser', 'texter', 'produkttester', 'social-media-aushilfe', 'verpackungshelfer',
  'spuelkraft', 'baeckereiaushilfe', 'tankstellenaushilfe', 'warenverraumer', 'callcenter-agent',
];

function parseKombiSlug(slug: string): { typSlug: string; stadtSlug: string } | null {
  const match = slug.match(/^(.+)-in-(.+)$/);
  if (!match) return null;
  const [, typSlug, stadtSlug] = match;
  const typ = getMinijobTypBySlug(typSlug);
  const stadt = getStadtBySlug(stadtSlug);
  if (!typ || !stadt) return null;
  return { typSlug, stadtSlug };
}

export async function generateStaticParams() {
  // Stadt-Seiten
  const stadtParams = getAllStaedteSlugs().map((slug) => ({ slug }));

  // Kombi-Seiten: Top 30 Typen × 84 Städte
  const kombiParams: { slug: string }[] = [];
  for (const typSlug of topTypenSlugs) {
    for (const stadt of staedte) {
      kombiParams.push({ slug: `${typSlug}-in-${stadt.slug}` });
    }
  }

  return [...stadtParams, ...kombiParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Kombi-Seite?
  const kombi = parseKombiSlug(params.slug);
  if (kombi) {
    const typ = getMinijobTypBySlug(kombi.typSlug)!;
    const stadt = getStadtBySlug(kombi.stadtSlug)!;
    const title = `${typ.name} in ${stadt.name} – Minijob mit ${typ.stundenlohn[0]}–${typ.stundenlohn[1]} €/Std.`;
    const description = `${typ.name} als Minijob in ${stadt.name}: ${typ.stundenlohn[0]}–${typ.stundenlohn[1]} €/Std., ${typ.typischeStunden}. Jetzt 538-Euro-Job finden!`;
    return {
      title,
      description,
      alternates: { canonical: `/minijobs/${params.slug}` },
      openGraph: { title, description, url: `https://minijobgenie.de/minijobs/${params.slug}` },
    };
  }

  // Stadt-Seite
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) return { title: 'Nicht gefunden' };

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

export default function MinijobsSlugPage({ params }: Props) {
  // Kombi-Seite?
  const kombi = parseKombiSlug(params.slug);
  if (kombi) {
    return <KombiPage typSlug={kombi.typSlug} stadtSlug={kombi.stadtSlug} slug={params.slug} />;
  }

  // Stadt-Seite
  const stadt = getStadtBySlug(params.slug);
  if (!stadt) notFound();

  return <StadtPage stadtSlug={params.slug} />;
}

/* ==================== Stadt-Seite ==================== */
function StadtPage({ stadtSlug }: { stadtSlug: string }) {
  const stadt = getStadtBySlug(stadtSlug)!;
  const nachbarn = getNachbarstaedte(stadt);

  // Top Minijob-Typen für Verlinkung
  const verfuegbareTypen = topTypenSlugs
    .map((s) => getMinijobTypBySlug(s))
    .filter((t) => t !== undefined)
    .slice(0, 8);

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

          {/* Beliebte Minijob-Typen in dieser Stadt */}
          {verfuegbareTypen.length > 0 && (
            <section className="mb-10">
              <div className="cash-divider mb-6">
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Beliebte Minijobs</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {verfuegbareTypen.map((typ) => (
                  <Link
                    key={typ!.slug}
                    href={`/minijobs/${typ!.slug}-in-${stadt.slug}`}
                    className="group glow-card flex items-center justify-between p-4 rounded-xl"
                  >
                    <div>
                      <span className="text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">{typ!.name}</span>
                      <div className="text-xs text-gray-500 mt-0.5">{typ!.stundenlohn[0]}–{typ!.stundenlohn[1]} €/Std.</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500" />
                  </Link>
                ))}
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

/* ==================== Kombi-Seite ==================== */
function KombiPage({ typSlug, stadtSlug, slug }: { typSlug: string; stadtSlug: string; slug: string }) {
  const typ = getMinijobTypBySlug(typSlug)!;
  const stadt = getStadtBySlug(stadtSlug)!;
  const nachbarn = getNachbarstaedte(stadt);
  const related = topTypenSlugs
    .filter((s) => s !== typSlug)
    .map((s) => getMinijobTypBySlug(s))
    .filter((t) => t !== undefined)
    .slice(0, 6);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Minijobs', item: 'https://minijobgenie.de/minijobs' },
      { '@type': 'ListItem', position: 3, name: stadt.name, item: `https://minijobgenie.de/minijobs/${stadt.slug}` },
      { '@type': 'ListItem', position: 4, name: `${typ.name} in ${stadt.name}` },
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
                <li><Link href="/minijobs" className="hover:text-white transition-colors">Minijobs</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href={`/minijobs/${stadt.slug}`} className="hover:text-white transition-colors">{stadt.name}</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-white font-medium">{typ.name}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-2 mb-4">
              <div className="quick-tag">
                <MapPin className="w-3.5 h-3.5" />
                {stadt.bundesland}
              </div>
              <div className="quick-tag">
                <Banknote className="w-3.5 h-3.5" />
                {typ.stundenlohn[0]}–{typ.stundenlohn[1]} €/Std.
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {typ.name} in <span className="text-emerald-200">{stadt.name}</span>
            </h1>
            <p className="text-lg text-emerald-100">
              Finde deinen Minijob als {typ.name} in {stadt.name} ({stadt.bundesland}). {typ.stundenlohn[0]}–{typ.stundenlohn[1]} €/Std., {typ.typischeStunden}.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Über den Minijob */}
              <section className="glow-card rounded-2xl p-6">
                <div className="cash-divider mb-4">
                  <span className="text-sm font-semibold text-emerald-700 uppercase tracking-widest whitespace-nowrap">Über den Minijob</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{typ.beschreibung}</p>
                <p className="text-gray-700 leading-relaxed">
                  In {stadt.name} gibt es zahlreiche Möglichkeiten, als {typ.name} zu arbeiten.
                  {stadt.einwohner > 500000
                    ? ` Als Großstadt mit ${stadt.einwohner.toLocaleString('de-DE')} Einwohnern bietet ${stadt.name} ein breites Angebot an Minijob-Stellen in diesem Bereich.`
                    : ` ${stadt.name} bietet mit ${stadt.einwohner.toLocaleString('de-DE')} Einwohnern gute Chancen für diesen Minijob-Typ.`
                  }
                </p>
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

              {/* Stadt-Infos */}
              <section className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  {stadt.name} auf einen Blick
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Bundesland</div>
                    <div className="font-medium text-gray-900">{stadt.bundesland}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Einwohner</div>
                    <div className="font-medium text-gray-900">{stadt.einwohner.toLocaleString('de-DE')}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Lebenshaltung</div>
                    <div className="font-medium text-gray-900 capitalize">{stadt.lebenshaltung}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Flexibilität</div>
                    <div className="font-medium text-gray-900">{typ.flexibilitaet}</div>
                  </div>
                </div>
                {stadt.oepnv && (
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Train className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{stadt.oepnv}</span>
                  </div>
                )}
              </section>

              {/* Tipps */}
              <section className="glow-card rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-emerald-600" />
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
            </div>

            {/* Sidebar */}
            <aside className="mt-8 lg:mt-0 space-y-6">
              {/* Steckbrief */}
              <div className="glow-card rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Steckbrief</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Stundenlohn</dt>
                    <dd className="font-semibold gradient-text-cash text-lg">{typ.stundenlohn[0]}–{typ.stundenlohn[1]} €/Std.</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Arbeitszeit</dt>
                    <dd className="font-medium text-gray-900">{typ.typischeStunden}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Kategorie</dt>
                    <dd className="font-medium text-gray-900">{typ.category}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Stadt</dt>
                    <dd className="font-medium text-gray-900">{stadt.name}</dd>
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

              {/* Andere Minijobs in der Stadt */}
              {related.length > 0 && (
                <div className="glow-card rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Weitere Minijobs in {stadt.name}</h3>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r!.slug}>
                        <Link
                          href={`/minijobs/${r!.slug}-in-${stadt.slug}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600 transition-colors"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                          {r!.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nachbarstädte */}
              {nachbarn.length > 0 && (
                <div className="glow-card rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">{typ.name} in der Nähe</h3>
                  <ul className="space-y-2">
                    {nachbarn.slice(0, 5).map((n) => (
                      <li key={n.slug}>
                        <Link
                          href={`/minijobs/${typSlug}-in-${n.slug}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600 transition-colors"
                        >
                          <MapPin className="h-3.5 w-3.5 text-gray-400" />
                          {typ.name} in {n.name}
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
                  <h3 className="font-bold mb-2">{typ.name} in {stadt.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Entdecke offene Minijob-Stellen und bewirb dich direkt.
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
