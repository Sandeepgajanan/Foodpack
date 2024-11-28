interface SubheadingProps {
  title: string;
  highlights: string;
}

const Subheading = ({ title, highlights }: SubheadingProps) => {
  return (
    <div className="text-center my-10 max-sm:my-0 relative">
      <h2 className="text-xl font-bold text-gray-800 mb-4 max-sm:text-[1rem] max-sm:mb-2  ">
        {title}
      </h2>
      <span className="text-4xl font-bold text-emerald-600 max-sm:text-2xl ">
          {highlights}
         
        </span>
  
    </div>
  );
};

export default Subheading;
