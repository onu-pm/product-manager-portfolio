import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anupam Kalita, Senior Product Manager, B2B SaaS",
  description:
    "Product management portfolio and case studies: HRIS & payroll, integrations, and agentic AI at B2B SaaS scale.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
