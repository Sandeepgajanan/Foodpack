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

        <div
          className="flex flex-nowrap overflow-x-auto gap-8 p-4 max-sm:gap-4 snap-x snap-mandatory focus:outline-none"
          id="products"
          role="region"
          aria-label="Products carousel"
          tabIndex={0}
        >
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
