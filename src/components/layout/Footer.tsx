import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import companyLogo from "@/assets/dhanyatu-logo.png";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.51h-2l-.396 3.98h2.396z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src={companyLogo} alt="Dhanyatu Logo" className={className} />;
}

interface FooterLinkProps {
  toHash: string;
  className?: string;
  children: React.ReactNode;
}

function FooterLink({ toHash, className, children }: FooterLinkProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    return (
      <a href={`#${toHash}`} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to="/" hash={toHash} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const quickLinks = [
    { label: "About Us", hash: "about" },
    { label: "Products", hash: "products" },
    { label: "Our Brands", hash: "brands" },
    { label: "Our Journey", hash: "journey" },
    { label: "Leadership", hash: "leadership" },
    { label: "Clients", hash: "clients" },
  ];

  const productsLinks = [
    { label: "Industrial Lubricants", hash: "products" },
    { label: "Lubricant Oil", hash: "products" },
    { label: "Cutting Oil & Fluid", hash: "products" },
    { label: "Industrial Speciality Oils", hash: "products" },
    { label: "Gear Oil", hash: "products" },
    { label: "Engine Oil", hash: "products" },
    { label: "Machine Oil", hash: "products" },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-white noise mt-auto">
      <div className="container-x pt-12 sm:pt-20 pb-8 sm:pb-10 mx-auto px-4 md:px-8">
        {/* Big mark */}
        <div className="border-b border-white/10 pb-12 sm:pb-16">
          <div
            style={{ fontFamily: "'Saira Stencil One', sans-serif" }}
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-[-0.02em] select-none"
          >
            DHANYATU<span className="text-ember">.</span>
          </div>
          <p className="mt-4 sm:mt-6 max-w-xl text-silver/70 text-sm">
            Precision industrial lubrication for India's manufacturing core. Engineered in Gujarat.
            Trusted nationwide.
          </p>
        </div>

        <div className="grid gap-10 py-10 sm:py-14 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <FooterLink
              toHash="top"
              className="flex items-center gap-3 group w-fit"
              aria-label="Dhanyatu Home"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm transition-transform group-hover:scale-105">
                <Logo className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="font-display font-bold tracking-tight text-white text-[14px] sm:text-[15px] leading-none uppercase transition-colors group-hover:text-ember">
                  Dhanyatu Group
                </span>
                <span className="text-[9px] sm:text-[10px] text-silver/50 font-mono tracking-wider uppercase">
                  of Company Pvt. Ltd.
                </span>
              </div>
            </FooterLink>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-all hover:border-ember hover:text-ember hover:-translate-y-1 duration-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-silver/50">
              Quick Links
            </div>
            <ul className="mt-5 space-y-3 text-sm text-silver/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink toHash={link.hash} className="transition-colors hover:text-ember">
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-silver/50">
              Products
            </div>
            <ul className="mt-5 space-y-3 text-sm text-silver/80">
              {productsLinks.map((link) => (
                <li key={link.label}>
                  {isHome ? (
                    <a href={`#${link.hash}`} className="transition-colors hover:text-ember">
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to="/products"
                      search={{
                        category: link.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-"),
                      }}
                      className="transition-colors hover:text-ember"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-silver/50">
              Contact
            </div>
            <div className="mt-5 space-y-4 text-sm text-silver/80">
              {/* Address */}
              <div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-ember font-bold">
                  Office Address
                </div>
                <FooterLink
                  toHash="contact"
                  className="mt-1 block transition-colors hover:text-ember text-xs leading-relaxed"
                >
                  VAVDI GAM SR.NO.37, PLOT NO.37, SHED NO.2, OPP. SHREEJI GAU SHALA, B/H KRISHNA
                  PARK, VAVDI, RAJKOT- 360004
                </FooterLink>
              </div>

              {/* Phones */}
              <div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-ember font-bold">
                  Phone Numbers
                </div>
                <div className="mt-1 space-y-1 text-xs">
                  <a href="tel:+919924444178" className="block transition-colors hover:text-ember">
                    +91 99244 44178
                  </a>
                  <a href="tel:+919924599312" className="block transition-colors hover:text-ember">
                    +91 99245 99312 (Office)
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-ember font-bold">
                  Email Addresses
                </div>
                <div className="mt-1 space-y-1.5 text-xs font-mono">
                  <a
                    href="mailto:sales@dhanyatupvtltd.in"
                    className="block transition-colors hover:text-ember"
                  >
                    sales@dhanyatupvtltd.in
                  </a>
                  <a
                    href="mailto:jobs@dhanyatupvtltd.in"
                    className="block transition-colors hover:text-ember"
                  >
                    jobs@dhanyatupvtltd.in
                  </a>
                  <a
                    href="mailto:help@dhanyatupvtltd.in"
                    className="block transition-colors hover:text-ember"
                  >
                    help@dhanyatupvtltd.in
                  </a>
                  <a
                    href="mailto:dhanyatugroup2024@gmail.com"
                    className="block transition-colors hover:text-ember"
                  >
                    dhanyatugroup2024@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div className="text-xs text-silver/50 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
            <span>
              © {new Date().getFullYear()} Dhanyatu Group of Company Pvt. Ltd. All rights reserved.
            </span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="text-silver/60">
              Developed by{" "}
              <span className="text-ember font-semibold tracking-wide">MatrixTechX</span>
            </span>
          </div>
          <FooterLink
            toHash="top"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs transition-colors hover:border-ember hover:text-ember"
          >
            Back to Top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
