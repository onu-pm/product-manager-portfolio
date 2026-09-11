import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
