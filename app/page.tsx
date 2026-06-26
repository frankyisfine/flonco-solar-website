import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProductSlider from "@/components/home/ProductSlider";

const featuredProducts = [
  { name: "Solar Modules", slug: "solar-panels", image: "/products/solar-module.jpg" },
  { name: "Inverters", slug: "inverters", image: "/products/inverter.png" },
  { name: "Energy Storage", slug: "energy-storage", image: "/products/energy-storage.png" },
  { name: "Mounting Systems", slug: "mounting-systems", image: "/products/mounting.png" },
  { name: "Solar Accessories", slug: "solar-accessories", image: "/products/accessories.jpg" },
];
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BrandPartners from "@/components/home/BrandPartners";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductSlider slides={featuredProducts} />
      <WhyChooseUs />
      <BrandPartners />
      <Testimonials />
      <CTASection />
    </>
  );
}
