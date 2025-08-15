'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('research-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white text-gray-900 overflow-hidden">
      {/* Animated Background Paths */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glass Background Container */}
          <div className="relative backdrop-blur-md bg-blue-500/20 rounded-3xl border border-blue-300/40 shadow-xl p-8 sm:p-12 lg:p-16">
          {/* Main Heading */}
          <h1 className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-relaxed transition-all duration-700",
            mounted ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}>
            <span className="block mb-2">IEN Research</span>
            <span className="block mb-2 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-relaxed">
              Intelligence
            </span>
            <span className="block">Platform</span>
          </h1>

          {/* Subtitle */}
          <p className={cn(
            "text-2xl sm:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200",
            mounted ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}>
            Advanced analytics for Ireland&apos;s environmental network. 
            <span className="text-blue-600 font-semibold"> 37+ organizations</span>, 
            <span className="text-purple-600 font-semibold"> 6 key topics</span>, 
            <span className="text-indigo-600 font-semibold"> infinite insights</span>.
          </p>

          {/* CTA Button */}
          <div className={cn(
            "flex justify-center items-center transition-all duration-700 delay-300",
            mounted ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}>
            <button
              onClick={scrollToForm}
              className="btn-primary group relative overflow-hidden min-w-[280px] text-lg font-semibold"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Intelligence Report
                <svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>

          {/* Stats */}
          <div className={cn(
            "grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200 transition-all duration-700 delay-500",
            mounted ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">41</div>
              <div className="text-base sm:text-lg text-gray-500 font-bold">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-base sm:text-lg text-gray-500 font-bold">Key Topics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-2">∞</div>
              <div className="text-base sm:text-lg text-gray-500 font-bold">Insights</div>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}