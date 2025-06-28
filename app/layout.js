import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'CodeCatalyst | Modern Web Solutions',
  description: 'Empowering businesses with modern, scalable, and user-centric web solutions. From MVPs to enterprise apps, we deliver speed, elegance, and value.',
  openGraph: {
    title: 'CodeCatalyst | Modern Web Solutions',
    description: 'Empowering businesses with modern, scalable, and user-centric web solutions. From MVPs to enterprise apps, we deliver speed, elegance, and value.',
    url: 'https://codecatalyst.com',
    siteName: 'CodeCatalyst',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CodeCatalyst Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codecatalyst.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-backgroundLight text-textPrimary font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
