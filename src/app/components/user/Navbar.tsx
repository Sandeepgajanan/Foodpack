"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { data, data2 } from "@/app/constants/navData";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isMenuOpen) {
      setScrollPosition(window.scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen, scrollPosition]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="bg-white w-full text-black border-b shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-5 h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#27E0B3] flex items-center justify-center max-sm:w-6 max-sm:h-6">
            <i className="ri-restaurant-2-line text-xl"></i>
          </div>
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <span>FreshPack</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-16 max-sm:hidden">
          {data.map((item, index) => (
            <Link
              key={index}
              href={item.to}
              className="font-bold text-lg relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-black after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 max-sm:hidden">
          {data2.map((item, index) => (
            <Link key={index} href={item.to}>
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
                <i className={`${item.icon} text-lg`}></i>
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden max-sm:block">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <i
              className={`${
                isMenuOpen ? "ri-close-line rotate-180" : "ri-menu-line"
              } text-lg font-bold transition-transform duration-300`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-slate-50 h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 border-t ${
          isMenuOpen ? "flex" : "hidden"
        } z-[999]`}
      >
        {data.map((item,index) => (
          <Link
            key={index}
            href={item.to}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold relative"
          >
            {item.label}
          </Link>
        ))}
        {data2.map((item,index) => (
          <Link
            key={index}
            href={item.to}
            className="text-xl font-bold relative"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
