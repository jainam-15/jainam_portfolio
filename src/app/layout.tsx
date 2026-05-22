import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CommandMenu from "@/components/layout/CommandMenu";
import MobileFloatingCTA from "@/components/layout/MobileFloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jainam Shah — AI-Powered Full-Stack Engineer",
  description:
    "Engineering premium AI-powered products and digital experiences with exceptional design, performance, and attention to detail.",
  keywords: [
    "Jainam Shah",
    "AI Engineer",
    "Full-Stack Developer",
    "SaaS Builder",
    "Next.js Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Jainam Shah" }],
  openGraph: {
    title: "Jainam Shah — AI-Powered Full-Stack Engineer",
    description:
      "Engineering premium AI-powered products with exceptional design, performance, and attention to detail.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jainam Shah — AI-Powered Full-Stack Engineer",
    description:
      "Engineering premium AI-powered products with exceptional design, performance, and attention to detail.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col noise-overlay bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <LenisProvider>
            <ScrollProgress />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CommandMenu />
            <MobileFloatingCTA />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

