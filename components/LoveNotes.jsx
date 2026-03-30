'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const LoveNotes = () => {
  const testimonials = [
    {
      id: 1,
      mainImg: "/p1.jpg", // Badi image
      userImg: "/p2.jpg", // Choti profile pic
      name: "Akash & Vallari",
      date: "January 2025",
      text: "Elegant, soulful, and perfectly minimal — our wedding felt truly personal. Everything was beautifully done, just the way we imagined.",
      stars: 5
    },
    {
      id: 2,
      mainImg: "/p2.jpg",
      userImg: "/p3.jpg",
      name: "Rishabh & Anushka",
      date: "June 2024",
      text: "Working with this team made our destination wedding stress-free and absolutely unforgettable. Our guests are still talking about how beautiful everything was!",
      stars: 5
    }
  ];

  return (
    <section className="bg-[#FFE4D5] relative overflow-hidden py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif text-gray-800 tracking-[0.2em] uppercase mb-2">Love Notes</h2>
          <div className="flex justify-center items-center gap-2">
            <div className="h-[0.5px] w-10 bg-pink-300"></div>
            <span className="text-pink-400 text-xs">❤</span>
            <div className="h-[0.5px] w-10 bg-pink-300"></div>
          </div>
        </div>

        {/* Slider Section */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg border border-orange-50 mx-2">
                
                {/* Left Side: Badi Image */}
                <div className="w-full md:w-[60%] relative h-[300px] md:h-[450px]">
                  <Image 
                    src={item.mainImg} 
                    alt="Wedding Story" 
                    fill 
                    className="object-cover"
                  />
                  {/* Play button overlay (jaisa screenshot me hai) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                       <span className="text-white text-xl ml-1">▶</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[40%] p-8 flex flex-col justify-start">
                  <span className="text-[10px] text-pink-500 font-bold tracking-widest uppercase mb-1">TESTIMONIAL</span>
                  
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(item.stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>

                  {/* Main Review Text */}
                  <div className="relative mb-8">
                    <span className="absolute -left-4 -top-2 text-pink-200 text-4xl font-serif italic">“</span>
                    <p className="text-gray-600 italic text-sm leading-relaxed relative z-10">
                      {item.text}
                    </p>
                    <span className="absolute -right-2 bottom-0 text-pink-200 text-4xl font-serif italic leading-none">”</span>
                  </div>

                  {/* Border Line */}
                  <div className="h-[1px] w-full bg-gray-100 mb-6"></div>

                  {/* User Profile Info */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-pink-100">
                      <Image 
                        src={item.userImg} 
                        alt={item.name} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-pink-600 font-bold text-[11px] uppercase tracking-wide">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-[10px]">{item.date}</p>
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Bullets Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #e5e7eb;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #f472b6 !important;
          width: 15px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default LoveNotes;