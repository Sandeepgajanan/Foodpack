"use client";

import Navbar from "@/app/components/user/Navbar";
import Products from "@/app/components/user/Products";
import Deals from "@/app/components/user/Deals";
import Footer from "@/app/components/user/Footer";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <Products />
      <Deals />
      <Footer />
    </>
  );
}
