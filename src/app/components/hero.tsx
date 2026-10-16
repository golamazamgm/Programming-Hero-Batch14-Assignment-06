import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6  py-6 md:py-2 mt-1.5 md:mt-8 md:mb-16 mb-2.5">
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#121316] border border-white/5 px-6 sm:px-10 md:px-16 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start gap-4 md:gap-6 max-w-xl z-10 flex-1">
          <span className="text-[#C2F800] text-xs md:text-sm font-bold tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight uppercase">
            TRAIN WITH INTENT. <br className="hidden sm:inline" />
            LOG EVERY SET.
          </h1>

          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-2 bg-[#C2F800] hover:bg-[#b0e000] text-black font-extrabold text-xs md:text-sm tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Column: Hero Graphic */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <Image
            src="/banner.png"
            alt="Gym machine illustration"
            width={800}
            height={800}
            priority
            className="w-[280px] sm:w-[380px] md:w-[400px] lg:w-[430px] xl:w-[460px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;