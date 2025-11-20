"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Project = "pet" | "turbine" | null;

export default function ProjectsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project>(null);
  const [slide1Index, setSlide1Index] = useState(0);
  const [slide4Index, setSlide4Index] = useState(0);

  const navbarRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  // navbar show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Step 1 slideshow (2 images)
  useEffect(() => {
    const id = setInterval(() => {
      setSlide1Index((i) => (i + 1) % 2);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Step 4 slideshow (3 images)
  useEffect(() => {
    const id = setInterval(() => {
      setSlide4Index((i) => (i + 1) % 3);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const isActive = activeProject !== null;

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
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

      {/* MAIN CONTENT */}
      <main
        id="main-wrapper"
        className={`flex-1 flex flex-col justify-between overflow-hidden transition-colors duration-500 ${
          isActive ? "bg-white text-gray-800" : "bg-blue-300 text-white"
        }`}
      >
        {/* Project Toggle Section */}
        <section id="project-toggle" className="py-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Our Projects</h2>
            <p className="text-gray-900 mb-8">
              Click the following buttons to check out each of our projects!
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <button
                onClick={() => setActiveProject("pet")}
                className={`group inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-700 transition ${
                  activeProject === "pet" ? "ring-4 ring-offset-2 ring-indigo-300 scale-105" : ""
                }`}
              >
                PET Recycling Project
              </button>

              <button
                onClick={() => setActiveProject("turbine")}
                className={`group inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition ${
                  activeProject === "turbine" ? "ring-4 ring-offset-2 ring-indigo-300 scale-105" : ""
                }`}
              >
                Campus Turbine Project
              </button>
            </div>
          </div>
        </section>

        {/* PET RECYCLING SECTIONS */}
        {activeProject === "pet" && (
          <>
            {/* PET Intro */}
            <section id="PETrecycling" className="bg-blue-200 py-20">
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-8 lg:px-16">
                {/* Left Text */}
                <div className="lg:w-1/2 text-left mb-12 lg:mb-0">
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    PET Bottle Recycling Initiative
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Since Spring 2024, UTWind has been collecting PET1 plastic bottles from U of T
                    campuses and recycling them into 3D printing filament used to manufacture parts
                    of our competition wind turbine. Each year, we’ve worked to improve the process
                    and increase the number of components we can print using recycled plastic.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    We’d like to thank{" "}
                    <a
                      href="https://utern.ca/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-700 font-semibold hover:underline"
                    >
                      UTERN
                    </a>{" "}
                    for their continued funding support and the{" "}
                    <a
                      href="https://skulepedia.ca/wiki/Hard_Hat_Cafe"
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-700 font-semibold hover:underline"
                    >
                      Hard Hat Café
                    </a>{" "}
                    for being our largest source of bottle donations.
                  </p>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center">
                  <img
                    src="/images/recycling process.png"
                    alt="UTWind PET Bottle Recycling"
                    className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Recycling process */}
            <section id="recycling-process" className="bg-white py-20 relative">
              <div className="max-w-6xl mx-auto px-8 text-center relative">
                <h2 className="text-4xl font-bold text-gray-800 mb-16">
                  Our PET Recycling Process
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center p-6 bg-blue-100 rounded-2xl shadow-lg border-2 border-blue-300">
                    <div className="relative w-full h-60 overflow-hidden rounded-xl mb-6 border-4 border-white shadow-md">
                      <img
                        src="/images/recycle pic1.png"
                        alt="Collect Bottles 1"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          slide1Index === 0 ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <img
                        src="/images/recycle pic2.png"
                        alt="Collect Bottles 2"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          slide1Index === 1 ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        <span
                          className={`w-2 h-2 rounded-full opacity-80 ${
                            slide1Index === 0 ? "bg-white" : "bg-white/50"
                          }`}
                        />
                        <span
                          className={`w-2 h-2 rounded-full opacity-80 ${
                            slide1Index === 1 ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                      Step 1: Collect
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We gather PET1 plastic bottles from U of T campuses and local partners.
                    </p>

                    {/* Arrow to Step 2 */}
                    <div className="hidden lg:block absolute -right-[60px] top-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center text-center p-6 bg-blue-100 rounded-2xl shadow-lg border-2 border-blue-300">
                    <div className="relative w-full h-60 overflow-hidden rounded-xl mb-6 border-4 border-white shadow-md">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/EFZ2CLPtRVQ?si=H_sTp-AKV-tMlYVf"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>

                    <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                      Step 2: Extrude
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The collected bottles are cut and extruded into reuseable filament!
                    </p>

                    {/* Arrow down to Step 4 */}
                    <div className="hidden lg:block absolute -bottom-[60px] left-1/2 -translate-x-1/2 rotate-90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex flex-col items-center text-center p-6 bg-blue-100 rounded-2xl shadow-lg border-2 border-blue-300">
                    <div className="relative w-full h-60 overflow-hidden rounded-xl border-4 border-white shadow-md mb-4">
                      {/* Anemometer */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          slide4Index === 0 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src="/images/printable1.png"
                          alt="Anemometer Mount"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                          Anemometer Mount
                        </p>
                      </div>

                      {/* Gear */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          slide4Index === 1 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src="/images/printable2.png"
                          alt="Gear"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                          Gear
                        </p>
                      </div>

                      {/* Nose cone */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          slide4Index === 2 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src="/images/printable3.png"
                          alt="Nose Cone"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                          Nose cone
                        </p>
                      </div>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full opacity-80 ${
                              slide4Index === i ? "bg-white" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                      Step 4: Printed results
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The final printed part is integrated into functional turbine components!
                    </p>

                    {/* Arrow up to Step 3 */}
                    <div className="hidden lg:block absolute left-1/2 -top-16 -rotate-90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col items-center text-center p-6 bg-blue-100 rounded-2xl shadow-lg border-2 border-blue-300">
                    <img
                      src="/images/3dprinting.png"
                      alt="Extrude Filament"
                      className="w-full h-60 object-cover rounded-xl mb-6 border-4 border-white shadow-md"
                    />
                    <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                      Step 3: 3D Print
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The recycled filament is used for 3D printing!
                    </p>

                    {/* Arrow to Step 1 */}
                    <div className="hidden lg:block absolute -left-[60px] top-1/2 -translate-y-1/2 -rotate-180 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contribution / Why Recycle */}
            <section id="recycling-contribute" className="bg-blue-50 py-20">
              <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-10">
                  How Can I Contribute and Participate?
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To drop off bottles or use our 3D printer for recycled filament, please email us
                  at{" "}
                  <a
                    href="mailto:contact@utwind.com"
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    contact@utwind.com
                  </a>
                  .
                </p>

                <div className="bg-white rounded-2xl shadow-md p-8 border-2 border-blue-200 text-left max-w-3xl mx-auto">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
                    Bottle Drop-Off Guidelines
                  </h3>
                  <ul className="list-disc text-gray-700 leading-relaxed space-y-3 pl-6">
                    <li>
                      Must be <span className="font-semibold">PET1 plastic bottles</span> (e.g., 4 L
                      water jugs, 2 L club soda, or sparkling water bottles).{" "}
                      <em>Photos attached below.</em>
                    </li>
                    <li>Bottles cannot have contained viscous liquids or oil.</li>
                    <li>
                      Bottles should be <span className="font-semibold">uncompressed and clean</span>{" "}
                      (free of outside contamination).
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <img
                      src="/images/petbottle1.jpg"
                      alt="Example PET bottle"
                      className="w-40 h-40 object-cover rounded-lg shadow"
                    />
                    <img
                      src="/images/petbottle2.jpg"
                      alt="Example PET bottle"
                      className="w-40 h-40 object-cover rounded-lg shadow"
                    />
                    <img
                      src="/images/petbottle3.png"
                      alt="Example PET bottle"
                      className="w-40 h-40 object-cover rounded-lg shadow"
                    />
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Why Should We Recycle Plastic?
                  </h3>
                  <p className="text-gray-700 text-lg mb-4">
                    The answer is multifaceted, so here are some useful links to learn more:
                  </p>
                  <ul className="space-y-3 text-indigo-600 font-medium text-lg">
                    <li>
                      <a
                        href="https://www.canada.ca/en/environment-climate-change/services/managing-reducing-waste/reduce-plastic-waste.html"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Government of Canada — Reducing Plastic Waste
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://circulareconomyleaders.ca/resources/why-we-need-to-define-plastics-recycling/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Circular Economy Leaders Canada — Why We Need to Define Recycling
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.buxtonwater.co.uk/articles/community-and-environment/plastic-recycling"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Buxton Water — Community & Environment
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.deskera.com/blog/recycling-in-plastic-manufacturing/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Deskera — Recycling in Plastic Manufacturing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </>
        )}

        {/* CAMPUS TURBINE SECTION */}
        {activeProject === "turbine" && (
          <section className="bg-blue-50 py-20 text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Campus Turbine Project</h2>
              <p className="text-lg text-gray-700 mb-8">
                The UTWind Campus Turbine Project is our flagship hands-on renewable energy
                initiative.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Detailed content for this section will be added soon!
              </p>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-100 text-gray-200 py-8 w-full mt-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <Image src="/images/Utwind footer logo.png" alt="UTWind Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-lg font-semibold text-black">contact@utwind.com</span>
          </div>
          <p className="text-sm text-black">© 2025 UTWind | University of Toronto</p>
        </div>
      </footer>
    </div>
  );
}
