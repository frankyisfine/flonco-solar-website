import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BrandPartners from "@/components/home/BrandPartners";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductCategories />
      <WhyChooseUs />
      <BrandPartners />
      <Testimonials />
      <CTASection />
    </>
  );
}
