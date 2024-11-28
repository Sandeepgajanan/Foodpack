"use client";

import Subheading from "./Subheading";
import {data} from "@/app/constants/productData"
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section className="w-full  min-h-screen bg-white  ">
      <div className="max-w-screen-xl mx-auto p-5">
        <Subheading
          title="Our Products"
          highlights="Our Top-Selling Products"
        />

        <div className="text-center my-4 bg-emerald-50 py-2 rounded-lg max-sm:py-1">
          <p className="text-emerald-700 font-medium flex items-center justify-center gap-2 animate-pulse max-sm:text-sm">
            Scroll to see more products
            <i className="ri-arrow-right-line text-xl max-sm:text-sm"></i>
          </p>
        </div>

        <div
          className="flex flex-nowrap overflow-x-auto gap-8 p-4 max-sm:gap-4 snap-x snap-mandatory focus:outline-none"
          id="products"
          role="region"
          aria-label="Products carousel"
          tabIndex={0}
          style={{
            "--tw-animate-slideRight": "keyframes(slideRight) { 0% { transform: translateX(-10px) } 50% { transform: translateX(10px) } 100% { transform: translateX(-10px) } }"
          } as React.CSSProperties}
        >
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
