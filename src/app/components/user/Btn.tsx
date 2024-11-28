import Link from "next/link";

interface BtnProps {
  href: string;
  text: string;
}

const Btn = ({ href, text }: BtnProps) => {
  return (
    <Link
      href={href}
      className="bg-yellow-300 text-zinc-900 px-6 py-2 rounded-xl font-bold flex items-center gap-3 hover:bg-yellow-400  transition-all duration-300 max-sm:px-3 max-sm:py-2 max-sm:text-sm group w-fit whitespace-nowrap  "
    >
      {text}
      <i className="ri-arrow-right-up-line group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
    </Link>
  );
};

export default Btn;
