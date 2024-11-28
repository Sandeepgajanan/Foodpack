"use client";

import { useState } from "react";
import Subheading from "./Subheading";
import { data } from "@/app/constants/faqData";
const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section className="w-full bg-white h-screen max-sm:h-full ">
      <div className="max-w-screen-xl mx-auto px-5  max-sm:px-4 ">
        <Subheading title="FAQs" highlights="Question ? Look Here" />
        <div className="flex gap-8 max-sm:flex-col max-sm:gap-6 max-sm:mt-8">
          <div className="w-[70%] max-sm:w-full min-h-screen max-sm:min-h-fit">
            <div className="space-y-4">
              {data.map((faq) => (
                <div key={faq.id} className="rounded-lg shadow-md bg-slate-100">
                  <div className="flex items-center justify-between w-full px-6 py-4 max-sm:px-4 max-sm:py-3">
                    <span className="font-semibold text-gray-800 hover:text-emerald-600 transition-colors duration-300 max-sm:text-sm">
                      {faq.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full ${
                        openQuestion === faq.id
                          ? "bg-emerald-100"
                          : "bg-gray-100"
                      } flex items-center justify-center transition-colors duration-300 max-sm:w-5 max-sm:h-5`}
                      onClick={() =>
                        setOpenQuestion(openQuestion === faq.id ? null : faq.id)
                      }
                    >
                      <i
                        className={`${
                          openQuestion === faq.id
                            ? "ri-subtract-line text-emerald-600"
                            : "ri-add-line text-gray-600"
                        } max-sm:text-sm`}
                      ></i>
                    </div>
                  </div>

                  {openQuestion === faq.id && (
                    <div className="px-6 py-2 text-gray-600 border-t border-gray-200 max-sm:px-4 max-sm:py-2 max-sm:text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-fit max-sm:w-full h-fit bg-slate-100 rounded-3xl p-8 max-sm:p-6 flex items-center flex-col">
            <div className="flex justify-center mb-4 max-sm:mb-3">
              <i className="ri-message-3-line text-5xl text-emerald-600 max-sm:text-4xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 max-sm:text-lg max-sm:mb-1">
              You have different questions?
            </h2>
            <p className="text-gray-600 mb-8 text-center text-sm max-sm:mb-6">
              Our team will answer all your questions
            </p>
            <a 
              href="mailto:support@example.com" 
              className="inline-block px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-2xl hover:bg-yellow-500 transition-colors duration-300 max-sm:px-4 max-sm:py-2 max-sm:text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
