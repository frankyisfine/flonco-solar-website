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

export interface NavChild {
  label: string;
  href: string;
  desc: string;
  image?: string;
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
        label: "Solar PV Solution",
        href: "/products/solar-panels",
        desc: "High-efficiency photovoltaic systems for residential, commercial, and utility-scale applications — grid-tied, off-grid, or hybrid.",
        image: "/menu/solar-pv.png",
      },
      {
        label: "Energy Storage Solution",
        href: "/products/energy-storage",
        desc: "Battery energy storage systems (BESS) for peak shaving, backup power, and solar self-consumption — residential to utility-scale.",
        image: "/menu/energy-storage.svg",
      },
      {
        label: "Solar + Storage Solution",
        href: "/products/complete-pv-systems",
        desc: "Integrated solar and battery systems for 24/7 clean energy — maximize self-consumption and ensure power reliability.",
        image: "/menu/energy-storage.svg",
      },
      {
        label: "EV Charging Solution",
        href: "/products/ev-charging-stations",
        desc: "AC and DC fast charging stations for home, workplace, fleet, and public charging networks — solar-integration ready.",
      },
      {
        label: "Solar Water Pumping",
        href: "/products/solar-water-pumps",
        desc: "Solar-powered water pumps for agricultural irrigation, livestock watering, and community water supply — zero fuel cost.",
        image: "/menu/solar-pump.jpg",
      },
      {
        label: "Solar Air Conditioning",
        href: "/products/solar-air-conditioners",
        desc: "Hybrid solar AC systems that reduce cooling electricity costs by 50–90% — ideal for sunny climates.",
        image: "/menu/solar-ac.jpg",
      },
      {
        label: "Off-Grid & Microgrid",
        href: "/products/complete-pv-systems",
        desc: "Independent power systems for remote locations, islands, and critical infrastructure — reliable, sustainable, self-sufficient.",
        image: "/menu/microgrid.svg",
      },
      {
        label: "OEM & Factory Sourcing",
        href: "/contact",
        desc: "Custom manufacturing, private labeling, and direct factory partnerships — your brand, our quality.",
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
        image: "/menu/solar-pv.png",
      },
      {
        label: "Inverters",
        href: "/products/inverters",
        desc: "String, hybrid, and microinverters from 1kW to 250kW+ — up to 99% efficiency with smart monitoring.",
        image: "/menu/inverter.svg",
      },
      {
        label: "Energy Storage",
        href: "/products/energy-storage",
        desc: "LiFePO4 battery systems 5kWh to 1MWh+ — 6,000+ cycles, intelligent BMS, modular design.",
        image: "/menu/energy-storage.svg",
      },
      {
        label: "Mounting Systems",
        href: "/products/mounting-systems",
        desc: "Roof, ground, carport, and tracking mounts — aluminum & galvanized steel, 25+ year durability.",
      },
      {
        label: "Complete PV Systems",
        href: "/products/complete-pv-systems",
        desc: "Pre-configured solar kits for residential, commercial, and off-grid — all components, one supplier.",
        image: "/menu/solar-pv.png",
      },
      {
        label: "Solar Water Pumps",
        href: "/products/solar-water-pumps",
        desc: "Submersible & surface pumps up to 500m³/h — MPPT controller, stainless steel, zero operating cost.",
        image: "/menu/solar-pump.jpg",
      },
      {
        label: "Solar Pump Inverters",
        href: "/products/solar-pump-inverters",
        desc: "Drive standard AC pumps directly from solar panels — advanced MPPT, hybrid grid input option.",
        image: "/menu/inverter.svg",
      },
      {
        label: "Solar Air Conditioners",
        href: "/products/solar-air-conditioners",
        desc: "9,000–60,000 BTU hybrid solar AC — DC inverter, R32 eco refrigerant, quick 2–3 year payback.",
        image: "/menu/solar-ac.jpg",
      },
      {
        label: "EV Charging Stations",
        href: "/products/ev-charging-stations",
        desc: "7kW AC to 360kW DC fast chargers — CCS2, CHAdeMO, GB/T, OCPP 1.6J remote management.",
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
