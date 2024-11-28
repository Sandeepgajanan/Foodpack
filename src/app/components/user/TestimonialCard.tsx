interface testimonialProps {
  id: number;
  name: string;
  content: string;
  rating: number;
  compliment: string;
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: testimonialProps;
}) => {
  return (
    <div
      key={testimonial.id}
      className="bg-white p-6 w-[35vw] h-[20vw] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 max-sm:w-full max-sm:h-full relative max-sm:mt-8"
    >
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl text-gray-200/80 rotate-180 max-sm:text-5xl">
        <i className="ri-double-quotes-r"></i>
      </div>

      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {[...Array(testimonial.rating)].map((_, index) => (
              <i key={index} className="ri-star-fill text-lg text-amber-400"></i>
            ))}
            <span className="ml-2 text-gray-600 text-base">
              ({testimonial.rating}.0)
            </span>
          </div>
        </div>

        <span className="text-xl font-bold text-gray-800 mb-3 max-sm:text-lg">
          {testimonial.compliment}
        </span>

        <p className="text-gray-600 italic text-base flex-grow mb-6 line-clamp-4 max-sm:text-sm">
          {testimonial.content}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            <span className="text-emerald-600 font-bold text-xl">
              {testimonial.name[0]}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-base max-sm:text-sm text-gray-800">
              {testimonial.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
