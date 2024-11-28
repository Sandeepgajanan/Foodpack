"use client";
import Btn from "./Btn";
import Image from "next/image";
import { hero } from "@/app/constants";
import Stripe from "./Stripe";
const Hero = () => {
  const Items = [
    {
      position: "top-16 -left-4",
      icon: "ri-heart-fill",
      iconColor: "text-red-500",
      title: "Healthy Choice",
      subtitle: "100% Natural",
    },
    {
      position: "bottom-8 -right-4",
      icon: "ri-shield-check-fill",
      iconColor: "text-[#27E0B3]",
      title: "Quality Assured",
      subtitle: "Premium Products",
    },
  ];
  return (
    <>
    <section className="w-full bg-slate-50 min-h-screen max-sm:min-h-fit">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-5 max-sm:flex-col gap-6">
        <div className="w-1/2 space-y-10  max-sm:w-full max-sm:text-center">
          <div className="w-fit flex items-center gap-3 max-sm:justify-center py-2 px-4 bg-white rounded-2xl shadow-md max-sm:p-2 max-sm:mx-auto">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg bg-zinc-100">
              <i className="ri-restaurant-2-line text-2xl  max-sm:text-xl"></i>
            </div>
            <div className="text-lg font-bold text-zinc-900 max-sm:text-base">
              Best Online Packed Food
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl font-extrabold text-zinc-900 leading-none max-sm:text-4xl">
              Welcome to
              <span className="text-emerald-600 block ">FreshPack</span>
            </h1>
            <p className="text-zinc-800 font-bold text-lg w-11/12 max-sm:w-full max-sm:text-sm leading-relaxed">
              Discover our premium selection of carefully packed, nutritious
              foods that make healthy eating convenient and delicious. From
              wholesome snacks to complete meals.
            </p>
          </div>

          <div className="max-sm:flex max-sm:justify-center max-sm:mb-12">
            <Btn href="/products" text="Shop Now" />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 relative mb-12 max-sm:hidden">
          <div className="relative h-[32rem] w-full">
            <Image
              src={hero}
              alt="Healthy Food Package"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
              className="object-contain drop-shadow-xl"
            />
          </div>

          {Items.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} px-4 py-2 rounded-xl shadow-md bg-white/90 backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3">
                <i className={`${item.icon} ${item.iconColor} text-xl`}></i>
                <div>
                  <p className="text-zinc-900 font-bold text-sm">
                    {item.title}
                  </p>
                  <p className="text-zinc-800 text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Stripe/>
    </>
  );
};

export default Hero;
