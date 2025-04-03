import type { Metadata } from "next";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { initLogRocket } from "@/lib/logrocket";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Emily Schur",
  description: "Full-Stack Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initLogRocket();
  }, []);

  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          "bg-[#001152] text-white antialiased font-sans relative"
        )}
      >
        {children}
      </body>
    </html>
  );
}
