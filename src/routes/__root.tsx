import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import companyLogoUrl from "../assets/dhanyatu-logo.png?url";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/layout/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dhanyatu Group — Precision Industrial Lubrication Solutions" },
      {
        name: "description",
        content:
          "Dhanyatu Group of Company Pvt. Ltd. delivers high-performance industrial lubricants, specialty oils and edible oils across Gujarat — 250+ products, 48,000 L distributed monthly.",
      },
      { name: "author", content: "Dhanyatu Group of Company Pvt. Ltd." },
      {
        property: "og:title",
        content: "Dhanyatu Group — Precision Industrial Lubrication Solutions",
      },
      {
        property: "og:description",
        content:
          "Industrial lubricants, hydraulic & gear oils, greases and edible oils — engineered for India's manufacturing leaders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Dhanyatu Group — Precision Industrial Lubrication Solutions",
      },
      {
        name: "description",
        content:
          "A premium corporate website for Dhanyatu Group, showcasing industrial lubricants with a Fortune 500 aesthetic.",
      },
      {
        property: "og:description",
        content:
          "A premium corporate website for Dhanyatu Group, showcasing industrial lubricants with a Fortune 500 aesthetic.",
      },
      {
        name: "twitter:description",
        content:
          "A premium corporate website for Dhanyatu Group, showcasing industrial lubricants with a Fortune 500 aesthetic.",
      },
      { property: "og:image", content: companyLogoUrl },
      { name: "twitter:image", content: companyLogoUrl },
    ],
    links: [
      { rel: "icon", type: "image/png", href: companyLogoUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Saira+Stencil+One&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dhanyatu Group of Company Pvt. Ltd.",
    alternateName: ["Dhanyatu Group", "Dhanyatu"],
    url: "https://dhanyatupvtltd.in/",
    logo: "https://dhanyatupvtltd.in/assets/dhanyatu-logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-99244-44178",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-99245-99312",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "VAVDI GAM SR.NO.37, PLOT NO.37, SHED NO.2, OPP. SHREEJI GAU SHALA, B/H KRISHNA PARK, VAVDI",
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      postalCode: "360004",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-surface font-sans text-graphite overflow-x-hidden">
        <Header />
        <main className="flex-1 flex flex-col pt-16 sm:pt-20">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </QueryClientProvider>
  );
}
