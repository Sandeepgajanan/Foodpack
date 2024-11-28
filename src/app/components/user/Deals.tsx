"use client";

import Image from "next/image";
import Link from "next/link";
import Subheading from "./Subheading";
import { data } from "@/app/constants/dealsData";
import DealCard from "./DealCard";
const Deals = () => {
  return (
    <section className="w-full bg-slate-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto p-5 py-10 max-sm:px-4 max-sm:py-4">
        <Subheading title="Exclusive Offers" highlights="Today's Best Deals" />

        <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-1 max-sm:gap-4">
          <div className="col-span-1 row-span-2 bg-white rounded-2xl  max-sm:hidden">
            <div className="rounded-xl flex-grow relative w-full h-full overflow-hidden">
              <Image
                src={data[0].image}
                alt="Hot Deal"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                className="object-cover"
                fill
              />
              <div className="absolute border border-white inset-4 rounded-2xl">
                <div className="text-center  absolute text-white z-10 bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h2 className="text-5xl my-2 whitespace-nowrap max-sm:text-xs">
                    50% OFF
                  </h2>
                  <h3 className="text-2xl my-2 whitespace-nowrap max-sm:text-base uppercase">
                    25 oct - 16 oct
                  </h3>

                  <Link href="#" className="mt-8 block">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {data.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
