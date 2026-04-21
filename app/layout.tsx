import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistPixelSquare } from "geist/font/pixel";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Tornly",
  description: "The dashboard every Citizen needs, but doesn't deserve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased ${GeistSans.variable} ${GeistPixelSquare.variable} ${GeistMono.variable} dark`}
    >
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
