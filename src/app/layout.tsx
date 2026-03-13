import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import business from "@/data/business.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} Huedin – Service Auto, Vulcanizare, ITP`,
    template: `%s | ${business.name} Huedin`,
  },
  description: business.tagline,
  metadataBase: new URL(business.website),
  openGraph: {
    siteName: business.name,
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${geistSans.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
