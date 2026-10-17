import React from 'react';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#090a0c] shadow-[0_-4px_6px_-1px_rgba(255,255,255,0.05)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            className="w-4 h-4 text-[#c2f800] rotate-135"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43 1.43 1.43 2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.43-1.43-1.43-1.44z" />
          </svg>
          <span className="text-sm font-black uppercase tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright & Tagline */}
        <p className="text-xs text-neutral-400 font-normal">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;