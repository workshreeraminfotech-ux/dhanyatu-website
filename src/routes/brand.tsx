import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Check,
  Droplet,
  Shield,
  Truck,
  Wrench,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import companyLogo from "@/assets/dhanyatu-logo.png";
import aboutImg from "@/assets/about-industrial.png";
import heroImg from "@/assets/hero-industrial.jpg";
import trustImg from "@/assets/why-trust.jpg";

export const Route = createFileRoute("/brand")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      name: (search.name as string) || "yati",
    };
  },
  component: BrandDetailsPage,
});

function BrandDetailsPage() {
  const { name } = Route.useSearch();
  const brandName = name.toLowerCase() === "venlub" ? "venlub" : "yati";

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandName]);

  const brandData = {
    yati: {
      name: "YATI COOL",
      tag: "Own Performance Brand",
      desc: "YATI COOL is the premier, performance-engineered flagship brand developed in-house and manufactured by Dhanyatu Group. Formulated to meet the rigorous demands of India's manufacturing core, YATI products utilize premium grade base oils and advanced additive packages. Every batch is manufactured under strict Quality Management Systems (QMS) and extensively tested against stringent machine manufacturer specifications.",
      features: [
        "Tested to meet machine manufacturer's specifications.",
        "Engineered through strict Quality Management Systems (QMS).",
        "Formulated with high-viscosity index base oils.",
        "Guarantees extended equipment life and rust prevention.",
      ],
      categories: [
        "Hydraulic & Machinery Oils",
        "Metalworking Oils & Fluids",
        "Corrosion Preventives",
        "Turbine & Gear Oils",
        "Compressor & Refrigeration Oils",
        "Energy Saving & Eco-Friendly Lubricants",
        "Cleaners, Greases, and Coolants",
      ],
      image: aboutImg,
      bgColor: "from-ember/20 to-transparent",
      badgeColor: "bg-ember/10 text-ember",
    },
    venlub: {
      name: "VENLUB Fluids",
      tag: "Authorised Regional Distributor",
      desc: "Dhanyatu is the regional distributor of VENLUB specialty fluids and performance lubricants across Gujarat. Delivering specialized engineering fluid formulas, VENLUB solutions are designed for high-stress industrial applications. By warehousing bulk stocks locally in Rajkot, we ensure direct supply routes, immediate local availability, and full logistic support for factories, MNCs, and MSMEs.",
      features: [
        "Authorised regional distribution covering all of Gujarat.",
        "Specialized formulas for heavy-duty manufacturing tasks.",
        "Immediate local warehousing for rapid delivery.",
        "Full technical audit support and consultation.",
      ],
      categories: [
        "Specialty Lubricants",
        "Heat Transfer Oils",
        "Textile Specialties",
        "Heavy-Duty Engine & Transmission Oils",
        "Synthetic Fluids",
        "Industrial Greases",
      ],
      image: heroImg,
      bgColor: "from-graphite/20 to-transparent",
      badgeColor: "bg-graphite/10 text-graphite",
    },
  };

  const currentBrand = brandData[brandName];

  return (
    <div className="w-full bg-surface font-sans text-graphite overflow-x-hidden">
      {/* Main Content */}

      {/* Main Content */}
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container-x">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-8">
            <Link to="/" className="hover:text-ember">
              Home
            </Link>
            <span>/</span>
            <span>Brands</span>
            <span>/</span>
            <span className="text-graphite font-bold">{currentBrand.name}</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Left: Product/Brand Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] w-full"
            >
              <img
                src={currentBrand.image}
                alt={currentBrand.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/30 to-transparent" />
            </motion.div>

            {/* Right: Details content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase ${currentBrand.badgeColor}`}
              >
                {currentBrand.tag}
              </span>

              <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold tracking-tight text-graphite">
                {currentBrand.name}
              </h1>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {currentBrand.desc}
              </p>

              {/* Core Features list */}
              <div className="mt-8 border-t border-graphite/10 pt-8">
                <h3 className="font-display text-base font-semibold text-graphite mb-4">
                  Core Performance Values
                </h3>
                <ul className="grid gap-3 text-sm text-muted-foreground">
                  {currentBrand.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember/10 text-ember mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product categories */}
              <div className="mt-8 border-t border-graphite/10 pt-8">
                <h3 className="font-display text-base font-semibold text-graphite mb-4">
                  Available Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentBrand.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-graphite border border-graphite/5 hover:border-ember/40 hover:text-ember transition-all"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inquire CTA Button */}
              <div className="mt-10">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-graphite hover:bg-ember px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 gap-2 group"
                >
                  Inquire For {currentBrand.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
