import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import InquiryForm from "@/components/contact/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} for solar product inquiries, quotations, and partnership opportunities. We respond within 24 hours.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Have a question or need a quotation? Fill out the form below and our team
            will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-primary mb-6">Send an Inquiry</h2>
              <InquiryForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-bg-light rounded-xl">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-sm">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-gray-500 text-sm hover:text-accent transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-bg-light rounded-xl">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-sm">Phone</h3>
                    <p className="text-gray-500 text-sm">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-bg-light rounded-xl">
                  <MessageCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-sm">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm hover:text-accent transition-colors"
                    >
                      {siteConfig.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-bg-light rounded-xl">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-sm">Location</h3>
                    <p className="text-gray-500 text-sm">{siteConfig.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-bg-light rounded-xl">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-sm">Response Time</h3>
                    <p className="text-gray-500 text-sm">Within 24 hours on business days</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100">
                <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  Prefer Instant Chat?
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  For urgent inquiries, reach us directly on WhatsApp. We typically
                  respond within minutes during business hours.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder / text */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            Based in{" "}
            <span className="font-semibold text-primary">{siteConfig.address.full}</span>
            {" "}— Serving clients worldwide
          </p>
        </div>
      </section>
    </>
  );
}
