import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getRatgeberBySlug, getAllRatgeberSlugs, getRelatedRatgeber, ratgeberKategorien } from '@/lib/ratgeber-data';
import { Banknote, CheckCircle2, ChevronRight, ChevronDown, ArrowRight, Calendar, Tag } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllRatgeberSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artikel = getRatgeberBySlug(params.slug);
  if (!artikel) return { title: 'Artikel nicht gefunden' };

  return {
    title: `${artikel.title} | Minijobgenie Ratgeber`,
    description: artikel.description,
    alternates: { canonical: `/ratgeber/${artikel.slug}` },
    openGraph: {
      title: artikel.title,
      description: artikel.description,
      url: `https://minijobgenie.de/ratgeber/${artikel.slug}`,
      type: 'article',
      publishedTime: artikel.publishDate,
    },
    twitter: { card: 'summary_large_image', title: artikel.title, description: artikel.description },
  };
}

export default function RatgeberArtikelPage({ params }: Props) {
  const raw = getRatgeberBySlug(params.slug);
  if (!raw) notFound();

  // Normalize field names (some JSON files use "faq" instead of "faqs")
  const artikel = {
    ...raw,
    faqs: raw.faqs ?? (raw as any).faq ?? [],
    keyPoints: raw.keyPoints ?? [],
    content: raw.content ?? '',
  };

  const related = getRelatedRatgeber(artikel);
  const kategorie = ratgeberKategorien.find((k) => k.slug === artikel.categorySlug);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://minijobgenie.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: kategorie?.name || artikel.category, item: `https://minijobgenie.de/ratgeber#${artikel.categorySlug}` },
      { '@type': 'ListItem', position: 4, name: artikel.title },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artikel.title,
    description: artikel.description,
    datePublished: artikel.publishDate,
    dateModified: '2026-02-01',
    author: { '@type': 'Organization', name: 'Minijobgenie', url: 'https://minijobgenie.de' },
    publisher: { '@type': 'Organization', name: 'Minijobgenie', url: 'https://minijobgenie.de' },
  };

  const faqJsonLd = artikel.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: artikel.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  const jsonLdArray = [breadcrumbJsonLd, articleJsonLd, ...(faqJsonLd ? [faqJsonLd] : [])];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F0FDF4]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray) }}
        />

        {/* Top Bar */}
        <section className="bg-gradient-to-r from-emerald-600 to-green-600 pt-24 pb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-emerald-200 mb-4" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li><Link href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li>
                  <Link href={`/ratgeber#${artikel.categorySlug}`} className="hover:text-white transition-colors">
                    {kategorie?.name || artikel.category}
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          {/* Article Header Card */}
          <div className="glow-card rounded-2xl p-6 sm:p-8 mb-8">
            {/* Category Badge + Date */}
            <div className="flex items-center gap-3 mb-4">
              <span className="cash-badge">
                <Tag className="w-3 h-3" />
                {kategorie?.name || artikel.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(artikel.publishDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {artikel.title}
            </h1>

            <p className="text-lg text-gray-600">{artikel.description}</p>
          </div>

          {/* Key Points */}
          {artikel.keyPoints.length > 0 && (
            <section className="glow-card rounded-2xl p-6 mb-8 border-l-4 border-l-emerald-500">
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-emerald-600" />
                Das Wichtigste in Kürze
              </h2>
              <ul className="space-y-2.5">
                {artikel.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Main Content */}
          <article
            className="prose prose-gray max-w-none mb-10 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: artikel.content }}
          />

          {/* FAQ */}
          {artikel.faqs.length > 0 && (
            <section className="mb-10">
              <div className="cash-divider mb-6">
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Häufige Fragen</span>
              </div>
              <div className="space-y-3">
                {artikel.faqs.map((faq, i) => (
                  <details key={i} className="group glow-card rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-gray-900 hover:bg-emerald-50/50 transition-colors">
                      {faq.question}
                      <ChevronDown className="w-5 h-5 text-emerald-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-700 border-t border-emerald-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related Articles */}
          {related.length > 0 && (
            <section className="mb-10">
              <div className="cash-divider mb-6">
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Verwandte Artikel</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/ratgeber/${r.slug}`}
                    className="group glow-card p-5 rounded-xl"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-emerald-600 mb-2 transition-colors">
                      {r.title}
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-2">{r.description}</p>
                    <div className="flex items-center gap-1 text-sm text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Lesen <ArrowRight className="w-3.5 h-3.5" />
                    </div>
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
                Bereit für deinen <span className="gradient-text-cash">Minijob</span>?
              </h2>
              <p className="mb-6 text-gray-400">
                Finde passende Minijobs und bewirb dich direkt über die Minijobgenie App.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/minijobs"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/25"
                >
                  Minijobs finden
                </Link>
                <Link
                  href="/ratgeber"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-emerald-500/30 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-colors"
                >
                  Alle Ratgeber ansehen
                </Link>
              </div>
            </div>
          </section>

          <p className="mt-10 text-xs text-gray-400 text-center">
            Stand: {new Date(artikel.publishDate).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })} · Alle Angaben ohne Gewähr
          </p>
        </div>

        {/* Spacer */}
        <div className="h-16" />
      </main>
      <Footer />
    </>
  );
}
