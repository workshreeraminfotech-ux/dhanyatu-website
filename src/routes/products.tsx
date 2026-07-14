import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Search,
  Package,
  Tag,
  Beaker,
  ChevronRight,
  FileText,
} from "lucide-react";
import companyLogo from "@/assets/dhanyatu-logo.png";
import productImage from "@/assets/product-image.png";
import productsPdf from "@/assets/products.pdf";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      category: (search.category as string) || "industrial-lubricants",
    };
  },
  component: ProductCategoryPage,
});

/* ── Types ─────────────────────────────────────── */
interface Product {
  name: string;
  price: string;
  unit: string;
  specs: { label: string; value: string }[];
  description: string;
  features?: string[];
  brand: string;
}

interface Category {
  title: string;
  slug: string;
  tagline: string;
  products: Product[];
}

/* ── Data ───────────────────────────────────────── */
const categoryData: Category[] = [
  {
    title: "Industrial Lubricants",
    slug: "industrial-lubricants",
    tagline: "High-pressure formulations to keep heavy machinery running under extreme loads.",
    products: [
      {
        name: "Hydraulic Lubricating Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "ISO Viscosity Grade", value: "68" },
          { label: "Packaging Size", value: "210 Litre" },
          { label: "Performance Level", value: "AW (Anti-Wear)" },
          { label: "Pour Point", value: "−6 °C" },
          { label: "Viscosity Index", value: "61.2 – 74.8" },
          { label: "Packaging Type", value: "Bucket / Barrel" },
        ],
        description:
          "Especially engineered Hydraulic Oil made from quality chemically stable base stock. Designed for high-pressure hydraulic systems in industrial and mobile applications.",
        features: [
          "Anti-wear additives",
          "Chemically stable base stock",
          "Suitable for industrial machinery",
        ],
      },
      {
        name: "26 L Transformer Oil",
        price: "105",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Oil Type", value: "Mineral Oil" },
          { label: "Conforming Standard", value: "IS 335" },
          { label: "Kinematic Viscosity", value: "≤10 cSt @ 40°C" },
          { label: "Flash Point", value: "≥135 °C" },
          { label: "Pour Point", value: "≤−30 °C" },
          { label: "ISO VG Grade", value: "VG 32 to VG 220" },
        ],
        description:
          "Yati Slideway Lubricants available from ISO VG 32 to VG 220. Developed using highly refined base oils enhanced with trakifier and friction additives to offer required EP properties in slideway lubrication applications.",
      },
      {
        name: "EP Lubricant Oil",
        price: "145",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Lubricant Type", value: "Hydraulic Oil" },
          { label: "ISO VG Grade", value: "22" },
          { label: "Base Type", value: "Mineral" },
          { label: "Form", value: "Liquid" },
          { label: "Color", value: "Yellow" },
          { label: "Packaging Size", value: "5 Kg" },
        ],
        description:
          "Excellent quality EP Lubricant oil tested by quality controllers. Widely recommended for improving the performance of machines and spare parts. Available in bulk, free from all contamination.",
        features: [
          "Effective & long-lasting",
          "Excellent range",
          "Improves lubricity above other additives",
        ],
      },
      {
        name: "Yati Forging Lubricants",
        price: "135",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Lubricant Type", value: "Hydraulic Oil" },
          { label: "Base Type", value: "Mineral" },
          { label: "Flash Point", value: "180 °C (min)" },
          { label: "Application", value: "Forging Process" },
          { label: "Packaging Size", value: "50–100 L" },
          { label: "Packaging Type", value: "Drum" },
        ],
        description:
          "Water-based hot forging die lubricant with composition of microsized graphite. Formulated as per predefined standards for die life improvement and consistent forging results.",
        features: [
          "Superior micronized graphite",
          "Excellent release & lubrication",
          "Higher dilution ratios",
          "Lowest per-tonnage cost",
          "Die life improvement",
        ],
      },
      {
        name: "Multi Grade Lubricant",
        price: "145",
        unit: "Litre",
        brand: "Multigrade",
        specs: [
          { label: "Product Type", value: "Engine Oil" },
          { label: "Base Oil Type", value: "Synthetic" },
          { label: "Viscosity Grade", value: "32" },
          { label: "Flash Point", value: "240 °C" },
          { label: "Viscosity Index", value: "113" },
          { label: "Pack Size", value: "210 L" },
        ],
        description:
          "High quality Multi Grade Lubricant processed using premium quality mineral & synthetic base fluids. Demanded for automotive applications and for light & heavy duty vehicles.",
        features: [
          "Better resistance against wear",
          "Excellent thermal & oxidation stability",
          "Protects against rust and corrosion",
          "Smooth running in all climates",
        ],
      },
      {
        name: "Multi Grade Industrial Lubricants",
        price: "140",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Lubricant Type", value: "Hydraulic Oil" },
          { label: "ISO VG Grade", value: "22" },
          { label: "Base Type", value: "Mineral" },
          { label: "Pack Size", value: "Bucket of 20 Litre" },
          { label: "Packaging Type", value: "Drum" },
          { label: "Form", value: "Liquid" },
        ],
        description:
          "Broad assortment of Multi Grade Oil carefully processed using finely refined additives. Mainly used to lubricate pumps and boost functionality of different vehicles.",
        features: [
          "High detergency levels",
          "Fine thermal stability",
          "Withstands severe conditions",
        ],
      },
      {
        name: "Industrial Hydraulic Oil",
        price: "130",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Hydraulic Oil" },
          { label: "Viscosity Grade", value: "68" },
          { label: "Oil Type", value: "Mineral" },
          { label: "Performance Level", value: "API GL-5" },
          { label: "Density", value: "866 kg/m³" },
          { label: "Flash Point", value: "230 °C" },
        ],
        description:
          "Premium Industrial Hydraulic Oil for high-performance lubrication in demanding industrial hydraulic systems.",
      },
      {
        name: "Hydraulic Machine Oil",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "ISO VG Grade", value: "68" },
          { label: "Packaging Size", value: "210 L" },
          { label: "Performance Level", value: "AW (Anti-Wear)" },
          { label: "Grade", value: "32, 46, 68, 100, 150, 220, 320 & 460" },
          { label: "Appearance", value: "Pale Yellow" },
          { label: "Composition", value: "Anti-Wear" },
        ],
        description:
          "Especially engineered Hydraulic Oil made from quality chemically stable base stock. Available in a wide range of viscosity grades for different industrial applications.",
      },
      {
        name: "Special Purpose Hydraulic Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "ISO VG Grade", value: "68" },
          { label: "Packaging Size", value: "20–25 Litres" },
          { label: "Performance Level", value: "AW (Anti-Wear)" },
          { label: "Density", value: "0.88 kg/L" },
          { label: "Flash Point", value: "238 °C" },
          { label: "Packaging Type", value: "Bucket" },
        ],
        description:
          "Special Purpose Hydraulic Oil based on hydraulic mechanism used for enhancing the performance of hydraulic equipment across industrial applications.",
      },
      {
        name: "High Performance Industrial Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Hydraulic Oil" },
          { label: "Viscosity Grade", value: "68" },
          { label: "Oil Type", value: "Mineral" },
          { label: "Packaging Size", value: "210 L" },
          { label: "Performance Level", value: "API GL-5" },
          { label: "Country of Origin", value: "Made in India" },
        ],
        description:
          "High Performance Industrial Oil processed by professionals using latest technology and optimum quality additives. Highly appreciated for outstanding functionality and high efficiency.",
        features: [
          "High output",
          "Non-sticky",
          "Smooth performance",
          "Available in Gear, Engine, Hydraulic & Cutting variants",
        ],
      },
      {
        name: "Yati Refrigeration Oils",
        price: "160",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Hydraulic Oil" },
          { label: "Oil Type", value: "Refrigeration Oil" },
          { label: "Viscosity Grade", value: "68" },
          { label: "Packaging Size", value: "210 L" },
          { label: "Performance Level", value: "API GL-5" },
          { label: "Form", value: "Liquid" },
        ],
        description:
          "Suitable for recirculation, this accurately composed oil does not contain moisture or wax, resulting in excellent fluidity even at low temperatures.",
        features: [
          "Long-term anti-corrosive protection",
          "Low foaming tendency",
          "Good wetting properties",
        ],
      },
      {
        name: "Way Lube Synthetic Oils",
        price: "110",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Base Oil Type", value: "PAO" },
          { label: "ISO VG Grade", value: "ISO VG 320" },
          { label: "Packaging Size", value: "210 L" },
          { label: "Application", value: "Gear Oil" },
          { label: "Flash Point", value: "180 °C" },
          { label: "Grades Available", value: "32, 46, 68 etc." },
        ],
        description:
          "Yati offers the entire range of Way Lube oils with viscosity grades 32, 46, 68 and more. Designed for slideway and machine tool applications.",
      },
      {
        name: "AW Hydrol 68 Synthetic Oils",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Min Order Qty", value: "20 Litre" },
          { label: "Base Oil Type", value: "PAO" },
          { label: "Flash Point", value: "210 °C" },
          { label: "Pour Point", value: "−33 °C" },
          { label: "Viscosity Index", value: "120" },
          { label: "KV Range", value: "66–72 cSt @ 40°C" },
        ],
        description:
          "High performance anti-wear hydraulic oil for high-pressure systems in moderate to severe conditions. Formulated with thermally stable, zinc-based anti-wear additives.",
      },
      {
        name: "Yati Synthetic Oils",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Base Oil Type", value: "PAO" },
          { label: "ISO VG Grade", value: "ISO VG 320" },
          { label: "Packaging Size", value: "200 L" },
          { label: "Application", value: "Gear Oil" },
          { label: "Performance Level", value: "API CI-4" },
          { label: "Packaging Type", value: "Barrel" },
        ],
        description:
          "Premium Hydraulic Oil noted for long shelf life, accurate composition and excellent oxidation resistant capacity.",
      },
      {
        name: "100 L Chain Lubricant",
        price: "100",
        unit: "Piece",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Engine Oil" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "Grade", value: "Synthetic" },
          { label: "Qty Per Pack", value: "100 L" },
          { label: "Appearance", value: "Smooth Ointment" },
          { label: "Packaging Size", value: "Barrel of 50 Litre" },
        ],
        description:
          "Lubricant and protective agent for chains, wire ropes, gear drives, pulleys & pedals. Processed using optimum grade chemical compounds.",
        features: [
          "Reduces friction and loss of power",
          "Anti-wear properties increase chain durability",
          "Excellent penetration into links and pins",
        ],
      },
      {
        name: "VG 68 Anti Wear Hydraulic Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Min Order Qty", value: "20 Litre" },
          { label: "ISO VG Grade", value: "68" },
          { label: "Packaging Size", value: "210 L" },
          { label: "Performance Level", value: "AW (Anti-Wear)" },
          { label: "Composition", value: "Anti-Wear" },
          { label: "Grade", value: "VG 68" },
        ],
        description:
          "VG 68 Anti Wear Hydraulic Oil with long service life. Recommended for hydraulic systems and a wide variety of circulation systems.",
      },
      {
        name: "Oil Automotive Lubricants",
        price: "105",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Max Temp Rating", value: "200 °C" },
          { label: "Base Oil", value: "Mineral" },
          { label: "Packaging Size", value: "200–250 Litre" },
          { label: "Viscosity @ 40°C", value: "32 cSt" },
          { label: "Packaging Type", value: "Drum" },
          { label: "Form", value: "Liquid" },
        ],
        description:
          "Quality oils specially designed for high temperature operating conditions. Used in air cooled 4/2 stroke engines with special frictional properties.",
        features: [
          "Outstanding oxidation and wear protection",
          "Minimizes engine deposits",
          "Excellent sludge control",
        ],
      },
      {
        name: "Yati Marine Lubricants",
        price: "157",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Lubricants" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "Packaging Size", value: "210 Ltr" },
          { label: "Viscosity Grade", value: "30" },
          { label: "Application", value: "Main Engine" },
          { label: "Dropping Point", value: "180 °C" },
        ],
        description:
          "Marine Lubricants with excellent resistance to salt spray, heat, water, oxidation and adverse marine conditions.",
        features: ["Best quality", "Long shelf life", "High effectiveness"],
      },
    ],
  },
  {
    title: "Lubricant Oil",
    slug: "lubricant-oil",
    tagline: "General-purpose premium lubrication for all mechanical moving components.",
    products: [
      {
        name: "Yati White Oil",
        price: "95",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Pharma Grade" },
          { label: "Grade Standard", value: "Industrial Grade" },
          { label: "Viscosity Grade", value: "3.0 cSt" },
          { label: "Purity", value: "99 %" },
          { label: "Color", value: "Water White" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Created with the assistance of best tools, these oils are smooth and best in finish. This product is used for lubrication of food-grade machinery, auxiliary agents, and petroleum additives. Transparent and very finest in quality.",
        features: ["Transparent", "Odorless", "Best in class"],
      },
      {
        name: "Four Stroke Engine Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "20W-50" },
          { label: "Engine Oil Type", value: "Fully Synthetic" },
          { label: "Performance Level", value: "API SL" },
          { label: "Flash Point", value: "165 °C" },
          { label: "Pack Size", value: "5 L" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Specialized four stroke engine oil to suit the pockets of all our clients. Tremendously high demand due to superb quality in automotive and industrial sectors.",
        features: [
          "Enhances engine performance",
          "Increases engine life",
          "Recommended for better drain period",
          "Outstanding anti wear property",
        ],
      },
      {
        name: "Refrigeration Compressor Oil",
        price: "160",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Oil Type", value: "Mineral Oil" },
          { label: "Compressor Type", value: "Rotary Screw" },
          { label: "Packaging Type", value: "Drum" },
          { label: "Application", value: "Lubrication" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Suitable for recirculation, this accurately composed oil does not contain moisture and traces of wax, resulting in excellent fluidity characteristics even at low temperatures.",
        features: [
          "Long-term anti corrosive protection",
          "Low foaming tendency",
          "Good wetting properties",
        ],
      },
      {
        name: "High Pressure Lubrication Oil",
        price: "105",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "20W-40" },
          { label: "Oil Type", value: "Engine Oil" },
          { label: "Base Oil", value: "Mineral" },
          { label: "Flash Point / Drop Point", value: "321 °C" },
          { label: "Operation Temp", value: "-30 to 180 °C" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Distinguished collection of High Pressure Lubrication Oil. Appreciated for having anti-oxidants and excellent lubrication. Suitable for roller, wheel bearings, cams, slides, valves, conveyors and chains.",
      },
      {
        name: "Yati Base Oils",
        price: "96",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Group I" },
          { label: "Type", value: "Mineral Based Oil" },
          { label: "Kinematic Viscosity", value: "29-35 cSt @ 40°C" },
          { label: "Flash Point", value: "Min 210 °C" },
          { label: "Density", value: "840-870 Kg/m³" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Formulated using top-notch quality chemicals and latest technology in sync with set quality standards. Widely used in automobiles such as trucks, buses and other heavy vehicles.",
        features: [
          "Exceptional chemical & thermal stability",
          "Guards assembly against rust & corrosion",
          "Excellent extreme pressure property",
        ],
      },
      {
        name: "Yati Coolant Oil",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Boiling Point", value: "160 °C" },
          { label: "Concentration", value: "High" },
          { label: "Usage", value: "Automotive Industry" },
          { label: "Form", value: "Liquid" },
          { label: "Packaging Size", value: "25L, 50L, 210L" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Best suitable for all models of commercial vehicles. Organic coolant with metallic salt free corrosion inhibitor to provide powerful cooling, tested on various stages.",
        features: [
          "High viscosity index",
          "Spring-cap lid design",
          "Metallic salt free corrosion inhibitor",
        ],
      },
      {
        name: "Yati Lubricating Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Flash Point", value: "200-220 °C" },
          { label: "Packaging Size", value: "Barrel of 50 L" },
          { label: "Vehicle Type", value: "Scooter, Auto, Etc." },
          { label: "Usage", value: "Industrial Lubricant" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Keeps moving diesel parts clean from build-up, corrosion & overheating. Employs ultra-modern techniques to extend the life of the engine.",
        features: ["Non-toxic nature", "High purity", "Long drain capability"],
      },
      {
        name: "NLGI 2 Industrial Grease",
        price: "97",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "NLGI 2" },
          { label: "Form", value: "Grease" },
          { label: "Color", value: "Yellow" },
          { label: "Packaging Size", value: "20 Kg" },
          { label: "Min Order Qty", value: "250 Kg" },
        ],
        description:
          "Premium industrial grease formulated to provide excellent protection and lubrication for automotive and heavy duty equipment.",
      },
      {
        name: "Fully Refined Paraffin Wax / Rolling Oil",
        price: "145",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Application", value: "Lubricant" },
          { label: "Form", value: "Liquid" },
          { label: "Packaging Size", value: "200-250 L" },
          { label: "Drum Material", value: "MS" },
          { label: "Min Order Qty", value: "250 Kg" },
        ],
        description:
          "Based upon highly refined mineral oil along with a low zinc-containing anti-wear system. Specifically designed for the cold rolling of silicon steels, mild steels and carbon steels.",
        features: [
          "High load bearing",
          "Low carbon residues after anneal",
          "Improved surface finish",
          "Extended roll life",
        ],
      },
      {
        name: "20L Spindle Oil",
        price: "85",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "2 cSt" },
          { label: "Oil Type", value: "Semi Synthetic" },
          { label: "Base Oil", value: "Naphthenic" },
          { label: "Flash Point", value: "70 to 140 °C" },
          { label: "Color", value: "Pale Yellow" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Soluble in water and free from all types of adulterants and bacteria. Provides excellent spindle performance, low foaming, and long tool life.",
        features: ["Excellent thermal stability", "Longer shelf life", "Excellent viscosity"],
      },
      {
        name: "Circulating Oil for Automobiles",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "ISO Grade", value: "VG 32" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "Flash Point", value: "221 - 244 °C" },
          { label: "Rust Protection", value: "With Rust Inhibitor" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Circulating oil formulated using high quality ingredients. Features excellent viscosity and complete purity. Highly demanded in the automobile industry.",
        features: ["Accurate composition", "Resistant to oxidation", "Pure"],
      },
      {
        name: "Lithium Based Grease",
        price: "230",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Thickener Type", value: "Lithium" },
          { label: "NLGI Grade", value: "000" },
          { label: "EP Additive", value: "Yes" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "Form", value: "Grease" },
        ],
        description:
          "Lithium-based high performance grease formulated with specific multi-functional additives for lubrication under normal operating conditions to minimize wear and tear.",
      },
      {
        name: "Yati Cylinder Oils",
        price: "205",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Form", value: "Liquid" },
          { label: "Usage", value: "Industrial" },
          { label: "Packaging Type", value: "Drum" },
          { label: "Packaging Size", value: "250 L" },
        ],
        description:
          "Recommended for steam cylinder lubrication under wet saturated steam conditions, as well as worm gears, paper/textile mill calendar bearings, and sugar mill roller bearings.",
        features: ["Perfectly processed", "Oxidation stability", "Good emulsion stability"],
      },
      {
        name: "Yati Circulating Oil",
        price: "135",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Color", value: "Blue" },
          { label: "Form", value: "Liquid" },
          { label: "Pack Sizes", value: "1-5 L" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Uniquely formulated circulating oil with excellent viscosity and purity. Resistant to oxidation, low consumption, and highly reliable.",
        features: ["Resistant to oxidation", "Low consumption", "High purity"],
      },
    ],
  },
  {
    title: "Cutting Oil & Fluid",
    slug: "cutting-oil-fluid",
    tagline: "Advanced metalworking fluids for high-speed cutting, drilling and cooling.",
    products: [
      {
        name: "Soluble Cutting Oil",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Oil Type", value: "Semi-Synthetic" },
          { label: "Material Compat", value: "Ferrous Metals" },
          { label: "Flash Point", value: "170-250 °C" },
          { label: "Package Size", value: "210 L" },
          { label: "Application", value: "General Machining" },
        ],
        description:
          "Completely soluble cutting oil used for enhancing performance of engines and motors by leaps and bounds. Renowned for its excellent physical properties and accurate composition.",
        features: [
          "Low foaming tendency",
          "Good wetting properties",
          "Excellent thermal stability",
        ],
      },
      {
        name: "Biodegradable Cutting Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Soluble Oil (Milky)" },
          { label: "Flash Point", value: "150-180 °C" },
          { label: "Grade", value: "General Purpose" },
          { label: "Machined Mat", value: "Steel" },
          { label: "Packaging Size", value: "210 L" },
        ],
        description:
          "Environment friendly cutting oil widely acknowledged for its efficient performance across different machinery and equipment.",
        features: ["Environment-friendly", "Insoluble in water", "Cost effective"],
      },
      {
        name: "Yati Industrial Lubricants / EDM Oil",
        price: "125",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Base Type", value: "Mineral" },
          { label: "ISO VG Grade", value: "22" },
          { label: "Flash Point", value: "170-250 °C" },
          { label: "Application", value: "Metal Cutting" },
        ],
        description:
          "High quality EDM and metal cutting oil processed using quality assured components. Known for applications in numerous industrial sectors.",
        features: ["Highly viscous", "Purity", "Effective"],
      },
      {
        name: "Water Based Cutting Fluid",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Soluble Oil (Milky)" },
          { label: "Kinematic Visc", value: "17-34 cSt" },
          { label: "Machined Mat", value: "Steel" },
          { label: "Pack Sizes", value: "20, 35, 50, 210 L" },
        ],
        description:
          "High performing cutting oil formulated for operations like lapping and honing. Low viscosity provides excellent cooling effect and chip flushing. Chlorine-containing additives withstand high load.",
      },
      {
        name: "Cutting Oil for Aluminum",
        price: "260",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Density", value: "1.061 g/cm³" },
          { label: "Flash Point", value: "150 °C" },
          { label: "Grade", value: "General Purpose" },
          { label: "Machined Mat", value: "Steel" },
          { label: "Packaging Size", value: "210 L" },
        ],
        description:
          "Suitable for lubricating systems where power is transferred in hydraulic machinery. Renowned for eco-friendly nature, high viscosity, and long shelf life.",
        features: ["Long shelf life", "Excellent thermal stability", "Accurate composition"],
      },
      {
        name: "Water Soluble Cutting Oil",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Oil Type", value: "Semi-Synthetic" },
          { label: "Material Compat", value: "Ferrous Metals" },
          { label: "Package Size", value: "210 L" },
          { label: "Unit Pack Size", value: "200L Drum" },
        ],
        description:
          "Widely used in the cutting process of steels & other alloys. Processed by using finest materials and latest machinery under expert supervision.",
        features: ["High viscosity", "Purity", "Precise composition"],
      },
      {
        name: "Yati Cutting Oils",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Soluble Oil (Milky)" },
          { label: "Grade", value: "General Purpose" },
          { label: "Usage", value: "Automotive Lubricant" },
          { label: "Packaging Size", value: "210 L" },
        ],
        description:
          "Used for providing smooth working to the automobile parts. Sternly tested under the awareness of our able professionals against a variety of parameters.",
        features: ["Long shelf life", "Excellent oxidation", "Resistance to temperature"],
      },
      {
        name: "Synthetic Cutting Fluids",
        price: "260",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Oil Type", value: "Water Soluble" },
          { label: "Base Oil", value: "Mineral Oil" },
          { label: "Chlorine", value: "Chlorine Free" },
          { label: "Package Size", value: "180 L" },
        ],
        description:
          "Ideally suited for grinding and machining operations where high heat and friction is generated. Provides best cooling properties, rust prevention, and tank life.",
        features: [
          "Good antiweld properties",
          "Helps extend cutting tool life",
          "Good surface finish",
        ],
      },
      {
        name: "210 L Cutting Oils",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "pH", value: "9.2 in 5% Emulsion" },
          { label: "Boiling Point", value: "< 140 °C" },
          { label: "Grade", value: "General Purpose" },
          { label: "Machined Mat", value: "Steel" },
        ],
        description:
          "Fortified with oiliness additives for supreme lubricating and cooling performance. Commonly used for mild steel, carbon steel, nickel, manganese steel and alloys of copper and aluminum.",
        features: ["Chlorine free", "High cutting efficiency", "Eco friendly"],
      },
      {
        name: "Multi Purpose Industrial Grease",
        price: "105",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Thickener Type", value: "Lithium" },
          { label: "NLGI Grade", value: "000" },
          { label: "Grade", value: "MP 2" },
          { label: "EP Additive", value: "Yes" },
          { label: "Pack Size", value: "180 kg" },
        ],
        description:
          "Lithium-based MP 2 grease formulated for bearing applications, minimizing friction and load wear.",
      },
      {
        name: "NLGI 1 Industrial Grease",
        price: "100",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Thickener Type", value: "Lithium" },
          { label: "NLGI Grade", value: "000" },
          { label: "Grade", value: "NLGI 1" },
          { label: "Color", value: "Yellow" },
          { label: "Packaging Size", value: "20 kg" },
        ],
        description:
          "High quality lithium grease designed for bearing lubrication under automotive and industrial environments.",
      },
    ],
  },
  {
    title: "Industrial Speciality Oils",
    slug: "industrial-speciality-oils",
    tagline: "Custom-blended formulations for unique thermodynamic environments.",
    products: [
      {
        name: "Pneumatic Tools Oil",
        price: "130",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "68" },
          { label: "Oil Type", value: "Semi-Synthetic" },
          { label: "Performance", value: "API GL-4" },
          { label: "Color", value: "Light Fawn" },
          { label: "Min Order Qty", value: "10 Litre" },
        ],
        description:
          "Formulated to withstand high temperature and pressure. Excellent demulsifying properties to make tool surfaces frictionless.",
        features: ["Low electrical conductivity", "Resistant to oxidation", "Optimum viscosity"],
      },
      {
        name: "Yati Synthetic Oils (DIN 51517)",
        price: "595",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Base Oil Type", value: "PAO" },
          { label: "ISO VG Grade", value: "ISO VG 320" },
          { label: "Performance", value: "DIN 51517-3 (CLP)" },
          { label: "Packaging Size", value: "210 L" },
        ],
        description:
          "Used between two moving surfaces to reduce friction and improve the efficiency of automobile and industrial engines. Excellent thermal stability.",
        features: ["Purity and effectiveness", "Long shelf life", "Thermal stability"],
      },
      {
        name: "High Temperature Heavy Chain Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "32" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "Model Grade", value: "A" },
          { label: "Pack Size", value: "Bucket of 20 L" },
        ],
        description:
          "Protects the hydraulic systems of heavy industrial machines and earth moving machines from wear and enhances performance in high temperature chains.",
        features: [
          "Longer drain intervals",
          "High viscosity",
          "Accurate composition",
          "Extends tool life 2-3 times",
          "Reduces wear and friction",
          "Lowers energy consumption 5-10%",
        ],
      },
      {
        name: "Industrial Refrigeration Oils",
        price: "130",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Oil Type", value: "Refrigeration Oils" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "Refrigerant", value: "R22 Compatibility" },
          { label: "Viscosity Grade", value: "ISO 22" },
        ],
        description:
          "Specialized refrigeration lubricants formulated to withstand extreme low and high temperatures in industrial compressors.",
      },
      {
        name: "Yati Honing Oil",
        price: "130",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "Low Viscosity" },
          { label: "Base Oil", value: "Mineral Oil" },
          { label: "Sulfur Content", value: "Inactive Sulfur" },
          { label: "Package Size", value: "200 L" },
        ],
        description:
          "Light viscosity honing oil with excellent lubricity. Extra fluidity ensures quick flushing action and prevents stone glazing, ensuring very good surface finish.",
        features: ["Highly efficient", "Quality product", "Effectiveness"],
      },
      {
        name: "Rust Preventive Oil",
        price: "135",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Film Type", value: "Dry Film" },
          { label: "Base Oil", value: "Mineral Oil" },
          { label: "Protection", value: "Up to 3 months" },
          { label: "Min Order Qty", value: "26 Litre" },
        ],
        description:
          "Excellent quality and precise composition. Suited for prevention of rust and resistant to oxidation. Eco-friendly in nature.",
        features: ["Simple application", "Lubricant compatibility", "Wide coverage"],
      },
      {
        name: "Yati Turbine Oil",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "68" },
          { label: "Application Type", value: "Turbine" },
          { label: "Purity", value: "99 %" },
          { label: "Flash Point", value: "230 °C" },
          { label: "Min Order Qty", value: "100 Litre" },
        ],
        description:
          "Used to enhance the performance of turbines and motors. Formulated in the best possible manner with excellent viscosity.",
        features: ["Optimum solvency", "Impeccable finish", "Accurate formulation"],
      },
      {
        name: "High Temperature Oils",
        price: "125",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "ISO VG 22" },
          { label: "Performance", value: "HLPD" },
          { label: "Temperature", value: "-40 to 280 °C" },
          { label: "Packaging Size", value: "210 L" },
        ],
        description:
          "Processed using quality approved chemical compounds and innovative technology. Appreciated for temperature resistant property.",
        features: ["Proper composition", "Free from impurities", "Superior quality"],
      },
      {
        name: "Yati Spinning Oil",
        price: "95",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "5 cSt" },
          { label: "Base Oil", value: "Naphthenic" },
          { label: "Application", value: "Ring Spinning" },
          { label: "Packing Size", value: "200 L" },
        ],
        description:
          "Outstanding detergency and wetting properties. Suitable for removal and grinding applications in textile spindle units.",
      },
      {
        name: "Yati EDM Oil",
        price: "115",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Type", value: "Low Odor EDM Oil" },
          { label: "Kinematic Visc", value: "2.5 cSt" },
          { label: "Color", value: "Water White" },
          { label: "Packaging Size", value: "210 L" },
        ],
        description:
          "Processed using quality assured components for EDM machine spark erosion. Known for applications in precision tool manufacturing.",
        features: ["Highly viscous", "Purity", "Effective"],
      },
      {
        name: "100 Litre Starter Oil",
        price: "86",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Color", value: "Water White" },
          { label: "Application", value: "Submersible Pumps" },
          { label: "Physical State", value: "Liquid" },
          { label: "Min Order Qty", value: "100 Litre" },
        ],
        description:
          "Quality starter oil for submersible pumps, serving the client's needs in the best possible manner.",
      },
      {
        name: "Sugar Mills Bearing Oils",
        price: "150",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "ISO VG 460" },
          { label: "Feature", value: "High Load Carrying" },
          { label: "Application", value: "Mill Roll Bearing" },
          { label: "Min Order Qty", value: "100 Litre" },
        ],
        description:
          "Widely used in calendar bearings and sugar mill roll bearings. Also recommended for the lubrication of heavy-duty worm gears.",
        features: ["Unique design", "Good quality", "High load performance"],
      },
      {
        name: "Yati Compressor Oil",
        price: "155",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "ISO 32" },
          { label: "Compressor Type", value: "Rotary Screw" },
          { label: "Oil Life", value: "2000 hr" },
          { label: "Pack Size", value: "209 L" },
        ],
        description:
          "Uniquely formulated to make surfaces smooth and resistant to thermal effects, enhancing the performance of compressor motors.",
        features: ["Accurate composition", "High viscosity", "Purity"],
      },
    ],
  },
  {
    title: "Gear Oil",
    slug: "gear-oil",
    tagline: "Extreme-pressure EP lubricants engineered to shield gear teeth and transfer torque.",
    products: [
      {
        name: "1-5 L Gearbox Oil",
        price: "140",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "EP 90" },
          { label: "Performance Level", value: "API GL-4" },
          { label: "Pack Size", value: "210 L" },
          { label: "Unit Pack Size", value: "1-5 L" },
        ],
        description:
          "Contains additives which offer full protection against wear and tear, as well as metal to metal contact under extreme loading. Suitable for gearboxes.",
      },
      {
        name: "Yati Gear Oil",
        price: "140",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "220, 320 & 460" },
          { label: "Performance Level", value: "API GL-4" },
          { label: "Pack Size", value: "210 L" },
          { label: "Min Order Qty", value: "20 Litre" },
        ],
        description:
          "Extreme pressure industrial gear lubricant demonstrating improved thermal stability and oxidation resistance. Low foaming and high rust protection.",
        features: [
          "Enclosed gear drives",
          "Works under shock loads",
          " Plain & roller bearings compatibility",
        ],
      },
      {
        name: "Industrial Gear Oil",
        price: "130",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "68 to 680" },
          { label: "Performance Level", value: "API GL-4" },
          { label: "Unit Pack Size", value: "200L" },
          { label: "Packaging Type", value: "Drum" },
        ],
        description:
          "EP type industrial gear oil resistant to oxidation and containing high-performing additives. Designed for heavy machinery gearboxes.",
      },
      {
        name: "Automotive Gear Oil",
        price: "140",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "EP 90" },
          { label: "Performance Level", value: "API GL-4" },
          { label: "Unit Pack Size", value: "20L" },
          { label: "Application", value: "Automobile Industry" },
        ],
        description:
          "Specially formulated automotive gear oil designed for manual transmissions, differentials and steering gear boxes.",
      },
      {
        name: "Jaso MA2 HP Lubricating Oil",
        price: "130",
        unit: "Litre",
        brand: "HP",
        specs: [
          { label: "Viscosity Grade", value: "Jaso MA2" },
          { label: "Oil Type", value: "Mineral" },
          { label: "JASO Standard", value: "MA2" },
          { label: "Net Quantity", value: "1 L" },
        ],
        description:
          "Refined lubricating oil used to reduce friction and wear between bearing metallic surfaces in modern high performance motorcycles.",
      },
      {
        name: "Yati Gear Lubricants",
        price: "140",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "75W-90" },
          { label: "API Performance", value: "GL-4" },
          { label: "Pour Point", value: "-18 °C" },
          { label: "Pack Size", value: "210 L" },
        ],
        description:
          "Premium automotive gear lubricants with dispersants and anti-oxidants, functioning to deliver in the most extreme gearbox conditions.",
        features: [
          "Extreme conditions delivery",
          "Easy to use",
          "Dispersants & anti-oxidants loaded",
        ],
      },
      {
        name: "Synthetic Gear Oil",
        price: "640",
        unit: "Pack",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "320" },
          { label: "Viscosity", value: "ISO VG 68" },
          { label: "Unit Pack Size", value: "1L, 2L, 5L, 25L" },
          { label: "Packaging Size", value: "Barrel of 210 Litre" },
        ],
        description:
          "High-grade synthetic gear oil processed by professionals to ensure maximum energy efficiency and protection against friction wear.",
      },
    ],
  },
  {
    title: "Engine Oil",
    slug: "engine-oil",
    tagline: "Heavy-duty diesel and industrial engine lubricants to maximise thermal efficiency.",
    products: [
      {
        name: "Two Stroke Engine Oil",
        price: "125",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "15W-40" },
          { label: "Oil Type", value: "Mineral" },
          { label: "Engine Fuel", value: "Petrol" },
          { label: "API Service", value: "CI-4" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Quality 2-stroke engine oil suitable for motorcycle and small automotive engines, offering outstanding performance.",
      },
      {
        name: "Automotive Engine Lubricants",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Engine Oil" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "Viscosity Grade", value: "32" },
          { label: "Pack Size", value: "5L, 20L" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Genuine automotive engine oil with accurate composition and free from all types of impurities. Extends engine lifecycle.",
      },
      {
        name: "Diesel Engine Oil",
        price: "150",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "5W-40" },
          { label: "Engine Type", value: "Full Synthetic" },
          { label: "Performance", value: "CI-4+" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "High grade diesel engine oil designed to offer ultimate thermal stability and soot control under heavy duty commercial operations.",
      },
      {
        name: "20W40 Lubricating Engine Oil",
        price: "125",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "20W-40" },
          { label: "Base Oil", value: "Mineral" },
          { label: "Vehicle Type", value: "Car/SUV" },
          { label: "Min Order Qty", value: "200 Litre" },
        ],
        description:
          "Reliable 20W40 lubricating engine oil suitable for city driving conditions with high anti-oxidation properties.",
        features: ["High oxidation resistance", "Longer shelf life", "High viscosity index"],
      },
      {
        name: "Automotive Industry Engine Oil",
        price: "125",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "15W-40" },
          { label: "API Service", value: "SN" },
          { label: "Pour Point", value: "-10 °C" },
          { label: "Min Order Qty", value: "250 Litre" },
        ],
        description:
          "Noted for its excellent chemical and physical properties. Tested by professionals using the best calibration systems.",
      },
    ],
  },
  {
    title: "Machine Oil",
    slug: "machine-oil",
    tagline: "Precision spindle, guide-way and textile machinery oils to minimise friction.",
    products: [
      {
        name: "Spindle Oil VG 10",
        price: "110",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "ISO VG Grade", value: "10" },
          { label: "Base Type", value: "Mineral" },
          { label: "Flash Point", value: "170 °C" },
          { label: "Packaging Size", value: "200 L" },
          { label: "Application", value: "High-Speed Spindles" },
          { label: "Viscosity Index", value: "105" },
        ],
        description:
          "Ultra-refined spindle oil for high-speed precision spindles, bearings and light duty machine tools. Ensures minimum friction and maximum precision.",
        features: ["Ultra-low viscosity", "High purity", "Excellent oxidation resistance"],
      },
    ],
  },
  {
    title: "Heat Transfer Fluid",
    slug: "heat-transfer-fluid",
    tagline: "High-performance thermodynamic fluids for heat transfer and cooling systems.",
    products: [
      {
        name: "Thermic Fluid Oil",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Maximum Bulk Oil Temperature", value: "320°C" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "ISO Viscosity Grade", value: "VG 32" },
          { label: "Packaging Type", value: "Bucket" },
          { label: "Usage/Application", value: "Automotive and Mechanical Industry etc" },
          { label: "Flash Point", value: "193 deg C" },
          { label: "Packaging Size", value: "10, 20, 50 L" },
        ],
        description: "We are engaged in offering superior quality Thermic Fluid Oil.",
        features: [
          "Resistance to oxidation",
          "Safe to use",
          "Provide protection against rusting and corrosion",
        ],
      },
      {
        name: "Synthetic Heat Transfer Fluid",
        price: "630",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Base Oil Type", value: "Mineral Oil" },
          { label: "Working Temperature", value: "Up To 150 C" },
          { label: "Application", value: "Thermic Fluid System" },
          { label: "Packaging Size", value: "50-250 L" },
          { label: "Packaging Type", value: "Drum" },
          { label: "Viscosity Grade", value: "ISO 22" },
          { label: "Usage/Application", value: "Automobile Industry" },
          { label: "Flash Point", value: "180 C" },
          { label: "Model/Grade", value: "500 and 600" },
          { label: "Density", value: "0.8900 gm/ml at 25 deg C" },
          { label: "Operating Temperatures", value: "-100 to 350 deg C" },
          { label: "Moisture Content", value: "50-100 ppm" },
        ],
        description:
          "We are offering Synthetic Heat Transfer Fluid. These are ideal for usage in different heat transfer systems and possess 100% synthetic thermic-fluid properties.",
        features: [
          "High thermal stability",
          "High oxidation stability",
          "Provides long service life",
          "Almost negligible carbon contents",
          "Superior below temperature pump ability and compatibility with almost all minerals & synthetic fluids",
        ],
      },
      {
        name: "Therminol Heat Transfer Fluids",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Minimum Order Quantity", value: "1 Litre" },
          { label: "Base Oil Type", value: "Mineral Oil" },
          { label: "Packaging Size", value: "30 kg" },
          { label: "Grade", value: "66" },
          { label: "Working Temperature", value: "Up To 150 C" },
          { label: "Application", value: "Thermic Fluid System" },
          { label: "Fluid Type", value: "Mineral" },
          { label: "Viscosity Grade", value: "ISO 22" },
          { label: "Maximum Operating Temperature", value: "345 °C" },
          { label: "Flash Point", value: "180 C" },
          { label: "Usage/Application", value: "Automotive" },
          { label: "Form", value: "Gel" },
          { label: "Packaging Type", value: "Can" },
        ],
        description:
          "Therminol 55 is a synthetic heat transfer fluid used in moderate-temperature applications. Therminol 55 fluid is designed for use in nonpressurized/low-pressure, indirect heating systems. It delivers efficient, dependable, uniform process heat with no need for high pressures.",
      },
      {
        name: "Heat Transfer Fluid",
        price: "110",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Base Oil Type", value: "Mineral Oil" },
          { label: "Working Temperature", value: "Up To 150 C" },
          { label: "Application", value: "Thermic Fluid System" },
          { label: "Packaging Size", value: "50-250 L" },
          { label: "Model/Grade", value: "Group 1" },
          { label: "Packaging Type", value: "Drum" },
          { label: "Viscosity Grade", value: "ISO 22" },
          { label: "Usage/Application", value: "Automobile" },
          { label: "Flash Point", value: "180 C" },
          { label: "Pour Point", value: "-3 Deg C" },
          { label: "Form", value: "Liquid" },
        ],
        description:
          "We are offering Heat Transfer Fluid to our clients. It aids in transfer of heat in hassle free manner in machines and motors.",
      },
      {
        name: "Hydraulic Fluids Yati",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Minimum Order Quantity", value: "26 Litre" },
          { label: "Viscosity Grade", value: "ISO VG 32" },
          { label: "Packaging Size", value: "50 kg" },
          { label: "Base Oil Type", value: "Mineral Oil" },
          { label: "Vehicle Type", value: "Heavy Vehicle" },
          { label: "Application", value: "Industrial Machine" },
          { label: "Composition", value: "Anti-Wear" },
          { label: "Performance Level", value: "HM" },
          { label: "Packaging Sizes", value: "Barrel of 210 Litre" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Form", value: "Liquid" },
          { label: "Packaging Type", value: "Bucket" },
        ],
        description:
          "Yati AW Hydraulic oils are of premium quality anti-wear Hydraulic oil formulated based on highly refined base oils and fortifies with a superior performance additive package containing anti-oxidation, anti-wear thermal stability water separability and pump durability.",
      },
    ],
  },
  {
    title: "Industrial Oils",
    slug: "industrial-oils",
    tagline: "High-performance formulations to keep heavy machinery running under extreme loads.",
    products: [
      {
        name: "Thermic Fluid Oil Yati",
        price: "120",
        unit: "Litre",
        brand: "HP",
        specs: [
          { label: "Packaging Size", value: "Bucket of 10 Litre" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Physical State", value: "Liquid" },
        ],
        description: "We are engaged in offering superior quality Thermic Fluid Oil.",
        features: [
          "Resistance to oxidation",
          "Safe to use",
          "Provide protection against rusting and corrosion",
        ],
      },
      {
        name: "Cutting Fluids Yati",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Oil Type", value: "Water Soluble" },
          { label: "Application", value: "General Machining" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Form", value: "Concentrate" },
          { label: "Color", value: "Yellow" },
          { label: "Base Oil", value: "Mineral Oil" },
          { label: "Pack Sizes LT/KG", value: "Bucket of 10 Litre" },
          { label: "Package Size", value: "180 L" },
        ],
        description:
          "Cutting Fluid that is formulated for light and medium conditions and is fortified with oiliness additives for supreme lubricating and cooling performance. It is commonly used for mild steel, carbon steel, nickel and manganese steel and alloys of copper and aluminum. It is acclaimed for outstanding wetting properties and facilitates better productivity.",
      },
      {
        name: "Servo Hydraulic Oils (ALT 32)",
        price: "100",
        unit: "Litre",
        brand: "Servo",
        specs: [
          { label: "Viscosity Grade", value: "32" },
          { label: "Pack Size", value: "210 L" },
          { label: "Oil Type", value: "AW / HLP" },
          { label: "Key Performance Standard", value: "DIN 51524 Part 2" },
          { label: "Application", value: "Hydraulic Lifts" },
          { label: "Color", value: "Pale Yellow" },
        ],
        description:
          "Servo Hydraulic ALT 32 is an anti-wear hydraulic and circulation oil specially formulated for efficient lubrication of a wide variety of hydraulic power packs industrial equipment.",
      },
      {
        name: "Mak Hydraulic Oil",
        price: "120",
        unit: "Litre",
        brand: "MAK",
        specs: [
          { label: "Viscosity Grade", value: "68" },
          { label: "Performance Level", value: "AW (Anti-Wear)" },
          { label: "Packaging Size", value: "26 L" },
          { label: "Packaging Type", value: "Bucket" },
          { label: "Usage/Application", value: "Machinery" },
        ],
        description:
          "Mak Hydraulic Oil (manufactured by Bharat Petroleum) is a premium, high-performance fluid designed to provide exceptional wear protection and corrosion resistance for industrial, automotive, and heavy-duty hydraulic systems.",
      },
    ],
  },
  {
    title: "Industrial Grease",
    slug: "industrial-grease",
    tagline: "Heavy-duty industrial greases for extreme pressure and bearing protection.",
    products: [
      {
        name: "Yati Industrial Grease",
        price: "94",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Thickener Type", value: "Lithium" },
          { label: "Packaging Size", value: "50 kg" },
          { label: "NLGI Grade", value: "000" },
          { label: "Pack Size", value: "500 g" },
          { label: "Grade", value: "MP 2" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "EP Additive", value: "Yes" },
          { label: "Packaging Type", value: "Bucket" },
          { label: "Application Area", value: "Bearing" },
          { label: "Usage/Application", value: "Automotive" },
          { label: "Form", value: "Gel" },
        ],
        description:
          "We offer a premium quality range of Industrial Grease that have a high demand in numerous industries. Characterized with high initial viscosity, these are semisolid lubricants, which drop to the same viscosity as the base oil to give the effect of an oil-lubricated bearing. Greases are used for infrequent lubrication, where lubricating oils fail to function effectively. The machine parts and bearing lubricated using these highly viscous oils have greater frictional characteristics.",
      },
      {
        name: "Industrial Grease Yati",
        price: "95",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Thickener Type", value: "Lithium" },
          { label: "NLGI Grade", value: "000" },
          { label: "Grade", value: "MP 2" },
          { label: "Base Oil Type", value: "Semi Synthetic" },
          { label: "EP Additive", value: "No" },
          { label: "Packaging Type", value: "Bucket" },
          { label: "Application Area", value: "Bearing" },
          { label: "Packaging Size", value: "50 kg" },
          { label: "Pack Size", value: "20 kg" },
          { label: "Usage/Application", value: "Automotive" },
          { label: "Form", value: "Gel" },
        ],
        description:
          "We offer a premium quality range of Industrial Grease that have a high demand in numerous industries. Characterized with high initial viscosity, these are semisolid lubricants, which drop to the same viscosity as the base oil to give the effect of an oil-lubricated bearing. Greases are used for infrequent lubrication, where lubricating oils fail to function effectively. The machine parts and bearing lubricated using these highly viscous oils have greater frictional characteristics.",
      },
      {
        name: "20 kg Industrial Grease",
        price: "95",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Thickener Type", value: "Lithium Complex" },
          { label: "NLGI Grade", value: "3" },
          { label: "Pack Size", value: "20 kg" },
          { label: "Grade", value: "MP 2" },
          { label: "Usage/Application", value: "Automotive" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "Application Area", value: "Automotive" },
          { label: "Packaging Type", value: "Bucket" },
          { label: "EP Additive", value: "Yes" },
          { label: "Form", value: "Gel" },
        ],
        description:
          "We offer a premium quality range of Industrial Grease that have a high demand in numerous industries. Characterized with high initial viscosity, these are semisolid lubricants, which drop to the same viscosity as the base oil to give the effect of an oil-lubricated bearing. Greases are used for infrequent lubrication, where lubricating oils fail to function effectively. The machine parts and bearing lubricated using these highly viscous oils have greater frictional characteristics.",
      },
      {
        name: "A Grade Yati Grease",
        price: "95",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Thickener Type", value: "Lithium Complex" },
          { label: "Packaging Size", value: "50 kg" },
          { label: "NLGI Grade", value: "00" },
          { label: "Pack Size", value: "7 kg" },
          { label: "Base Oil Type", value: "Semi Synthetic" },
          { label: "Application Area", value: "Industrial Bearing" },
          { label: "EP Additive", value: "No" },
          { label: "Grade", value: "A" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Color", value: "Yellow" },
          { label: "Packaging Type", value: "Bucket" },
          { label: "Form", value: "Gel" },
        ],
        description:
          "We are offering Multi Purpose Grease to the clients. This product is lithium based high performance greases formulated with specific multi-functional additives and desired consistencies for lubrication under normal operating conditions and minimize wear and tear of machine parts.",
      },
      {
        name: "Yati Automotive Grease",
        price: "95",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Thickener Type", value: "Lithium Complex" },
          { label: "NLGI Grade", value: "00" },
          { label: "Base Oil Type", value: "Semi Synthetic" },
          { label: "Application Area", value: "Automotive" },
          { label: "EP Additive", value: "Yes" },
          { label: "Grade", value: "A" },
          { label: "Usage/Application", value: "Automotive" },
          { label: "Form", value: "Grease" },
          { label: "Packaging Size", value: "20 kg" },
          { label: "Pack Size", value: "50 kg" },
        ],
        description:
          "We are offering Multi Purpose Grease to the clients. This product is lithium based high performance greases formulated with specific multi-functional additives and desired consistencies for lubrication under normal operating conditions and minimize wear and tear of machine parts.",
      },
    ],
  },
  {
    title: "Transformer Oil",
    slug: "transformer-oil",
    tagline: "High-dielectric insulation oils engineered for power transformers and switchgear.",
    products: [
      {
        name: "Yati Transformer Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Minimum Order Quantity", value: "200 Litre" },
          { label: "Oil Type", value: "Mineral Oil" },
          { label: "Packaging Type", value: "Barrel/Drum" },
          { label: "Conforming Standard", value: "IS 335" },
          { label: "Packaging Size", value: "209 L Drum" },
          { label: "Kinematic Viscosity", value: "≤10 cSt@40°C" },
          { label: "Quantity Per Pack", value: "200 L" },
          { label: "Flash Point", value: "≥135°C" },
          { label: "Density", value: "0.89 gm/L" },
          { label: "Pour Point", value: "-6 deg C" },
          { label: "Form", value: "Liquid" },
        ],
        description: "We are offering Transformer Oil.",
        features: [
          "Very reliable and efficient",
          "Standard viscosity",
          "Provides brilliant lubrication for the transformers",
        ],
      },
      {
        name: "Transformer Oil Yati",
        price: "100",
        unit: "Litre",
        brand: "HP",
        specs: [
          { label: "Oil Type", value: "Mineral Oil" },
          { label: "Packaging Type", value: "Barrel/Drum" },
          { label: "Conforming Standard", value: "IS 335" },
          { label: "Packaging Size", value: "209 L Drum" },
          { label: "Usage/Application", value: "Electric transformers" },
          { label: "Kinematic Viscosity", value: "10–12 cSt@40°C" },
          { label: "Quantity Per Pack", value: "50" },
          { label: "Flash Point", value: "135–145°C" },
          { label: "Pour Point", value: "−30 to −15°C" },
        ],
        description:
          "Transformer oil's primary functions are to insulate and cool a transformer. It must therefore have high dielectric strength, thermal conductivity, and chemical stability, and must keep these properties when held at high temperatures for extended periods.",
      },
      {
        name: "Yati Automatic Transformer Oil",
        price: "150",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Minimum Order Quantity", value: "250 Litre" },
          { label: "Oil Type", value: "Mineral Oil" },
          { label: "Conforming Standard", value: "IS 335" },
          { label: "Packaging Size", value: "26 L" },
          { label: "Kinematic Viscosity", value: "≤10 cSt@40°C" },
          { label: "Form", value: "Liquid" },
          { label: "Pour Point", value: "≤−30°C" },
          { label: "Packaging Type", value: "Cane" },
          { label: "Usage/Application", value: "Automobile Industrial" },
          { label: "Density", value: "0.853 g/cm3" },
          { label: "Flash point", value: "245 deg C" },
        ],
        description:
          "Automatic Transmission Fluids are suitable for all heavy duty enclosed gear boxes. These products are formulated using excellent quality petroleum based substances in compliance with quality standards. Offered range is widely appreciated by the valued customers.",
        features: ["Excellent oxidation resistance", "High thermal stability", "Long shelf life"],
      },
      {
        name: "Transformer Oil Filtration",
        price: "100",
        unit: "Litre",
        brand: "HP",
        specs: [
          { label: "Minimum Order Quantity", value: "250 Litre" },
          { label: "Oil Type", value: "Mineral Oil" },
          { label: "Packaging Type", value: "Barrel/Drum" },
          { label: "Conforming Standard", value: "IS 335" },
          { label: "Packaging Size", value: "209 L Drum" },
          { label: "Transformer Type", value: "Power Transformer" },
          { label: "Usage/Application", value: "Electric transformers" },
          { label: "Kinematic Viscosity", value: "≤10 cSt@40°C" },
          { label: "Quantity Per Pack", value: "50" },
          { label: "Flash Point", value: "≥135°C" },
          { label: "Pour Point", value: "≤−30°C" },
        ],
        description:
          "Transformer oil's primary functions are to insulate and cool a transformer. It must therefore have high dielectric strength, thermal conductivity, and chemical stability, and must keep these properties when held at high temperatures for extended periods.",
      },
    ],
  },
  {
    title: "Paraffin Oil",
    slug: "paraffin-oil",
    tagline: "High-purity mineral oils for industrial, cosmetic, and manufacturing uses.",
    products: [
      {
        name: "Yati Paraffinic Oil",
        price: "95",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Technical Grade" },
          { label: "Viscosity Grade", value: "10 cSt" },
          { label: "Application", value: "Pharma" },
          { label: "Purity", value: "99%" },
          { label: "Color", value: "White" },
          { label: "Packaging Size", value: "Barrel" },
          { label: "Unit Pack Size", value: "180L" },
          { label: "Packaging Type", value: "Barrel" },
          {
            label: "Usage/Application",
            value: "In chemical processes as carrier, diluent, extender and elasticizer",
          },
          { label: "Form", value: "Liquid" },
          { label: "Flash Point", value: "190 Deg C" },
          {
            label: "Suitable For",
            value: "Natural rubber, Styrene butadiene rubber, EP, EPDM & Butyl rubber",
          },
        ],
        description:
          "We are extremely engaged in offering a comprehensive grade of Paraffinic Oil. This kind of oil has long paraffinic chains, excellent oxidation resistance and aging under UV light. It has a higher aniline point, low solvency power, and low volatility.",
      },
      {
        name: "Transparent Paraffin Oil",
        price: "95",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Technical Grade" },
          { label: "Viscosity Grade", value: "10 cSt" },
          { label: "Application", value: "Textile" },
          { label: "Purity", value: "98%" },
          { label: "Color", value: "Transparent" },
          { label: "Packaging Size", value: "50 L, 250 Kg" },
          { label: "Packaging Type", value: "Drum" },
          {
            label: "Usage/Application",
            value: "Manufacturing of anti-static coning oil & knitting oil",
          },
          { label: "Form", value: "Liquid" },
        ],
        description:
          "With sincerity and hard work of our professionals, we have carved a niche for ourselves in this domain by offering Transparent Paraffin Oil.",
      },
      {
        name: "Paraffin Oil Yati",
        price: "95",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Industrial Grade" },
          { label: "Application", value: "Personal Care" },
          { label: "Viscosity Grade", value: "LLO" },
          { label: "Purity", value: "98%" },
          { label: "Color", value: "White" },
          { label: "Packaging Size", value: "50" },
          { label: "Physical State", value: "Liquid" },
          { label: "Packaging Type", value: "Barrel" },
        ],
        description:
          "We are extremely engaged in offering a comprehensive grade of Paraffinic Oil. This kind of oil has long paraffinic chains, excellent oxidation resistance and aging under UV light. It has a higher aniline point, low solvency power, and low volatility.",
      },
      {
        name: "Light Liquid Paraffin",
        price: "95",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Industrial Grade" },
          { label: "Viscosity Grade", value: "10 cSt" },
          { label: "Application", value: "Textile" },
          { label: "Purity", value: "98%" },
          { label: "Color", value: "White" },
          { label: "Packaging Size", value: "50" },
          { label: "Physical State", value: "Liquid" },
          { label: "Packaging Type", value: "Barrel" },
        ],
        description:
          "We are extremely engaged in offering a comprehensive grade of Paraffinic Oil. This kind of oil has long paraffinic chains, excellent oxidation resistance and aging under UV light. It has a higher aniline point, low solvency power, and low volatility.",
      },
    ],
  },
  {
    title: "Lubricating Grease",
    slug: "lubricating-grease",
    tagline: "Advanced greases for reducing friction, wear, and corrosion in moving parts.",
    products: [
      {
        name: "Multi Purpose Grease",
        price: "100",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Thickener Type", value: "Lithium" },
          { label: "Packaging Size", value: "30 kg" },
          { label: "NLGI Grade", value: "000" },
          { label: "Pack Size", value: "180 kg" },
          { label: "Size", value: "200 kg" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "EP Additive", value: "Yes" },
          { label: "Application Area", value: "Bearing" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Packing", value: "Drum" },
          { label: "Form", value: "Gel" },
          { label: "Packaging Type", value: "Bucket" },
        ],
        description:
          "This product is lithium based high performance greases formulated with specific multi-functional additives and desired consistencies for lubrication under normal operating conditions and minimize wear and tear of machine parts.",
      },
      {
        name: "Yati Lubricating Grease",
        price: "95",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Pack Sizes LT/KG", value: "180 Kg, 30 kg" },
          { label: "Application", value: "Automotive Industry" },
          { label: "Packing", value: "Bucket" },
          { label: "Color", value: "Yellow" },
          { label: "Form", value: "Gel" },
          { label: "Packaging Type", value: "Bucket" },
        ],
        description:
          "We offer a premium quality range of Lubricating Grease that have a high demand in numerous industries. Characterized with high initial viscosity, these are semisolid lubricants, which drop to the same viscosity as the base oil to give the effect of an oil-lubricated bearing. Greases are used for infrequent lubrication, where lubricating oils fail to function effectively. The machine parts and bearing lubricated using these highly viscous oils have greater frictional characteristics.",
      },
      {
        name: "Servo Cutting Fluids",
        price: "100",
        unit: "Litre",
        brand: "Servo",
        specs: [
          { label: "Minimum Order Quantity", value: "26 Litre" },
          { label: "Product Type", value: "Soluble Oil (Milky)" },
          { label: "Packaging Size", value: "210 L" },
          { label: "Usage/Application", value: "Automobile" },
          { label: "Grade", value: "General Purpose" },
          { label: "Vehicle Type", value: "Heavy Vehicle" },
          { label: "Machined Material", value: "Steel" },
          { label: "Composition", value: "Anti-Wear" },
          { label: "Application", value: "General Machining" },
          { label: "Type", value: "Compressor Oil" },
          { label: "Packaging Sizes", value: "Bottle of 1 Litre" },
          { label: "Property", value: "Fire-Resistant, Mineral Oil-Based" },
        ],
        description:
          "Servosystem HLP oils are high performance hydraulic oils. These oils provide superior antiwear protection, excellent oxidation and thermal stability, outstanding hydraulic stability and good demulsibility. Servosystem HLP oils also possess superior filterability characteristics.",
      },
      {
        name: "Heavy Duty Bearing Grease",
        price: "220",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Minimum Order Quantity", value: "250 Kg" },
          { label: "Application Area", value: "Heavy Duty Bearing" },
          { label: "Base Oil Viscosity 40°C", value: "150 cSt" },
          { label: "Thickener Type", value: "Lithium Complex" },
          { label: "NLGI Grade", value: "3" },
          { label: "EP Additive", value: "Yes" },
          { label: "Max Temp", value: "160°C" },
          { label: "Packing", value: "Drum" },
          { label: "Temperature", value: "-200 to 800 deg C" },
          { label: "Form", value: "Gel" },
          { label: "Packaging Size", value: "180Kgs" },
        ],
        description:
          "For valued patrons, we are indulged in providing Heavy Duty Bearing Grease to the clients.",
      },
    ],
  },
  {
    title: "Base Oil",
    slug: "base-oil",
    tagline: "Premium base stocks for lubricant blending and formulation.",
    products: [
      {
        name: "Ventrol Base Oils",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Minimum Order Quantity", value: "26 Litre" },
          { label: "Grade", value: "Group 1" },
          { label: "Group", value: "Group I" },
          { label: "Transformer Type", value: "Power Transformer" },
          { label: "Type", value: "Mineral Based Oil" },
          { label: "Usage/Application", value: "Electric transformers" },
          { label: "Kinematic Viscosity @ 40°C", value: "29-35 cSt" },
          { label: "Color", value: "Yellow" },
          { label: "Flash Point", value: "Min 210 °C" },
          { label: "Packaging Type", value: "Barrel/Drum" },
        ],
        description:
          "Transformer oil's primary functions are to insulate and cool a transformer. It must therefore have high dielectric strength, thermal conductivity, and chemical stability, and must keep these properties when held at high temperatures for extended periods.",
      },
      {
        name: "Yati Base Oil",
        price: "96",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Group 1" },
          { label: "Group", value: "Group I" },
          { label: "Type", value: "Mineral Based Oil" },
          { label: "Kinematic Viscosity @ 40°C", value: "29-35 cSt" },
          { label: "Color", value: "Yellow" },
          { label: "Flash Point", value: "Min 210 °C" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Packaging Type", value: "Barrel" },
        ],
        description:
          "We are engaged in offering high quality Base Oils. The offered oil is formulated using top-notch quality chemicals and latest technology in sync with set quality standards.",
      },
      {
        name: "Yati Base Oil (180L)",
        price: "96",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Minimum Order Quantity", value: "250 Litre" },
          { label: "Grade", value: "Group 1" },
          { label: "Group", value: "Group I" },
          { label: "Type", value: "Mineral Based Oil" },
          { label: "Kinematic Viscosity @ 40°C", value: "29-35 cSt" },
          { label: "Color", value: "Pale Yellow" },
          { label: "Usage/Application", value: "Automotive Industry" },
          { label: "Unit Pack Size", value: "180L" },
          { label: "Flash Point", value: "180 Deg C" },
          { label: "Vehicle Type", value: "Heavy Vehicle" },
          { label: "Packaging Type", value: "Drum, Barrel" },
        ],
        description:
          "Listed in category of topmost organizations, we are offering Base Oil to our clients.",
      },
      {
        name: "Refrigeration Oil Yati",
        price: "110",
        unit: "Litre",
        brand: "Castrol",
        specs: [
          { label: "Oil Type", value: "Mineral Oil" },
          { label: "Base Oil Type", value: "Mineral" },
          { label: "Refrigerant Compatibility", value: "R22" },
          { label: "Viscosity Grade", value: "ISO 22" },
          { label: "Application", value: "Commercial AC" },
          { label: "Pack Size", value: "210 L" },
          { label: "Grade", value: "A" },
          { label: "Usage/Application", value: "Refrigeration oil" },
          { label: "Packaging Type", value: "Barrel" },
          { label: "Form", value: "Liquid" },
        ],
        description:
          "We are one of the leading manufacturers and wholesalers of Refrigeration Oils. Suitable for recirculation, this accurately composed oil does not contain moisture and traces of wax, resulting in excellent fluidity characteristics, even at low temperatures.",
      },
    ],
  },
  {
    title: "Process Oils",
    slug: "process-oils",
    tagline: "Specialized process oils for rubber, plastics, and chemical industries.",
    products: [
      {
        name: "Yati Synthetic - Oil",
        price: "69",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Base Oil Type", value: "PAO + Ester" },
          { label: "Viscosity Grade", value: "ISO VG 320" },
          { label: "Packaging Size", value: "210 L" },
          { label: "Size", value: "Bucket of 26 Litre" },
          { label: "Application", value: "Gear Oil" },
          { label: "Pack Size", value: "20-200 L" },
          { label: "Usage/Application", value: "Automobile Tyres" },
          { label: "Packaging Type", value: "Drum, Bucket, Barrel" },
          { label: "Flash Point", value: "150 Deg C" },
          { label: "Kinematic viscosity", value: "17-34 cst" },
        ],
        description: "We are renowned name engrossed in offering of Yati Rubber Processing Oil.",
      },
      {
        name: "Rubber Processing Paraffinic Oil",
        price: "105",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Type", value: "Aromatic" },
          { label: "Grade", value: "710" },
          { label: "Flash Point", value: "200 °C Min" },
          { label: "Pour Point", value: "0 °C Max" },
          { label: "Aniline Point", value: "70-90 Deg C" },
          { label: "Packaging Type", value: "Drum" },
          { label: "Packaging Size", value: "200L" },
          { label: "Form", value: "Liquid" },
          { label: "Density", value: "0.8900 gm/ml at 25 Deg C" },
        ],
        description:
          "Our years of experience made us enabled to offer the large collection of Rubber Processing Paraffinic Oil.",
      },
      {
        name: "Fully Refined Paraffin Wax",
        price: "120",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Grade Standard", value: "Chemical Grade" },
          { label: "Purity", value: "90 %" },
          { label: "Color", value: "White" },
          { label: "Refinement", value: "Fully Refined" },
          { label: "Packaging Type", value: "Can, Bucket, Drum" },
          { label: "Pack Size", value: "10, 20, 35, 50, 210L" },
          { label: "Flash Point", value: "190 deg C" },
          { label: "Form", value: "Solid" },
        ],
        description:
          "We are extremely engaged in offering a comprehensive grade of Paraffin Wax. Our offered wax is processed using the best quality calcium and sophisticated technology in accordance with the industry standards. Moreover, this wax exhibit superior mechanical and shear stability and can be used at higher temperatures.",
        features: [
          "High-temperature detergency",
          "Less leakage and run-out during operation",
          "Do not break down even in the presence of water",
        ],
      },
      {
        name: "Rubber Processing Oil",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Type", value: "Aromatic" },
          { label: "Grade", value: "710" },
          { label: "Size", value: "Bottle of 500 mL" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Aniline Point", value: "45-50 °C" },
          { label: "Pour Point", value: "0 °C Max" },
          { label: "Packaging Type", value: "Bucket, Barrel" },
          { label: "Packaging Size", value: "20 to 200L" },
          { label: "Flash point", value: "240 - 256 deg C" },
          { label: "Form", value: "Liquid" },
          { label: "Kinematic viscosity", value: "17 - 34 cst" },
        ],
        description: "We are offering optimum quality Rubber Processing Oil.",
        features: [
          "Ensures rapid oil flow through the engine",
          "Reduces friction",
          "Extending machine life",
        ],
      },
    ],
  },
  {
    title: "Shuttering Oil",
    slug: "shuttering-oil",
    tagline: "High-quality concrete release agents for clean shuttering and mold release.",
    products: [
      {
        name: "VG 68 Shuttering Oil",
        price: "115",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Packing Type", value: "Drum" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Form", value: "Liquid" },
          { label: "Density", value: "910 kg/m3" },
          { label: "Grade", value: "VG 68" },
          { label: "Unit Pack Size", value: "210 Litre" },
          { label: "Packaging Size", value: "100 Litre" },
        ],
        description:
          "We are offering Shuttering Oil to our clients. Shuttering oil protects the formwork.",
      },
      {
        name: "Yati Shuttering Oil",
        price: "115",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Packaging Size", value: "50 Litre" },
          { label: "Form", value: "Liquid" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Packaging Type", value: "Barrel" },
        ],
        description:
          "We are offering Shuttering Oil to our clients. Shuttering oil protects the formwork.",
      },
      {
        name: "Shuttering Oil Yati",
        price: "115",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Packaging Size", value: "50 Litre" },
          { label: "Form", value: "Liquid" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Packaging Type", value: "Barrel" },
        ],
        description:
          "We are offering Shuttering Oil to our clients. Shuttering oil protects the formwork.",
      },
    ],
  },
  {
    title: "White Oil",
    slug: "white-oil",
    tagline: "Ultra-pure water-white mineral oils for pharmaceutical and food-grade use.",
    products: [
      {
        name: "White Oil Yati",
        price: "95",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade Standard", value: "Industrial Grade" },
          { label: "Purity", value: "99 %" },
          { label: "Packaging Type", value: "Barrel" },
        ],
        description:
          "We are engaged in offering exclusive White Oil to the clients. White Oil is created with the assistance of best tools these oils are smooth and best in finish. This product is used for lubrication of food. Offered range is transparent and very finest in quality and is widely appreciated by the valuable customers. This product is quality assured and available in many specifications.",
      },
      {
        name: "White Yati Oil",
        price: "95",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Pharma Grade" },
          { label: "Grade Standard", value: "Industrial Grade" },
          { label: "Viscosity Grade", value: "3.0 cSt" },
          { label: "Application", value: "Pharma" },
          { label: "Purity", value: "99 %" },
          { label: "Color", value: "Water White" },
          { label: "Packaging Type", value: "Barrel" },
        ],
        description:
          "We are engaged in offering exclusive White Oil to the clients. White Oil is created with the assistance of best tools these oils are smooth and best in finish. This product is used for lubrication of food. Offered range is transparent and very finest in quality and is widely appreciated by the valuable customers. This product is quality assured and available in many specifications.",
      },
    ],
  },
  {
    title: "Fully Refined Paraffin Wax",
    slug: "fully-refined-paraffin-wax",
    tagline: "Premium food-grade and industrial fully refined paraffin wax slabs and liquid.",
    products: [
      {
        name: "Yati Paraffin Wax",
        price: "120",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Melting Point", value: "54-56 °C" },
          { label: "Oil Content", value: "<0.3 %" },
          { label: "Form", value: "Solid" },
          { label: "Purity", value: "90 %" },
          { label: "Color", value: "Water White" },
          { label: "Packaging Size", value: "200 kg" },
          { label: "Grade Standard", value: "Chemical Grade" },
          { label: "Usage/Application", value: "Coating" },
          { label: "Application", value: "Candle Making" },
        ],
        description:
          "We are extremely engaged in offering a comprehensive grade of Paraffin Wax. Our offered wax is processed using the best quality calcium and sophisticated technology in accordance with the industry standards. Moreover, this wax exhibit superior mechanical and shear stability and can be used at higher temperatures.",
      },
      {
        name: "Refined Paraffin Wax",
        price: "115",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Melting Point", value: "54-56 °C" },
          { label: "Oil Content", value: "<0.3 %" },
          { label: "Form", value: "Solid" },
          { label: "Purity", value: "90 %" },
          { label: "Color", value: "Water White" },
          { label: "Application", value: "Candle Making" },
          { label: "Packaging Size", value: "200 kg" },
          { label: "Grade Standard", value: "Chemical Grade" },
          { label: "Usage/Application", value: "Candle Making" },
        ],
        description:
          "We are extremely engaged in offering a comprehensive grade of Paraffin Wax. Our offered wax is processed using the best quality calcium and sophisticated technology in accordance with the industry standards. Moreover, this wax exhibit superior mechanical and shear stability and can be used at higher temperatures.",
      },
    ],
  },
  {
    title: "Metal Working Fluids",
    slug: "metal-working-fluids",
    tagline: "Advanced metalworking fluids for cutting, grinding, and rust prevention.",
    products: [
      {
        name: "Metal Working Fluid",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Oil Type", value: "Hydraulic Oil" },
          { label: "Viscosity Grade", value: "ISO VG 22" },
          { label: "Base Oil", value: "Mineral" },
          { label: "Unit Pack Size", value: "1-2 L" },
          { label: "Application", value: "Machine Tool" },
          { label: "Performance Level", value: "HLPD" },
          { label: "Packing Size", value: "210 L" },
          { label: "Packing Type", value: "Drum, Barrel" },
          { label: "Usage/Application", value: "Industrial Lubricant" },
          { label: "Flash Point", value: "150 Deg C" },
        ],
        description:
          "We are engaged in offering a comprehensive grade of Metal Working Fluid to our valuable clients. This product is widely known in the market for its effectiveness and high level of purity in the market.",
        features: ["Free from impurities", "Wear & rust control", "Superior rust protection"],
      },
      {
        name: "Yati Metalworking Lubricants",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Product Type", value: "Cutting Oil" },
          { label: "Base Oil Type", value: "Mineral Oil" },
          { label: "Suitable Material", value: "Mild Steel" },
          { label: "Fluid Type", value: "Soluble Oil" },
          { label: "Additive Type", value: "EP Additive" },
          { label: "Packing Type", value: "Bucket, Drum" },
          { label: "Unit Pack Size", value: "250 L" },
          { label: "Application", value: "Industrial Lubricant" },
        ],
        description:
          "Our organization is known for offering Metalworking Lubricants to the clients. Metalworking Lubricants are manufactured by using high grade material and sophisticated technology. Offered range is well recognized for sturdiness and long service life amongst customers.",
        features: ["Dimensional accuracy", "Corrosion resistance", "Exclusively designed"],
      },
    ],
  },
  {
    title: "Paraffin Wax",
    slug: "paraffin-wax",
    tagline: "Industrial and commercial paraffin waxes for candles, packaging, and coating.",
    products: [
      {
        name: "Paraffin Wax (Technical)",
        price: "125",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Fully Refined" },
          { label: "Melting Point", value: "54-56 °C" },
          { label: "Oil Content", value: "<0.5 %" },
          { label: "Form", value: "Granules" },
          { label: "Color", value: "White" },
          { label: "Packaging Size", value: "25 kg" },
          { label: "Packing Size", value: "25 kg" },
          { label: "Usage", value: "Crayon, Cosmetic, Polish, PVC, Packaging, Candle Making" },
        ],
        description:
          "Established in the year 1996, we Yati Petro Products Private Limited are the leading manufacturer of a wide range of Lubricant Oil, Industrial Speciality Oil, Machine Oil, Rubber Processing Oil, etc. Their excellent lubricating efficiency, thermal stability, high viscosity and accurate composition, makes these lubricating oils highly appreciated among our customers.",
      },
      {
        name: "Paraffin Wax (Granules)",
        price: "150",
        unit: "Kg",
        brand: "Yati",
        specs: [
          { label: "Grade", value: "Fully Refined" },
          { label: "Melting Point", value: "52-54 °C" },
          { label: "Form", value: "Granules" },
          { label: "Grade Standard", value: "Technical Grade" },
          { label: "Application", value: "Candle Making" },
          { label: "Oil Content", value: "0.5-1 %" },
          { label: "Packaging Size", value: "25 kg" },
          { label: "Color", value: "White" },
        ],
        description:
          "Established in the year 1996, we Yati Petro Products Private Limited are the leading manufacturer of a wide range of Lubricant Oil, Industrial Speciality Oil, Machine Oil, Rubber Processing Oil, etc. Their excellent lubricating efficiency, thermal stability, high viscosity and accurate composition, makes these lubricating oils highly appreciated among our customers.",
      },
    ],
  },
  {
    title: "Automotive Gear Oil",
    slug: "automotive-gear-oil",
    tagline:
      "High-performance gear lubricants for automotive manual transmissions and differentials.",
    products: [
      {
        name: "Yati Engine Oil",
        price: "120",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Viscosity Grade", value: "15W-40" },
          { label: "Packaging Size", value: "Bucket of 10 L" },
          { label: "Net Quantity", value: "200 L" },
          { label: "Oil Type", value: "Fully Synthetic" },
          { label: "Vehicle Type", value: "Motorcycle" },
          { label: "API Service Classification", value: "SN" },
          { label: "Engine Life", value: "12 Months" },
          { label: "Color", value: "Yellow" },
        ],
        description:
          "Being quality oriented organization; we are offering Automotive Engine Oil to our clients. It has accurate composition and is free from all types of impurities.",
      },
    ],
  },
  {
    title: "Propylene Glycol",
    slug: "propylene-glycol",
    tagline: "Industrial and food-grade propylene glycol for cooling and heat transfer.",
    products: [
      {
        name: "99% Water Soluble Cutting Oil",
        price: "140",
        unit: "Litre",
        brand: "Castrol",
        specs: [
          { label: "Minimum Order Quantity", value: "215 Litre" },
          { label: "Grade Standard", value: "Food Grade" },
          { label: "Oil Type", value: "Semi-Synthetic" },
          { label: "Package Size", value: "210 L" },
          { label: "Purity %", value: "99.9" },
          { label: "Material Compatibility", value: "Ferrous Metals" },
          { label: "Packaging Details", value: "200 kg Drum" },
          { label: "Application", value: "General Machining" },
          { label: "Usage/Application", value: "Pharmaceuticals and Cosmetics" },
          { label: "CAS No", value: "57-55-6" },
          { label: "Molar mass", value: "76.09 g/mol" },
          { label: "Formula", value: "C3H8O2" },
        ],
        description:
          "Being a renowned organization of the market, we are engaged in offering a quality proven range of Cylinder Oils. The offered oil is processed from superior grade chemical compounds and contemporary techniques in sync with the set industry standards.",
      },
    ],
  },
  {
    title: "Engine Oil Additive",
    slug: "engine-oil-additive",
    tagline: "High-performance chemical additives to boost lubricity and engine life.",
    products: [
      {
        name: "Engine Oil Additive",
        price: "100",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Additive Function", value: "Engine Treatment" },
          { label: "Packaging Size", value: "5L" },
          { label: "Vehicle Type", value: "Auto, Motorcycle, Scooter" },
          { label: "Additive Technology", value: "Ceramic" },
          { label: "Packaging Type", value: "Bottle, Can" },
          { label: "Form", value: "Liquid" },
          { label: "Usage/Application", value: "Automotive Industry" },
        ],
        description:
          "Additive Engine Oil is a unique product formulated with advance formula technology which forms a film on the metal surface reduces friction and wear. Increases the performance of the engine, fuel economy, and restores engine power.",
        features: [
          "Dosage: Minimum 5% to a maximum of 15% by volume of engine oil",
          "Pour Release on into oil tank and top up with engine oil",
          "50 ml ensure smooth pickup and friction-free driving for approx 3500 Kms",
        ],
      },
    ],
  },
  {
    title: "Radiator Coolant",
    slug: "radiator-coolant",
    tagline: "Advanced anti-freeze and radiator coolants for heat dissipation.",
    products: [
      {
        name: "Yati Radiator Coolants",
        price: "165",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Minimum Order Quantity", value: "200 Litre" },
          { label: "Coolant Type", value: "Ethylene Glycol" },
          { label: "Colour", value: "Green" },
          { label: "Vehicle Type", value: "Truck" },
          { label: "Pack Size", value: "3 L" },
          { label: "Usage/Application", value: "Automotive, Industrial" },
          { label: "Type Of Coolants", value: "Mineral Based" },
        ],
        description:
          "Coolant (or antifreeze) protects your engine from freezing while defending against rust and corrosion.",
      },
    ],
  },
  {
    title: "Edm Oil",
    slug: "edm-oil",
    tagline: "Dielectric fluids for high-precision spark erosion and EDM machining.",
    products: [
      {
        name: "Spark Erosion Oil",
        price: "110",
        unit: "Litre",
        brand: "Yati",
        specs: [
          { label: "Kinematic Viscosity", value: "2.5 cSt" },
          { label: "Oil Type", value: "Low Odor EDM Oil" },
          { label: "Flash Point", value: "90°C" },
          { label: "Aroma", value: "Low Odor" },
          { label: "Color", value: "Water White" },
          { label: "Packaging Type", value: "Bucket" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Unit Pack Size", value: "Bucket of 26 Litre" },
          { label: "Packing Size", value: "210 L" },
        ],
        description:
          "Yati Slideway Lubricants are available from ISO VG 32 to VG220. These products are developed based on highly refined base oils and enhanced with trakifier, friction additives to offer required EP properties in the slideway lubrication application area.",
      },
    ],
  },
];

/* ── Page ───────────────────────────────────────── */
function ProductCategoryPage() {
  const { category } = Route.useSearch();
  const [searchQuery, setSearchQuery] = useState("");

  const data = categoryData.find((c) => c.slug === category) ?? categoryData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const filtered = data.products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-full bg-[#F8F9FB] font-sans text-[#111] overflow-x-hidden">
      {/* Hero */}
      <div className="bg-[#111] text-white">
        <div className="max-w-[84rem] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E53935]">
                Product Catalogue
              </span>
              <ChevronRight className="h-3 w-3 text-gray-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                {data.title}
              </span>
            </div>
            <h1 className="font-bold text-[clamp(2rem,6vw,4rem)] leading-tight tracking-tight">
              {data.title}
            </h1>
            <p className="mt-4 max-w-2xl text-gray-400 text-base leading-relaxed">{data.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Package className="h-4 w-4 text-[#E53935]" />
                <span>{data.products.length} Products Available</span>
              </div>
              <div className="h-4 w-px bg-gray-700 hidden sm:block" />
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Beaker className="h-4 w-4 text-[#E53935]" />
                <span>YATI Premium Lubricants</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-[84rem] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-12">
        {/* Search */}
        <div className="mb-8 flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3.5 max-w-md shadow-sm">
          <Search className="h-4 w-4 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-sm bg-transparent outline-none placeholder:text-gray-400"
          />
        </div>
        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-6">
          Showing {filtered.length} of {data.products.length} products
        </p>

        <div className="flex flex-col gap-6">
          {filtered.map((product, i) => (
            <ProductRow key={product.name} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Package className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-semibold">No products found</p>
            <p className="text-sm mt-1">Try adjusting your search</p>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-[#111] text-white">
        <div className="max-w-[84rem] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Need a Quote or Bulk Order?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Our technical team responds within one business day with a tailored proposal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919924599312"
              className="flex items-center gap-2 bg-[#E53935] hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              <Phone className="h-4 w-4" />
              +91 99245 99312
            </a>
            <a
              href="mailto:dhanyatugroup2024@gmail.com"
              className="flex items-center gap-2 border border-white/20 hover:border-[#E53935] hover:text-[#E53935] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
            <Link
              to="/"
              hash="contact"
              className="flex items-center gap-2 border border-white/20 hover:border-[#E53935] hover:text-[#E53935] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductRow({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row p-6 gap-6"
    >
      {/* Product Image Left Section */}
      <div className="w-full md:w-64 h-56 md:h-auto shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center p-6 border border-gray-100 relative group overflow-hidden">
        <img
          src={productImage}
          alt={product.name}
          loading="lazy"
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details Right Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title and Pricing */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E53935] font-semibold">
                {product.brand}
              </span>
              <h3 className="font-bold text-xl text-[#111] leading-snug mt-0.5">{product.name}</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-3xl">
            {product.description}
          </p>

          {/* Specs Grid */}
          <div className="mb-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2.5">
              Specifications
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
              {product.specs.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                    {s.label}
                  </span>
                  <span className="text-xs font-semibold text-[#111] mt-0.5">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-4 bg-red-50/30 border border-red-100/30 rounded-2xl p-4">
              <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mb-2">
                Key Features
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E53935]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-gray-100">
          <a
            href={productsPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#E53935] hover:bg-red-600 text-white text-xs font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer animate-pdf-pulse"
          >
            <FileText className="h-4 w-4" />
            Product Catalogue (PDF)
          </a>
          <a
            href="tel:+919924599312"
            className="flex items-center justify-center gap-2 bg-[#111] hover:bg-[#E53935] text-white text-xs font-bold py-3 px-6 rounded-xl transition-colors duration-300 sm:ml-auto"
          >
            <Phone className="h-4 w-4" />
            Get Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
}
