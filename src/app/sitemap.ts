import { MetadataRoute } from 'next';
import { staedte } from '@/lib/staedte-data';
import { ratgeber } from '@/lib/ratgeber-data';
import { branchen } from '@/lib/branchen-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://minijobgenie.de';
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/minijobs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/branchen`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ratgeber`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/so-funktionierts`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fuer-arbeitgeber`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fuer-jobsuchende`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/preise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vorteile`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
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

  // Staedte pages (Minijobs nach Stadt)
  const staedtePages: MetadataRoute.Sitemap = staedte.map((s) => ({
    url: `${baseUrl}/minijobs/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Ratgeber pages
  const ratgeberPages: MetadataRoute.Sitemap = ratgeber.map((r) => ({
    url: `${baseUrl}/ratgeber/${r.slug}`,
    lastModified: r.publishDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...branchenPages, ...staedtePages, ...ratgeberPages];
}
