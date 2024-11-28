"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
interface DealProps {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  rating: number;
}
const DealCard = ({ deal }: { deal: DealProps }) => {
  return (
    <div key={deal.id} className="bg-white rounded-xl overflow-hidden">
      <div className="relative h-40 bg-emerald-50 w-full max-sm:h-48">
        <Image
          src={deal.image}
          alt={deal.category}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
          className="object-cover"
        />

        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-r-full shadow-lg font-bold text-xs">
          {deal.discount}% OFF
        </div>
      </div>

      <div className="p-3 flex flex-col w-full justify-between  max-sm:p-4">
        <div className="flex justify-between items-center mb-3 max-sm:mb-2">
          <span className="text-sm text-zinc-900 max-sm:text-xs max-sm:px-0">
            {deal.category}
          </span>
          <div className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400 text-sm"></i>
            <span className="text-gray-600 font-bold text-sm max-sm:text-xs">
              {deal.rating}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold mb-1 max-sm:text-base ">
          {deal.name}
        </h3>

        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3 max-sm:gap-2">
            <span className="text-lg font-bold text-emerald-600 max-sm:text-sm">
              ₹{deal.price}
            </span>
            <span className="text-sm text-gray-400 line-through max-sm:text-xs">
              ₹{deal.originalPrice}
            </span>
          </div>

          <Link
            href=""
            className="bg-yellow-300  p-2 rounded-xl font-bold flex items-center gap-3 hover:bg-yellow-400  transition-all duration-300 text-xs group w-fit  max-sm:p-1 max-sm:gap-1 max-sm:text-[0.65rem]"
          >
            Order Now
            <i className="ri-arrow-right-up-line group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-xs max-sm:text-[0.65rem] "></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
