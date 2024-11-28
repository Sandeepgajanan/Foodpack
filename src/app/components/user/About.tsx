"use client";

import Image from "next/image";
import { about } from "@/app/constants";
import { data } from "@/app/constants/aboutData";
const About = () => {
  return (
    <section className="w-full bg-slate-100">
      <div className="max-w-screen-xl mx-auto p-5 max-sm:px-4">
        <div className="flex items-center w-full h-screen  max-sm:flex-col max-sm:gap-10 max-sm:h-auto ">
          <div className="w-1/2 flex items-center justify-center max-sm:w-full">
            <div className="relative w-96 h-96 rounded-full overflow-hidden border border-white max-sm:w-64 max-sm:h-64">
              <Image
                src={about}
                alt="About FreshPack"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                className="object-cover"
              />

             
  
              <div className="absolute inset-4 rounded-full border border-white">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/80 backdrop-blur-sm flex items-center justify-center cursor-pointer max-sm:w-12 max-sm:h-12">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg max-sm:w-8 max-sm:h-8">
                    <i className="ri-play-fill text-zinc-800 text-xl max-sm:text-sm ml-1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 space-y-8 max-sm:w-full max-sm:space-y-6 ">
            <div className="relative">
              <h2 className="text-5xl font-bold text-emerald-600 mb-6 max-sm:text-3xl max-sm:mb-4 max-sm:text-center ">
                About Us
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg relative max-sm:text-base  max-sm:text-center">
                At FreshPack, we're passionate about delivering the finest
                quality packed foods that combine nutrition, convenience, and
                great taste. Our commitment to excellence ensures that every
                product meets the highest standards of quality and freshness.
              </p>
            </div>

            <div className="flex bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-2xl p-6 border shadow-lg max-sm:p-3">
              {data.map((stat, index) => (
                <div key={index} className="flex-1 text-center">
                  {index > 0 && (
                    <div className="absolute h-14 w-[1px] bg-emerald-300 -ml-3 mt-2 max-sm:ml-0"></div>
                  )}
                  <div className="text-4xl font-bold text-emerald-700 max-sm:text-xl">
                    {stat.number}
                  </div>
                  <div className="text-emerald-900 font-medium mt-3 max-sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
