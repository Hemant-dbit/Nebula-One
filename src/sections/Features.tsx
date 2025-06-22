'use client';
import { useEffect, useState, useRef } from 'react';

const FEATURES = [
  {
    icon: '🚀',
    title: 'Lightning Fast',
    desc: 'Powered by the most advanced chip ever in a smartphone. Experience unprecedented speed and efficiency.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '📱',
    title: 'Revolutionary Display',
    desc: '6.7-inch Super Retina XDR display with ProMotion technology for the most fluid experience.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '📸',
    title: 'Pro Camera System',
    desc: 'Triple-camera system with advanced computational photography for stunning photos and videos.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '🔋',
    title: 'All-Day Battery',
    desc: 'Up to 29 hours of video playback. Fast charging and wireless charging capabilities.',
    color: 'from-orange-500 to-red-500'
  }
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        
        // Trigger animation when user has scrolled past half of the section
        const isHalfwayPast = rect.top < window.innerHeight - (sectionHeight * 0.5);
        
        if (isHalfwayPast && visibleCards.length === 0) {
          // Animate cards sequentially with longer delays
          const cards = [0, 1, 2, 3];
          cards.forEach((index, i) => {
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }, i * 250); // Increased delay between each card
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards.length]);

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Revolutionary Features
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Pushing the boundaries of what's possible in mobile technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative transition-all duration-1500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-20 scale-95'
              }`}
              style={{ transitionDelay: `${index * 250}ms` }}
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 md:p-8 h-full hover:bg-gray-800/50 transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20 flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 flex-grow">
                  {feature.desc}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every feature has been thoughtfully designed to enhance your daily life. From the moment you pick up Nebula One, you'll experience the future of mobile technology.
          </p>
        </div>
      </div>
    </section>
  );
} 