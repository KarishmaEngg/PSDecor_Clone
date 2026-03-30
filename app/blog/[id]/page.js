import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { blogsData } from '@/data/blogs';
import Link from 'next/link';
import { IoArrowBack, IoCall, IoMail, IoGlobe } from "react-icons/io5";

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  
  // URL ki ID ke basis par data dhoondhna
  const blog = blogsData.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="py-20 text-center font-serif">
        <h1 className="text-2xl text-red-500">Blog Not Found</h1>
        <p className="text-gray-500">Looking for ID: {id}</p>
        <Link href="/blog" className="text-pink-600 underline mt-4 inline-block">Back to Blog List</Link>
      </div>
    );
  }

  // Hero Image: Agar headerImages mein image hai toh pehli wali lo, warna default
  const heroImage = blog.content.headerImages[0] || "/bag-1.webp";
  const remainingHeaderImages = blog.content.headerImages.slice(1);

  return (
    <>
      <Navbar />
      <main className="bg-[#FFF8F0] min-h-screen pb-20">
        
        {/* 1. DYNAMIC HERO IMAGE */}
        <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
          <img 
            src={heroImage} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* 2. NAVIGATION SECTION */}
        <div className="max-w-7xl mx-auto px-6 pt-10 mb-6 flex justify-between items-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-pink-600 font-bold uppercase text-xs tracking-widest hover:gap-4 transition-all">
            <IoArrowBack /> Back to Blogs
          </Link>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">Reading: {blog.id.replace(/-/g, ' ')}</span>
        </div>

        {/* 3. MAIN CONTENT GRID */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN: Blog Content */}
          <div className="lg:col-span-2 space-y-10">
            <header className="space-y-4">
               <div className="flex items-center gap-4 text-gray-500 text-sm font-serif italic">
                 <span>Location: {blog.location || "India"}</span>
                 <span>•</span>
                 <span>{blog.date}</span>
               </div>
               <h1 className="text-4xl md:text-5xl font-serif leading-tight text-gray-900 font-medium">
                {blog.title}
              </h1>
            </header>

            {/* Dynamic Sections Render */}
            <div className="space-y-12">
              {blog.content.sections.map((section, idx) => (
                <div key={idx}>
                  {section.type === "text" && (
                    <div className="prose prose-lg max-w-none font-serif text-gray-800 leading-relaxed space-y-4 mb-8">
                      {section.title && <h2 className="text-3xl text-gray-900 font-medium pt-4">{section.title}</h2>}
                      <p className={`${section.font === 'bold' ? 'font-bold' : ''}`}>{section.text}</p>
                      {section.text2 && <p>{section.text2}</p>}
                    </div>
                  )}

                  {section.type === "image" && (
                    <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white mb-8">
                      <img src={section.src} className="w-full h-auto object-cover" alt="Blog Illustration" />
                    </div>
                  )}

                  {section.type === "about" && (
                    <div className="bg-white p-8 rounded-[40px] shadow-sm flex flex-col md:flex-row gap-8 items-center border border-orange-50 my-10">
                      <div className="md:w-1/2 space-y-4">
                        <h2 className="text-2xl font-serif uppercase tracking-wider">About PS Decor</h2>
                        <p className="text-gray-600 italic text-sm leading-relaxed">
                          Professional wedding planning and luxury decor services across India. Turning dream celebrations into reality.
                        </p>
                      </div>
                      <img src={section.src} className="md:w-1/2 rounded-2xl object-cover h-48 w-full" alt="About Us" />
                    </div>
                  )}

                  {section.type === "contact-details" && (
                    <div className="pt-10 border-t border-gray-200 mt-16">
                      <h3 className="text-2xl font-serif mb-6 text-gray-900">{section.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-gray-700">
                            <IoCall className="text-pink-500" /> {section.phone}
                          </div>
                          <div className="flex items-center gap-3 text-gray-700">
                            <IoMail className="text-pink-500" /> {section.email}
                          </div>
                          <div className="flex items-center gap-3 text-gray-700">
                            <IoGlobe className="text-pink-500" /> {section.website}
                          </div>
                        </div>
                        <div className="flex items-end gap-3">
                           {/* Social Share Placeholder */}
                           <button className="text-xs font-bold uppercase tracking-widest border-b border-pink-500 pb-1">Share on Instagram</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Form */}
          <aside className="lg:col-span-1 relative">
            <div className="sticky top-28 bg-white p-8 rounded-[30px] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-1 leading-tight">Expert Wedding Planning</h3>
              <p className="text-center text-gray-400 text-[10px] mb-8 italic uppercase">Decor · Catering · Venue · Artist</p>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-pink-300" required />
                <input type="tel" placeholder="Mobile Number *" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-pink-300" required />
                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm text-gray-500 outline-none">
                  <option>Interested In</option>
                  <option>Full Wedding Management</option>
                  <option>Decor Only</option>
                  <option>Destination Wedding</option>
                </select>
                <textarea placeholder="Message..." rows="3" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-pink-300"></textarea>
                
                <button type="submit" className="w-full bg-[#FF2D7D] text-white font-bold py-4 rounded-xl hover:bg-pink-600 transition-all shadow-lg uppercase tracking-widest text-xs">
                  Get Free Quote
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-2">Personalized Consultation within 24 Hours</p>
              </form>
            </div>
          </aside>

        </div>
      </main>
      <Footer />
    </>
  );
}