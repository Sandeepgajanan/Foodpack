import Navbar from "@/app/components/user/Navbar";
import Hero from "@/app/components/user/Hero";
import Category from "./components/user/Category";
import About from "./components/user/About";
import Products from "./components/user/Products";
import Deals from "./components/user/Deals";
import Testimonial from "./components/user/Testimonial";
import Follow from "./components/user/Follow";
import Faq from "./components/user/Faq";
import Footer from "./components/user/Footer";
import Stripe from "./components/user/Stripe";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <About />
      <Products />
      <Deals />
      <Testimonial/>
      <Stripe />
      <Follow/>
      <Faq/>
      <Footer/>

    </>
  );
}
