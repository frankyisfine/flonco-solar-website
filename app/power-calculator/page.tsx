import type { Metadata } from "next";
import PowerCalculator from "@/components/calculator/PowerCalculator";
import Link from "next/link";
import { Sun, MapPin, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Power Calculator",
  description:
    "Estimate how much electricity your solar installation will generate. Enter your location and planned system capacity for a free production forecast.",
};

export default function PowerCalculatorPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Solar Power Calculator
            </h1>
            <p className="text-orange-100 text-lg leading-relaxed">
              Estimate your solar energy production in seconds. Enter your
              location and planned system capacity — we&apos;ll calculate your
              annual electricity output using real historical solar radiation
              data.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <PowerCalculator />

      {/* How it works */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1E293B] text-center mb-10">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: MapPin,
                title: "Your Location",
                desc: "Enter your postal code and country / region. We look up your coordinates and retrieve 5 years of historical solar radiation data from weather archives.",
              },
              {
                step: "02",
                icon: Sun,
                title: "Solar Potential",
                desc: "We calculate the average daily Peak Sun Hours (PSH) for your area — the equivalent number of hours per day at 1,000 W/m² solar irradiance.",
              },
              {
                step: "03",
                icon: Zap,
                title: "Production Estimate",
                desc: "Using your system capacity, local PSH, and a 0.75 system efficiency factor, we estimate your annual, monthly, and daily energy production.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black text-accent/30 tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#1E293B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 mb-4">
            Ready to turn these numbers into a real solar project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20"
          >
            Talk to Our Team →
          </Link>
        </div>
      </section>
    </>
  );
}
