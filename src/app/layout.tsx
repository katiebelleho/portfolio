import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://katieho.com"),
  title: {
    default: "Katie Ho, Product Designer",
    template: "%s — Katie Ho",
  },
  description:
    "Portfolio of Katie Ho, a Senior Product Designer with 6+ years helping mission-driven companies ship products that move metrics and scale.",
  icons: {
    icon: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785779270/favicon_yl9z0m.svg",
  },
  openGraph: {
    title: "Katie Ho, Product Designer",
    description:
      "Portfolio of Katie Ho, a Senior Product Designer with 6+ years helping mission-driven companies ship products that move metrics and scale.",
    url: "/",
    siteName: "Katie Ho",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katie Ho, Product Designer",
    description:
      "Portfolio of Katie Ho, a Senior Product Designer with 6+ years helping mission-driven companies ship products that move metrics and scale.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
