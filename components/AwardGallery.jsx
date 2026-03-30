import Image from 'next/image';

const AwardGallery = () => {
  // Replace these with your actual image paths from the public folder
  const images = [
    "/award-1.webp", 
    "/award-2.webp",
    "/award-3.webp",
    "/award-4.webp"
  ];

  return (
    <section className="px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column - Large Image */}
          <div className="md:col-span-1 h-[400px] relative rounded-xl overflow-hidden shadow-lg">
            <Image src={images[0]} alt="Award Ceremony" fill className="object-cover" />
          </div>

          {/* Middle Column - Banner Style */}
          <div className="md:col-span-1 h-[400px] relative rounded-xl overflow-hidden shadow-lg">
            <Image src={images[1]} alt="Recognition" fill className="object-cover" />
          </div>

          {/* Right Column - Stacked or Single */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="h-[192px] relative rounded-xl overflow-hidden shadow-lg">
              <Image src={images[2]} alt="Ceremony Moment" fill className="object-cover" />
            </div>
            <div className="h-[192px] relative rounded-xl overflow-hidden shadow-lg">
              <Image src={images[3]} alt="Trophy Presentation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardGallery;