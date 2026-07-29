import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Opai Flooring",
  description:
    "Specialists in sanding, polishing and restoring timber floors and decks.",
  keywords: [
    "timber flooring",
    "floor sanding",
    "floor polishing",
    "deck refinishing",
    "northland",
    "new zealand",
  ],
  openGraph: {
    title: "Opai Flooring | Quality Timber Floors Done Right",
    description:
      "Specialists in sanding, polishing and restoring timber floors and decks.",
    type: "website",
    url: "/",
    images: ["/opengraph.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opai Flooring | Quality Timber Floors Done Right",
    description:
      "Specialists in sanding, polishing and restoring timber floors and decks.",
    images: ["/opengraph.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
