import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://katieho.com"),
  title: {
    default: "Katie Ho — Senior Product Designer",
    template: "%s — Katie Ho",
  },
  description:
    "Portfolio of Katie Ho, a Senior Product Designer with 6+ years of experience helping mission-driven companies scale with effective design solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
