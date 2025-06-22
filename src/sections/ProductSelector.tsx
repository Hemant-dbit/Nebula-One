'use client';
import { useState } from 'react';

const COLORS = [
  { name: 'Silver', hex: '#E5E7EB', description: 'Classic elegance' },
  { name: 'Space Gray', hex: '#374151', description: 'Professional sophistication' },
  { name: 'Gold', hex: '#FDE68A', description: 'Premium luxury' },
];

export default function ProductSelector() {
  const [selected, setSelected] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const handleColorSelect = (index: number) => {
    setSelected(index);
    // Simulate haptic feedback or sound effect
    if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
      (navigator as any).vibrate(50);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex space-x-4 md:space-x-6 mb-6 md:mb-8">
        {COLORS.map((color, idx) => (
          <div key={color.name} className="relative group">
            <button
              aria-label={color.name}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 transition-all duration-300 ${
                selected === idx 
                  ? 'border-white scale-110 shadow-2xl shadow-white/20' 
                  : 'border-gray-600'
              } hover:scale-105 hover:border-gray-400 transform active:scale-95`}
              style={{ background: color.hex }}
              onClick={() => handleColorSelect(idx)}
              onMouseEnter={() => setIsHovering(idx)}
              onMouseLeave={() => setIsHovering(null)}
            />
            {/* Tooltip */}
            {isHovering === idx && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap z-20 animate-fade-in-up">
                {color.description}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="relative w-56 h-56 md:w-80 md:h-80 flex items-center justify-center">
        <div
          key={selected}
          className="absolute inset-0 flex items-center justify-center transition-all duration-700"
        >
          <div
            className="w-40 h-40 md:w-56 md:h-56 rounded-3xl shadow-2xl border border-gray-800 transition-all duration-700 glass-effect hover-lift"
            style={{ background: COLORS[selected].hex }}
          />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-6 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      <div className="mt-6 md:mt-8 text-center">
        <div className="text-white text-lg md:text-xl font-medium mb-2" aria-live="polite">
          {COLORS[selected].name}
        </div>
        <div className="text-gray-400 text-sm md:text-base">
          {COLORS[selected].description}
        </div>
      </div>
    </div>
  );
} 