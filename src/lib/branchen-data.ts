export interface Branche {
  slug: string;
  name: string;
  icon: string;
  beschreibung: string;
  beispielJobs: string[];
  gehaltsspanne: string;
}

export const branchen: Branche[] = [
  {
    slug: 'gastronomie-service',
    name: 'Gastronomie & Service',
    icon: '\uD83C\uDF7D\uFE0F',
    beschreibung: 'Kellnern, Barkeeping, Kueche, Catering und Co. Die Gastronomie bietet flexible Minijobs mit Trinkgeld-Potenzial, ideal fuer Abende und Wochenenden.',
    beispielJobs: ['Servicekraft im Restaurant', 'Barkeeper/in', 'Kuechenhilfe', 'Catering-Aushilfe', 'Spuelkraft'],
    gehaltsspanne: '12,82 - 15,00 EUR/Stunde',
  },
  {
    slug: 'einzelhandel-verkauf',
    name: 'Einzelhandel & Verkauf',
    icon: '\uD83D\uDECD\uFE0F',
    beschreibung: 'Kasse, Regale einraeumen, Kundenberatung. Der Einzelhandel sucht staendig Aushilfen, besonders an Samstagen und in der Weihnachtszeit.',
    beispielJobs: ['Kassierer/in', 'Regaleinraeumer/in', 'Verkaufsaushilfe', 'Lagerauffueller/in', 'Inventurhilfe'],
    gehaltsspanne: '12,82 - 14,00 EUR/Stunde',
  },
  {
    slug: 'lager-logistik',
    name: 'Lager & Logistik',
    icon: '\uD83D\uDCE6',
    beschreibung: 'Kommissionieren, Verpacken, Versand. Lager-Jobs sind koerperlich, aber bieten oft flexible Schichten und brauchen keine Vorkenntnisse.',
    beispielJobs: ['Kommissionierer/in', 'Verpacker/in', 'Lagerhelfer/in', 'Wareneingangshelfer/in', 'Inventurhelfer/in'],
    gehaltsspanne: '12,82 - 15,50 EUR/Stunde',
  },
  {
    slug: 'lieferung-kurier',
    name: 'Lieferung & Kurier',
    icon: '\uD83D\uDEB2',
    beschreibung: 'Essen liefern, Pakete zustellen, Fahrradkurier. Lieferjobs bieten maximale Flexibilitaet und eignen sich perfekt als Nebenjob.',
    beispielJobs: ['Essenslieferant/in', 'Fahrradkurier/in', 'Paketzusteller/in', 'Einkaufsservice', 'Zeitungszusteller/in'],
    gehaltsspanne: '12,82 - 16,00 EUR/Stunde',
  },
  {
    slug: 'buero-verwaltung',
    name: 'Buero & Verwaltung',
    icon: '\uD83D\uDCBC',
    beschreibung: 'Datenerfassung, Ablage, Telefonservice. Buero-Minijobs sind ideal fuer alle, die lieber am Schreibtisch arbeiten und gute PC-Kenntnisse haben.',
    beispielJobs: ['Bueroaushilfe', 'Datenerfasser/in', 'Empfangskraft', 'Telefonist/in', 'Sekretariats-Aushilfe'],
    gehaltsspanne: '12,82 - 16,00 EUR/Stunde',
  },
  {
    slug: 'events-promotion',
    name: 'Events & Promotion',
    icon: '\uD83C\uDFAA',
    beschreibung: 'Messen, Konzerte, Promotion-Aktionen. Event-Jobs sind abwechslungsreich, oft am Wochenende und bringen spannende Erlebnisse.',
    beispielJobs: ['Promoter/in', 'Messehostess/-host', 'Eventhelfer/in', 'Aufbauhelfer/in', 'Garderobenkraft'],
    gehaltsspanne: '12,82 - 18,00 EUR/Stunde',
  },
  {
    slug: 'reinigung-haushalt',
    name: 'Reinigung & Haushalt',
    icon: '\uD83E\uDDF9',
    beschreibung: 'Gebaeudereinigung, Haushaltshilfe, Buroreinigung. Reinigungsjobs bieten oft fruehe Morgen- oder spaete Abendschichten mit wenig Kundenkontakt.',
    beispielJobs: ['Gebaeudereiniger/in', 'Haushaltshilfe', 'Bueroreiniger/in', 'Fensterputzer/in', 'Hotelzimmer-Reinigung'],
    gehaltsspanne: '12,82 - 14,50 EUR/Stunde',
  },
  {
    slug: 'nachhilfe-betreuung',
    name: 'Nachhilfe & Betreuung',
    icon: '\uD83D\uDCDA',
    beschreibung: 'Nachhilfe geben, Kinderbetreuung, Seniorenbegleitung. Ideal fuer Studierende und alle mit paedagogischem Geschick.',
    beispielJobs: ['Nachhilfelehrer/in', 'Babysitter/in', 'Hausaufgabenbetreuer/in', 'Seniorenbegleiter/in', 'Lerncoach'],
    gehaltsspanne: '13,00 - 25,00 EUR/Stunde',
  },
  {
    slug: 'pflege-gesundheit',
    name: 'Pflege & Gesundheit',
    icon: '\uD83C\uDFE5',
    beschreibung: 'Pflegehilfe, Praxisaushilfe, Apothekenhelfer. Der Gesundheitsbereich bietet sinnstiftende Minijobs mit guter Bezahlung.',
    beispielJobs: ['Pflegehilfskraft', 'Praxisaushilfe', 'Apothekenhelfer/in', 'Alltagsbegleiter/in', 'Sanitaetsdienst-Aushilfe'],
    gehaltsspanne: '13,00 - 17,00 EUR/Stunde',
  },
  {
    slug: 'fitness-sport',
    name: 'Fitness & Sport',
    icon: '\uD83D\uDCAA',
    beschreibung: 'Fitnessstudio, Schwimmbad, Sportverein. Fuer alle, die Sport lieben und nebenbei Geld verdienen wollen.',
    beispielJobs: ['Fitnessstudio-Theke', 'Schwimmbad-Aufsicht', 'Trainer/in-Aushilfe', 'Sportplatzwart/in', 'Vereinshelfer/in'],
    gehaltsspanne: '12,82 - 16,00 EUR/Stunde',
  },
];

export function getBrancheBySlug(slug: string): Branche | undefined {
  return branchen.find((b) => b.slug === slug);
}

export function getAllBranchenSlugs(): string[] {
  return branchen.map((b) => b.slug);
}
