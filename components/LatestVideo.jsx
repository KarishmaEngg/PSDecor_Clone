"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function LatestVideo() {
  const [open, setOpen] = useState(false);

  // ✅ Correct embed link
  const videoUrl = "https://www.youtube.com/embed/JNKZN8uq1H8";

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/video-bg.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <p className="tracking-widest uppercase text-sm mb-4">
          Be Inspired
        </p>

        <h1 className="text-4xl md:text-7xl font-serif mb-8">
          Latest Wedding <span className="italic text-pink-300">Video</span>
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition"
        >
          <FaPlay className="text-2xl ml-1" />
        </button>

        <p className="mt-6 text-sm opacity-80">
          Discover the magic behind our latest celebration of love
        </p>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[70%] aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/JNKZN8uq1H8"
              allowFullScreen
            />
            <button
  onClick={() => setOpen(false)}
  className="absolute -top-12 right-0 
             w-10 h-10 
             flex items-center justify-center
             rounded-full
             bg-white/20 backdrop-blur-md
             border border-white/40
             text-white text-lg
             hover:bg-white hover:text-black
             transition-all duration-300"
>
  ✕
</button>
          </div>
        </div>
      )}
    </div>
  );
}