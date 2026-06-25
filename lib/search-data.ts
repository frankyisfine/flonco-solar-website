import { products } from "./products";
import { brandPartners } from "./site-config";

export interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Pages
  results.push({
    title: "Home",
    description: "FLONCO — your trusted solar energy partner. Premium solar products from China's top manufacturers.",
    href: "/",
    category: "Page",
    keywords: ["home", "solar", "flonco"],
  });
  results.push({
    title: "Solutions",
    description: "Full-scenario solar energy solutions — residential, commercial, off-grid, and hybrid systems.",
    href: "/solutions",
    category: "Page",
    keywords: ["solution", "solar", "residential", "commercial", "off-grid", "hybrid", "microgrid"],
  });
  results.push({
    title: "Products",
    description: "Complete range of solar products — panels, inverters, batteries, mounting, pumps, EV chargers and more.",
    href: "/products",
    category: "Page",
    keywords: ["product", "all", "catalog"],
  });
  results.push({
    title: "Projects",
    description: "Our solar project portfolio — residential, commercial, industrial installations worldwide.",
    href: "/projects",
    category: "Page",
    keywords: ["project", "case", "installation", "portfolio", "reference"],
  });
  results.push({
    title: "About Us",
    description: "Learn about FLONCO — our story, mission, and team behind the solar export business.",
    href: "/about",
    category: "Page",
    keywords: ["about", "company", "who", "story", "mission", "team"],
  });
  results.push({
    title: "Contact Us",
    description: "Get in touch — request a quote, ask a question, or discuss your solar project requirements.",
    href: "/contact",
    category: "Page",
    keywords: ["contact", "quote", "inquiry", "message", "email", "whatsapp"],
  });
  results.push({
    title: "Power Calculator",
    description: "Estimate your solar energy production by entering your location and system capacity.",
    href: "/power-calculator",
    category: "Tool",
    keywords: ["calculator", "power", "estimate", "kwh", "production", "solar calculator"],
  });

  // Products
  for (const p of products) {
    results.push({
      title: p.name,
      description: p.description,
      href: `/products/${p.slug}`,
      category: "Product",
      keywords: [p.name.toLowerCase(), p.category.toLowerCase(), ...p.features.map((f) => f.toLowerCase())],
    });
  }

  // Brand partners
  for (const b of brandPartners) {
    results.push({
      title: b.name,
      description: `${b.tier} brand — ${b.category} partner`,
      href: "/products",
      category: "Brand Partner",
      keywords: [b.name.toLowerCase(), b.category.toLowerCase(), b.tier.toLowerCase()],
    });
  }

  // Solution landing pages (links to product pages for now)
  const solutionMappings: Array<{ title: string; keywords: string[]; href: string }> = [
    { title: "Solar Panels & Modules", keywords: ["solar panel", "pv module", "photovoltaic", "panel", "module", "monocrystalline", "polycrystalline", "bifacial"], href: "/products/solar-panels" },
    { title: "Solar Inverters", keywords: ["inverter", "string inverter", "hybrid inverter", "microinverter", "converter", "power electronics"], href: "/products/inverters" },
    { title: "Energy Storage Batteries", keywords: ["battery", "storage", "lifepo4", "lithium", "bess", "energy storage", "backup", "off-grid"], href: "/products/energy-storage" },
    { title: "Solar Mounting Systems", keywords: ["mounting", "rack", "structure", "rooftop", "ground mount", "carport", "tracking", "bracket"], href: "/products/mounting-systems" },
    { title: "Complete PV Systems", keywords: ["complete system", "kit", "package", "turnkey", "all-in-one", "residential kit", "commercial system"], href: "/products/complete-pv-systems" },
    { title: "Solar Water Pumps", keywords: ["water pump", "pump", "irrigation", "submersible", "surface pump", "livestock", "agriculture"], href: "/products/solar-water-pumps" },
    { title: "Solar Air Conditioners", keywords: ["air conditioner", "ac", "cooling", "solar ac", "dc inverter", "hybrid ac"], href: "/products/solar-air-conditioners" },
    { title: "Solar Pump Inverters", keywords: ["pump inverter", "pump controller", "mppt", "water pump driver"], href: "/products/solar-pump-inverters" },
    { title: "EV Charging Stations", keywords: ["ev charger", "electric vehicle", "charging station", "dc fast charger", "ac charger", "ev charging"], href: "/products/ev-charging-stations" },
    { title: "OEM & Factory Sourcing", keywords: ["oem", "private label", "white label", "factory direct", "custom", "branding", "manufacturing"], href: "/contact" },
  ];

  for (const s of solutionMappings) {
    results.push({
      title: s.title,
      description: `Solar solution — ${s.title}`,
      href: s.href,
      category: "Solution",
      keywords: s.keywords,
    });
  }

  return results;
}

let _index: SearchResult[] | null = null;
export function getSearchIndex(): SearchResult[] {
  if (!_index) _index = buildSearchIndex();
  return _index;
}

/**
 * Simple fuzzy search: scores each result by how many query words match
 * the title, description, or keywords. Returns top N results sorted by score.
 */
export function search(query: string, max = 8): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const words = q.split(/\s+/);
  const index = getSearchIndex();

  const scored = index.map((item) => {
    let score = 0;

    // Title exact/partial match (highest weight)
    const titleLower = item.title.toLowerCase();
    if (titleLower === q) score += 100;
    else if (titleLower.startsWith(q)) score += 50;
    else if (titleLower.includes(q)) score += 30;

    // Keyword matches
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (kwLower === q) score += 80;
      else if (kwLower.startsWith(q)) score += 40;
      else if (kwLower.includes(q)) score += 20;

      // Partial word matches
      for (const w of words) {
        if (w.length < 2) continue;
        if (kwLower === w) score += 40;
        else if (kwLower.startsWith(w)) score += 25;
        else if (kwLower.includes(w)) score += 15;
      }
    }

    // Description matches (lower weight)
    const descLower = item.description.toLowerCase();
    if (descLower.includes(q)) score += 15;
    for (const w of words) {
      if (w.length > 2 && descLower.includes(w)) score += 5;
    }

    // Category match
    if (item.category.toLowerCase().includes(q)) score += 10;

    return { item, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((s) => s.item);
}
