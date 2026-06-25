import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import BrandPartners from "@/components/home/BrandPartners";

export const metadata: Metadata = {
  title: "Products",
  description: `Explore our complete range of solar products — solar panels, inverters, energy storage, mounting systems, solar pumps, EV chargers and more. Factory-direct quality from ${siteConfig.name}.`,
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Products</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Complete solar solutions — from photovoltaic modules and inverters to energy
            storage, mounting systems, and specialized solar applications.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <BrandPartners />

      {/* Bottom CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 mb-3">
            Didn&apos;t find what you&apos;re looking for?
          </p>
          <p className="text-lg font-medium text-primary">
            We source custom solar products.{" "}
            <a href="/contact" className="text-accent hover:underline font-semibold">
              Tell us your requirements →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
