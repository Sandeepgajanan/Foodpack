"use client";

import Link from "next/link";
import Image from "next/image";
import Subheading from "./Subheading";
import { data } from "@/app/constants/categoryData";

const Category = () => {
  return (
    <section className="w-full bg-slate-50  ">
      <div className="max-w-screen-xl mx-auto p-5 max-sm:px-4">
        <Subheading title="Our Categories" highlights="Shop by Categories" />

        <div className="flex flex-wrap gap-8 justify-center mt-16 max-sm:gap-4">
          {data.map((category) => (
            <Link href="/user/products" key={category.id} className="group">
              <div className="relative w-44 h-44 rounded-full overflow-hidden max-sm:w-32 max-sm:h-32">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                <h3 className="text-xl font-semibold text-gray-800 max-sm:text-base">
                  {category.name}
                </h3>
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform duration-300 max-sm:text-lg"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
