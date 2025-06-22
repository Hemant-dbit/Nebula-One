'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageEntrance, setImageEntrance] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger image entrance animation after a longer delay for better visibility
    const entranceTimer = setTimeout(() => {
      setImageEntrance(true);
    }, 1200);
    
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsScrolled(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(entranceTimer);
    };
  }, []);

  const scrollToFeatures = () => {
    const features = document.getElementById('features');
    if (features) {
      features.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black px-4 md:px-0 overflow-hidden pt-20 md:pt-32">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative text-center max-w-6xl w-full z-10 flex flex-col items-center">
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1] md:leading-[1.1] gradient-text animate-fade-in-up">
            Nebula One
          </h1>
          <p className="text-lg xs:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-light animate-fade-in-up animation-delay-200 leading-relaxed">
            Experience the future. <span className="text-white font-medium">Minimal.</span> <span className="text-white font-medium">Powerful.</span> <span className="text-white font-medium">Beautiful.</span>
          </p>
        </div>
        
        {/* Enhanced iPhone Image with dramatic entrance animation */}
        <div 
          ref={imageRef}
          className={`w-full flex justify-center items-center mb-12 transition-all duration-2000 ease-out ${
            imageEntrance 
              ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
              : 'opacity-0 translate-y-[100vh] scale-75 rotate-12'
          } ${
            isScrolled 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-100 translate-y-0 scale-100'
          }`}
        >
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            {/* Glow effect behind image */}
            <div className={`absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transition-all duration-1000 ${
              imageEntrance && isScrolled ? 'animate-pulse-glow' : 'opacity-0'
            }`}></div>
            
            <Image
              src="/iphone16-colors.png"
              alt="Nebula One iPhone 16"
              width={400}
              height={800}
              className={`w-full h-auto object-contain drop-shadow-2xl rounded-3xl transition-all duration-1000 hover:scale-110 hover:rotate-2 hover:drop-shadow-3xl ${
                imageEntrance && isScrolled ? 'animate-float' : ''
              }`}
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 40vw"
            />
            
            {/* Reflection effect */}
            <div className={`absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent rounded-3xl opacity-0 transition-opacity duration-500 ${
              imageEntrance && isScrolled ? 'group-hover:opacity-100' : ''
            }`}></div>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <button
            onClick={scrollToFeatures}
            className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold text-lg md:text-xl shadow-2xl hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 transform hover:scale-105 overflow-hidden btn-animate"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
} 