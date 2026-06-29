import type { Product } from "./products";

export interface Solution {
  slug: string;
  name: string;
  shortDesc: string;
  overview: string;
  heroImage: string;
  components: SolutionComponent[];
  applications: SolutionApplication[];
  relatedProjects: SolutionProject[];
}

export interface SolutionComponent {
  productSlug: string;
  productName: string;
  image: string;
  features: string[];
}

export interface SolutionApplication {
  name: string;
  desc: string;
  image: string;
}

export interface SolutionProject {
  title: string;
  location: string;
  capacity: string;
  desc: string;
  image: string;
}

export const solutions: Solution[] = [
  {
    slug: "residential-solar",
    name: "Residential Solar Solution",
    shortDesc:
      "Turn your rooftop into a clean energy source. FLONCO residential solar systems deliver reliable, cost-saving power for homes of all sizes.",
    overview:
      "Our residential solar solutions combine high-efficiency FLONCO solar modules, smart inverters, and optional battery storage into a complete, easy-to-install system. Whether you're building a new home or retrofitting an existing roof, we provide customized configurations that maximize energy yield and minimize electricity bills. All components are covered by our 25-year module warranty and comprehensive system support.",
    heroImage: "/products/solar-module.jpg",
    components: [
      {
        productSlug: "solar-panels",
        productName: "High-Efficiency Solar Modules",
        image: "/products/solar-module.jpg",
        features: [
          "PERC & TOPCon technology — up to 22.8% efficiency",
          "400W–700W+ power range for all roof sizes",
          "25-year linear power output warranty",
          "Anti-PID, salt mist, and ammonia resistance certified",
          "TÜV, CE, IEC 61215/61730 certified",
        ],
      },
      {
        productSlug: "inverters",
        productName: "Smart Solar Inverters",
        image: "/products/inverter.png",
        features: [
          "String & hybrid inverter options — 1kW to 50kW",
          "Up to 99% peak conversion efficiency",
          "Built-in WiFi/4G monitoring & remote firmware updates",
          "Compatible with leading battery brands",
          "IP65/IP66 rated for outdoor installation",
        ],
      },
      {
        productSlug: "energy-storage",
        productName: "Home Battery Storage",
        image: "/products/energy-storage.png",
        features: [
          "LiFePO4 chemistry — safest lithium technology",
          "Wall-mounted & stackable designs — 5kWh to 20kWh",
          "6,000+ cycles at 80% DoD",
          "Intelligent BMS with multi-layer protection",
          "Seamless backup power switching (<10ms)",
        ],
      },
      {
        productSlug: "mounting-systems",
        productName: "Roof Mounting Systems",
        image: "/products/mounting.png",
        features: [
          "Compatible with tile, metal, shingle, and flat roofs",
          "AL6005-T5 aluminum — 25+ year corrosion resistance",
          "Pre-assembled components for fast installation",
          "Wind & snow load certified (up to 60 m/s)",
          "Custom design service for unique roof layouts",
        ],
      },
    ],
    applications: [
      {
        name: "Pitched Tile Roof",
        desc: "Adjustable tilt mounting with tile hooks and flashing kits for watertight installation on terracotta and concrete tile roofs.",
        image: "/factory/module-inspection.jpg",
      },
      {
        name: "Metal Sheet Roof",
        desc: "Clamp-based mounting with L-feet and rail systems — no penetration required for standing seam and corrugated metal roofs.",
        image: "/factory/module-inspection.jpg",
      },
      {
        name: "Flat Concrete Roof",
        desc: "Ballasted or anchored triangle mounting systems with adjustable tilt angles for optimal solar yield on flat rooftops.",
        image: "/factory/module-inspection.jpg",
      },
    ],
    relatedProjects: [
      {
        title: "6.6kW Residential Rooftop",
        location: "Queensland, Australia",
        capacity: "6.6 kW",
        desc: "Grid-tied residential system with 16× FLONCO 415W modules and 5kW hybrid inverter. Covers 85% of household consumption.",
        image: "/factory/module-inspection.jpg",
      },
      {
        title: "10kW Home Solar + Storage",
        location: "Sao Paulo, Brazil",
        capacity: "10 kW + 10kWh",
        desc: "Hybrid system with battery backup for load-shedding protection. 24× panels, 8kW inverter, wall-mounted LiFePO4 battery.",
        image: "/factory/battery-line.jpg",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
