import Image from "next/image";

export function InstagramFeedSection() {
  const mediaItems = [
    { id: 1, type: "image", src: "/assets/images/acaibowl-mujer.jpeg" },
    { id: 2, type: "video", src: "/assets/images/vid1.mp4" },
    { id: 3, type: "image", src: "/assets/images/brownie-shake.jpeg" },
    { id: 4, type: "video", src: "/assets/images/vid2.mp4" },
    { id: 5, type: "image", src: "/assets/images/mangonada-tajin-chamoy.jpeg" },
    { id: 6, type: "video", src: "/assets/images/vid3.mp4" },
    { id: 7, type: "image", src: "/assets/images/pandebono-proteina.jpeg" },
    { id: 8, type: "video", src: "/assets/images/WhatsApp Video 2026-09-29 at 5.57.37 PM.mp4" },
    { id: 9, type: "image", src: "/assets/images/passionfruit-megatea.jpeg" },
    { id: 10, type: "video", src: "/assets/images/WhatsApp Video 2026-09-29 at 6.05.44 PM.mp4" },
  ];

  // We duplicate the array to create a seamless infinite scrolling effect
  const duplicatedMedia = [...mediaItems, ...mediaItems];

  return (
    <section className="bg-white py-10 w-full overflow-hidden" aria-label="Media Gallery Slider">
      <div className="w-full mb-8 text-center">
        <h2 className="text-3xl font-black text-[#17343A] uppercase tracking-wide">
          Our <span className="text-[#E83C8B]">Vibe</span>
        </h2>
      </div>
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="flex w-max animate-marquee pause-on-hover">
          {duplicatedMedia.map((media, idx) => (
            <div 
              key={`${media.id}-${idx}`} 
              className="relative w-64 h-80 sm:w-72 sm:h-96 mx-2 overflow-hidden rounded-xl bg-gray-100 flex-shrink-0"
            >
              {media.type === "image" ? (
                <Image 
                  src={media.src} 
                  alt={`Smart Snack Nutrition Gallery Image ${idx}`} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              ) : (
                <video
                  src={media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
