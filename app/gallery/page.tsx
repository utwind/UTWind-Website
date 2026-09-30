"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { title } from "process";

type GalleryImage = {
  src: string;
  alt: string;
  credit?: string;
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
    year: "2026-2027",
    categories: [
      {
        title: "School Events",
        images: [
          
          { src: "/images/2026-2027 Gallery/IMG_0883.png", alt: "UTWind outreach event 2026" },
          { src: "/images/2026-2027 Gallery/IMG_0892.png", alt: "UTWind outreach event 2026" },
          { src: "/images/2026-2027 Gallery/IMG_0904.jpg", alt: "UTWind outreach event 2026" },
          { src: "/images/2026-2027 Gallery/IMG_0912.jpg", alt: "UTWind outreach event 2026" },
          { src: "/images/2026-2027 Gallery/IMG_0616.png", alt: "UTWind outreach event 2026" },
          { src: "/images/2026-2027 Gallery/IMG_0626.jpg", alt: "UTWind outreach event 2026" },
          

        ],
      },
    ],
  },
  {
    year: "2025-2026",
    categories: [
      {
      title: "Competition",
        images: [
          { src: "/images/2025-2026 Gallery/20260709_143112(0).jpg", alt: "UTWind school event 2026" },
          { src: "/images/2025-2026 Gallery/PXL_20260707_130908880.jpg", alt: "UTWind outreach event 2026" },
          { src: "/images/2025-2026 Gallery/PXL_20260709_115113436.MP.jpg", alt: "UTWind campus event 2026" },
          { src: "/images/2025-2026 Gallery/20260709_133319.jpg", alt: "UTWind school event 2026" },
          { src: "/images/2025-2026 Gallery/IMG_8148.jpg", alt: "UTWind outreach event 2026" },
          { src: "/images/2025-2026 Gallery/IMG_7551.jpg", alt: "UTWind outreach event 2026" }
        ],
      },    
      {    
        title: "School Events",
        images: [
          { src: "/images/2025-2026 Gallery/54899810267_247a875b9f_o.jpg", alt: "UTWind school event 2026", credit: "Photo by Neil Ta"},
          { src: "/images/2025-2026 Gallery/54900916478_e617340791_o.jpg", alt: "UTWind outreach event 2026", credit: "Photo by Neil Ta"},
          { src: "/images/2025-2026 Gallery/54900991435_98524c5ac7_o.jpg", alt: "UTWind campus event 2026", credit: "Photo by Neil Ta"},
          { src: "/images/2025-2026 Gallery/DSCF8338.jpg", alt: "UTWind campus event 2026" },
          { src: "/images/2025-2026 Gallery/IMG_1639.jpg", alt: "UTWind campus event 2026" },
        ],
      },
    ],
  },
  {
    year: "2024-2025",
    categories: [
      {
        title: "Competition",
        images: [
          { src: "/images/2024-2025 Gallery/c8214652-6feb-412f-9b73-3c9800dcb020.jpg", alt: "UTWind competition photo 2024" },
          { src: "/images/2024-2025 Gallery/IMG_7017.jpg", alt: "UTWind turbine competition 2024" },
          { src: "/images/2024-2025 Gallery/IMG_7092.jpg", alt: "UTWind testing at competition 2024" },
        ],
      },
      {
        title: "School Events",
        images: [
          { src: "/images/2024-2025 Gallery/IMG_3953.jpg", alt: "UTWind school event 2024" },
          { src: "/images/2024-2025 Gallery/IMG_3955.jpg", alt: "UTWind outreach event 2024" },
          { src: "/images/2024-2025 Gallery/IMG_3969.jpg", alt: "UTWind campus event 2024" },
        ],
      },
    ],
  },
    {
    year: "2023-2024",
    categories: [
      {
        title: "Competition",
        images: [
          { src: "/images/2023-2024 Gallery/DSC02322.JPG", alt: "UTWind competition photo 2024" },
          { src: "/images/2023-2024 Gallery/DSC02326.JPG", alt: "UTWind turbine competition 2024" },
          { src: "/images/2023-2024 Gallery/DSC02329.JPG", alt: "UTWind testing at competition 2024" },
          { src: "/images/2023-2024 Gallery/DSC02342.JPG", alt: "UTWind competition photo 2024" },
          { src: "/images/2023-2024 Gallery/IMG_4275.jpg", alt: "UTWind turbine competition 2024" },
          { src: "/images/2023-2024 Gallery/IMG_9715.jpg", alt: "UTWind testing at competition 2024" },
        ],
      },
    ],
  },
    {
    year: "2022-2023",
    categories: [
      {
        title: "Competition",
        images: [
          { src: "/images/2022-2023 Gallery/DSC06339.jpg", alt: "UTWind competition photo 2024" },
          { src: "/images/2022-2023 Gallery/DSC06514.JPG", alt: "UTWind turbine competition 2024" },
          { src: "/images/2022-2023 Gallery/IMG_9144.jpg", alt: "UTWind testing at competition 2024" },
          { src: "/images/2022-2023 Gallery/DSC06322.JPG", alt: "UTWind testing at competition 2024" },
          { src: "/images/2022-2023 Gallery/IMG_9531.jpg", alt: "UTWind testing at competition 2024" },
        ],
      },
    ],
  },
  {
    year: "2021-2022",
    categories: [
      {
        title: "Competition",
        images: [
          { src: "/images/2021-2022 Gallery/20220602_173902.jpg", alt: "UTWind competition photo 2024" },
          { src: "/images/2021-2022 Gallery/Copy of IMG_1419.jpg", alt: "UTWind turbine competition 2024" },
          { src: "/images/2021-2022 Gallery/IMG_1407.jpg", alt: "UTWind testing at competition 2024" },
          { src: "/images/2021-2022 Gallery/IMG_1426.jpg", alt: "UTWind testing at competition 2024" },
          { src: "/images/2021-2022 Gallery/IMG_1435.jpg", alt: "UTWind testing at competition 2024" },
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
      AOS.init({ duration: 400, once: true });
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

                      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                        {category.images.map((image, index) => (
                          <div
                            key={image.src}
                            data-aos="fade-up"
                            data-aos-delay={index * 75}
                            className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition"
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={1200}
                              height={800}
                              quality={100}
                              className="block w-full h-auto"
                            />

                            {image.credit && (
                              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2 text-left text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {image.credit}
                              </div>
                            )}
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
    </main>
  );
}