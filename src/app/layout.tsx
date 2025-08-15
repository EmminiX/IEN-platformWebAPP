import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IEN Research Platform | Irish Environmental Network",
    template: "%s | IEN Research Intelligence Platform"
  },
  description: "AI-powered environmental research platform for Ireland. Access analytics from 41 organizations across 6 key topics. Expert insights for researchers.",
  keywords: [
    "Irish Environmental Network",
    "IEN",
    "environmental research",
    "sustainability",
    "Ireland",
    "climate change",
    "environmental policy",
    "research intelligence"
  ],
  authors: [{ name: "Irish Environmental Network" }],
  creator: "Irish Environmental Network",
  
  // Open Graph for social media
  openGraph: {
    title: "IEN Research Platform | Irish Environmental Network",
    description: "AI-powered environmental research platform for Ireland. Access analytics from 41 organizations across 6 key topics.",
    url: "/",
    siteName: "IEN Research Intelligence Platform",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/social-media.jpg",
        width: 1200,
        height: 630,
        alt: "IEN Research Intelligence Platform - Advanced analytics for Ireland's environmental network",
        type: "image/jpeg",
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@IEN_Ireland",
    creator: "@IEN_Ireland",
    title: "IEN Research Platform | Irish Environmental Network",
    description: "AI-powered environmental research platform for Ireland. Access analytics from 41 organizations.",
    images: {
      url: "/social-media.jpg",
      alt: "IEN Research Intelligence Platform - Advanced analytics for Ireland's environmental network",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
