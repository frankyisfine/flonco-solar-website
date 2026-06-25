import type { Metadata } from "next";
import { Globe, Target, TrendingUp, Users } from "lucide-react";
import { siteConfig, serviceProcess } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — your trusted solar energy partner. We connect global buyers with China's best solar manufacturers, delivering quality and value.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About FLONCO</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a China-based solar energy trading company dedicated to connecting
              global buyers with premium photovoltaic products and solutions. With deep
              industry expertise and strong supplier relationships, we help our clients
              access quality solar technology at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To accelerate the global transition to clean energy by making high-quality solar products accessible and affordable for businesses and communities worldwide.",
              },
              {
                icon: Globe,
                title: "Our Vision",
                desc: "To become a leading solar trading partner globally, trusted for our product quality, industry expertise, and commitment to customer success.",
              },
              {
                icon: TrendingUp,
                title: "Our Values",
                desc: "Integrity, quality, and customer-first service guide everything we do. We build long-term partnerships, not just transactions.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/5 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                FLONCO was founded with a clear vision: to bridge the gap between
                international solar buyers and China&apos;s world-class photovoltaic
                manufacturing ecosystem. After years of hands-on experience in the solar
                export industry, we recognized that many buyers struggle to navigate the
                complex supplier landscape — and that&apos;s where we come in.
              </p>
              <p>
                Based in Hefei, Anhui — one of China&apos;s key hubs for solar technology
                and manufacturing — we have direct access to tier-1 factories and a deep
                network of trusted suppliers. This allows us to source high-quality products
                across the full solar supply chain at competitive factory-direct pricing.
              </p>
              <p>
                We work with installers, distributors, EPC contractors, and project
                developers across 15+ markets worldwide. Whether you need a single
                container of panels or a complete solar system solution, we provide
                the products, documentation, and support you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-12 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceProcess.map((s, i) => (
              <div key={s.step} className="relative text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {s.step}
                </div>
                <h3 className="font-semibold text-primary mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.description}</p>
                {i < serviceProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Partner with us for your solar product sourcing needs and experience the
            FLONCO difference.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
