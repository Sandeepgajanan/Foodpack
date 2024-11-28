import Image from "next/image";
import Btn from "./Btn";
import { StaticImageData } from "next/image";

interface ProductProps {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  rating: number;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div
      key={product.id}
      className="bg-white h-96 rounded-2xl overflow-hidden flex-shrink-0 w-80 flex flex-col max-sm:w-full  snap-center shadow-md hover:shadow-xl transition-shadow duration-300 max-sm:mt-8 max-sm:h-80"
    >
      <div className="relative h-[70%] overflow-hidden rounded-t-2xl ">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
          className="object-cover "
        />

        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-r-full shadow-lg ">
          <span className="font-black text-sm uppercase tracking-wider">
            {product.discount}% off
          </span>
        </div>
      </div>

      <div className="p-3 flex flex-col w-full justify-between h-1/2 max-sm:p-4">
        <div className="flex justify-between items-center mb-3 max-sm:mb-2">
          <span className="text-lg text-zinc-900 max-sm:text-sm max-sm:px-0">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400 max-sm:text-sm"></i>
            <span className="text-gray-600 font-bold text-lg max-sm:text-sm">
              {product.rating}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 max-sm:text-base max-sm:mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3 max-sm:gap-2">
            <span className="text-2xl font-bold text-emerald-600 max-sm:text-lg">
              ₹{product.price}
            </span>
            <span className="text-lg text-gray-400 line-through max-sm:text-sm">
              ₹{product.originalPrice}
            </span>
          </div>

          <Btn href="#" text="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
