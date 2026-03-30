'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Swiper styles install karna na bhulein
import 'swiper/css';
import 'swiper/css/pagination';

const Collaborators = () => {
  const partners = [
    { id: 1, logo: "/c1.jpg", name: "@weddingsbymilindmalik", link: "https://instagram.com/..." },
    { id: 2, logo: "/c2.jpg", name: "@delhivelvet", link: "https://instagram.com/..." },
    { id: 3, logo: "/c6.jpg", name: "@the_wedding_files", link: "https://instagram.com/..." },
    { id: 4, logo: "/c7.jpg", name: "@thephotospottt", link: "https://instagram.com/..." },
    { id: 5, logo: "/c1.jpg", name: "@another_studio", link: "https://instagram.com/..." },
  ];

  return (
    <section className="bg-[#FFE4D5] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-4xl font-serif text-gray-800 tracking-[0.2em] uppercase mb-2">
          Collaborators
        </h2>
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-[0.5px] w-12 bg-pink-300"></div>
          <span className="text-pink-400 text-xs">❤</span>
          <div className="h-[0.5px] w-12 bg-pink-300"></div>
        </div>
        <p className="text-pink-500 italic text-sm mb-12">
          We're proud to work with these talented Artist and Studios.
        </p>

        {/* Slider Section */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <Link href={partner.link} target="_blank" className="group flex flex-col items-center">
                <div className="bg-white p-4 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border border-orange-50 shadow-sm hover:shadow-md transition-all duration-300 mb-4">
                  <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      fill 
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-pink-600 transition-colors">
                  {partner.name}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Style Customization */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 5px;
          height: 5px;
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #f472b6 !important;
          width: 12px;
          border-radius: 10px;
          transition: width 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Collaborators;