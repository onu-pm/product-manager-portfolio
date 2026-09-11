import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import PageChrome from "@/components/PageChrome";

const siteUrl = "https://poums.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anupam Kalita, Senior Product Manager, B2B SaaS",
  description:
    "Product, case studies, and what I'm building: HRIS & payroll, integrations, and agentic AI at B2B SaaS scale.",
  openGraph: {
    title: "Anupam Kalita, Senior Product Manager, B2B SaaS",
    description:
      "Product, case studies, and what I'm building: HRIS & payroll, integrations, and agentic AI at B2B SaaS scale.",
    url: siteUrl,
    siteName: "Anupam Kalita",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anupam Kalita, Senior Product Manager, B2B SaaS",
    description:
      "Product, case studies, and what I'm building: HRIS & payroll, integrations, and agentic AI at B2B SaaS scale.",
    images: ["/og-image.png"],
  },
};

// Applies the stored theme before first paint so there's no light/dark flash.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Logo />
        <PageChrome>{children}</PageChrome>
        <Nav />

        {/* Zoho SalesIQ chat widget. next/script with afterInteractive loads
            it after hydration rather than blocking the initial render, the
            App Router equivalent of the `defer` on the original tag. */}
        <Script id="zsiq-init" strategy="afterInteractive">
          {`window.$zoho = window.$zoho || {}; $zoho.salesiq = $zoho.salesiq || { ready: function () {} };`}
        </Script>
        <Script
          id="zsiqscript"
          strategy="afterInteractive"
          src="https://salesiq.zohopublic.in/widget?wc=siq2b93e3244baeaf941adef6d19665fc8c7d5a55a688e343f86fb705327dd4a13591d0870e59e885e849830fdd13799244"
        />
      </body>
    </html>
  );
}
