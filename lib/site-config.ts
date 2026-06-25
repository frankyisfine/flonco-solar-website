export const siteConfig = {
  name: "FLONCO",
  tagline: "Powering the Future with Solar",
  description:
    "FLONCO is your trusted partner for solar energy solutions. We supply high-quality photovoltaic modules, inverters, energy storage systems, mounting structures, and complete solar solutions for residential, commercial, and industrial applications worldwide.",
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
    yearsExperience: 2,
    marketsServed: 15,
    supplierPartners: 30,
    projectsDelivered: 50,
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
    title: "Factory Direct Supply",
    description:
      "We work directly with tier-1 manufacturers in China, eliminating middlemen and ensuring competitive pricing without compromising on quality.",
    icon: "Factory",
  },
  {
    title: "Quality Assurance",
    description:
      "All products undergo rigorous quality control with international certifications (TÜV, CE, IEC, ISO). We only deliver products that meet the highest standards.",
    icon: "ShieldCheck",
  },
  {
    title: "Professional Service",
    description:
      "With deep industry knowledge and 2+ years of hands-on experience, we provide expert guidance from product selection to after-sales support.",
    icon: "BadgeCheck",
  },
  {
    title: "Fast Response",
    description:
      "We understand the importance of time in business. You'll receive a quotation within 24 hours and dedicated support throughout your project.",
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
      "FLONCO has been our go-to solar panel supplier for two years. Their prices are consistently 8-12% below European distributors, and the quality control is excellent. Every shipment arrives with full documentation.",
    author: "Carlos M.",
    company: "Solar Energy Distributors Ltda.",
    role: "Procurement Director",
    country: "Brazil",
  },
  {
    quote:
      "Finding a reliable Chinese supplier was our biggest challenge until we found FLONCO. They speak perfect English, respond within hours, and really understand the import/export process. They made our first container order completely painless.",
    author: "Ahmed R.",
    company: "GreenTech Solutions ME",
    role: "CEO",
    country: "UAE",
  },
  {
    quote:
      "We switched from trading through Alibaba to working directly with FLONCO, and the difference is night and day. No more guessing about product quality — they provide inspection reports, factory videos, and real-time production updates.",
    author: "Maria S.",
    company: "EcoVolt Energia",
    role: "Operations Manager",
    country: "Mexico",
  },
  {
    quote:
      "The technical support is outstanding. When we needed help selecting the right inverter configuration for a 2MW commercial project, their engineering team provided detailed recommendations within 24 hours. Highly recommended for any serious solar importer.",
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
