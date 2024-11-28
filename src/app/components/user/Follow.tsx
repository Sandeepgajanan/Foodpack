"use client";
import { data } from "@/app/constants/followData";
import Link from "next/link";
import Image from "next/image";
import Subheading from "./Subheading";
const Follow = () => {
  return (
    <>
      <section className="w-full bg-slate-100 min-h-screen max-sm:hidden">
        <div className="max-w-screen-xl mx-auto p-5 ">
          <Subheading title="Follow Us " highlights="Follow Us on Instagram" />
          <div className="grid grid-cols-6 gap-6 mb-10 max-sm:grid-cols-2">
            {data.map((post, index) => (
              <Link
                key={post.id}
                href="#"
                className={`overflow-hidden rounded-3xl shadow-md shadow-zinc-400 aspect-square ${
                  index === 2 && "row-span-2 col-start-3 col-end-5"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Follow;
