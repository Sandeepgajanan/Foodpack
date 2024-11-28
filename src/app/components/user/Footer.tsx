"use client";

import Link from "next/link";
import { data, data2, data3 } from "@/app/constants/footerData";
const Footer = () => {
 

  return (
    <footer className="w-full bg-slate-50  text-gray-800 border-t border-gray-200 ">
      <div className="max-w-screen-xl mx-auto p-5">
        <div className="grid grid-cols-4  gap-8 max-sm:grid-cols-1">
       
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Fresh Pack</h2>
            <p className="text-gray-600 pr-4">
              Delivering happiness and delicious moments to your doorstep. Taste the difference with our authentic Indian cuisine.
            </p>
          </div>

  
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {data.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="flex items-center gap-2">
                    <i className="ri-arrow-right-s-line"></i>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Us</h3>
            <div className="space-y-3">
              {data2.map((info, index) => (
                <Link key={index} href="#" className="flex items-center gap-2">
                  <i className={`${info.icon}  `}></i>
                  {info.text}
                </Link>
              ))}
            </div>
          </div>

     
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Connect With Us</h3>
            <div className="flex gap-4">
              {data3.map((social, index) => (
                <Link key={index} href={social.href}>
                  <i className={`${social.icon} text-xl`}></i>
                </Link>
              ))}
            </div>
            
           
          </div>
        </div>
       
      </div>

      <p className="text-center text-gray-600 p-4">
            © 2024 Fresh Pack. All rights reserved.
          </p>
     
       
       
    
    </footer>
  );
};

export default Footer;
