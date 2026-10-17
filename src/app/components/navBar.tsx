"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { MyPlanContext } from '@/app/context/myPlanContext';

const NavBar = () => {
  const activeLinkClass = "!bg-[#1A2312] !text-[#C2F800] !rounded-full";
  const pathname = usePathname();

  const context = useContext(MyPlanContext);
  const planCount = context?.plans?.length ?? 0;
  const savedCount = context?.laterPlans?.length ?? 0;

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={`font-semibold rounded-full px-4 py-1 transition-colors ${
            pathname === '/' ? activeLinkClass : 'text-neutral-400 hover:text-white'
          }`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={`font-semibold rounded-full px-4 py-1 transition-colors ${
            pathname === '/my-plan' ? activeLinkClass : 'text-neutral-400 hover:text-white'
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="w-full border-b border-white/5 bg-[#0f1013]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="navbar mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start gap-2">
          {/* Mobile Menu Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden text-neutral-300">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#16171b] border border-white/10 rounded-2xl z-50 mt-3 w-52 p-2 shadow-2xl gap-1"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="FITLOG Logo"
              width={26}
              height={26}
              className="object-contain"
            />
            <span className="text-lg font-black uppercase tracking-wider text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Center Nav Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks}
          </ul>
        </div>

        {/* End Badges */}
        <div className="navbar-end flex items-center gap-3">
          {/* Plan Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            <span>Plan</span>
            <span className="w-5 h-5 rounded-full bg-[#c2f800] text-black text-[11px] font-black flex items-center justify-center">
              {planCount}
            </span>
          </Link>

          {/* Saved Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            <span>Saved</span>
            <span className="w-5 h-5 rounded-full bg-white/10 border border-white/10 text-neutral-300 text-[11px] font-bold flex items-center justify-center">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;