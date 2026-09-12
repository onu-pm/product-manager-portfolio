import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import TopMeta from "@/components/TopMeta";
import PageChrome from "@/components/PageChrome";

const siteUrl = "https://poums.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // A page below this in the tree that sets a plain string title (e.g.
  // "Work") gets wrapped as "Anupam Kalita Universe | Work" automatically.
  // The home page sets no title of its own, so it falls back to `default`.
  title: {
    default: "Anupam Kalita Universe",
    template: "Anupam Kalita Universe | %s",
  },
  description:
    "Product Manager who transformed the way HRIS and Payroll operates in India.",
  openGraph: {
    title: "Anupam Kalita Universe (AKU)",
    description:
    "Product Manager who transformed the way HRIS and Payroll operates in India.",
    url: siteUrl,
    siteName: "Anupam Kalita Universe (AKU)",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anupam Kalita Universe (AKU)",
    description:
    "Product Manager who transformed the way HRIS and Payroll operates in India.",
    images: ["/og-image.png"],
  },
};

// Applies the stored theme before first paint so there's no light/dark flash.
// Default is light regardless of OS preference — only an explicit stored
// choice (via the dock's theme toggle) switches to dark.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark" ? stored : "light";
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
        <TopMeta />
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
