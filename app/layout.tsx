import type { Metadata } from "next";
import { Jost, Ovo } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oluwatosin x Eyitayo",
  description: "A wedding made in AAUA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} ${ovo.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
