import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, MapPin, Zap, Sun } from "lucide-react";
import { getSolutionBySlug } from "@/lib/solutions";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Solution Not Found" };
  return { title: solution.name, description: solution.shortDesc };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-primary py-20 sm:py-28 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src={solution.heroImage} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              {solution.name}
            </h1>
            <p className="text-orange-100 text-lg leading-relaxed">
              {solution.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">System Overview</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{solution.overview}</p>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-14 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] text-center mb-10">
            Key <span className="text-primary">Components</span>
          </h2>
          <div className="space-y-16">
            {solution.components.map((comp, i) => (
              <div
                key={comp.productSlug}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full max-w-lg lg:max-w-none">
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                    <Image
                      src={comp.image}
                      alt={comp.productName}
                      width={600}
                      height={400}
                      className="w-full aspect-[3/2] object-contain p-4"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-4">
                    {comp.productName}
                  </h3>
                  <ul className="space-y-2.5 mb-6">
                    {comp.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${comp.productSlug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
                  >
                    View Product Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] text-center mb-10">
            Installation <span className="text-primary">Applications</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {solution.applications.map((app) => (
              <div
                key={app.name}
                className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:border-accent/30 hover:shadow-md transition-all"
              >
                <div className="aspect-[16/10] bg-gray-50 relative">
                  <Image src={app.image} alt={app.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[#1E293B] mb-1.5">{app.name}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {solution.relatedProjects.length > 0 && (
        <section className="py-14 bg-bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] text-center mb-3">
              Project <span className="text-primary">Cases</span>
            </h2>
            <p className="text-gray-500 text-center text-sm mb-10">
              Our successful stories around the world
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {solution.relatedProjects.map((proj) => (
                <div
                  key={proj.title}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="aspect-[16/10] bg-gray-50 relative">
                    <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {proj.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {proj.capacity}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#1E293B] mb-1.5">{proj.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-14 h-14 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
            <Sun className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Interested in This Solution?
          </h2>
          <p className="text-orange-100 mb-8 leading-relaxed">
            Tell us about your project — we&apos;ll recommend the right configuration
            and provide a detailed quotation within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-[#1E293B] font-bold rounded-xl hover:bg-accent-light transition-all shadow-lg"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
