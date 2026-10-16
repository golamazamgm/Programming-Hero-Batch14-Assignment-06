import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-6">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#121315] px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="flex flex-col items-start max-w-xl z-10">
          <span className="text-[#C2F800] text-xs font-bold tracking-wider uppercase mb-3">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase mb-4">
            TRAIN WITH INTENT. LOG <br className="hidden sm:inline" /> EVERY SET.
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="bg-[#C2F800] hover:bg-[#b0e000] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-lg transition-colors cursor-pointer shadow-sm">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 w-full max-w-[340px] md:max-w-[420px] lg:max-w-[480px]">
          <Image
            src="/banner.png"
            alt="Hero Workout Machine"
            width={520}
            height={480}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;