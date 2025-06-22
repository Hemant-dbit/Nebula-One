'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Showcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        
        // Trigger animation when user has scrolled past half of the section
        const isHalfwayPast = rect.top < window.innerHeight - (sectionHeight * 0.5);
        
        if (isHalfwayPast && visibleImages.length === 0) {
          // Animate images sequentially with longer delays
          const images = [0, 1, 2];
          images.forEach((index, i) => {
            setTimeout(() => {
              setVisibleImages(prev => [...new Set([...prev, index])]);
            }, i * 300); // Increased delay between each image
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleImages.length]);

  const images = [
    { src: '/iphone16-front.png', alt: 'Nebula One Front View', title: 'Front View' },
    { src: '/iphone16-side.png', alt: 'Nebula One Side View', title: 'Side View' },
    { src: '/iphone16-colors.png', alt: 'Nebula One Colors', title: 'Color Options' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="showcase" 
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Every Angle, Every Detail
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Crafted with precision. Designed for perfection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1500 w-full max-w-sm ${
                visibleImages.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-20 scale-95'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="relative w-full h-[600px] flex items-center justify-center">
                {/* Glow effect behind image */}
                <div className={`absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-1000 ${
                  visibleImages.includes(index) ? 'animate-pulse-glow' : 'opacity-0'
                }`}></div>
                
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={600}
                  className={`relative w-auto h-full max-h-[500px] object-contain drop-shadow-2xl rounded-3xl transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1 group-hover:drop-shadow-3xl ${
                    index === 0 && visibleImages.includes(index) ? 'animate-float' : ''
                  }`}
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                />
                
                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Title overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-white text-sm font-medium">{image.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the perfect balance of form and function. Every curve, every edge, every detail has been meticulously designed to create the ultimate mobile experience.
          </p>
        </div>
      </div>
    </section>
  );
} 