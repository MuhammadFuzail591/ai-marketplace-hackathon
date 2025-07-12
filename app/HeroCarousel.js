'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroCarousel() {
  const categories = [
    {
      title: "Home and Garden",
      image: "https://storage.googleapis.com/a1aa/image/e95d07f6-1a04-48a7-bc83-450467c6a9a4.jpg",
      alt: "Two modern chairs with black cushions and a round table between them",
      href: "/categories/home-garden"
    },
    {
      title: "Fashion",
      image: "https://storage.googleapis.com/a1aa/image/d8a6bea5-e264-4fbd-d84d-a13479024945.jpg",
      alt: "Light blue handbag and blue sneaker shoes",
      href: "/categories/fashion"
    },
    {
      title: "Business & Industrial",
      image: "https://storage.googleapis.com/a1aa/image/f9d3948a-5753-4490-cfe5-9ae523f3015d.jpg",
      alt: "Green and black power drill",
      href: "/categories/business-industrial"
    }
  ];

  return (
    <section 
      aria-label="Featured categories carousel" 
      className="relative bg-[#0082f9] text-black max-w-7xl mx-auto px-4 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
    >
      {/* Left content */}
      <div className="max-w-xs flex flex-col gap-3">
        <h2 className="text-2xl font-extrabold leading-tight">
          All your faves are here
        </h2>
        <p className="text-sm max-w-[220px]">
          Refresh your space, elevate your style and power your work.
        </p>
        <button 
          className="bg-black bg-opacity-80 text-[#0082f9] font-semibold rounded-full px-5 py-2 w-max hover:bg-opacity-100 transition"
          aria-label="Explore categories"
        >
          Do your thing
        </button>
      </div>

      {/* Category cards */}
      <div className="flex flex-wrap justify-center sm:justify-end gap-10 text-center max-w-4xl flex-grow">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-3 max-w-[120px]">
            <div className="relative h-[120px] w-[120px]">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2} // Only load first 2 images eagerly
              />
            </div>
            <Link 
              href={category.href} 
              className="font-semibold hover:underline text-sm sm:text-base"
              aria-label={`Shop ${category.title}`}
            >
              {category.title} &gt;
            </Link>
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-black/70">
        {[1, 2, 3, 4].map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full border border-black/70 inline-block ${index === 2 ? 'bg-black' : ''}`}
          />
        ))}
      </div>
      
      {/* Carousel controls */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <button 
          aria-label="Previous slide" 
          className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <i className="fas fa-chevron-left" />
        </button>
        <button 
          aria-label="Next slide" 
          className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <i className="fas fa-chevron-right" />
        </button>
        <button 
          aria-label="Pause carousel" 
          className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <i className="fas fa-pause" />
        </button>
      </div>
    </section>
  );
}