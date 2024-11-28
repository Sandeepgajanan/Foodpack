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
      <section className="w-full bg-slate-100 min-h-screen flex flex-col max-sm:mt-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-5 max-sm:flex-col gap-6 max-sm:gap-2">
          <div className="w-1/2 space-y-10  max-sm:w-full max-sm:text-center max-sm:space-y-6">
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

            <div className="max-sm:flex max-sm:justify-center max-sm:pt-2 ">
              <Btn href="/user/products" text="Shop Now" />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 relative  max-sm:w-full">
            <div className="relative h-[32rem] w-full max-sm:h-[24rem]">
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
                className={`absolute ${item.position} px-4 py-2 rounded-xl shadow-md bg-white/90 backdrop-blur-sm max-sm:px-3 max-sm:py-1.5`}
              >
                <div className="flex items-center gap-3 max-sm:gap-2">
                  <i className={`${item.icon} ${item.iconColor} text-xl max-sm:text-lg`}></i>
                  <div>
                    <p className="text-zinc-900 font-bold text-sm max-sm:text-xs">
                      {item.title}
                    </p>
                    <p className="text-zinc-800 text-sm max-sm:text-xs">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Stripe />
      </section>
    </>
  );
};

export default Hero;
