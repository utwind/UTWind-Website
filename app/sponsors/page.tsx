"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";

export default function SponsorsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navbarRef = useRef<HTMLElement | null>(null);

  // Init AOS
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
        setNavHidden(true); // scrolling down
      } else {
        setNavHidden(false); // scrolling up
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
          ref={navbarRef}
          id="navbar"
          className="bg-white shadow-md sticky top-0 z-50 transition-all duration-200"
        >
          <div className="flex justify-between items-center py-4 pl-4 pr-6">
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

            <div className="hidden md:flex space-x-6 items-center">
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


      {/* Sponsors Section */}
      <section
        id="sponsors"
        className="bg-white py-20"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold mb-10 text-blue-800">
            Our Sponsors
          </h2>
          <p className="text-lg mb-12">
            Huge thanks to our sponsors that play a vital role in turning
            theory into real-world engineering. With their support, UTWind is
            able to prototype new turbine designs, test renewable technologies,
            and represent the University of Toronto at international
            competitions. We thank you for empowering the next generation of
            engineers shaping the future of sustainable energy!
          </p>

          {/* Sponsor Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            <a
              href="https://skule.ca/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Image
                src="/images/SKULE.png"
                alt="Skule"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://www.utoronto.ca/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image
                src="/images/Uoft.png"
                alt="University of Toronto"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://www.engineering.utoronto.ca/current-students/centralized-process-for-student-initiative-funding-cpsif/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Image
                src="/images/CPSIF.png"
                alt="CPSIF"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://www.utern.ca/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Image
                src="/images/UTERN.png"
                alt="UTERN"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://rlxsolutions.com/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Image
                src="/images/RLXsol.png"
                alt="RLX Solutions"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://www.hakko.com/english/products/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image
                src="/images/Hakko.png"
                alt="Hakko"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://www.solidworks.com/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Image
                src="/images/Solidworks.png"
                alt="SolidWorks"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://www.altium.com/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Image
                src="/images/Altium.png"
                alt="Altium"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://www.molex.com/en-us/home"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Image
                src="/images/Molex.png"
                alt="Molex"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://mgchemicals.com/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image
                src="/images/MGchemicals.png"
                alt="MG Chemicals"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://gillinstruments.com/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Image
                src="/images/GILL.png"
                alt="Gill Instruments"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>

            <a
              href="https://www.ansys.com/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Image
                src="/images/ANSYS.png"
                alt="ANSYS"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 text-gray-300 py-6 mt-20">
        <div className="flex items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/Utwind footer logo.png"
              alt="UTWind Logo"
              width={200}
              height={200}
              className="h-16 w-auto object-contain"
              quality={100}
              unoptimized
            />
            <span className="text-lg font-semibold text-black">
              contact@utwind.com
            </span>
          </div>
          <p className="text-sm text-black">
            © 2025 UTWind | University of Toronto
          </p>
        </div>
      </footer>
    </div>
  );
}
