"use client";

import Navbar from "@/app/components/user/Navbar";
import MyOrders from "@/app/components/user/MyOrders";
import Footer from "@/app/components/user/Footer";

export default function MyOrdersPage() {
  return (
    <>
      <Navbar />
      <MyOrders />
      <Footer />
    </>
  );
}
