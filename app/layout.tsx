import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import "@/style/main.sass";

const kumbh_San = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madinath Group | Hypermarkets | Supermarkets | Mall ",
  description:
    "Experience convenience & quality at Madinath Group's Hypermarkets, Supermarkets & Mall. The ultimate shopping destination for your everyday needs.",
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
