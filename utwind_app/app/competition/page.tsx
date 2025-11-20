"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CompetitionPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const nav = navbarRef.current;
      if (!nav) return;
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current) {
        nav.classList.add("opacity-0", "-translate-y-10");
        nav.classList.remove("opacity-100", "translate-y-0");
      } else {
        nav.classList.remove("opacity-0", "-translate-y-10");
        nav.classList.add("opacity-100", "translate-y-0");
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Navbar */}
        <nav
          ref={navbarRef}
          id="navbar"
          className="bg-white shadow-md sticky top-0 z-50 transition-all duration-200"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4 space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/UTWIND Logo_Circular_without_LogoType_1 color.jpg"
                alt="UTWind Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="text-2xl font-bold text-blue-600">UTWind</span>
            </Link>

            <div className="hidden md:flex space-x-6 ml-auto">
              <Link href="/" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Home</Link>
              <Link href="/competition" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Competition</Link>
              <Link href="/team" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Team</Link>
              <Link href="/projects" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Projects</Link>
              <Link href="/joinus" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Join Us</Link>
              <Link href="/sponsors" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Sponsors</Link>
              <Link href="/#contact" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Contact</Link>
            </div>

            <button
              aria-label="Toggle Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="block md:hidden focus:outline-none"
            >
              <svg
                className={`h-8 w-8 text-gray-700 ${mobileOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-8 w-8 text-gray-700 ${mobileOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className={`md:hidden flex-col items-center bg-white shadow-md space-y-4 py-4 ${mobileOpen ? "flex" : "hidden"}`}>
            <Link href="/" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/competition" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Competition</Link>
            <Link href="/team" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Team</Link>
            <Link href="/projects" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Projects</Link>
            <Link href="/joinus" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Join Us</Link>
            <Link href="/sponsors" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Sponsors</Link>
            <Link href="/#contact" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </nav>

        {/* Hero/Intro to Competition */}
        <section id="competitions" className="bg-blue-200 py-20">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">International Small Wind Turbine Contest (ISWTC)</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every Summer UTWind competes in the{' '}
              <a
                href="https://www.hanze.nl/en/research/centres/entrance-centre-of-expertise-energy/projects/international-small-wind-turbine-contest-iswtc"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-700 font-semibold hover:underline"
              >
                International Small Wind Turbine Contest (ISWTC)
              </a>{' '}
              in the Netherlands against other international universities. UTWind has been coming home with a trophy since our debut and couldn't be more proud to represent the University of Toronto. Read more below about each competition.
            </p>
          </div>
        </section>

        {/* Competition History Timeline */}
        <section id="competition-history" className="bg-indigo-50 py-20 relative">
          <div className="max-w-6xl mx-auto px-6 relative">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Competition History</h2>

            <div className="absolute left-1/2 -translate-x-1/2 top-[140px] bottom-[140px] w-1 bg-indigo-300 hidden lg:block" />

            <div className="relative flex flex-col lg:flex-row items-center mb-24" data-aos="fade-up">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />
              <div className="lg:w-1/2 lg:pr-10 text-center mb-8 lg:mb-0">
                <h3 className="text-6xl font-semibold text-indigo-700 mb-4">2025</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  UTWind’s most ambitious turbine yet was our first-ever Vertical Axis Wind Turbine (VAWT). Despite the tight timeline and unfamiliarity, we built an H-Rotor VAWT in just four months and were thrilled to see it spin, generate power, and run with a working control system. Although we didn’t bring home a trophy, we learned a lot and can’t wait to improve in our next iteration.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pl-10 text-center">
                <Image src="/images/ISWTC 2025.png" alt="ISWTC 2025" width={1200} height={800} className="rounded-xl shadow-md w-full h-auto object-cover mb-3" />
                <p className="text-gray-600 italic text-lg">UTWind's 1st Iteration of VAWT - 2025</p>
              </div>
            </div>

            <div className="relative flex flex-col lg:flex-row-reverse items-center mb-24" data-aos="fade-up">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />
              <div className="lg:w-1/2 lg:pl-10 text-center mb-8 lg:mb-0">
                <h3 className="text-6xl font-semibold text-indigo-700 mb-4">2024</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The third year competing tested several firsts: recycling PET bottles into filament, using one motor for pitch control, and making flax-fiber blades. With many new teams, it was a huge surprise when the Jury awarded Best Overall Design <strong>(1st place)</strong> to “The Team from Toronto.”
                </p>
              </div>
              <div className="lg:w-1/2 lg:pr-10 text-center">
                <Image src="/images/ISWTC 2024.jpg" alt="ISWTC 2024" width={1200} height={800} className="rounded-xl shadow-md w-full h-auto object-cover mb-3" />
                <p className="text-gray-600 italic text-lg">UTWind's 1st Place Award Winning Turbine - 2024</p>
              </div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center mb-24" data-aos="fade-up">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />
              <div className="lg:w-1/2 lg:pr-10 text-center mb-8 lg:mb-0">
                <h3 className="text-6xl font-semibold text-indigo-700 mb-4">2023</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The second year of UTWind's participation at the ISWTC was no less challenging because we won the previous competition, however UTWind brought home the <strong>Award for Most Sustainable Turbine.</strong>
                </p>
              </div>
              <div className="lg:w-1/2 lg:pl-10 text-center">
                <Image src="/images/ISWTC 2023.jpg" alt="ISWTC 2023" width={1200} height={800} className="rounded-xl shadow-md w-full h-auto object-cover mb-3" />
                <p className="text-gray-600 italic text-lg">UTWind's Most Sustainable Award Winning Turbine - 2023</p>
              </div>
            </div>

            <div className="relative flex flex-col lg:flex-row-reverse items-center" data-aos="fade-up">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />
              <div className="lg:w-1/2 lg:pl-10 text-center mb-8 lg:mb-0">
                <h3 className="text-6xl font-semibold text-indigo-700 mb-4">2022</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  This was the first ISWTC that UTWind competed in after almost two years of preparation work during the pandemic. UTWind won Best Overall Design <strong>(1st place)</strong> in its debut at the ISWTC.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pr-10 text-center">
                <Image src="/images/ISWTC 2022.jpg" alt="ISWTC 2022" width={1200} height={800} className="rounded-xl shadow-md w-full h-auto object-cover mb-3" />
                <p className="text-gray-600 italic text-lg">UTWind's 1st Place Award Winning Turbine - 2022</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
