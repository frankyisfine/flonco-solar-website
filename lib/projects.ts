export interface ProjectItem {
  id: string;
  title: string;
  continent: "na" | "sa" | "eu" | "as" | "af" | "oc";
  country: string;
  systemType: SystemType;
  capacity: string;
  description: string;
  image: string;
}

export type SystemType = "solar-pv" | "energy-storage" | "ev-charging" | "solar-storage" | "solar-water-pump" | "solar-ac";

export const systemTypeLabels: Record<SystemType, string> = {
  "solar-pv": "Solar PV",
  "energy-storage": "Energy Storage",
  "ev-charging": "EV Charging",
  "solar-storage": "Solar + Storage",
  "solar-water-pump": "Solar Water Pump",
  "solar-ac": "Solar AC",
};

export const continentLabels: Record<string, string> = {
  na: "North America",
  sa: "South America",
  eu: "Europe",
  as: "Asia",
  af: "Africa",
  oc: "Oceania",
};

export const projects: ProjectItem[] = [
  {
    id: "na-01",
    title: "2.4MW Commercial Rooftop",
    continent: "na",
    country: "United States",
    systemType: "solar-pv",
    capacity: "2.4 MW",
    description: "Grid-tied rooftop installation for a logistics warehouse in California. High-efficiency bifacial modules with single-axis tracking.",
    image: "/images/projects/na-solar-01.jpg",
  },
  {
    id: "na-02",
    title: "500kWh Battery Storage",
    continent: "na",
    country: "Canada",
    systemType: "energy-storage",
    capacity: "500 kWh",
    description: "Commercial BESS for peak shaving at a manufacturing facility in Ontario. Integrated with existing solar array.",
    image: "/images/projects/na-storage-01.jpg",
  },
  {
    id: "na-03",
    title: "EV Fleet Charging Hub",
    continent: "na",
    country: "United States",
    systemType: "ev-charging",
    capacity: "480 kW",
    description: "DC fast charging station for a logistics fleet in Texas. 6 chargers with solar canopy integration.",
    image: "/images/projects/na-ev-01.jpg",
  },
  {
    id: "sa-01",
    title: "1.8MW Ground-Mount Farm",
    continent: "sa",
    country: "Brazil",
    systemType: "solar-pv",
    capacity: "1.8 MW",
    description: "Ground-mounted solar farm for agricultural cooperative in Minas Gerais. Grid-connected with net metering.",
    image: "/images/projects/sa-solar-01.jpg",
  },
  {
    id: "sa-02",
    title: "Solar Water Pumping System",
    continent: "sa",
    country: "Chile",
    systemType: "solar-water-pump",
    capacity: "75 HP",
    description: "Solar-powered irrigation system for a 200-hectare vineyard. Submersible pumps with MPPT controllers.",
    image: "/images/projects/sa-pump-01.jpg",
  },
  {
    id: "sa-03",
    title: "C&I Solar + Storage",
    continent: "sa",
    country: "Colombia",
    systemType: "solar-storage",
    capacity: "800 kW + 1.2MWh",
    description: "Hybrid solar-battery system for a textile factory. Reduces grid dependence by 65% with backup capability.",
    image: "/images/projects/sa-hybrid-01.jpg",
  },
  {
    id: "eu-01",
    title: "5MW Utility Solar Park",
    continent: "eu",
    country: "Germany",
    systemType: "solar-pv",
    capacity: "5 MW",
    description: "Utility-scale solar park in Brandenburg. High-efficiency modules with tracker system, grid-connected via 20kV line.",
    image: "/images/projects/eu-solar-01.jpg",
  },
  {
    id: "eu-02",
    title: "Residential Storage Rollout",
    continent: "eu",
    country: "Poland",
    systemType: "energy-storage",
    capacity: "200 units × 10kWh",
    description: "Distributed residential battery storage program. Wall-mounted LiFePO4 systems for solar self-consumption.",
    image: "/images/projects/eu-storage-01.jpg",
  },
  {
    id: "eu-03",
    title: "Commercial EV Charging",
    continent: "eu",
    country: "Spain",
    systemType: "ev-charging",
    capacity: "360 kW",
    description: "Public fast-charging plaza near Barcelona. Solar canopy + battery buffer for grid-friendly operation.",
    image: "/images/projects/eu-ev-01.jpg",
  },
  {
    id: "as-01",
    title: "10MW Solar Farm",
    continent: "as",
    country: "India",
    systemType: "solar-pv",
    capacity: "10 MW",
    description: "Ground-mounted utility solar farm in Rajasthan. High-temperature optimized modules with anti-soiling coating.",
    image: "/images/projects/as-solar-01.jpg",
  },
  {
    id: "as-02",
    title: "Microgrid for Island",
    continent: "as",
    country: "Philippines",
    systemType: "solar-storage",
    capacity: "500 kW + 2MWh",
    description: "Solar + storage microgrid replacing diesel generators for an island community. 24/7 clean power.",
    image: "/images/projects/as-microgrid-01.jpg",
  },
  {
    id: "as-03",
    title: "Factory Solar AC Systems",
    continent: "as",
    country: "Thailand",
    systemType: "solar-ac",
    capacity: "120,000 BTU",
    description: "Solar hybrid air conditioning for electronics factory. Reduced cooling costs by 70% with 2-year payback.",
    image: "/images/projects/as-ac-01.jpg",
  },
  {
    id: "af-01",
    title: "Off-Grid Solar Mini-Grid",
    continent: "af",
    country: "Kenya",
    systemType: "solar-storage",
    capacity: "200 kW + 800kWh",
    description: "Off-grid mini-grid powering a rural community of 5,000 people. Replaced diesel generators completely.",
    image: "/images/projects/af-minigrid-01.jpg",
  },
  {
    id: "af-02",
    title: "Agricultural Water Pumping",
    continent: "af",
    country: "Nigeria",
    systemType: "solar-water-pump",
    capacity: "50 HP",
    description: "Solar water pumping for 500-hectare irrigation project. Reliable year-round operation with zero fuel costs.",
    image: "/images/projects/af-pump-01.jpg",
  },
  {
    id: "af-03",
    title: "Hospital Backup Storage",
    continent: "af",
    country: "South Africa",
    systemType: "energy-storage",
    capacity: "300 kWh",
    description: "Battery backup for a regional hospital during load-shedding. Critical load support with seamless transfer.",
    image: "/images/projects/af-storage-01.jpg",
  },
  {
    id: "oc-01",
    title: "Residential Solar Program",
    continent: "oc",
    country: "Australia",
    systemType: "solar-pv",
    capacity: "500 units × 6.6kW",
    description: "Distributed residential rooftop solar program in Queensland. High-efficiency panels with 25-year warranty.",
    image: "/images/projects/oc-solar-01.jpg",
  },
  {
    id: "oc-02",
    title: "Community Battery Storage",
    continent: "oc",
    country: "New Zealand",
    systemType: "energy-storage",
    capacity: "1 MWh",
    description: "Shared community battery in Auckland suburb. Stores excess rooftop solar for evening use by 200 homes.",
    image: "/images/projects/oc-storage-01.jpg",
  },
];

export function getFilteredProjects(continent?: string, systemType?: string): ProjectItem[] {
  return projects.filter((p) => {
    if (continent && continent !== "all" && p.continent !== continent) return false;
    if (systemType && systemType !== "all" && p.systemType !== systemType) return false;
    return true;
  });
}

export function getProjectById(id: string): ProjectItem | undefined {
  return projects.find((p) => p.id === id);
}
