"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {

    const activeLinkClass = "!bg-[#1A2312] !text-[#C2F800] !rounded-full";

    const pathname = usePathname();

    const navLinks = (
        <>
            <li>
                <Link
                    href="/"
                    className={`font-semibold rounded-full px-4 py-1 transition-colors ${pathname === '/' ? activeLinkClass : 'text-neutral-400 hover:text-white'
                        }`}
                >
                    Workouts
                </Link>
            </li>
            <li>
                <Link
                    href="/my-plan"
                    className={`font-semibold rounded-full px-4 py-1 transition-colors ${pathname === '/my-plan' ? activeLinkClass : 'text-neutral-400 hover:text-white'
                        }`}
                >
                    My Plan
                </Link>
            </li>
        </>
    );



    return (
        <div className="shadow-sm shadow-olive-800 w-full">
            <div className="navbar mx-auto max-w-340 bg-base-100  md:px-4 lg:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>

                <div className="flex items-center ">
                    <Image
                        src="/logo.png"
                        alt="FITLOG Logo"
                        width={30}
                        height={30}
                    />
                    <Link href="/" className="btn btn-ghost text-2xl">FITLOG</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex md:gap-2">
                <Link className="btn btn-ghost" href="/my-plan">Plan <span className="badge w-6 h-6 p-0 rounded-full badge-warning">0</span></Link>
                <Link className="btn btn-ghost" href="/my-plan">Saved <span className="badge w-6 h-6 p-0 rounded-full badge-primary">0</span></Link>
            </div>
        </div>
        </div>
    );
};

export default NavBar;