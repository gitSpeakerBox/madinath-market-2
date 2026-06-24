import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import "@/style/main.sass";

const kumbh_San = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.madinathgroup.com"),
  title: {
    default: "Madinath Group | Hypermarkets, Supermarkets & Mall in UAE",
    template: "%s | Madinath Group",
  },
  description:
    "Madinath Group — UAE's trusted retail leader since 1982. Shop at our Hypermarkets, Supermarkets & Mall across Dubai for fresh groceries, garments, electronics, and more. More for Less, Always!",
  keywords: [
    "Madinath Group",
    "hypermarket Dubai",
    "supermarket UAE",
    "mall Dubai",
    "grocery store UAE",
    "fresh vegetables Dubai",
    "budget shopping Dubai",
    "retail UAE",
    "Madinath hypermarket",
    "daily essentials UAE",
    "Al Quoz supermarket",
    "Jebel Ali hypermarket",
    "Al Barsha supermarket",
  ],
  authors: [{ name: "Madinath Group" }],
  creator: "Madinath Group",
  publisher: "Madinath Group",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.madinathgroup.com",
    siteName: "Madinath Group",
    title: "Madinath Group | Hypermarkets, Supermarkets & Mall in UAE",
    description:
      "UAE's trusted retail destination since 1982. Quality products at unbeatable prices across our Hypermarkets, Supermarkets & Mall in Dubai.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Madinath Group — More for Less, Always!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madinath Group | Hypermarkets, Supermarkets & Mall in UAE",
    description:
      "UAE's trusted retail destination since 1982. Quality products at unbeatable prices across our Hypermarkets, Supermarkets & Mall in Dubai.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.madinathgroup.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbh_San.className}>{children}</body>
    </html>
  );
}
