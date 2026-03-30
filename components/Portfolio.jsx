"use client";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const images = [
    { src: "/p1.jpg", category: "Wedding", span: "big" },
    { src: "/p2.jpg", category: "PreWedding", span: "small" },
    { src: "/p3.jpg", category: "Engagement", span: "big" },
    { src: "/p4.jpg", category: "Wedding", span: "small" },
    { src: "/p5.jpg", category: "PreWedding", span: "small" },
    { src: "/p6.jpg", category: "Engagement", span: "big" },
    { src: "/p9.jpg", category: "Wedding", span: "small" },
    { src: "/p8.jpg", category: "PreWedding", span: "big" },
    { src: "/p10.jpg", category: "PreWedding", span: "big" },
    { src: "/p11.jpg", category: "Engagement", span: "small" },
    { src: "/p12.jpg", category: "Wedding", span: "big" },
    { src: "/p13.jpg", category: "PreWedding", span: "small" },
  ];

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <section id="portfolio" className="bg-[#FFF1E0] py-12 md:py-20 px-4 md:px-12 lg:px-20">
      {/* Heading - Responsive text size */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-[8px] md:tracking-[0.3em] mb-10 text-center md:text-left">
        PORTFOLIO
      </h2>

      {/* Filter Buttons - Mobile Scrollable */}
      <div className="flex gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar md:flex-wrap md:overflow-visible">
        {["All", "Wedding", "PreWedding", "Engagement"].map((btn) => (
          <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full border border-[#d8c2b3] transition duration-300 font-medium whitespace-nowrap text-sm md:text-base ${
              active === btn
                ? "bg-[#E91E63] text-white border-[#E91E63] shadow-lg"
                : "bg-transparent text-gray-700 hover:bg-[#d8c2b3]/20"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Image Grid - 2 columns on mobile, 3 on tablet, 6 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]">
        {filtered.map((img, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer
              ${img.span === "big" ? "col-span-2 row-span-1 md:col-span-2" : "col-span-1 md:col-span-1"}
            `}
          >
            <Image
              src={img.src}
              alt={`portfolio-${img.category}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
            />
            {/* Hover Overlay - Text always visible on small screens for better UX */}
            <div className="absolute inset-0 bg-black/30 md:bg-black/20 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
               <span className="text-white text-xs md:text-base font-medium border-b border-white pb-1">
                 {img.category}
               </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}