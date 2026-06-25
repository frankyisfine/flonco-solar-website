export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
}

export const products: Product[] = [
  {
    slug: "solar-panels",
    name: "Solar Panels",
    category: "Photovoltaic Modules",
    description:
      "High-efficiency monocrystalline and polycrystalline solar panels ranging from 400W to 700W+ for residential, commercial, and utility-scale applications.",
    longDescription:
      "Our solar panels are manufactured using cutting-edge PERC, TOPCon, and HJT technologies. With conversion efficiencies exceeding 22%, they deliver outstanding performance even in low-light conditions. Available in a wide power range (400W–700W+), our panels are certified to withstand harsh environments including high wind loads, heavy snow, and salt mist corrosion. All panels come with a 25-year linear power output warranty.",
    image: "/images/products/solar-panels.jpg",
    features: [
      "High conversion efficiency up to 22.8%",
      "PERC / TOPCon / HJT technology options",
      "Anti-PID and anti-LID performance",
      "Excellent low-light performance",
      "Certified to IEC 61215, IEC 61730",
      "25-year linear power warranty",
      "Salt mist and ammonia resistance",
    ],
    specs: [
      { label: "Power Range", value: "400W – 700W+" },
      { label: "Cell Technology", value: "PERC / TOPCon / HJT" },
      { label: "Efficiency", value: "Up to 22.8%" },
      { label: "Cell Type", value: "Monocrystalline / Polycrystalline" },
      { label: "Frame", value: "Anodized Aluminum Alloy" },
      { label: "Glass", value: "3.2mm Tempered Glass" },
      { label: "Junction Box", value: "IP68 Rated" },
    ],
    applications: [
      "Residential rooftop systems",
      "Commercial & industrial rooftops",
      "Utility-scale solar farms",
      "Ground-mounted installations",
      "Off-grid solar systems",
    ],
  },
  {
    slug: "inverters",
    name: "Inverters",
    category: "Inverters & Power Electronics",
    description:
      "String inverters, hybrid inverters, and microinverters from 1kW to 250kW+ with high conversion efficiency and smart monitoring capabilities.",
    longDescription:
      "Our inverter lineup includes string inverters, hybrid inverters (for energy storage integration), and microinverters, covering power ranges from 1kW residential units to 250kW+ commercial-scale systems. With peak efficiencies up to 99%, built-in MPPT tracking, and intelligent monitoring via WiFi/4G, our inverters ensure optimal energy harvest and system reliability. All models are compatible with major battery brands and support grid-tied, off-grid, and hybrid configurations.",
    image: "/images/products/inverters.jpg",
    features: [
      "Max efficiency up to 99%",
      "Multiple MPPT inputs",
      "WiFi / 4G / LAN smart monitoring",
      "Hybrid-ready for battery integration",
      "IP65/IP66 weather protection",
      "AFCI and surge protection built-in",
      "10-year standard warranty",
    ],
    specs: [
      { label: "Power Range", value: "1kW – 250kW+" },
      { label: "Type", value: "String / Hybrid / Microinverter" },
      { label: "Max Efficiency", value: "Up to 99%" },
      { label: "MPPT Inputs", value: "2 – 12" },
      { label: "Protection Rating", value: "IP65 / IP66" },
      { label: "Communication", value: "WiFi / 4G / RS485" },
      { label: "Warranty", value: "5-10 Years" },
    ],
    applications: [
      "Residential solar systems",
      "Commercial & industrial systems",
      "Battery storage integration",
      "Grid-tied and off-grid setups",
      "Multi-orientation rooftops",
    ],
  },
  {
    slug: "energy-storage",
    name: "Energy Storage Batteries",
    category: "Energy Storage",
    description:
      "Lithium-ion battery systems from 5kWh to 1MWh+ for residential energy storage, commercial peak shaving, and utility-scale applications.",
    longDescription:
      "Our energy storage solutions feature LiFePO4 (lithium iron phosphate) battery technology, known for superior safety, long cycle life (6000+ cycles), and excellent thermal stability. Available in wall-mounted, stackable, and rack-mounted configurations for residential use, as well as containerized solutions for commercial and industrial applications. Our BMS ensures optimal battery management with overcharge, over-discharge, overcurrent, and temperature protection.",
    image: "/images/products/energy-storage.jpg",
    features: [
      "LiFePO4 chemistry for maximum safety",
      "6,000+ charge cycles @ 80% DoD",
      "Intelligent BMS with multi-layer protection",
      "Scalable and modular design",
      "Compatible with major inverter brands",
      "Wall-mounted / stackable / rack-mounted options",
      "10-year manufacturer warranty",
    ],
    specs: [
      { label: "Capacity Range", value: "5kWh – 1MWh+" },
      { label: "Battery Type", value: "LiFePO4 (LFP)" },
      { label: "Cycle Life", value: "≥6,000 cycles" },
      { label: "Depth of Discharge", value: "80% – 95% DoD" },
      { label: "Voltage", value: "48V / 51.2V / High Voltage" },
      { label: "Communication", value: "CAN / RS485 / WiFi" },
      { label: "Warranty", value: "10 Years" },
    ],
    applications: [
      "Home battery backup",
      "Commercial peak shaving",
      "Off-grid energy systems",
      "Solar self-consumption",
      "Microgrid and UPS applications",
    ],
  },
  {
    slug: "mounting-systems",
    name: "Mounting Systems",
    category: "Mounting Structures",
    description:
      "Complete mounting solutions including rooftop, ground-mount, carport, and tracking systems made from high-strength aluminum and galvanized steel.",
    longDescription:
      "Our mounting systems are engineered for durability and ease of installation. Using high-grade aluminum alloy (AL6005-T5) and hot-dip galvanized steel, they offer excellent corrosion resistance and structural integrity for 25+ years of service. We provide pre-assembled components and detailed installation guides. Custom design services are available for unique project requirements, including wind tunnel analysis and structural calculations.",
    image: "/images/products/mounting-systems.jpg",
    features: [
      "AL6005-T5 aluminum & hot-dip galvanized steel",
      "Pre-assembled components for fast installation",
      "25+ year corrosion resistance",
      "Custom design service available",
      "Wind and snow load certified",
      "Suitable for all roof types",
      "Tracking system option for +15-25% yield",
    ],
    specs: [
      { label: "Material", value: "AL6005-T5 / Hot-dip Galvanized Steel" },
      { label: "Max Wind Load", value: "Up to 60 m/s" },
      { label: "Max Snow Load", value: "Up to 1.6 kN/m²" },
      { label: "Tilt Angle", value: "0° – 60° (adjustable)" },
      { label: "Service Life", value: "25+ Years" },
      { label: "Surface Treatment", value: "Anodized / Galvanized" },
      { label: "Warranty", value: "10-15 Years" },
    ],
    applications: [
      "Pitched roof (tile, metal, shingle)",
      "Flat roof (ballasted & non-ballasted)",
      "Ground-mounted solar farms",
      "Solar carports",
      "Solar tracking systems",
    ],
  },
  {
    slug: "complete-pv-systems",
    name: "Complete PV Systems",
    category: "Solar Systems",
    description:
      "Turnkey solar system packages including panels, inverters, batteries, and mounting — pre-configured for residential, commercial, and off-grid applications.",
    longDescription:
      "Our complete PV system packages take the guesswork out of solar procurement. Each package is pre-configured by our engineering team to ensure component compatibility and optimal performance. Choose from residential kits (3kW-15kW), commercial solutions (20kW-500kW), and off-grid systems with battery backup. Every package includes detailed system design, wiring diagrams, and installation guidance. Custom configurations available upon request.",
    image: "/images/products/complete-systems.jpg",
    features: [
      "Pre-engineered and fully compatible",
      "All components from one supplier",
      "Detailed system design included",
      "Installation guidance and support",
      "Residential, C&I, and off-grid options",
      "Custom configuration available",
      "Single warranty coordination point",
    ],
    specs: [
      { label: "Residential", value: "3kW – 15kW" },
      { label: "Commercial", value: "20kW – 500kW+" },
      { label: "Off-Grid", value: "1kW – 100kW+" },
      { label: "Battery Option", value: "Optional / Included" },
      { label: "Grid Connection", value: "On-Grid / Off-Grid / Hybrid" },
      { label: "Design Service", value: "Included" },
      { label: "Delivery", value: "Worldwide shipping" },
    ],
    applications: [
      "Home solar systems",
      "Commercial & industrial solar",
      "Remote off-grid power",
      "Farm & agricultural solar",
      "Solar + battery backup systems",
    ],
  },
  {
    slug: "solar-air-conditioners",
    name: "Solar Air Conditioners",
    category: "Solar Appliances",
    description:
      "Energy-efficient solar-powered air conditioners that significantly reduce electricity costs for homes, offices, and commercial spaces.",
    longDescription:
      "Our solar air conditioners integrate directly with photovoltaic panels to provide cooling using clean solar energy. Available in split, cassette, and ducted configurations from 9,000 BTU to 60,000 BTU. Hybrid models can also run on grid power when solar is insufficient, ensuring 24/7 cooling comfort. These units can reduce cooling electricity costs by 50-90% depending on the installation, with payback periods as short as 2-3 years in sunny climates.",
    image: "/images/products/solar-ac.jpg",
    features: [
      "50-90% reduction in cooling electricity costs",
      "Hybrid solar + grid operation",
      "DC inverter compressor technology",
      "R410A / R32 eco-friendly refrigerant",
      "Available in split, cassette, and ducted types",
      "Smart WiFi control",
      "Quick payback (2-3 years)",
    ],
    specs: [
      { label: "Capacity Range", value: "9,000 – 60,000 BTU" },
      { label: "Type", value: "Split / Cassette / Ducted" },
      { label: "Power Source", value: "Solar DC + Grid AC (Hybrid)" },
      { label: "Compressor", value: "DC Inverter" },
      { label: "Refrigerant", value: "R410A / R32" },
      { label: "SEER Rating", value: "Up to 25+" },
      { label: "Operation Range", value: "-10°C to 52°C" },
    ],
    applications: [
      "Homes and apartments",
      "Offices and commercial spaces",
      "Hotels and resorts",
      "Schools and hospitals",
      "Remote off-grid buildings",
    ],
  },
  {
    slug: "solar-water-pumps",
    name: "Solar Water Pumps",
    category: "Solar Water Solutions",
    description:
      "Submersible and surface solar water pumps for agricultural irrigation, livestock watering, and community water supply — zero fuel cost, zero emissions.",
    longDescription:
      "Our solar water pumps provide reliable water pumping using only solar energy — no diesel, no grid power needed. Available as submersible pumps (for deep wells up to 350m) and surface pumps (for shallow water sources). Flow rates range from 1m³/h to 500m³/h. Each system includes the pump, solar panels, pump controller, and accessories. With no fuel costs and minimal maintenance, the lifetime savings compared to diesel pumps are substantial.",
    image: "/images/products/solar-water-pumps.jpg",
    features: [
      "Zero fuel cost — 100% solar powered",
      "Submersible and surface pump options",
      "MPPT pump controller for optimal efficiency",
      "Dry-run and overload protection",
      "Stainless steel pump body",
      "Automatic start/stop with sunlight",
      "5+ year pump warranty",
    ],
    specs: [
      { label: "Pump Type", value: "Submersible / Surface" },
      { label: "Flow Rate", value: "1 – 500 m³/h" },
      { label: "Max Head", value: "Up to 350m" },
      { label: "Power Range", value: "0.5HP – 75HP" },
      { label: "Controller", value: "MPPT with LCD display" },
      { label: "Motor Type", value: "Permanent Magnet / AC Induction" },
      { label: "Protection", value: "IP68 (Submersible)" },
    ],
    applications: [
      "Agricultural irrigation",
      "Livestock watering",
      "Community water supply",
      "Fish farming / aquaculture",
      "Industrial water supply",
    ],
  },
  {
    slug: "solar-pump-inverters",
    name: "Solar Pump Inverters",
    category: "Solar Water Solutions",
    description:
      "Dedicated solar pump inverters that convert DC from PV panels to AC for driving conventional water pumps, with MPPT tracking and automatic operation.",
    longDescription:
      "Our solar pump inverters allow you to power standard AC water pumps directly from photovoltaic panels. With advanced MPPT algorithms, they automatically adjust pump speed based on available sunlight, maximizing daily water output. They accept both solar DC input and grid/generator AC input for hybrid operation. Built-in protection features include dry-run detection, overload protection, and surge suppression. Compatible with most standard 3-phase and single-phase AC pumps.",
    image: "/images/products/solar-pump-inverters.jpg",
    features: [
      "Advanced MPPT for maximum water output",
      "Solar + grid/generator hybrid input",
      "Automatic pump speed regulation",
      "Dry-run detection and protection",
      "Compatible with standard AC pumps",
      "Built-in surge and overload protection",
      "Remote monitoring via GPRS/WiFi",
    ],
    specs: [
      { label: "Power Range", value: "0.75kW – 250kW" },
      { label: "Input", value: "Solar DC + AC Grid/Generator" },
      { label: "Output", value: "1-Phase / 3-Phase AC" },
      { label: "MPPT Efficiency", value: ">99%" },
      { label: "Protection", value: "IP54 / IP65" },
      { label: "Display", value: "LCD Touch Screen" },
      { label: "Communication", value: "GPRS / WiFi / RS485" },
    ],
    applications: [
      "AC pump solar conversion",
      "Agricultural irrigation systems",
      "Industrial water circulation",
      "Municipal water supply",
      "Desert greening projects",
    ],
  },
  {
    slug: "ev-charging-stations",
    name: "EV Charging Stations",
    category: "E-Mobility",
    description:
      "AC and DC electric vehicle charging stations from 7kW to 360kW for home, workplace, and commercial charging — compatible with all major EV standards.",
    longDescription:
      "Our EV charging stations cover the full spectrum of charging needs: from 7kW-22kW AC wall boxes for home and workplace charging, to 60kW-360kW DC fast chargers for commercial stations. All units support CCS2, CHAdeMO, and GB/T standards. Smart features include RFID authentication, mobile app control, OCPP 1.6J protocol for remote management, and dynamic load balancing. Our chargers can be integrated with solar and battery storage for truly green mobility.",
    image: "/images/products/ev-chargers.jpg",
    features: [
      "AC (7-22kW) and DC fast charging (60-360kW)",
      "CCS2 / CHAdeMO / GB/T compatibility",
      "OCPP 1.6J for remote management",
      "RFID / App / QR code authentication",
      "Solar + storage integration ready",
      "Dynamic load balancing",
      "IP54/IP65 weatherproof enclosure",
    ],
    specs: [
      { label: "AC Charger", value: "7kW / 11kW / 22kW" },
      { label: "DC Fast Charger", value: "60kW – 360kW" },
      { label: "Connector Standards", value: "CCS2 / CHAdeMO / GB/T" },
      { label: "Input Voltage", value: "AC 380V / 480V 3-Phase" },
      { label: "Protection", value: "IP54 / IP65" },
      { label: "Protocol", value: "OCPP 1.6J" },
      { label: "Warranty", value: "2 Years" },
    ],
    applications: [
      "Home EV charging",
      "Workplace charging stations",
      "Public EV charging networks",
      "Fleet charging depots",
      "Highway service stations",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}
