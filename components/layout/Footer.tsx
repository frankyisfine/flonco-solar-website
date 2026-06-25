import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import { siteConfig, navLinks } from "@/lib/site-config";
import { products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Image
                src="/logo-colors/logo-white.svg"
                alt={siteConfig.name}
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Globe className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors" aria-label="Facebook">
                <Globe className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors" aria-label="YouTube">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-200">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-200">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.slice(0, 6).map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-gray-300 hover:text-accent text-sm transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-200">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-gray-300 hover:text-accent text-sm transition-colors">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {siteConfig.phone}
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {siteConfig.address.full}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Powering the Future with Solar Energy
          </p>
        </div>
      </div>
    </footer>
  );
}
