import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = () => {
  // Sabhi services ke liye href paths add kiye gaye hain
  const services = [
    { title: "Wedding & Event Decorations", img: "/s1.jpg", href: "/services/wed-decor" },
    { title: "Luxury Wedding Décor & Styling", img: "/s2.jpg", href: "/services/luxury" },
    { title: "Destination Weddings", img: "/s3.jpg", href: "/services/destination" },
    { title: "Wedding Venue Booking", img: "/s4.jpg", href: "/services/wed-venue" },
    { title: "Wedding Planning & Management", img: "/s5.jpg", href: "/services/wed_plan" },
    { title: "Invitations & Wedding Stationery", img: "/s6.jpg", href: "/services/invitation" },
    { title: "Hospitality & Guest Services", img: "/s7.jpg", href: "/services/hospitality" },
    { title: "Entertainment & Artist Management", img: "/s8.jpg", href: "/services/entertainment" },
    { title: "Catering & Food Experiences", img: "/s9.jpg", href: "/services/catering" },
    { title: "Photography & Cinematic Films", img: "/s10.jpg", href: "/services/photography" },
    { title: "Special Effects & Unique Experiences", img: "/s11.jpg", href: "srvices/effects" },
  ];

  return (
    <section className="bg-[#FFF5E9] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-widest uppercase mb-2">
          Our Services
        </h2>
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-[1px] w-12 bg-pink-300"></div>
          <span className="text-pink-400">❤</span>
          <div className="h-[1px] w-12 bg-pink-300"></div>
        </div>
        
        <p className="max-w-3xl mx-auto text-pink-600 text-xs md:text-sm font-medium leading-relaxed mb-12">
          At PS Decor, we specialize in creating extraordinary wedding and event experiences that exceed expectations. 
          From intimate ceremonies to grand celebrations, our comprehensive services ensure every moment is perfectly crafted.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            /* Card ko Link se wrap kiya gaya hai */
            <Link 
              href={service.href || "#"} 
              key={index}
              className="relative group h-64 md:h-72 overflow-hidden rounded-xl shadow-md cursor-pointer block"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay: Hover par thoda light ho jayega */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
              
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <h3 className="text-white font-serif text-xs md:text-sm uppercase tracking-widest text-center leading-tight">
                  {service.title}
                </h3>
                
                {/* Visual indicator jo hover par dikhega */}
                <div className="mt-4 w-0 h-[1px] bg-white group-hover:w-12 transition-all duration-500"></div>
                <span className="text-white text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-tighter">
                  Explore Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;