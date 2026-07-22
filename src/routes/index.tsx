import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState, useId } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Check,
  Droplet,
  Cog,
  Shield,
  Truck,
  Leaf,
  Wrench,
  BadgeCheck,
  Headset,
  ChevronDown,
  Target,
  Compass,
  ArrowRight,
  ArrowUpRight,
  Plus,
  ChevronUp,
} from "lucide-react";

const heroVideo = "/assets/hero-video.mp4";
const logisticsVideo = "/assets/logistics-video.mp4";
import aboutImg from "@/assets/about-industrial.png";
import splashImg from "@/assets/oil-splash.jpg";
import companyLogo from "@/assets/dhanyatu-logo.png";
import whyChooseFactory from "@/assets/why-choose-factory.jpg";
import trustImg from "@/assets/why-trust.jpg";
import prodIndustrial from "@/assets/prod-industrial.png";
import prodLubricant from "@/assets/prod-lubricant.jpeg";
import prodCutting from "@/assets/prod-cutting.png";
import prodSpeciality from "@/assets/prod-speciality.png";
import prodGear from "@/assets/prod-gear.png";
import prodEngine from "@/assets/prod-engine.png";
import prodMachine from "@/assets/prod-machine.png";
import prodHeatTransfer from "@/assets/prod-heat-transfer.png";
import prodGrease from "@/assets/prod-grease.png";
import prodTransformerOil from "@/assets/prod-transformer-oil.png";
import prodParaffinOil from "@/assets/prod-paraffin-oil.png";
import prodBaseOil from "@/assets/prod-base-oil.png";
import prodShutteringOil from "@/assets/prod-shuttering-oil.png";
import mdPhoto from "@/assets/md-jayesh-patel.jpeg";
import leaderMukesh from "@/assets/leader-mukesh.png";
import leaderJyotsna from "@/assets/leader-jyotsna.png";
import leaderYatisha from "@/assets/leader-yatisha.png";
import ytiLogo from "../assets/yati.png";

import clientLogo1 from "@/assets/clients logos/1.png";
import clientLogo2 from "@/assets/clients logos/2.png";
import clientLogo3 from "@/assets/clients logos/3.png";
import clientLogo4 from "@/assets/clients logos/4.png";
import clientLogo5 from "@/assets/clients logos/5.png";
import clientLogo6 from "@/assets/clients logos/6.png";
import clientLogo7 from "@/assets/clients logos/7.png";
import clientLogo8 from "@/assets/clients logos/8.png";
import clientLogo9 from "@/assets/clients logos/9.png";
import clientLogo10 from "@/assets/clients logos/10.png";
import clientLogo11 from "@/assets/clients logos/11.png";
import clientLogo12 from "@/assets/clients logos/12.png";
import clientLogo13 from "@/assets/clients logos/13.png";
import clientLogo14 from "@/assets/clients logos/14.png";
import clientLogo15 from "@/assets/clients logos/15.png";
import clientLogo16 from "@/assets/clients logos/16.png";
import clientLogo17 from "@/assets/clients logos/17.png";
import clientLogo18 from "@/assets/clients logos/18.png";
import clientLogo19 from "@/assets/clients logos/19.png";
import clientLogo20 from "@/assets/clients logos/20.png";
import clientLogo21 from "@/assets/clients logos/21.png";
import clientLogo22 from "@/assets/clients logos/22.png";
import clientLogo23 from "@/assets/clients logos/23.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhanyatu Group — Precision Industrial Lubrication Solutions" },
      {
        name: "description",
        content:
          "Powering Gujarat's industries with 250+ lubricant products, 48,000 L distributed monthly. Industrial, specialty and edible oils engineered for performance.",
      },
    ],
  }),
  component: Landing,
});

/* ---------- Reusable bits ---------- */

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  y = 30,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({
  to,
  suffix = "",
  duration = 2,
  useGrouping = true,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  useGrouping?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref} className="tabular-nums">
      {Math.round(val).toLocaleString(undefined, { useGrouping })}
      {suffix}
    </span>
  );
}

function MagneticButton({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit";
  className?: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium tracking-wide transition-colors cursor-pointer";
  const variants =
    variant === "primary"
      ? "bg-graphite text-white hover:bg-ember"
      : "border border-graphite/20 text-graphite hover:border-graphite/60 backdrop-blur-sm";

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ x: sx, y: sy }}
        className={`${base} ${variants} ${className}`}
        onClick={onClick}
      >
        <span>{children}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`${base} ${variants} ${className} border-0`}
      onClick={onClick}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.button>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] ${dark ? "text-silver" : "text-muted-foreground"}`}
    >
      <span className="h-px w-10 bg-ember" />
      {children}
    </div>
  );
}

/* ---------- Preloader Screen ---------- */
function Preloader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300); // Snappy fade out after reaching 100% (~1.2s total wait)
          return 100;
        }
        return p + 1;
      });
    }, 10); // Faster increment steps (10ms * 100 = 1s loading)
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-graphite">
      <div className="flex flex-col items-center max-w-sm animate-fade-in">
        {/* Large Animated Logo Reveal */}
        <div className="relative h-48 w-48 flex items-center justify-center">
          {/* Background (Empty state: grayed out logo) */}
          <img
            src={companyLogo}
            alt="Dhanyatu Logo Outline"
            className="w-full h-full object-contain opacity-10 grayscale"
          />
          {/* Foreground (Filled state: rising colored logo) */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 overflow-hidden w-full"
            style={{ height: `${percent}%` }}
            transition={{ ease: "linear" }}
          >
            {/* We maintain the image inside at the full height of the parent wrapper */}
            <div className="absolute bottom-0 left-0 w-full h-[12rem] flex items-center justify-center">
              <img src={companyLogo} alt="Dhanyatu Logo" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Counter and status bar */}
        <div className="mt-8 flex flex-col items-center w-full px-8">
          <div className="text-2xl font-display font-semibold tracking-widest tabular-nums text-graphite">
            {percent}%
          </div>
          {/* Progress bar */}
          <div className="relative mt-4 h-1 w-48 rounded-full overflow-hidden bg-graphite/10">
            <motion.div
              className="absolute top-0 left-0 h-full bg-ember"
              style={{ width: `${percent}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
          <span className="mt-3 text-[10px] font-mono tracking-[0.3em] uppercase text-graphite/40">
            Engineering Precision
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999]"
          >
            <Preloader onComplete={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="bg-surface text-graphite font-sans">
        <Cursor />
        <Hero isPlaying={!loading} />
        <Ticker />
        <Stats />
        <About />
        <Journey />
        <WhyChoose />
        <Brands />
        <Products />
        <Leadership />
        <Clients />
        <Testimonials />
        <Contact />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919924599312"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#20ba5a] active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="h-7 w-7 fill-current transition-transform duration-500 group-hover:rotate-[360deg]"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.467.002 9.93-4.449 9.933-9.923.002-2.651-1.026-5.144-2.898-7.019C16.438 1.788 13.948.762 11.3.762 5.836.762 1.373 5.21 1.37 10.686c-.001 1.538.413 3.04 1.198 4.417L1.5 21.072l6.147-1.616l-.001-.002zM17.48 14.5c-.3-.15-1.771-.875-2.04-.973-.27-.099-.465-.148-.66.15-.195.298-.755.952-.925 1.15-.17.198-.34.223-.64.073-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.495-1.782-1.67-2.08-.175-.298-.018-.46.13-.608.135-.13.3-.347.45-.52.15-.173.2-.298.3-.497.1-.2.05-.373-.025-.52-.075-.15-.66-1.588-.905-2.176-.237-.569-.479-.492-.66-.501-.17-.008-.364-.01-.559-.01-.195 0-.51.073-.78.368-.27.299-1.025 1.002-1.025 2.441 0 1.439 1.048 2.83 1.193 3.029.146.198 2.064 3.15 5.003 4.417.7.301 1.244.48 1.671.616.702.224 1.342.193 1.847.118.563-.084 1.771-.724 2.02-1.424.25-.699.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
          </svg>
        </a>
      </main>
    </>
  );
}

/* ---------- Cursor spotlight ---------- */
function Cursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      style={{
        left: x,
        top: y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed z-[1] hidden h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.22_27/0.10),transparent_60%)] blur-2xl md:block"
    />
  );
}

/* ---------- Hero ---------- */
function Hero({ isPlaying }: { isPlaying: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.currentTime = 0;
      video.play().catch((err) => {
        console.error("Failed to play background video:", err);
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative w-full aspect-auto py-20 sm:py-0 sm:aspect-[2.2/1] min-h-[460px] sm:min-h-0 overflow-hidden bg-ink text-white noise flex items-center"
    >
      {/* Background video */}
      <div className="absolute inset-0 h-full w-full">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="container-x relative z-10 w-full pt-16 pb-6 sm:py-12 md:py-0 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
      >
        <div className="max-w-3xl">
          <h1 className="mt-4 sm:mt-6 md:mt-8 font-display text-[1.85rem] xs:text-[2.25rem] sm:text-[4.5vw] md:text-[5.75rem] font-bold leading-[1.25] sm:leading-[1.1] md:leading-[0.95] tracking-[-0.03em] text-balance">
            {["Powering", "Industries", "with Precision"].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 60, filter: "blur(15px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease, delay: 0.5 + i * 0.15 }}
                className="inline-block md:block mr-2 md:mr-0"
              >
                {i === 2 ? (
                  <>
                    with{" "}
                    <span className="relative italic text-ember">
                      Precision
                      <svg
                        className="absolute -bottom-2 left-0 w-full"
                        viewBox="0 0 200 8"
                        fill="none"
                      >
                        <path
                          d="M2 6 Q 100 -2 198 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-block md:block text-white"
            >
              Lubrication Solutions.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.2 }}
            className="mt-6 sm:mt-6 md:mt-8 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-silver/90 sm:text-lg"
          >
            Delivering high-performance industrial lubricants, specialty oils and edible oils across
            Gujarat — engineered for MNCs, MSMEs and India's manufacturing leaders.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Ticker ---------- */
function Ticker() {
  const items = [
    "ISO 9001 Quality",
    "250+ Products",
    "MNC + MSME Trusted",
    "Whole Gujarat Distributor",
    "10+ Years Expertise",
    "On-Site Consultation",
    "48,000 L / Month",
    "Sustainable Practice",
  ];
  return (
    <section className="border-y border-graphite/10 bg-graphite py-3 sm:py-6 text-white">
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee shrink-0 items-center gap-16 whitespace-nowrap pr-16">
          {[...items, ...items].map((it, i) => (
            <span
              key={i}
              className="flex items-center gap-6 font-display text-base sm:text-2xl font-medium tracking-tight"
            >
              {it}
              <Droplet className="h-3 w-3 sm:h-4 sm:w-4 text-ember" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
function Stats() {
  const stats = [
    { v: 250, s: "+", l: "Products in Catalog" },
    { v: 900, s: "+", l: "Active Customers" },
    { v: 48000, s: " L", l: "Distributed Monthly" },
    { v: 50, s: "%", l: "Annual Growth YoY" },
    { v: 10, s: "+", l: "Years of Expertise" },
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-surface">
      <div className="container-x">
        <Reveal>
          <SectionLabel>By the Numbers</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
            A decade of measurable impact on India's manufacturing core.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-graphite/10 bg-graphite/10 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 0.08}
              className={i === 4 ? "col-span-2 md:col-span-1" : ""}
            >
              <div className="group relative h-full bg-surface p-5 sm:p-7 transition-colors hover:bg-white flex flex-col justify-between">
                <div>
                  <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-ember opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-none tracking-tight text-graphite">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-3.5 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
                </div>
                <div className="mt-5 h-px w-10 bg-ember transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-white">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Image */}
          <Reveal className="h-full hidden lg:block">
            <div className="relative overflow-hidden rounded-3xl group shadow-2xl w-full h-[350px] lg:h-full lg:min-h-full">
              <motion.img
                src={aboutImg}
                alt="Dhanyatu Corporate Head Office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease }}
              />
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <SectionLabel>About Dhanyatu</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.02em] text-balance">
                Lubrication, refined into a <span className="italic text-ember">discipline.</span>
              </h2>
            </Reveal>

            {/* Mobile Image */}
            <Reveal className="block lg:hidden my-6 w-full animate-fade-in">
              <div className="relative overflow-hidden rounded-3xl shadow-xl w-full aspect-[4/5]">
                <img
                  src={aboutImg}
                  alt="Dhanyatu Corporate Head Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 lg:mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg text-justify">
                Dhanyatu Group of Company Pvt. Ltd. is a premier Gujarat-based industrial enterprise
                specializing in high-performance lubricant oils, specialty fluids, and edible oils.
                With over a decade of trading expertise and a robust network spanning 900+
                customers, we partner with MNCs, MSMEs, and large manufacturing units to engineer
                reliability and efficiency into every moving part.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg text-justify">
                As a trusted supplier of industrial oil lubricants and greases, including our
                flagship <span className="font-semibold text-graphite">YATI COOL</span> brand, we
                deliver products engineered to meet international quality standards through strict
                Quality Management Systems (QMS). YATI COOL is a leading brand in metalworking and
                industrial fluids, meticulously tested to meet today's demanding applications and
                machine manufacturer requirements.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 border-t border-graphite/10 pt-8">
                <div className="grid gap-6 sm:grid-cols-3">
                  {[
                    {
                      no: "01",
                      title: "Quality Assurance",
                      desc: "Products engineered to meet international quality standards (QMS) and verified for demanding applications.",
                    },
                    {
                      no: "02",
                      title: "Supply Chain Integrity",
                      desc: "Reliable logistics and dedicated transport fleet serving 900+ clients across Gujarat.",
                    },
                    {
                      no: "03",
                      title: "Technical Survey",
                      desc: "Expert, Ph.D-led lubrication audits to match applications precisely and cut operational downtime.",
                    },
                  ].map((item) => (
                    <div key={item.no} className="flex flex-col">
                      <span className="font-mono text-xs font-semibold text-ember uppercase tracking-wider">
                        {item.no}
                      </span>
                      <h4 className="mt-2 text-sm font-semibold text-graphite">{item.title}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground text-justify">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoElement({ src, isActive }: { src: string; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch((err) => {
        console.error("Failed to play pillar video:", err);
      });
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <video ref={videoRef} src={src} muted loop playsInline className="w-full h-full object-cover" />
  );
}

/* ---------- Why Choose ---------- */
function WhyChoose() {
  const [activeIdx, setActiveIdx] = useState(0);

  const pillars = [
    {
      no: "01",
      title: "MNC-Grade Quality Standards",
      desc: "Every single drum and barrel undergoes rigorous inspection and meets international QMS specs, matching the highest MNC-grade performance standards.",
      img: trustImg,
    },
    {
      no: "02",
      title: "Reliable Logistics & Transport",
      desc: "Our private fleet of logistics vehicles guarantees direct, uninterrupted, and timely bulk supply lines across manufacturing hubs in Gujarat.",
      video: logisticsVideo,
    },
    {
      no: "03",
      title: "Ph.D-Led Engineering Audits",
      desc: "Technical experts conduct on-site machinery audits, thermal engineering consultation, and customize lubricant matching to prevent downtime.",
      img: whyChooseFactory,
    },
    {
      no: "04",
      title: "Strategic Cost Optimization",
      desc: "Through direct supply chains, route optimization, and long-drain formulations, we minimize the total cost of lubrication for your plant.",
      img: prodLubricant,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container-x">
        <div className="mb-12">
          <Reveal>
            <SectionLabel>Why Choose Us</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-none tracking-tight">
              Engineering reliability, <span className="italic text-ember">redefined.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24 items-center mt-12">
          {/* Left Column: Interactive Image Stack */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[400px] sm:h-[500px] w-full bg-graphite">
              {pillars.map((item, idx) => {
                const isActive = activeIdx === idx;
                return item.video ? (
                  <motion.div
                    key={item.no}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ zIndex: isActive ? 10 : 0 }}
                  >
                    <VideoElement src={item.video} isActive={isActive} />
                  </motion.div>
                ) : (
                  <motion.img
                    key={item.no}
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ zIndex: isActive ? 10 : 0 }}
                  />
                );
              })}
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 to-transparent z-10" />

              {/* Floating info overlay */}
              {activeIdx !== 3 && (
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-graphite/85 px-6 py-4 text-white backdrop-blur-md border border-white/10 z-20 shadow-xl">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-silver/60">
                    Core Pillar 0{activeIdx + 1}
                  </div>
                  <div className="mt-1 font-display font-bold text-base">
                    {pillars[activeIdx].title}
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Right Column: Interactive Typographic Accordion Menu */}
          <div className="flex flex-col gap-4">
            {pillars.map((item, i) => (
              <div
                key={item.no}
                onMouseEnter={() => setActiveIdx(i)}
                className="group cursor-pointer border-b border-graphite/10 pb-5 transition-all duration-300"
              >
                <div className="flex items-baseline gap-6">
                  <span
                    className={`font-mono text-xs font-bold transition-colors duration-300 ${activeIdx === i ? "text-ember" : "text-graphite/40"}`}
                  >
                    {item.no}
                  </span>
                  <h3
                    className={`font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${activeIdx === i ? "text-ember" : "text-graphite/70 group-hover:text-graphite"}`}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Expansive description container */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIdx === i ? "auto" : 0,
                    opacity: activeIdx === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden mt-3 pl-12"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Products ---------- */
function Products() {
  const [isExpanded, setIsExpanded] = useState(false);

  const cats = [
    {
      t: "Industrial Lubricants",
      slug: "industrial-lubricants",
      d: "High-pressure formulations to keep heavy machinery running under extreme loads.",
      img: prodIndustrial,
    },
    {
      t: "Lubricant Oil",
      slug: "lubricant-oil",
      d: "General-purpose premium lubrication for all mechanical moving components.",
      img: prodLubricant,
    },
    {
      t: "Cutting Oil & Fluid",
      slug: "cutting-oil-fluid",
      d: "Advanced metalworking fluids for high-speed cutting, drilling and cooling.",
      img: prodCutting,
    },
    {
      t: "Industrial Speciality Oils",
      slug: "industrial-speciality-oils",
      d: "Custom-blended high-viscosity formulations for unique thermodynamic environments.",
      img: prodSpeciality,
    },
    {
      t: "Gear Oil",
      slug: "gear-oil",
      d: "Extreme-pressure EP lubricants engineered to shield gear teeth and transfer torque.",
      img: prodGear,
    },
    {
      t: "Engine Oil",
      slug: "engine-oil",
      d: "Heavy-duty diesel and industrial engine lubricants to maximise thermal efficiency.",
      img: prodEngine,
    },
    {
      t: "Machine Oil",
      slug: "machine-oil",
      d: "Precision spindle, guide-way and textile machinery oils designed to minimise friction.",
      img: prodMachine,
    },
    {
      t: "Heat Transfer Fluid",
      slug: "heat-transfer-fluid",
      d: "High-performance thermodynamic fluids for heat transfer and cooling systems.",
      img: prodHeatTransfer,
    },
    {
      t: "Industrial Oils",
      slug: "industrial-oils",
      d: "High-performance formulations to keep heavy machinery running under extreme loads.",
      img: prodIndustrial,
    },
    {
      t: "Industrial Grease",
      slug: "industrial-grease",
      d: "Heavy-duty industrial greases for extreme pressure and bearing protection.",
      img: prodGrease,
    },
    {
      t: "Transformer Oil",
      slug: "transformer-oil",
      d: "High-dielectric insulation oils engineered for power transformers and switchgear.",
      img: prodTransformerOil,
    },
    {
      t: "Paraffin Oil",
      slug: "paraffin-oil",
      d: "High-purity mineral oils for industrial, cosmetic, and manufacturing uses.",
      img: prodParaffinOil,
    },
    {
      t: "Lubricating Grease",
      slug: "lubricating-grease",
      d: "Advanced greases for reducing friction, wear, and corrosion in moving parts.",
      img: prodGrease,
    },
    {
      t: "Base Oil",
      slug: "base-oil",
      d: "Premium base stocks for lubricant blending and formulation.",
      img: prodBaseOil,
    },
    {
      t: "Process Oils",
      slug: "process-oils",
      d: "Specialized process oils for rubber, plastics, and chemical industries.",
      img: prodIndustrial,
    },
    {
      t: "Shuttering Oil",
      slug: "shuttering-oil",
      d: "High-quality concrete release agents for clean shuttering and mold release.",
      img: prodShutteringOil,
    },
    {
      t: "White Oil",
      slug: "white-oil",
      d: "Ultra-pure water-white mineral oils for pharmaceutical and food-grade use.",
      img: prodParaffinOil,
    },
    {
      t: "Fully Refined Paraffin Wax",
      slug: "fully-refined-paraffin-wax",
      d: "Premium food-grade and industrial fully refined paraffin wax slabs and liquid.",
      img: prodSpeciality,
    },
    {
      t: "Metal Working Fluids",
      slug: "metal-working-fluids",
      d: "Advanced metalworking fluids for cutting, grinding, and rust prevention.",
      img: prodCutting,
    },
    {
      t: "Paraffin Wax",
      slug: "paraffin-wax",
      d: "Industrial and commercial paraffin waxes for candles, packaging, and coating.",
      img: prodSpeciality,
    },
    {
      t: "Automotive Gear Oil",
      slug: "automotive-gear-oil",
      d: "High-performance gear lubricants for automotive transmissions and differentials.",
      img: prodGear,
    },
    {
      t: "Propylene Glycol",
      slug: "propylene-glycol",
      d: "Industrial and food-grade propylene glycol for cooling and heat transfer.",
      img: prodSpeciality,
    },
    {
      t: "Engine Oil Additive",
      slug: "engine-oil-additive",
      d: "High-performance chemical additives to boost lubricity and engine life.",
      img: prodEngine,
    },
    {
      t: "Radiator Coolant",
      slug: "radiator-coolant",
      d: "Advanced anti-freeze and radiator coolants for heat dissipation.",
      img: prodSpeciality,
    },
    {
      t: "Edm Oil",
      slug: "edm-oil",
      d: "Dielectric fluids for high-precision spark erosion and EDM machining.",
      img: prodCutting,
    },
  ];

  // Card component used in the grid
  function PCard({ p, i }: { p: (typeof cats)[0]; i: number }) {
    return (
      <Reveal delay={i * 0.04} className="h-full">
        <Link
          to="/products"
          search={{ category: p.slug }}
          className="group relative overflow-hidden rounded-2xl h-[260px] sm:h-[280px] cursor-pointer block bg-graphite"
        >
          {/* Background photo */}
          <img
            src={p.img || prodIndustrial}
            alt={p.t}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-100 brightness-[1.18]"
            onError={(e) => {
              e.currentTarget.src = prodIndustrial;
            }}
          />
          {/* Gradient overlay — lighter at top, dark at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent transition-opacity duration-500" />

          {/* Number badge — top-right */}
          <div className="absolute top-5 right-5 font-mono text-[10px] font-bold tracking-widest text-white/40 uppercase">
            {String(i + 1).padStart(2, "0")}
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col gap-2 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
              {p.t}
            </h3>
            {/* Description slides up on hover */}
            <div className="hidden sm:block overflow-hidden max-h-0 sm:group-hover:max-h-24 transition-all duration-500">
              <p className="text-xs text-silver/75 leading-relaxed pt-1">{p.d}</p>
            </div>
            {/* CTA */}
            <span className="mt-2 hidden sm:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-ember opacity-0 translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-400">
              View Products <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>

          {/* Ember accent line at bottom on hover */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-ember origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </Link>
      </Reveal>
    );
  }

  // View More / Show Less Cards logic
  const displayedCats = isExpanded ? cats : cats.slice(0, 7);

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 relative bg-white">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Catalog</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.75rem)] font-bold leading-[1.02] tracking-tight text-graphite">
                250+ products. {cats.length} categories. <br />
                <span className="italic text-ember">One trusted partner.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-sm text-muted-foreground max-w-lg leading-relaxed">
                From high-pressure industrial lubricants to precision machine oils — every
                formulation is engineered for India's demanding manufacturing environments.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Uniform Grid ── */}
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {displayedCats.map((cat, i) => (
            <PCard key={cat.t} p={cat} i={i} />
          ))}

          {!isExpanded ? (
            <Reveal delay={0.28} className="h-full">
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full text-left group relative overflow-hidden rounded-2xl h-[260px] sm:h-[280px] cursor-pointer flex flex-col justify-between p-6 bg-graphite border border-ember/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ember/10 via-transparent to-ember/5" />
                <div className="absolute top-5 right-5 font-mono text-[10px] font-bold tracking-widest text-white/40 uppercase">
                  +18 MORE
                </div>
                <div className="mt-auto relative z-10 flex flex-col gap-2">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-ember transition-all duration-300">
                    <Plus className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                    View More Categories
                  </h3>
                  <p className="text-xs text-silver/70 max-w-[220px]">
                    Explore all {cats.length} product categories in our catalog.
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-ember origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </button>
            </Reveal>
          ) : (
            <Reveal delay={0.05} className="h-full">
              <button
                onClick={() => setIsExpanded(false)}
                className="w-full text-left group relative overflow-hidden rounded-2xl h-[260px] sm:h-[280px] cursor-pointer flex flex-col justify-between p-6 bg-graphite border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10" />
                <div className="absolute top-5 right-5 font-mono text-[10px] font-bold tracking-widest text-white/40 uppercase">
                  CLOSE
                </div>
                <div className="mt-auto relative z-10 flex flex-col gap-2">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-ember transition-all duration-300">
                    <ChevronUp className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                    Show Less
                  </h3>
                  <p className="text-xs text-silver/70 max-w-[220px]">
                    Collapse directory to featured categories.
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-ember origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Brands ---------- */
function Brands() {
  return (
    <section id="brands" className="py-12 sm:py-16 md:py-20 bg-surface">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Our Brands</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
            Engineered in-house. Distributed across Gujarat.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              name: "YATI",
              tag: "Own Brand",
              line: "Performance lubricants engineered and bottled by Dhanyatu.",
            },
            {
              name: "VENLUB",
              tag: "Whole-Gujarat Distributor",
              line: "Performance-engineered fluids — authorised regional distribution.",
            },
          ].map((b, i) => (
            <Reveal key={b.name} delay={i * 0.15}>
              <Link
                to="/brand"
                search={{ name: b.name.toLowerCase() }}
                className="group relative block h-[260px] overflow-hidden rounded-3xl border border-graphite/10 bg-graphite p-8 text-white transition-all duration-300 hover:border-ember/40 shadow-sm hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ember/0 via-transparent to-ember/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ember/20 blur-3xl transition-all duration-700 group-hover:scale-150" />

                <div className="relative flex h-full flex-col justify-between z-10">
                  <div className="flex items-start justify-between">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-silver/60">
                      {b.tag}
                    </div>
                    <ArrowUpRight className="h-5 w-5 transition-all group-hover:rotate-45 group-hover:text-ember" />
                  </div>
                  <div>
                    {b.name === "YATI" ? (
                      <img
                        src={ytiLogo}
                        alt="YATI"
                        className="h-14 sm:h-18 w-auto object-contain brightness-0 invert"
                      />
                    ) : (
                      <div className="font-display text-4xl sm:text-5xl font-bold leading-none tracking-tighter text-white">
                        {b.name}
                      </div>
                    )}
                    <p className="mt-3 text-sm text-silver/70 max-w-md">{b.line}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Journey ---------- */
function Journey() {
  const items = [
    {
      y: "2016",
      t: "Brand Established",
      d: "The brand was established by MR. Jayesh Patel in a small shop, selling in limited quantities.",
    },
    {
      y: "2017",
      t: "Corporate Identity",
      d: "The company grew and named itself DHANYATU GROUP OF COMPANY with a registered GST number.",
    },
    {
      y: "2023",
      t: "Subsidiary Expansion",
      d: "The company has grown further and launched five new companies under the Dhanyatu Group of Company in different areas:",
      companies: [
        { name: "S.M. OIL AGENCY", loc: "RUDA NAVAGAM" },
        { name: "PRAMUKHRAJ ENTERPRISE", loc: "SHAPER VERAVAL" },
        { name: "SHREE HARI ENTERPRISE", loc: "MORBI" },
        { name: "SHREEJI ENTERPRISE", loc: "METODA" },
        { name: "DHANUSH ENTERPRISE", loc: "RAJKOT" },
      ],
    },
    {
      y: "2026",
      t: "Manufacturing & Private Limited",
      d: "The company transitioned to bulk quantity sales and became a private limited company with major developments. It launched its own flagship brand (YATI COOL) and started its own manufacturing operations in Rajkot.",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 85%"],
  });

  return (
    <section id="journey" className="py-12 sm:py-16 md:py-20 bg-surface">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          {/* Left Column: Sticky Title & Bio */}
          <div>
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              <div>
                <Reveal>
                  <SectionLabel>Our Journey</SectionLabel>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="mt-4 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                    Origin & <br className="hidden lg:block" /> Expansion
                  </h2>
                </Reveal>
              </div>

              <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground border-l-2 border-ember/20 pl-4">
                <Reveal delay={0.15}>
                  <p>
                    The company was started in 2016 by MR. Jayesh Patel in a small shop in Rajkot.
                    And it has now grown and achieved great fame.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p>
                    We offer a wide range of industrial oil. We strongly believe in delivering the
                    premium quality oil. Hence we constantly upgrade ourselves with the help of
                    latest manufacturing machinery.
                  </p>
                </Reveal>
                <Reveal delay={0.25}>
                  <p>
                    Our dexterous employees are our biggest strength and they have helped us in
                    executing our vision and taking it to a higher level.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p>
                    The success of DHANYATU finds its roots in the vision of MR. Jayesh Patel, the
                    owner of the company. His sincerity has taken Dhanyatu to a higher level.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div ref={ref} className="relative lg:pl-0">
            {/* The vertical track line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-graphite/10 lg:left-6" />
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-[18px] top-2 bottom-2 w-px bg-ember origin-top lg:left-6"
            />

            <div className="flex flex-col gap-10">
              {items.map((it, i) => (
                <Reveal key={it.y} delay={i * 0.1} className="pl-12 relative lg:pl-16">
                  {/* Timeline Dot */}
                  <div className="absolute left-1 top-1 grid h-7 w-7 place-items-center rounded-full border border-graphite/15 bg-white shadow-sm z-10 lg:left-2.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-ember ember-glow" />
                  </div>

                  {/* Timeline Content */}
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-ember/10 text-xs font-bold text-ember font-mono">
                      {it.y}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-graphite">
                      {it.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                    {it.companies && (
                      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {it.companies.map((c, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col justify-center rounded-xl border border-graphite/5 bg-white p-3.5 shadow-xs transition-colors hover:border-ember/20"
                          >
                            <span className="font-display text-[11px] font-bold tracking-tight text-graphite">
                              {c.name}
                            </span>
                            <span className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                              {c.loc}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Leadership ---------- */
function Leadership() {
  const teamMembers = [
    {
      n: "Jyotsna Patel",
      r: "Director",
      b: "Oversees corporate governance, regulatory compliance and strategic partnerships across Dhanyatu's subsidiary enterprises, ensuring long-term institutional strength.",
      img: leaderJyotsna,
    },
  ];

  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-ink"
      style={{ paddingBlock: "clamp(3rem, 6vw, 5rem)" }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-60 right-[-10%] h-[700px] w-[700px] rounded-full bg-ember/8 blur-[140px]" />
        <div className="absolute bottom-0 left-[-5%] h-[500px] w-[500px] rounded-full bg-ember/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.6) 40px,rgba(255,255,255,0.6) 41px)",
          }}
        />
      </div>

      <div className="container-x relative">
        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-10 bg-ember" />
            Leadership
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white">
            The minds behind the machine.
          </h2>
        </Reveal>

        {/* ── MD Spotlight ────────────────────────────────────── */}
        <div className="mt-10 grid lg:grid-cols-[1fr_480px] lg:gap-14 lg:items-stretch">
          {/* Left — Details */}
          <div className="flex flex-col justify-between py-2">
            <div>
              {/* Badge */}
              <Reveal>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-ember">
                    Chairman &amp; Managing Director
                  </span>
                </div>
              </Reveal>

              {/* Name */}
              <Reveal delay={0.1}>
                <h3 className="mt-5 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
                  Jayesh Patel
                </h3>
              </Reveal>

              {/* Mobile MD Photo */}
              <Reveal className="block lg:hidden my-6 w-full animate-fade-in">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full border border-white/10">
                  <img
                    src={mdPhoto}
                    alt="Jayesh Patel — Chairman & Managing Director"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink/90 to-transparent" />
                </div>
              </Reveal>

              {/* Bio — 2 paragraphs */}
              <Reveal delay={0.15}>
                <div className="mt-6 space-y-5 max-w-2xl">
                  <p className="text-base leading-relaxed text-white/65">
                    <span className="font-semibold text-white">Jayesh Patel</span>, currently a
                    businessman, brings over{" "}
                    <span className="text-ember font-semibold">19 years of experience</span> to the
                    field. His career began with making diamond jewelry and continued until 2014,
                    after which he pivoted decisively into the industrial lubricant sector. Over the
                    past decade he has built deep expertise in lubricant trading, and today
                    continues to drive Dhanyatu's growth — while simultaneously contributing his
                    best to the company's management and long-term vision.
                  </p>
                  <p className="text-base leading-relaxed text-white/65">
                    <span className="font-semibold text-white">Dhanyatu</span> was founded in{" "}
                    <span className="text-ember font-semibold">2016</span> by Mr. Jayesh Patel from
                    a small shop in Rajkot, and has since grown to become a widely recognised name
                    in industrial oils. The company offers a wide range of premium quality
                    industrial oils, constantly upgrading its processes with the latest
                    manufacturing machinery. Our dexterous team remains our greatest strength —
                    executing the vision that Mr. Patel set out, and taking{" "}
                    <span className="text-white/85">Dhanyatu</span> to an ever-higher level through
                    sincerity and dedication.
                  </p>
                </div>
              </Reveal>

              {/* Stats — animated counters */}
              <Reveal delay={0.28}>
                <div className="mt-10 flex gap-0 divide-x divide-white/10">
                  {(
                    [
                      { to: 19, suffix: "+", useGrouping: true, l: "Yrs Experience" },
                      { to: 2016, suffix: "", useGrouping: false, l: "Est. in Rajkot" },
                      { to: 250, suffix: "+", useGrouping: true, l: "Products Today" },
                    ] as { to: number; suffix: string; useGrouping: boolean; l: string }[]
                  ).map((s, i) => (
                    <div
                      key={s.l}
                      className="flex flex-col items-start px-4 xs:px-6 sm:px-8 first:pl-0 last:pr-0"
                    >
                      <div className="font-display text-3xl font-extrabold text-white tabular-nums">
                        <Counter
                          to={s.to}
                          suffix={s.suffix}
                          duration={1.8}
                          useGrouping={s.useGrouping}
                        />
                      </div>
                      <div className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-white">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="relative hidden lg:block h-full min-h-[480px]">
            {/* Ember glow behind photo */}
            <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-ember/15 blur-3xl" />

            <motion.div
              className="relative overflow-hidden rounded-2xl h-full w-full"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={mdPhoto}
                alt="Jayesh Patel — Chairman & Managing Director, Dhanyatu Group"
                className="h-full w-full object-cover object-top absolute inset-0"
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink/80 to-transparent" />
              {/* Name tag at bottom */}
              <div className="absolute bottom-5 left-5">
                <div className="text-xs font-mono uppercase tracking-widest text-white/50">
                  Chairman &amp; MD
                </div>
                <div className="mt-0.5 font-display text-lg font-bold text-white">Jayesh Patel</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Leadership Team Cards ─────────────────────────── */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/8" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/35">
              Leadership Team
            </span>
            <span className="h-px flex-1 bg-white/8" />
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center w-full">
          {teamMembers.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1} className="w-full max-w-3xl">
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/30 hover:bg-white/6 flex flex-col sm:flex-row items-stretch"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04)" }}
              >
                {/* Ember glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-ember/5 via-transparent to-ember/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl pointer-events-none" />

                {/* Photo */}
                <div className="relative w-full sm:w-2/5 min-h-[280px] sm:min-h-auto overflow-hidden shrink-0">
                  <img
                    src={p.img}
                    alt={p.n}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-ink/75" />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 flex flex-col justify-center flex-1 relative z-10">
                  <div className="mb-3">
                    <span className="inline-block rounded-full border border-ember/40 bg-ember/15 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-ember backdrop-blur-sm">
                      {p.r}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">{p.n}</h4>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70 max-w-xl">
                    {p.b}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Clients ---------- */
function Clients() {
  const row1 = [
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
    clientLogo8,
    clientLogo9,
    clientLogo10,
    clientLogo11,
    clientLogo12,
  ];
  const row2 = [
    clientLogo13,
    clientLogo14,
    clientLogo15,
    clientLogo16,
    clientLogo17,
    clientLogo18,
    clientLogo19,
    clientLogo20,
    clientLogo21,
    clientLogo22,
    clientLogo23,
  ];

  return (
    <section id="clients" className="py-12 md:py-16 bg-white border-y border-graphite/5">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Trusted By</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
            Partners who keep India running.
          </h2>
        </Reveal>

        {/* Row 1: Scrolling Left */}
        <div className="mt-12 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-8 whitespace-nowrap py-3 w-max">
            {[...row1, ...row1].map((logo, idx) => (
              <div key={idx} className="flex h-16 w-40 shrink-0 items-center justify-center">
                <img
                  src={logo}
                  alt={`Client Logo ${idx + 1}`}
                  className="h-12 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="mt-4 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap py-3 w-max">
            {[...row2, ...row2].map((logo, idx) => (
              <div key={idx} className="flex h-16 w-40 shrink-0 items-center justify-center">
                <img
                  src={logo}
                  alt={`Client Logo ${idx + 13}`}
                  className="h-12 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    {
      q: "Dhanyatu's hydraulic oils cut our downtime by 30% in the first quarter. Their consultation is what made the difference — not just the product.",
      n: "Plant Head",
      c: "MNC, Rajkot",
    },
    {
      q: "From compressor oils to greases, a single point of contact handles our entire lubrication stack. Response times are exceptional.",
      n: "Maintenance Lead",
      c: "Manufacturing, Ahmedabad",
    },
    {
      q: "Premium quality at a regional price point. Their on-site survey saved us from over-specifying for almost half our line.",
      n: "Procurement Head",
      c: "MSME, Morbi",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-graphite text-white noise">
      <div className="container-x">
        <Reveal>
          <SectionLabel dark>Voices from the Plant</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
            What our customers say after the shift ends.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all hover:-translate-y-2 hover:bg-white/[0.07]">
                <div className="font-display text-5xl leading-none text-ember">"</div>
                <p className="mt-4 text-lg leading-relaxed text-white/90">{t.q}</p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-ember font-display font-bold">
                    {t.n[0]}
                  </div>
                  <div>
                    <div className="font-display font-semibold">{t.n}</div>
                    <div className="text-xs text-silver/60">{t.c}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-surface">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* Left */}
            <div className="relative overflow-hidden bg-graphite p-10 text-white lg:p-14 noise">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ember/20 blur-3xl" />
              <div className="relative">
                <SectionLabel dark>Get in touch</SectionLabel>
                <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.02] tracking-tight">
                  Let's engineer the right lubrication for your line.
                </h2>
                <p className="mt-6 max-w-md text-silver/80">
                  Share a few details. Our technical team responds within one business day with a
                  tailored proposal and on-site survey schedule.
                </p>

                <div className="mt-12 space-y-6">
                  {[
                    { i: Phone, l: "Call", v: "+91 99244 44178  ·  +91 99245 99312" },
                    { i: Mail, l: "Email", v: "dhanyatugroup2024@gmail.com" },
                    { i: MapPin, l: "Visit", v: "Dhanyatu Group of Company, Vavdi, Gujarat" },
                  ].map((c) => (
                    <div key={c.l} className="flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/5">
                        <c.i className="h-4 w-4 text-ember" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-silver/60">
                          {c.l}
                        </div>
                        <div className="mt-1 font-display font-medium">{c.v}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name") as string;
                const company = formData.get("company") as string;
                const phone = formData.get("phone") as string;
                const email = formData.get("email") as string;
                const requirement = formData.get("requirement") as string;

                const message = `Hello Dhanyatu Group,\n\nNew Inquiry details:\n- *Name*: ${name}\n- *Company*: ${company || "N/A"}\n- *Phone*: ${phone}\n- *Email*: ${email || "N/A"}\n- *Requirement*: ${requirement}`;

                const whatsappUrl = `https://wa.me/919924599312?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="p-10 lg:p-14"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="name" label="Full Name" placeholder="Jayesh Patel" />
                <Field name="company" label="Company" placeholder="ACME Industries" />
                <Field name="phone" label="Phone" placeholder="+91 ..." />
                <Field name="email" label="Email" placeholder="you@company.com" type="email" />
              </div>
              <div className="mt-5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Requirement
                </label>
                <textarea
                  name="requirement"
                  rows={5}
                  required
                  placeholder="Tell us about your line — equipment, current oils, monthly volume…"
                  className="mt-2 w-full rounded-2xl border border-graphite/15 bg-white px-5 py-4 text-sm outline-none transition-colors placeholder:text-graphite/35 focus:border-graphite"
                />
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by our technical team.
                </p>
                <MagneticButton type="submit">Submit Inquiry</MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  name,
  type = "text",
}: {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={name === "name" || name === "phone"}
        className="mt-2 w-full rounded-2xl border border-graphite/15 bg-white px-5 py-4 text-sm outline-none transition-colors placeholder:text-graphite/35 focus:border-graphite"
      />
    </div>
  );
}
