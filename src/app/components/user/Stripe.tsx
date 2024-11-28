"use client";
import { data} from "@/app/constants/stripeData";
const Stripe = () => {
  return (
    <div className="w-full bg-yellow-300 py-4 px-2 max-sm:mt-5 max-sm:py-2">
      <div
        className=" flex items-center justify-between gap-4 overflow-x-auto"
        id="stripe"
      >
        {data.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 shrink-0 text-zinc-800"
          >
            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md max-sm:w-6 max-sm:h-6">
              <i className={`${feature.icon} text-xl max-sm:text-sm`}></i>
            </div>
            <span className="font-bold  text-lg whitespace-nowrap max-sm:text-sm">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stripe;
