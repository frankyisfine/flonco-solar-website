import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import SourceFactory from "@/components/home/SourceFactory";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <SourceFactory />
      <ProductCategories />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
