import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { DM_Sans, Noto_Sans } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "./context/ThemeProvider";
import Footer from "@/components/layout/Footer";

// Google Fonts setup
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Website | Fast & SEO Friendly",
  description:
    "Dynamic website built with Next.js, TypeScript, SCSS, and Tailwind",
  keywords: ["Next.js", "SEO", "Tailwind", "TypeScript"],
  openGraph: {
    title: "My Website",
    description: "Dynamic website with advanced SEO",
    url: "https://mywebsite.com",
    siteName: "My Website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "My Website" },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/images/logo/kivaro-favicon.png"
        />
      </head>
      <body
        className={`${dmSans.variable} ${notoSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
