import fs from 'fs';
import path from 'path';

export interface MinijobTyp {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  stundenlohn: [number, number];
  typischeStunden: string;
  beschreibung: string;
  aufgaben: string[];
  voraussetzungen: string[];
  vorteile: string[];
  flexibilitaet: string;
  geeignetFuer: string[];
  tipps: string[];
  relatedSlugs: string[];
}

export interface MinijobKategorie {
  slug: string;
  name: string;
  description: string;
}

export const minijobKategorien: MinijobKategorie[] = [
  { slug: 'gastronomie-service', name: 'Gastronomie & Service', description: 'Minijobs in Restaurants, Cafés, Bars und Catering.' },
  { slug: 'einzelhandel-verkauf', name: 'Einzelhandel & Verkauf', description: 'Minijobs an der Kasse, im Regal und in der Beratung.' },
  { slug: 'lager-logistik', name: 'Lager & Logistik', description: 'Minijobs in Lagerhaltung, Versand und Kommissionierung.' },
  { slug: 'buero-verwaltung', name: 'Büro & Verwaltung', description: 'Minijobs in Büroorganisation, Dateneingabe und Empfang.' },
  { slug: 'nachhilfe-betreuung', name: 'Nachhilfe & Betreuung', description: 'Minijobs als Nachhilfelehrer, Babysitter oder Betreuer.' },
  { slug: 'reinigung-haushalt', name: 'Reinigung & Haushalt', description: 'Minijobs in Gebäudereinigung, Haushaltshilfe und Pflege.' },
  { slug: 'lieferung-zustellung', name: 'Lieferung & Zustellung', description: 'Minijobs als Fahrer, Kurier oder Zeitungszusteller.' },
  { slug: 'events-promotion', name: 'Events & Promotion', description: 'Minijobs bei Veranstaltungen, Messen und Promotionaktionen.' },
  { slug: 'online-digital', name: 'Online & Digital', description: 'Minijobs im Homeoffice, als Texter, Tester oder Datenerfasser.' },
  { slug: 'handwerk-garten', name: 'Handwerk & Garten', description: 'Minijobs in Gartenarbeit, Renovierung und handwerklichen Tätigkeiten.' },
];

function loadMinijobTypen(): MinijobTyp[] {
  const dataDir = path.join(process.cwd(), 'data', 'minijob-typen');
  if (!fs.existsSync(dataDir)) return [];

  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json'));
  return files
    .map((file) => {
      try {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        return JSON.parse(content) as MinijobTyp;
      } catch {
        return null;
      }
    })
    .filter((t): t is MinijobTyp => t !== null)
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));
}

let _cache: MinijobTyp[] | null = null;
function getCache(): MinijobTyp[] {
  if (!_cache) _cache = loadMinijobTypen();
  return _cache;
}

export const minijobTypen: MinijobTyp[] = loadMinijobTypen();

export function getMinijobTypBySlug(slug: string): MinijobTyp | undefined {
  return getCache().find((t) => t.slug === slug);
}

export function getMinijobTypenByCategory(categorySlug: string): MinijobTyp[] {
  return getCache().filter((t) => t.categorySlug === categorySlug);
}

export function getAllMinijobTypenSlugs(): string[] {
  return getCache().map((t) => t.slug);
}

export function getRelatedMinijobTypen(typ: MinijobTyp): MinijobTyp[] {
  const cache = getCache();
  return typ.relatedSlugs
    .map((slug) => cache.find((t) => t.slug === slug))
    .filter((t): t is MinijobTyp => t !== undefined);
}
