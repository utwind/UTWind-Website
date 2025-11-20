'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // ref for navbar and mobile menu state
  const navbarRef = useRef<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // aos init
    AOS.init({ duration: 1000, once: true });

    // navbar scroll effect
    const handleScroll = () => {
      const el = navbarRef.current;
      if (!el) return;
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current) {
        el.classList.add('opacity-0', '-translate-y-10');
        el.classList.remove('opacity-100', 'translate-y-0');
      } else {
        el.classList.remove('opacity-0', '-translate-y-10');
        el.classList.add('opacity-100', 'translate-y-0');
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // simple toggle using state
  const toggleMenu = () => setMobileOpen((v) => !v);

  return (
    <main className="bg-gray-50 text-gray-800">

      {/* navbar */}
      <nav
        ref={navbarRef}
        id="navbar"
        className="bg-white shadow-md sticky top-0 z-50 transition-all duration-250"
      >
      <div className="flex justify-between items-center py-4 pl-4 pr-6">
        {/* logo */}
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

          {/* desktop links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Home</Link>
            <Link href="/competition" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Competition</Link>
            <Link href="/team" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Team</Link>
            <Link href="/projects" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Projects</Link>
            <Link href="/joinus" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Join Us</Link>
            <Link href="/sponsors" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Sponsors</Link>
            <Link href="/#contact" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Contact</Link>
          </div>

          {/* mobile toggle */}
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

        {/* mobile dropdown */}
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

      {/* hero */}
      <section
  className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center text-white"
  style={{ backgroundImage: "url('/images/ISWTC turbine.JPG')" }}
>
  {/* Dark overlay (behind text) */}
  <div className="absolute inset-0 bg-transparent bg-opacity-40"></div>

  {/* Text content on top */}
  <div className="relative z-20 max-w-3xl px-8 md:px-16">
    <h1 className="text-8xl md:text-9xl font-bold mb-6 drop-shadow-lg">UTWind</h1>
    <h2 className="text-5xl md:text-6xl font-light mb-4 drop-shadow-lg">Face the Wind</h2>
    <p className="text-2xl md:text-3xl leading-relaxed drop-shadow-md">
      University of Toronto Wind Turbine Team
    </p>
  </div>
</section>

    {/* about */}
      <section id="about" className="bg-blue-500 text-white py-20" data-aos="fade-up">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6">About Us</h2>
          <p className="text-xl">
            UTWind is a student team dedicated to building sustainable small-scale wind turbines.
            Formed in 2021, our team has grown to more than 80 talented students designing, building,
            and testing small-scale turbines for international competitions and research.
          </p>
          <a
            href="/team"
            className="inline-block mt-8 bg-indigo-200 hover:bg-indigo-400 text-black font-semibold py-4 px-10 rounded-lg shadow-md text-lg transition duration-300"
          >
            Meet the Team
          </a>
        </div>
      </section>

      {/* vision */}
      <section id="vision" className="bg-white text-gray-800 py-20" data-aos="fade-up">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6">Vision</h2>
          <p className="text-xl italic leading-relaxed">
            "Our vision is to bring wind energy to light for students at the University of Toronto,
            so they will be prepared and inspired to light up the world in a sustainable way.
            By working together, we hope to develop our skills in the context of a project we are
            passionate about. The team is a place where knowledge is shared and passed on. The
            project is designed to focus not just on what we learn today, but what we can achieve
            in designing a more sustainable future!"
          </p>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="bg-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
          <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Interested in learning more about UTWind or collaborating with us?  
            We’d love to hear from you! Please reach out via email or visit us at Myhal Centre.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:contact@utwind.com" className="text-indigo-600 font-semibold hover:underline">
                  contact@utwind.com
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong><br />
                Myhal Centre for Engineering Innovation & Entrepreneurship<br />
                55 St George St, Toronto, ON M5S 0C9
              </p>
              <p className="text-gray-600 font-bold">
                Feel free to reach out with questions about joining, sponsorship opportunities, or partnerships — our team will respond as soon as possible.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Myhal+Centre+for+Engineering+Innovation+and+Entrepreneurship,+55+St+George+St,+Toronto,+ON+M5S+0C9&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-blue-100 text-gray-300 py-6 mt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <Image src="/images/Utwind footer logo.png" alt="UTWind Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-lg font-semibold text-black">contact@utwind.com</span>
          </div>
          <p className="text-sm text-black">© 2025 UTWind | University of Toronto</p>
        </div>
      </footer>
      
    </main>
  );
}
