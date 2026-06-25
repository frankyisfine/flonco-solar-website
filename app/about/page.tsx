import type { Metadata } from "next";
import { Globe, Target, TrendingUp, Users } from "lucide-react";
import { siteConfig, serviceProcess } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — a factory-backed renewable energy brand and system integrator. FLONCO-brand products, strategic joint-manufacturing, and global distribution.`,
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
              FLONCO SOLAR is a factory-backed renewable energy brand and system integrator
              based in Hefei, Anhui — China&apos;s photovoltaic heartland. We own the FLONCO
              brand, set our own technology standards, and deliver complete solar + storage
              solutions through strategic joint-manufacturing bases and a global distribution
              network spanning 30+ countries.
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
                desc: "To accelerate the global energy transition by delivering FLONCO-brand solar and storage solutions — combining factory quality with system integration expertise.",
              },
              {
                icon: Globe,
                title: "Our Vision",
                desc: "To become a globally recognized renewable energy brand, trusted for product quality, technology innovation, and end-to-end system integration capabilities.",
              },
              {
                icon: TrendingUp,
                title: "Our Model",
                desc: "Brand-owned, factory-backed. We set our own technology standards and deliver through strategic joint-manufacturing bases — combining quality control with supply chain efficiency.",
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
              Our Model: Factory-Backed, Brand-Owned
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                FLONCO is not a trading company — we are a brand owner and system
                integrator backed by strategic joint-manufacturing bases in Anhui
                Province, the epicenter of China&apos;s solar industry. Through exclusive
                joint ventures and long-term manufacturing partnerships, we control
                our product quality from raw material sourcing to final shipment.
              </p>
              <p>
                Our model combines the best of both worlds: the quality assurance
                and cost efficiency of factory-direct production, with the flexibility
                of a brand-driven technology company. We design the specifications,
                own the FLONCO brand, manage the supply chain, and integrate complete
                solar + storage systems — all while our joint-manufacturing partners
                operate world-class production facilities dedicated to our orders.
              </p>
              <p>
                From PERC and TOPCon modules (400W–700W+) to LiFePO4 battery systems
                (5kWh–1MWh+), every FLONCO product undergoes 100% EL inspection,
                IV curve testing, and multi-point quality checks. We hold international
                certifications including TÜV, CE, IEC 61215/61730, and ISO 9001.
              </p>
              <p>
                In addition to our own brand, we maintain distribution partnerships
                with Tier-1 manufacturers — giving our customers access to the full
                spectrum of solar products through a single, reliable partner. Whether
                you need FLONCO-brand modules, Sungrow inverters, or a complete
                turnkey system, we deliver. Schedule a visit to our Hefei headquarters
                and manufacturing bases anytime.
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
            Partner with FLONCO — your factory-backed brand and system integration
            partner for solar and storage solutions worldwide.
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
