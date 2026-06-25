import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import InquiryForm from "@/components/contact/InquiryForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            {product.category}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{product.name}</h1>
          <p className="text-lg text-gray-500 max-w-3xl">{product.longDescription}</p>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-5">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-5">Technical Specifications</h2>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr
                        key={spec.label}
                        className={idx % 2 === 0 ? "bg-white" : "bg-bg-light"}
                      >
                        <td className="px-5 py-3 text-sm font-medium text-primary w-1/3">
                          {spec.label}
                        </td>
                        <td className="px-5 py-3 text-sm text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-primary mb-5">Applications</h2>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Interested in {product.name}?
            </h2>
            <p className="text-gray-500">
              Fill out the form below and we&apos;ll send you a detailed quotation within 24 hours.
            </p>
          </div>
          <div className="bg-bg-light rounded-xl p-6 sm:p-8 border border-gray-100">
            <InquiryForm defaultProduct={product.name} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-primary">Related Products</h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((rp) => (
              <ProductCard key={rp.slug} product={rp} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
