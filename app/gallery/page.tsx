"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryCategory = {
  title: string;
  images: GalleryImage[];
};

type GalleryYear = {
  year: string;
  categories: GalleryCategory[];
};

const galleryYears: GalleryYear[] = [
  {
    year: "2026",
    categories: [
      {
        title: "Competition",
        images: [
          { src: "/images/gallery/2026/competition/competition-1.jpg", alt: "UTWind competition photo 2026" },
          { src: "/images/gallery/2026/competition/competition-2.jpg", alt: "UTWind turbine competition 2026" },
          { src: "/images/gallery/2026/competition/competition-3.jpg", alt: "UTWind testing at competition 2026" },
        ],
      },
      {
        title: "School Events",
        images: [
          { src: "/images/gallery/2026/school-events/event-1.jpg", alt: "UTWind school event 2026" },
          { src: "/images/gallery/2026/school-events/event-2.jpg", alt: "UTWind outreach event 2026" },
          { src: "/images/gallery/2026/school-events/event-3.jpg", alt: "UTWind campus event 2026" },
        ],
      },
    ],
  },
  {
    year: "2025",
    categories: [
      {
        title: "Competition",
        images: [
          { src: "/images/gallery/2025/competition/competition-1.jpg", alt: "UTWind competition photo 2025" },
          { src: "/images/gallery/2025/competition/competition-2.jpg", alt: "UTWind turbine competition 2025" },
          { src: "/images/gallery/2025/competition/competition-3.jpg", alt: "UTWind testing at competition 2025" },
        ],
      },
      {
        title: "School Events",
        images: [
          { src: "/images/gallery/2025/school-events/event-1.jpg", alt: "UTWind school event 2025" },
          { src: "/images/gallery/2025/school-events/event-2.jpg", alt: "UTWind outreach event 2025" },
          { src: "/images/gallery/2025/school-events/event-3.jpg", alt: "UTWind campus event 2025" },
        ],
      },
    ],
  },
  {
    year: "2024",
    categories: [
      {
        title: "Competition",
        images: [
          { src: "/images/gallery/2024/competition/competition-1.jpg", alt: "UTWind competition photo 2024" },
          { src: "/images/gallery/2024/competition/competition-2.jpg", alt: "UTWind turbine competition 2024" },
          { src: "/images/gallery/2024/competition/competition-3.jpg", alt: "UTWind testing at competition 2024" },
        ],
      },
      {
        title: "School Events",
        images: [
          { src: "/images/gallery/2024/school-events/event-1.jpg", alt: "UTWind school event 2024" },
          { src: "/images/gallery/2024/school-events/event-2.jpg", alt: "UTWind outreach event 2024" },
          { src: "/images/gallery/2024/school-events/event-3.jpg", alt: "UTWind campus event 2024" },
        ],
      },
    ],
  },
];

export default function GalleryPage() {
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
    <main className="min-h-screen bg-gray-50 text-gray-900">
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
              <Link href="/gallery" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Gallery</Link>
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
            <Link href="/gallery" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/#contact" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
          </nav>

      {/* Header */}
      <section className="px-6 pt-20 pb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-900">
          Gallery
        </h1>

        <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-600">
          Explore UTWind’s design, build, testing, outreach, and competition moments over the years.
        </p>
      </section>

      {/* Yearly Gallery Sections */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-24">
          {galleryYears.map((yearGroup) => (
            <div key={yearGroup.year} data-aos="fade-up">
                <div className="mb-12 flex items-center gap-4">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
                    {yearGroup.year}
                </h2>
                <div className="h-px flex-1 bg-blue-200"></div>
                </div>

                <div className="space-y-20">
                {yearGroup.categories.map((category) => (
                    <div key={`${yearGroup.year}-${category.title}`} data-aos="fade-up">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        {category.title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.images.map((image, index) => (
                        <div
                            key={image.src}
                            data-aos="fade-up"
                            data-aos-delay={index * 75}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition"
                        >
                            <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={400}
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
      </section>
    </main>
  );
}