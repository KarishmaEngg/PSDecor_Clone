import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  // 1. Array mein 'slug' add kiya hai jo blogs.js ki 'id' se match karta hai
  const blogs = [
    {
      id: 1,
      slug: "why-choose", // blogsData.js ki ID se match karein
      title: "Why Hiring A Wedding Planner in Udaipur is..",
      date: "February 21, 2026",
      img: "/venv_1.jpg",
      location: "India"
    },
    {
      id: 2,
      slug: "event-management", // blogsData.js ki ID se match karein
      title: "Why Choose PS Decor for Professional Wedding Event..",
      date: "February 21, 2026",
      img: "/venv_2.jpg",
      location: "India"
    },
    {
      id: 3,
      slug: "services", // blogsData.js ki ID se match karein
      title: "Wedding Event Management Service by.",
      date: "February 20, 2026",
      img: "/venv_3.jpg",
      location: "India"
    }
  ];

  return (
    <section className="bg-[#FFF5E9] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-gray-800 tracking-widest uppercase mb-2">Blog</h2>
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-[1px] w-12 bg-pink-300"></div>
          <span className="text-pink-400">❤</span>
          <div className="h-[1px] w-12 bg-pink-300"></div>
        </div>
        <p className="text-pink-600 italic text-sm mb-12">Stories from our cherished moments</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={blog.img} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow items-center">
                <h3 className="text-gray-800 font-serif text-lg mb-4 line-clamp-2 leading-tight min-h-[50px]">
                  {blog.title}
                </h3>
                <div className="mt-auto text-center">
                  <p className="text-pink-500 font-bold text-[10px] uppercase tracking-tighter">{blog.location}</p>
                  <p className="text-gray-400 text-[10px] mb-4">{blog.date}</p>
                  
                  {/* 2. Link ko dynamic kiya gaya hai: href={`/blog/${blog.slug}`} */}
                  <Link 
                    href={`/blog/${blog.slug}`} 
                    className="inline-block border border-pink-500 text-pink-500 px-6 py-1 text-[10px] uppercase font-bold hover:bg-pink-500 hover:text-white transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/blog" className="inline-block border-2 border-pink-600 text-pink-600 px-10 py-2 uppercase font-bold text-xs hover:bg-pink-600 hover:text-white transition-all">
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;