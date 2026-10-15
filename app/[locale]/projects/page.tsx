"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageSwitcher from "../components/LanguageSwitcher";

type Project = "pet" | "turbine" | null;

export default function ProjectsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project>(null);
  const [slide1Index, setSlide1Index] = useState(0);
  const [slide4Index, setSlide4Index] = useState(0);

  const navbarRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const nav = useTranslations("Navbar");
  const projects = useTranslations("Projects");
  const footer = useTranslations("Footer");

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
                    <Link href="/" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">{nav("home")}</Link>
                    <Link href="/competition" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">{nav("competition")}</Link>
                    <Link href="/team" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">{nav("team")}</Link>
                    <Link href="/projects" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">{nav("projects")}</Link>
                    <Link href="/joinus" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">{nav("joinUs")}</Link>
                    <Link href="/sponsors" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">{nav("sponsors")}</Link>
                    <Link href="/gallery" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">{nav("gallery")}</Link>
                    <Link href="/#contact" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">{nav("contact")}</Link>
                  
                    <LanguageSwitcher />
        
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
                  <Link href="/" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>{nav("home")}</Link>
                  <Link href="/competition" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>{nav("competition")}</Link>
                  <Link href="/team" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>{nav("team")}</Link>
                  <Link href="/projects" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>{nav("projects")}</Link>
                  <Link href="/joinus" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>{nav("joinUs")}</Link>
                  <Link href="/sponsors" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>{nav("sponsors")}</Link>
                  <Link href="/gallery" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>{nav("gallery")}</Link>
                  <Link href="/#contact" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>{nav("contact")}</Link>
                  
                  <LanguageSwitcher />
                  
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{projects("title")}</h2>
            <p className="text-gray-900 mb-8">
              {projects("description")}
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <button
                onClick={() => setActiveProject("pet")}
                className={`group inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-700 transition ${
                  activeProject === "pet" ? "ring-4 ring-offset-2 ring-indigo-300 scale-105" : ""
                }`}
              >
                {projects("buttons.pet")}
              </button>

              <button
                onClick={() => setActiveProject("turbine")}
                className={`group inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition ${
                  activeProject === "turbine" ? "ring-4 ring-offset-2 ring-indigo-300 scale-105" : ""
                }`}
              >
                {projects("buttons.turbine")}
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
                    {projects("pet.title")}
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {projects("pet.description")}
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {projects("pet.thanksBeforeUtern")}{" "}

                    <a
                      href="https://utern.ca/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-700 font-semibold hover:underline"
                    >
                      UTERN
                    </a>{" "}

                    {projects("pet.thanksMiddle")}{" "}

                    <a
                      href="https://skulepedia.ca/wiki/Hard_Hat_Cafe"
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-700 font-semibold hover:underline"
                    >
                      Hard Hat Café
                    </a>{" "}

                    {projects("pet.thanksAfter")}
                  </p>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center">
                  <Image
                    src="/images/pet recycling/recycling process.png"
                    alt="UTWind PET Bottle Recycling"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Recycling process */}
            <section id="recycling-process" className="bg-white py-20 relative">
              <div className="max-w-6xl mx-auto px-8 text-center relative">
                <h2 className="text-4xl font-bold text-gray-800 mb-16">
                  {projects("pet.process.title")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center p-6 bg-blue-100 rounded-2xl shadow-lg border-2 border-blue-300">
                    <div className="relative w-full h-60 overflow-hidden rounded-xl mb-6 border-4 border-white shadow-md">
                      <img
                        src="/images/pet recycling/recycle pic1.png"
                        alt="Collect Bottles 1"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          slide1Index === 0 ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <img
                        src="/images/pet recycling/recycle pic2.png"
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
                      {projects("pet.process.step1.title")}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {projects("pet.process.step1.description")}
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
                      {projects("pet.process.step2.title")}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {projects("pet.process.step2.description")}
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
                          src="/images/pet recycling/printable1.png"
                          alt="Anemometer Mount"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                          {projects("pet.process.labels.anemometer")}
                        </p>
                      </div>

                      {/* Gear */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          slide4Index === 1 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src="/images/pet recycling/printable2.png"
                          alt="Gear"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                          {projects("pet.process.labels.gear")}
                        </p>
                      </div>

                      {/* Nose cone */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          slide4Index === 2 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src="/images/pet recycling/printable3.png"
                          alt="Nose Cone"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                          {projects("pet.process.labels.noseCone")}
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
                      {projects("pet.process.step4.title")}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {projects("pet.process.step4.description")}
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
                    <Image
                      src="/images/pet recycling/3dprinting.png"
                      alt="Extrude Filament"
                      width={600}
                      height={240}
                      className="w-full h-60 object-cover rounded-xl mb-6 border-4 border-white shadow-md"
                    />
                    <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                      {projects("pet.process.step3.title")}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {projects("pet.process.step3.description")}
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
                  {projects("pet.contribute.title")}
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {projects("pet.contribute.description")}{" "}
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
                    {projects("pet.contribute.guidelinesTitle")}
                  </h3>
                  <ul className="list-disc text-gray-700 leading-relaxed space-y-3 pl-6">
                    <li>{projects("pet.contribute.guideline1")}</li>
                    <li>{projects("pet.contribute.guideline2")}</li>
                    <li>{projects("pet.contribute.guideline3")}</li>
                  </ul>
                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    {projects("pet.recycleWhy.title")}
                  </h3>
                  <p className="text-gray-700 text-lg mb-4">
                    {projects("pet.recycleWhy.description")}
                  </p>
                  <ul className="space-y-3 text-indigo-600 font-medium text-lg">
                    <li>
                      <a
                        href="https://www.canada.ca/en/environment-climate-change/services/managing-reducing-waste/reduce-plastic-waste.html"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {projects("pet.recycleWhy.links.canada")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://circulareconomyleaders.ca/resources/why-we-need-to-define-plastics-recycling/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {projects("pet.recycleWhy.links.circular")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.buxtonwater.co.uk/articles/community-and-environment/plastic-recycling"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {projects("pet.recycleWhy.links.buxton")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.deskera.com/blog/recycling-in-plastic-manufacturing/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {projects("pet.recycleWhy.links.deskera")}
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
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{projects("turbine.title")}</h2>
              <p className="text-lg text-gray-700 mb-8">
                 {projects("turbine.description")}
              </p>
              <p className="text-lg text-gray-700 mb-8">
                  {projects("turbine.comingSoon")}
              </p>
            </div>
          </section>
        )}
      </main>

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
          {footer("contactUs")}
        </h3>

        <div className="flex flex-col gap-2 text-black">
          <a
            href="mailto:contact@utwind.com"
            className="hover:text-blue-700 transition"
          >
            <span className="font-semibold">{footer("generalInquiries")}:</span>{" "}
            contact@utwind.com
          </a>

          <a
            href="mailto:sponsorships@utwind.skule.ca"
            className="hover:text-blue-700 transition"
          >
            <span className="font-semibold">{footer("sponsorships")}:</span>{" "}
            sponsorships@utwind.skule.ca
          </a>

          <a
            href="mailto:operations@utwind.skule.ca"
            className="hover:text-blue-700 transition"
          >
            <span className="font-semibold">{footer("operations")}:</span>{" "}
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
          &copy; {new Date().getFullYear()} UTWind. {footer("rightsReserved")}
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
