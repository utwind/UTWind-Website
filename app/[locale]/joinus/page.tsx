"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JoinUsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Navbar show/hide on scroll
  useEffect(() => {
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
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Navbar */}
        <nav
          id="navbar"
          className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
            navHidden ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex justify-between items-center py-4 pl-4 pr-6">
            {/* Logo */}
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

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link href="/" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Home</Link>
              <Link href="/competition" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Competition</Link>
              <Link href="/team" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Team</Link>
              <Link href="/projects" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Projects</Link>
              <Link href="/joinus" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Join Us</Link>
              <Link href="/sponsors" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Sponsors</Link>
              <Link href="/gallery" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Gallery</Link>
              <Link href="/#contact" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Contact</Link>
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
          <div className={`md:hidden flex-col items-center bg-white shadow-md space-y-4 py-4 ${mobileOpen ? "flex" : "hidden"}`}>
            <Link href="/" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/competition" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Competition</Link>
            <Link href="/team" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Team</Link>
            <Link href="/projects" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Projects</Link>
            <Link href="/joinus" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Join Us</Link>
            <Link href="/sponsors" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Sponsors</Link>
            <Link href="/gallery" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/#contact" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Contact</Link>
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
            <p className="text-xl font-bold text-gray-800 mb-8">
              Below are the listed times and location that we have our work sessions!
            </p>

            {/* Meeting Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Aerodynamics */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Aerodynamics
                </h3>
                <p className="text-gray-700">Sundays @ 10:00-11:00 AM</p>
                <p className="text-gray-500 italic">@ Myhal Arena</p>
              </div>

              {/* Mechanical & Manufacturing */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Mechanical
                </h3>
                <p className="text-gray-700">Fridays @ 6:00-8:00 PM</p>
                <p className="text-gray-500 italic">@ Myhal Arena</p>
              </div>

              {/* Control Systems */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Control Systems
                </h3>
                <p className="text-gray-700">Mondays @ 7:00-9:00 PM</p>
                <p className="text-gray-500 italic">@ Myhal Arena</p>
              </div>

              {/* Power Systems */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Power Systems
                </h3>
                <p className="text-gray-700"> Tuesdays @ 6:00-8:00 PM</p>
                <p className="text-gray-500 italic">@ Myhal Arena</p>
              </div>

              {/* Sustainability */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-700">Saturdays @ 1:30-2:30 PM</p>
                <p className="text-gray-500 italic">@ Myhal Arena</p>
              </div>
            </div>
          </div>
        </section>
    {/* Forms  Section */}
    <section className="py-15 bg-gradient-to-b from-blue-100 to-blue-200  flex items-center">
<div className="max-w-6xl mx-auto px-6 w-full">
<h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-900 drop-shadow-sm">
UTWind Team Forms
</h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-1">
<Link
target="_blank" rel="noopener noreferrer"
href="https://docs.google.com/forms/d/e/1FAIpQLScY2iR7qBZJUIgsyzM0dSK8P6kQg10vSSDIyVwv_enu-DqESw/viewform"
className="group block bg-white/80 backdrop-blur shadow-lg rounded-2xl p-10 border border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all"
>
<h3 className="text-2xl font-bold mb-4 text-blue-800 group-hover:text-blue-600">
Member Recruitment Form
</h3>
<p className="text-blue-700">
Join UTWind and get involved in engineering, design, and sustainability.
</p>
</Link>

<Link
target="_blank" rel="noopener noreferrer"
href="https://docs.google.com/forms/d/e/1FAIpQLSc1PIgdVWMF30m6HM2xMk0st6mY-030NuIWdpYo-PdiCQ88Sg/viewform"
className="group block bg-white/80 backdrop-blur shadow-lg rounded-2xl p-10 border border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all"
>
<h3 className="text-2xl font-bold mb-4 text-blue-800 group-hover:text-blue-600">
Team Feedback & Inquiries Form
</h3>
<p className="text-blue-700">
Help improve UTWind with your thoughts and suggestions.
</p>
</Link>
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
              A Bit About Our Subteams
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
                  Mechanical
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
              {/* Business */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  Business Development
                </h3>
                <p>
                  The Business Development team consists of Finance, Sponsorships, Marketing, and Operations. 
                  Together, we secure and manage resources to support our growing team, build external partnerships, communicate and represent UTWind, 
                  organize events, and coordinate competition logistics to keep the team running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
  {/* Footer */}
<footer className="bg-blue-100 py-10 mt-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
      
      {/* Left: Logo */}
      <div className="flex justify-center md:justify-start">
        <Image
          src="/images/Utwind footer logo.png"
          alt="UTWind Logo"
          width={200}
          height={200}
          className="h-16 w-auto object-contain"
          quality={100}
          unoptimized
        />
      </div>

      {/* Middle: Contact links */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-lg font-bold text-black mb-3">
          Emails
        </h3>

        <div className="flex flex-col gap-2 text-black">
          <a
            href="mailto:contact@utwind.com"
            className="hover:text-blue-700 transition"
          >
            <span className="font-semibold">General Inquiries:</span>{" "}
            contact@utwind.com
          </a>

          <a
            href="mailto:sponsorships@utwind.skule.ca"
            className="hover:text-blue-700 transition"
          >
            <span className="font-semibold">Sponsorships:</span>{" "}
            sponsorships@utwind.skule.ca
          </a>

          <a
            href="mailto:operations@utwind.skule.ca"
            className="hover:text-blue-700 transition"
          >
            <span className="font-semibold">Operations:</span>{" "}
            operations@utwind.skule.ca
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <a
            href="https://www.instagram.com/utwindclub/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="UTWind Instagram"
            className="text-black hover:text-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm8.75 2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            </svg>
          </a>

          <a
            href="https://ca.linkedin.com/company/utwind"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="UTWind LinkedIn"
            className="text-black hover:text-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V9H7.1v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right: Copyright */}
      <div className="flex justify-center md:justify-end">
        <p className="text-sm text-black">
          © 2026 UTWind | University of Toronto
        </p>
      </div>
    </div>
  </div>
</footer>
      </div>
  );
}
