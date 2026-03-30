'use client';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    
    <footer className="bg-[#FFF1E0] pt-16 pb-12 px-6 md:px-20 text-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-5">
            <h2 className="text-[55px] font-serif leading-none tracking-tight text-black">PS Decor</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-[300px]">
              Creating timeless weddings and unforgettable celebrations with sophistication and attention to detail.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-gray-800">
                <FaMapMarkerAlt className="mt-1 text-[16px] shrink-0" />
                <span className="text-[14px] leading-snug">Office No. - 2/344, Avas Vikas, Moradabad, Uttar Pradesh, Pincode- 244001</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <FaEnvelope className="text-[16px] shrink-0" />
                <span className="text-[14px]">pradeepshukladecor@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <FaPhoneAlt className="text-[16px] shrink-0" />
                <span className="text-[14px]">+91 7599208222</span>
              </div>
            </div>

           
            <div className="flex gap-4 pt-4">
              <Link href="#" className="text-[#E1306C] hover:opacity-75 transition-opacity"><FaWhatsapp size={22} /></Link>
              <Link href="#" className="text-[#E1306C] hover:opacity-75 transition-opacity"><FaInstagram size={22} /></Link>
              <Link href="#" className="text-[#1877F2] hover:opacity-75 transition-opacity"><FaFacebookF size={20} /></Link>
              <Link href="#" className="text-[#FF0000] hover:opacity-75 transition-opacity"><FaYoutube size={22} /></Link>
              <Link href="#" className="text-[#0077B5] hover:opacity-75 transition-opacity"><FaLinkedinIn size={22} /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="pl-0 lg:pl-10">
            <h4 className="text-[28px] font-serif mb-6 text-black">Quick Links</h4>
            <ul className="space-y-2 text-[15px] text-gray-800 font-medium">
              {["Home", "Portfolio", "About", "Team", "Why Choose", "Awards", "Testimonials", "Blog", "Venues", "Careers", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-pink-600 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: FAQs */}
          <div>
            <h4 className="text-[28px] font-serif mb-6 text-black">FAQs</h4>
            <ul className="space-y-4 text-[15px] text-gray-800 font-medium">
              {[
                "Do you offer destination wedding services?",
                "Can we customize the decor?",
                "How far in advance should we book?"
              ].map((faq, idx) => (
                <li key={idx} className="flex items-start gap-2 cursor-pointer group">
                  <span className="text-[10px] mt-1.5 transition-transform group-hover:translate-x-1">▶</span>
                  <span className="group-hover:text-pink-600">{faq}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Google Map Location */}
          <div>
            <h4 className="text-[28px] font-serif mb-6 text-black">Our Location</h4>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[220px] bg-white border-2 border-white">
              {/* Google Maps Iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789!2d78.7733!3d28.8386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afba123456789%3A0xabcdef123456789!2sAvas%20Vikas%2C%20Moradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710750000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        
          <p className="text-[13px] text-gray-700 leading-relaxed mb-12 text-justify md:text-left">
            <span className="font-bold text-black uppercase tracking-wider">Disclaimer:</span> PS Decor acts as a wedding planning and coordination service. Venue details and prices are indicative and may change. Final confirmation depends on venue availability and vendor terms. We provide wedding planning and decor services directly. PS Decor is the brand name of Pradeep Shukla Decor.
          </p>
          <div className="w-full h-[1px] bg-gray-900 mb-6"></div>
          <p className="text-[15px] text-gray-700 font-medium">
            Copyright © 2026 PSDecor.
          </p>
        </div>
      
    </footer>
  );
};

export default Footer;