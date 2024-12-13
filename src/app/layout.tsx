import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { BackgroundGradientAnimation } from "@/components/BackgroundGradient";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Emily Schur",
  description: "Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          "bg-gray-900 text-white antialiased font-sans relative"
        )}
      >
        <BackgroundGradientAnimation></BackgroundGradientAnimation>
        {children}
      </body>
    </html>
  );
}
