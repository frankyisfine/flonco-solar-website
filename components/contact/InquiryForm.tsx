"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { products } from "@/lib/products";

// You'll need a Web3Forms access key — sign up free at https://web3forms.com
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function InquiryForm({ defaultProduct }: { defaultProduct?: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: defaultProduct || "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Inquiry from ${form.company || form.name} — ${form.product || "General"}`,
          from_name: "FLONCO Website",
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          product_interest: form.product,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", product: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12 bg-green-50 rounded-xl border border-green-100">
        <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Your inquiry has been received. Our team will get back to you within
          24 hours. For urgent matters, please{" "}
          <a href="/contact" className="text-accent font-medium hover:underline">
            contact us via WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all"
            placeholder="Your Company Ltd."
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all"
            placeholder="+1 234 567 890"
          />
        </div>
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1.5">
          Product Interest
        </label>
        <select
          id="product"
          name="product"
          value={form.product}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all bg-white"
        >
          <option value="">Select a product...</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="Other">Other / Multiple Products</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all resize-y"
          placeholder="Please describe your requirements: product specifications, quantity, destination, timeline..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Inquiry
          </>
        )}
      </button>
    </form>
  );
}
