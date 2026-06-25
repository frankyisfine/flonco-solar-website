import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block p-6 rounded-xl border border-gray-100 bg-white hover:border-accent/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
        {product.category}
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {product.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="text-xs px-2 py-0.5 bg-bg-light text-gray-600 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
        View Details <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
