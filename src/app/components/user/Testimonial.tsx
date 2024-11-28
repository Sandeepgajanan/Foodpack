"use client";
import { useState } from "react";
import { data } from "@/app/constants/testimonialData";
import Subheading from "./Subheading";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="w-full bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto p-5 max-sm:px-4">
        <Subheading title="Testimonials" highlights="What Our Customers Say" />

        <div className="flex items-center justify-center gap-10 max-sm:flex-col min-h-[50vh] max-sm:gap-2">
          {[data[currentIndex], data[currentIndex + 1]].map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 max-sm:gap-2 mt-8 max-sm:mt-6">
          {[...Array(4)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 2)}
              className={`w-8 h-1  rounded-full transition-all shadow-md ${
                Math.floor(currentIndex / 2) === index
                  ? "bg-emerald-500 "
                  : "bg-zinc-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
