"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function CompetitionPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const nav = useTranslations("Navbar");
  const competition = useTranslations("Competition");
  const footer = useTranslations("Footer");
  
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

          {/* Competition intro */}
      <section
        id="competitions"
        className="bg-blue-200 py-20"
      >
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-6xl font-bold text-gray-800 mb-8">
            {competition("title")}
          </h2>

          <p className="text-2xl text-gray-700 leading-relaxed">
            {competition("intro.beforeLink")}{" "}

            <a
              href="https://www.hanze.nl/en/research/centres/entrance-centre-of-expertise-energy/projects/international-small-wind-turbine-contest-iswtc"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-700 font-semibold hover:underline"
            >
              International Small Wind Turbine Contest (ISWTC)
            </a>{" "}

            {competition("intro.afterLink")}
          </p>
        </div>
      </section>

      {/* Competition history */}
      <section
        id="competition-history"
        className="bg-indigo-50 py-20 relative"
      >
        <div className="max-w-6xl mx-auto px-6 relative">

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {competition("historyTitle")}
          </h2>

          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[140px] bottom-[140px] w-1 bg-indigo-300 hidden lg:block" />

          {/* 2026 */}
          <div
            className="relative flex flex-col lg:flex-row-reverse items-center mb-24"
            data-aos="fade-up"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />

            <div className="lg:w-1/2 lg:pl-10 text-center mb-8 lg:mb-0">
              <h3 className="text-6xl font-semibold text-indigo-700 mb-4">
                2026
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                {competition("history.2026.description")}
              </p>
            </div>

            <div className="lg:w-1/2 lg:pr-10 text-center">
              <Image
                src="/images/turbine pics/ISWTC 2026.jpg"
                alt="ISWTC 2026"
                width={1200}
                height={800}
                className="rounded-xl shadow-md w-full h-auto object-cover mb-3"
              />

              <p className="text-gray-600 italic text-lg">
                {competition("history.2026.caption")}
              </p>
            </div>
          </div>

          {/* 2025 */}
          <div
            className="relative flex flex-col lg:flex-row items-center mb-24"
            data-aos="fade-up"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />

            <div className="lg:w-1/2 lg:pr-10 text-center mb-8 lg:mb-0">
              <h3 className="text-6xl font-semibold text-indigo-700 mb-4">
                2025
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                {competition("history.2025.description")}
              </p>
            </div>

            <div className="lg:w-1/2 lg:pl-10 text-center">
              <Image
                src="/images/turbine pics/ISWTC 2025.png"
                alt="ISWTC 2025"
                width={1200}
                height={800}
                className="rounded-xl shadow-md w-full h-auto object-cover mb-3"
              />

              <p className="text-gray-600 italic text-lg">
                {competition("history.2025.caption")}
              </p>
            </div>
          </div>

          {/* 2024 */}
          <div
            className="relative flex flex-col lg:flex-row-reverse items-center mb-24"
            data-aos="fade-up"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />

            <div className="lg:w-1/2 lg:pl-10 text-center mb-8 lg:mb-0">
              <h3 className="text-6xl font-semibold text-indigo-700 mb-4">
                2024
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                {competition.rich(
                  "history.2024.description",
                  {
                    strong: (chunks) => (
                      <strong>{chunks}</strong>
                    ),
                  }
                )}
              </p>
            </div>

            <div className="lg:w-1/2 lg:pr-10 text-center">
              <Image
                src="/images/turbine pics/ISWTC 2024.jpg"
                alt="ISWTC 2024"
                width={1200}
                height={800}
                className="rounded-xl shadow-md w-full h-auto object-cover mb-3"
              />

              <p className="text-gray-600 italic text-lg">
                {competition("history.2024.caption")}
              </p>
            </div>
          </div>

          {/* 2023 */}
          <div
            className="relative flex flex-col lg:flex-row items-center mb-24"
            data-aos="fade-up"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />

            <div className="lg:w-1/2 lg:pr-10 text-center mb-8 lg:mb-0">
              <h3 className="text-6xl font-semibold text-indigo-700 mb-4">
                2023
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                {competition.rich(
                  "history.2023.description",
                  {
                    strong: (chunks) => (
                      <strong>{chunks}</strong>
                    ),
                  }
                )}
              </p>
            </div>

            <div className="lg:w-1/2 lg:pl-10 text-center">
              <Image
                src="/images/turbine pics/ISWTC 2023.jpg"
                alt="ISWTC 2023"
                width={1200}
                height={800}
                className="rounded-xl shadow-md w-full h-auto object-cover mb-3"
              />

              <p className="text-gray-600 italic text-lg">
                {competition("history.2023.caption")}
              </p>
            </div>
          </div>

          {/* 2022 */}
          <div
            className="relative flex flex-col lg:flex-row-reverse items-center"
            data-aos="fade-up"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />

            <div className="lg:w-1/2 lg:pl-10 text-center mb-8 lg:mb-0">
              <h3 className="text-6xl font-semibold text-indigo-700 mb-4">
                2022
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                {competition.rich(
                  "history.2022.description",
                  {
                    strong: (chunks) => (
                      <strong>{chunks}</strong>
                    ),
                  }
                )}
              </p>
            </div>

            <div className="lg:w-1/2 lg:pr-10 text-center">
              <Image
                src="/images/turbine pics/ISWTC 2022.jpg"
                alt="ISWTC 2022"
                width={1200}
                height={800}
                className="rounded-xl shadow-md w-full h-auto object-cover mb-3"
              />

              <p className="text-gray-600 italic text-lg">
                {competition("history.2022.caption")}
              </p>
            </div>
          </div>

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