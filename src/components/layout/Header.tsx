import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import companyLogo from "@/assets/dhanyatu-logo.png";

const ease = [0.22, 1, 0.36, 1] as const;

function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src={companyLogo} alt="Dhanyatu Logo" className={className} />;
}

interface NavLinkProps {
  toHash: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function NavLink({ toHash, className, onClick, children }: NavLinkProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    return (
      <a href={`#${toHash}`} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link to="/" hash={toHash} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease }}
      className={`fixed inset-x-0 top-0 z-50 w-full h-16 sm:h-20 transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/90 border-gray-200/40 backdrop-blur-md shadow-sm"
          : "bg-white border-transparent"
      }`}
    >
      <div className="container-x flex h-full items-center justify-between relative mx-auto px-4 md:px-8">
        <Link
          to="/"
          hash="top"
          className="flex flex-col items-center justify-center gap-1 py-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 z-10"
          aria-label="Dhanyatu Home"
        >
          <Logo className="h-10 sm:h-11 w-auto object-contain" />
          <span className="font-display font-bold tracking-tight text-graphite text-[9px] sm:text-[10.5px] leading-none uppercase whitespace-nowrap">
            Dhanyatu Group of Company Pvt. Ltd.
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <NavLink
            toHash="top"
            className="group relative text-[15px] font-semibold text-graphite/75 transition-colors hover:text-graphite"
          >
            Home
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
          </NavLink>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              onClick={() => setAboutDropdownOpen((o) => !o)}
              className="flex items-center gap-1 group relative text-[15px] font-semibold text-graphite/75 transition-colors hover:text-graphite cursor-pointer py-2"
            >
              About Us
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${aboutDropdownOpen ? "rotate-180 text-ember" : "text-graphite/40"}`}
              />
            </button>
            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 rounded-2xl border border-graphite/10 bg-white/95 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-md z-50 flex flex-col"
                >
                  <NavLink
                    toHash="about"
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-graphite/75 transition-colors hover:bg-gray-100 hover:text-graphite"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    About Company
                  </NavLink>
                  <NavLink
                    toHash="leadership"
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-graphite/75 transition-colors hover:bg-gray-100 hover:text-graphite mt-1"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Directors Information
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            toHash="products"
            className="group relative text-[15px] font-semibold text-graphite/75 transition-colors hover:text-graphite"
          >
            Products
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
          </NavLink>
          <NavLink
            toHash="clients"
            className="group relative text-[15px] font-semibold text-graphite/75 transition-colors hover:text-graphite"
          >
            Clients
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
          </NavLink>
          <NavLink
            toHash="contact"
            className="group relative text-[15px] font-semibold text-graphite/75 transition-colors hover:text-graphite"
          >
            Contact
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <NavLink
            toHash="contact"
            className="group hidden items-center gap-2 rounded-full bg-graphite px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-ember md:inline-flex"
          >
            Get Quote
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
          </NavLink>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-graphite/15 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-graphite transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-graphite transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-graphite transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease }}
          className="absolute top-full left-0 right-0 overflow-hidden border-b border-gray-200/40 bg-white/95 shadow-lg backdrop-blur-xl lg:hidden"
        >
          <div className="container-x py-5 flex flex-col gap-1 mx-auto px-4">
            <NavLink
              toHash="top"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-graphite/5 py-3.5 text-[15px] font-semibold text-graphite"
            >
              Home
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </NavLink>

            {/* Mobile About Us accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileAboutOpen((o) => !o)}
                className="flex items-center justify-between border-b border-graphite/5 py-3.5 text-[15px] font-semibold w-full text-left text-graphite"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 text-muted-foreground ${mobileAboutOpen ? "rotate-180 text-ember" : ""}`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: mobileAboutOpen ? "auto" : 0, opacity: mobileAboutOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden bg-gray-50/50 rounded-xl px-4 flex flex-col"
              >
                <NavLink
                  toHash="about"
                  onClick={() => {
                    setOpen(false);
                    setMobileAboutOpen(false);
                  }}
                  className="flex items-center justify-between border-b border-graphite/5 py-3 text-sm font-semibold text-graphite/75 last:border-0"
                >
                  <span>About Company</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/60" />
                </NavLink>
                <NavLink
                  toHash="leadership"
                  onClick={() => {
                    setOpen(false);
                    setMobileAboutOpen(false);
                  }}
                  className="flex items-center justify-between py-3 text-sm font-semibold text-graphite/75"
                >
                  <span>Directors Information</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/60" />
                </NavLink>
              </motion.div>
            </div>

            <NavLink
              toHash="products"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-graphite/5 py-3.5 text-[15px] font-semibold text-graphite"
            >
              Products
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </NavLink>
            <NavLink
              toHash="clients"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-graphite/5 py-3.5 text-[15px] font-semibold text-graphite"
            >
              Clients
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </NavLink>
            <NavLink
              toHash="contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-graphite/5 py-3.5 text-[15px] font-semibold text-graphite"
            >
              Contact
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </NavLink>

            <NavLink
              toHash="contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-graphite px-5 py-3 text-[15px] font-semibold text-white"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
