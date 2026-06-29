export const siteConfig = {
  name: "FLONCO",
  tagline: "Your Reliable Renewable Energy Partner & System Integrator",
  description:
    "FLONCO SOLAR is a factory-backed renewable energy brand and system integrator. We own the FLONCO brand and technology standards, with production through strategic joint-manufacturing bases in Anhui, China — delivering high-efficiency solar modules, battery storage, and complete energy solutions worldwide.",
  url: "https://floncoglobal.com",
  email: "info@floncoglobal.com",
  phone: "+86 138 XXXX XXXX",
  whatsapp: "+86138XXXXXXXX",
  wechat: "FLONCO_Global",
  address: {
    city: "Hefei",
    province: "Anhui",
    country: "China",
    full: "Hefei, Anhui, China",
  },
  social: {
    linkedin: "https://linkedin.com/company/flonco-global",
    facebook: "https://facebook.com/floncoglobal",
    youtube: "https://youtube.com/@floncoglobal",
  },
  stats: {
    yearsExperience: 8,
    marketsServed: 30,
    supplierPartners: 800,
    projectsDelivered: 2000,
    manufacturingBases: 3,
  },
} as const;

export interface NavSubChild {
  label: string;
  href: string;
}

export interface NavChild {
  label: string;
  href: string;
  desc: string;
  image?: string;
  children?: NavSubChild[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Grid-Tied / On-Grid Solar System",
        href: "/solutions/residential-solar",
        desc: "Connect to the utility grid to offset electricity bills. Sell excess power back to the grid with net metering — the most common solar setup.",
        image: "/products/solar-module.jpg",
        children: [
          { label: "Residential", href: "/solutions/residential-solar" },
          { label: "Commercial", href: "/solutions/residential-solar" },
          { label: "Utility", href: "/solutions/residential-solar" },
        ],
      },
      {
        label: "Hybrid Solar System",
        href: "/solutions/residential-solar",
        desc: "Combine solar panels with battery storage for energy independence. Use stored power at night or during outages — best of both worlds.",
        image: "/products/energy-storage.png",
        children: [
          { label: "Residential", href: "/solutions/residential-solar" },
          { label: "Commercial", href: "/solutions/residential-solar" },
          { label: "Utility", href: "/solutions/residential-solar" },
        ],
      },
      {
        label: "Off-Grid Solar System",
        href: "/solutions/residential-solar",
        desc: "Complete energy independence — no grid connection needed. Ideal for remote locations, islands, and areas with unreliable utility power.",
        image: "/products/energy-storage.png",
        children: [
          { label: "Residential", href: "/solutions/residential-solar" },
          { label: "Commercial", href: "/solutions/residential-solar" },
          { label: "Utility", href: "/solutions/residential-solar" },
        ],
      },
      {
        label: "Solar + EV Charger System",
        href: "/products/ev-charging-stations",
        desc: "Power your electric vehicle with sunshine. Integrated solar PV and EV charging — reduce fuel costs and carbon footprint.",
        image: "/products/solar-module.jpg",
        children: [
          { label: "Residential", href: "/products/ev-charging-stations" },
          { label: "Commercial", href: "/products/ev-charging-stations" },
          { label: "Utility", href: "/products/ev-charging-stations" },
        ],
      },
      {
        label: "Solar + Pump System",
        href: "/products/solar-water-pumps",
        desc: "Solar-powered water pumping for agricultural irrigation, livestock watering, and community supply — zero fuel cost, zero emissions.",
        image: "/products/solar-module.jpg",
      },
      {
        label: "Solar + Air Conditioner System",
        href: "/products/solar-air-conditioners",
        desc: "Reduce cooling electricity costs by 50–90% with hybrid solar AC. DC inverter technology for residential and commercial spaces.",
        image: "/products/solar-module.jpg",
      },
      {
        label: "BESS (Battery Energy Storage System)",
        href: "/products/energy-storage",
        desc: "Standalone battery storage for peak shaving, backup power, and grid services. LiFePO4 technology — 5kWh to 1MWh+ scalable systems.",
        image: "/products/energy-storage.png",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Solar Panels",
        href: "/products/solar-panels",
        desc: "High-efficiency mono PERC, TOPCon, and HJT modules — 400W to 700W+, 25-year warranty.",
        image: "/products/solar-module.jpg",
      },
      {
        label: "Inverters",
        href: "/products/inverters",
        desc: "String, hybrid, and microinverters from 1kW to 250kW+ — up to 99% efficiency with smart monitoring.",
        image: "/products/inverter.png",
      },
      {
        label: "Energy Storage",
        href: "/products/energy-storage",
        desc: "LiFePO4 battery systems 5kWh to 1MWh+ — 6,000+ cycles, intelligent BMS, modular design.",
        image: "/products/energy-storage.png",
      },
      {
        label: "Mounting Systems",
        href: "/products/mounting-systems",
        desc: "Roof, ground, carport, and tracking mounts — aluminum & galvanized steel, 25+ year durability.",
        image: "/products/mounting.png",
      },
      {
        label: "Solar Accessories",
        href: "/products/solar-accessories",
        desc: "DC combiner boxes, MC4 connectors, solar cables, optimizers, breakers, and surge protectors — everything to complete your installation.",
        image: "/products/accessories.jpg",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      {
        label: "North America",
        href: "/projects?continent=na",
        desc: "USA, Canada, Mexico — utility-scale farms, commercial rooftops, and residential solar across the continent.",
      },
      {
        label: "South America",
        href: "/projects?continent=sa",
        desc: "Brazil, Chile, Colombia — rapidly growing solar markets with abundant irradiation and strong policy support.",
      },
      {
        label: "Europe",
        href: "/projects?continent=eu",
        desc: "Germany, Spain, Poland — mature solar markets focused on energy transition and energy security.",
      },
      {
        label: "Asia",
        href: "/projects?continent=as",
        desc: "China, India, Japan, Southeast Asia — the world's largest solar manufacturing and installation base.",
      },
      {
        label: "Africa",
        href: "/projects?continent=af",
        desc: "South Africa, Kenya, Nigeria — high solar potential and growing demand for off-grid and C&I solutions.",
      },
      {
        label: "Oceania",
        href: "/projects?continent=oc",
        desc: "Australia, New Zealand — high solar adoption driven by abundant sunshine and supportive policies.",
      },
    ],
  },
  { label: "Manufacturing", href: "/factory" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Power Calculator", href: "/power-calculator" },
];

export const whyChooseUs = [
  {
    title: "Factory-Backed Quality",
    description:
      "Our production is powered by strategic joint-manufacturing bases in Anhui, China — giving you factory-direct pricing, rigorous quality control, and full production traceability.",
    icon: "Factory",
  },
  {
    title: "Brand-Owned Technology Standards",
    description:
      "FLONCO sets its own technical specifications — from cell selection to BMS logic. Every product bearing the FLONCO name meets our certified quality benchmarks (TÜV, CE, IEC, ISO).",
    icon: "ShieldCheck",
  },
  {
    title: "System Integration Expertise",
    description:
      "Beyond components — we design, configure, and deliver complete solar + storage systems. Our engineering team provides end-to-end support from system design to commissioning.",
    icon: "BadgeCheck",
  },
  {
    title: "Global Reach, Local Service",
    description:
      "Serving 30+ countries with dedicated account managers, multilingual support, and reliable after-sales service. We speak your language and understand your market.",
    icon: "Zap",
  },
] as const;

export const serviceProcess = [
  { step: "01", title: "Consultation", description: "Share your requirements and we'll analyze your needs" },
  { step: "02", title: "Quotation", description: "Receive a detailed quotation within 24 hours" },
  { step: "03", title: "Production", description: "We oversee production with strict quality control" },
  { step: "04", title: "Logistics", description: "Reliable shipping with full documentation support" },
  { step: "05", title: "Delivery", description: "On-time delivery with after-sales support" },
] as const;

export const brandPartners = [
  { name: "LONGi", category: "Solar Modules", tier: "Tier 1", logo: "/brand-logos/longi.png" },
  { name: "Jinko Solar", category: "Solar Modules", tier: "Tier 1", logo: "/brand-logos/jinkosolar.png" },
  { name: "Trina Solar", category: "Solar Modules", tier: "Tier 1", logo: "/brand-logos/trinasolar.png" },
  { name: "JA Solar", category: "Solar Modules", tier: "Tier 1", logo: "/brand-logos/jasolar.png" },
  { name: "Canadian Solar", category: "Solar Modules", tier: "Tier 1", logo: "/brand-logos/canadiansolar.png" },
  { name: "Sungrow", category: "Inverters", tier: "Tier 1", logo: "/brand-logos/sungrow.svg" },
  { name: "Growatt", category: "Inverters", tier: "Tier 1", logo: "/brand-logos/growatt.jpg" },
  { name: "GoodWe", category: "Inverters", tier: "Tier 1", logo: "/brand-logos/goodwe.png" },
  { name: "Huawei FusionSolar", category: "Inverters", tier: "Tier 1", logo: "/brand-logos/huawei.svg" },
  { name: "Deye", category: "Inverters", tier: "Tier 1", logo: "/brand-logos/deye.png" },
  { name: "Solis", category: "Inverters", tier: "Tier 1", logo: "/brand-logos/solis.png" },
  { name: "Solinteg", category: "Inverters", tier: "Tier 1", logo: "/brand-logos/solinteg.svg" },
  { name: "FOX ESS", category: "Inverters", tier: "Tier 1", logo: "/brand-logos/foxess.jpg" },
  { name: "EVE Energy", category: "Batteries & Cells", tier: "Tier 1", logo: "/brand-logos/eve.png" },
  { name: "CORNEX", category: "Batteries & Cells", tier: "Tier 1", logo: "/brand-logos/cornex.svg" },
  { name: "GREATPOWER", category: "Batteries & Cells", tier: "Tier 1", logo: "/brand-logos/greatpower.png" },
  { name: "CATL", category: "Batteries & Cells", tier: "Tier 1", logo: "/brand-logos/catl.svg" },
  { name: "Pylontech", category: "Batteries & Cells", tier: "Tier 1", logo: "/brand-logos/pylontech.svg" },
] as const;

export const testimonials = [
  {
    quote:
      "FLONCO has been our trusted solar partner for two years. Their FLONCO-brand modules consistently perform above spec, and when we need Tier-1 brands like LONGi or Jinko, they source them at better pricing than anyone else.",
    author: "Carlos M.",
    company: "Solar Energy Distributors Ltda.",
    role: "Procurement Director",
    country: "Brazil",
  },
  {
    quote:
      "What sets FLONCO apart is that they have their own brand and technology standards — you're not just buying from a trader. We visited their Hefei manufacturing base and saw the quality control firsthand.",
    author: "Ahmed R.",
    company: "GreenTech Solutions ME",
    role: "CEO",
    country: "UAE",
  },
  {
    quote:
      "The system integration support is invaluable. FLONCO's engineering team helped us design the right solar-plus-storage configuration for our commercial project, and handled everything from procurement to shipping documentation.",
    author: "Maria S.",
    company: "EcoVolt Energia",
    role: "Operations Manager",
    country: "Mexico",
  },
  {
    quote:
      "We appreciate that FLONCO offers both their own branded products and premium brands like Sungrow and Huawei. One partner, full product spectrum. Their technical team responds within 24 hours with detailed recommendations.",
    author: "David K.",
    company: "SunPower Distributors Ltd.",
    role: "Technical Director",
    country: "South Africa",
  },
] as const;

export const certifications = [
  { name: "ISO 9001", description: "Quality Management", icon: "ShieldCheck" },
  { name: "TÜV Rheinland", description: "Product Safety Certified", icon: "BadgeCheck" },
  { name: "IEC 61215", description: "Module Performance Standard", icon: "Zap" },
  { name: "IEC 61730", description: "Module Safety Standard", icon: "Shield" },
  { name: "CE Marking", description: "European Compliance", icon: "Globe" },
] as const;
