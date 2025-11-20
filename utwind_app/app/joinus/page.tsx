"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JoinUsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

  // Set mounted state after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Navbar show/hide on scroll
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        // scrolling down
        setNavHidden(true);
      } else {
        // scrolling up
        setNavHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Navbar */}
        <nav
          id="navbar"
          className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
            mounted && navHidden ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex justify-between items-center py-4 pl-4 pr-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
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

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link href="/" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                Home
              </Link>
              <Link
                href="/competition"
                className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Competition
              </Link>
              <Link href="/team" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                Team
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Projects
              </Link>
              <Link
                href="/joinus"
                className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Join Us
              </Link>
              <Link
                href="/sponsors"
                className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Sponsors
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="menu-btn"
              className="block md:hidden focus:outline-none"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {!mobileOpen ? (
                <svg
                  id="hamburger-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  id="close-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            id="mobile-menu"
            className={`md:hidden flex-col items-center bg-white shadow-md space-y-4 py-4 ${
              mobileOpen ? "flex" : "hidden"
            }`}
          >
            <Link href="/" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link
              href="/competition"
              className="hover:text-blue-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Competition
            </Link>
            <Link
              href="/team"
              className="hover:text-blue-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/projects"
              className="hover:text-blue-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/joinus"
              className="hover:text-blue-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Join Us
            </Link>
            <Link
              href="/sponsors"
              className="hover:text-blue-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Sponsors
            </Link>
            <Link
              href="/#contact"
              className="hover:text-blue-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Meetings Section */}
        <section
          id="meetings"
          className="bg-indigo-50 py-20"
          data-aos="fade-up"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Meetings</h2>
            <p className="text-lg font-bold text-gray-800 mb-8">
              Below are the listed times and location that we have our work sessions!
            </p>

            {/* Meeting Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Aerodynamics */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Aerodynamics
                </h3>
                <p className="text-gray-700">Mondays @ 6:00 PM</p>
                <p className="text-gray-500 italic">@ MY763</p>
              </div>

              {/* Mechanical & Manufacturing */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Mechanical &amp; Manufacturing
                </h3>
                <p className="text-gray-700">Wednesdays @ 6:00 PM</p>
                <p className="text-gray-500 italic">@ Myhal Arena</p>
              </div>

              {/* Control Systems */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Control Systems
                </h3>
                <p className="text-gray-700">Fridays @ 6:30 PM</p>
                <p className="text-gray-500 italic">@ Myhal Arena</p>
              </div>

              {/* Power Systems */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Power Systems
                </h3>
                <p className="text-gray-700">Tuesdays @ 7:30 PM</p>
                <p className="text-gray-500 italic">@ Myhal Arena</p>
              </div>

              {/* Sustainability */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-700">Thursdays @ 6:45 PM</p>
                <p className="text-gray-500 italic">@ Myhal Arena</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subteams Section */}
        <section
          id="subteams"
          className="bg-blue-50 py-20"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">
              Our Subteams
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-gray-700">
              {/* Aerodynamics */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  Aerodynamics
                </h3>
                <p>
                  The Aerodynamics subteam focuses on designing and optimizing
                  the turbine blades for maximum efficiency. They use CFD
                  simulations, wind-tunnel testing, and rapid prototyping to
                  improve power output and minimize drag.
                </p>
              </div>

              {/* Mechanical & Manufacturing */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  Mechanical &amp; Manufacturing
                </h3>
                <p>
                  The Mechanical and Manufacturing subteam handles the
                  structural and physical design of the turbine. They perform
                  CAD modeling, material selection, machining, and 3D printing
                  to bring each design to life.
                </p>
              </div>

              {/* Control Systems */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  Control Systems
                </h3>
                <p>
                  The Control Systems subteam develops the hardware and software
                  that monitor and regulate turbine performance. They integrate
                  sensors, microcontrollers, and feedback algorithms to keep the
                  turbine stable and efficient.
                </p>
              </div>

              {/* Power Systems */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  Power Systems
                </h3>
                <p>
                  The Power Systems subteam designs the electrical side of the
                  turbine, including generators, converters, and circuitry.
                  Their goal is to efficiently convert mechanical energy into
                  reliable, usable electricity.
                </p>
              </div>

              {/* Sustainability */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  Sustainability
                </h3>
                <p>
                  The Sustainability subteam leads UTWind’s PET bottle recycling
                  initiative and promotes environmentally conscious design. They
                  transform recycled plastic into 3D-printing filament for
                  turbine components, closing the materials loop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-100 text-gray-300 py-6 mt-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
            {/* Left: Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/Utwind footer logo.png"
                alt="UTWind Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold text-black">
                contact@utwind.com
              </span>
            </div>

            {/* Right: Text */}
            <p className="text-sm text-black">
              © 2025 UTWind | University of Toronto
            </p>
          </div>
        </footer>
      </div>
  );
}
