"use client";

import type { Metadata } from "next";
import 'remixicon/fonts/remixicon.css'
import "./globals.css";
import Lenis from "lenis";
import { useEffect } from "react";

const metadata: Metadata = {
  title: "Food Design", 
  description: "Fresh packed food delivery service"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/bandeins.ttf"
          as="font" 
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          href="/icon.png"
          type="image/png"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
