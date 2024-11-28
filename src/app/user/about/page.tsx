"use client";

import Navbar from "@/app/components/user/Navbar";
import About from "@/app/components/user/About";
import Faq from "@/app/components/user/Faq";
import Footer from "@/app/components/user/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Faq />
      <Footer />
    </>
  );
}
