export default function BlogDetail({ params }) {
  return (
    <main className="bg-[#FFF1E0] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        {/* Left Content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-serif font-bold mb-8">The Reality Check: Destination Weddings Are Not as Effortless as They Look</h1>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img src="/blog-inner-1.jpg" className="rounded-2xl" alt="bts" />
            <img src="/blog-inner-2.jpg" className="rounded-2xl" alt="wedding" />
          </div>
          <div className="prose max-w-none text-gray-700">
            <p>Instagram may show you the magic, but it rarely shows the madness behind it...</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Endless vendor negotiations with little clarity</li>
              <li>Budget overruns due to hidden costs</li>
              <li>Miscommunication between multiple teams</li>
            </ul>
          </div>
        </div>
        
        {/* Right Sidebar Form (Reusable) */}
        <aside className="lg:w-1/3">
           <div className="sticky top-24">
              <BookingForm />
           </div>
        </aside>
      </div>
      <Footer />
    </main>
  );
}