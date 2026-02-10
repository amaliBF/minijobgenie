import { MetadataRoute } from 'next';
import { staedte } from '@/lib/staedte-data';
import { ratgeber } from '@/lib/ratgeber-data';
import { branchen } from '@/lib/branchen-data';
import { minijobTypen } from '@/lib/minijob-typen-data';

// Top 30 Minijob-Typen für Kombiseiten (muss mit minijobs/[slug]/page.tsx übereinstimmen)
const topTypenSlugs = [
  'aushilfe-einzelhandel', 'kellner', 'nachhilfelehrer', 'babysitter', 'regalauffueller',
  'kassierer', 'kuechenhilfe', 'zeitungszusteller', 'reinigungskraft', 'empfangskraft',
  'buerokraft', 'lagerarbeiter', 'barkeeper', 'pizzalieferant', 'hundesitter',
  'gartenhelfer', 'umzugshelfer', 'promoter', 'messehostess', 'inventurhelfer',
  'datenerfasser', 'texter', 'produkttester', 'social-media-aushilfe', 'verpackungshelfer',
  'spuelkraft', 'baeckereiaushilfe', 'tankstellenaushilfe', 'warenverraumer', 'callcenter-agent',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://minijobgenie.de';
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/minijobs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/branchen`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/minijob-typen`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ratgeber`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/stellen`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/firmen`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/so-funktionierts`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fuer-arbeitgeber`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fuer-jobsuchende`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/preise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vorteile`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/app`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ];

  // Branchen pages
  const branchenPages: MetadataRoute.Sitemap = branchen.map((b) => ({
    url: `${baseUrl}/branchen/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Minijob-Typen pages (60 Typen)
  const typenPages: MetadataRoute.Sitemap = minijobTypen.map((t) => ({
    url: `${baseUrl}/minijob-typen/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Staedte pages (Minijobs nach Stadt)
  const staedtePages: MetadataRoute.Sitemap = staedte.map((s) => ({
    url: `${baseUrl}/minijobs/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Kombiseiten: Top 30 Typen × 84 Städte = 2.520 Seiten
  const kombiPages: MetadataRoute.Sitemap = [];
  for (const typSlug of topTypenSlugs) {
    for (const stadt of staedte) {
      kombiPages.push({
        url: `${baseUrl}/minijobs/${typSlug}-in-${stadt.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  // Ratgeber pages
  const ratgeberPages: MetadataRoute.Sitemap = ratgeber.map((r) => ({
    url: `${baseUrl}/ratgeber/${r.slug}`,
    lastModified: r.publishDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...branchenPages,
    ...typenPages,
    ...staedtePages,
    ...kombiPages,
    ...ratgeberPages,
  ];
}
