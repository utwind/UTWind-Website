"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function JoinUsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const nav = useTranslations("Navbar");
  const joinUs = useTranslations("JoinUs");
  const footer = useTranslations("Footer");
  const navbarRef = useRef<HTMLElement | null>(null);

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

        {/* Meetings Section */}
        <section
            id="meetings"
            className="bg-indigo-50 py-20"
            data-aos="fade-up"
          >
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-10">
                {joinUs("meetings.title")}
              </h2>

              <p className="text-xl font-bold text-gray-800 mb-8">
                {joinUs("meetings.description")}
              </p>
            </div>

            {/* Meeting Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
              {/* Aerodynamics */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {joinUs("meetings.aero.name")}
              </h3>

              <p className="text-gray-700">
                {joinUs("meetings.aero.time")}
              </p>

              <p className="text-gray-500 italic">
                {joinUs("meetings.aero.location")}
              </p>
              </div>

              {/* Mechanical & Manufacturing */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {joinUs("meetings.mechanical.name")}
                </h3>

                <p className="text-gray-700">
                  {joinUs("meetings.mechanical.time")}
                </p>

                <p className="text-gray-500 italic">
                  {joinUs("meetings.mechanical.location")}
                </p>
              </div>

              {/* Control Systems */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {joinUs("meetings.control.name")}
                </h3>

                <p className="text-gray-700">
                  {joinUs("meetings.control.time")}
                </p>

                <p className="text-gray-500 italic">
                  {joinUs("meetings.control.location")}
                </p>
              </div>

              {/* Power Systems */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {joinUs("meetings.power.name")}
                </h3>

                <p className="text-gray-700">
                  {joinUs("meetings.power.time")}
                </p>

                <p className="text-gray-500 italic">
                  {joinUs("meetings.power.location")}
                </p>
              </div>

              {/* Sustainability */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {joinUs("meetings.sustainability.name")}
                </h3>

                <p className="text-gray-700">
                  {joinUs("meetings.sustainability.time")}
                </p>

                <p className="text-gray-500 italic">
                  {joinUs("meetings.sustainability.location")}
                </p>
            </div>
          </div>
        </section>
    {/* Forms  Section */}
    <section className="py-15 bg-gradient-to-b from-blue-100 to-blue-200  flex items-center">
<div className="max-w-6xl mx-auto px-6 w-full">
<h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-900 drop-shadow-sm">
{joinUs("forms.title")}
</h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-1">
<Link
target="_blank" rel="noopener noreferrer"
href="https://docs.google.com/forms/d/e/1FAIpQLScY2iR7qBZJUIgsyzM0dSK8P6kQg10vSSDIyVwv_enu-DqESw/viewform"
className="group block bg-white/80 backdrop-blur shadow-lg rounded-2xl p-10 border border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all"
>
<h3 className="text-2xl font-bold mb-4 text-blue-800 group-hover:text-blue-600">
{joinUs("forms.recruitment.title")}
</h3>
<p className="text-blue-700">
{joinUs("forms.recruitment.description")}
</p>
</Link>

<Link
target="_blank" rel="noopener noreferrer"
href="https://docs.google.com/forms/d/e/1FAIpQLSc1PIgdVWMF30m6HM2xMk0st6mY-030NuIWdpYo-PdiCQ88Sg/viewform"
className="group block bg-white/80 backdrop-blur shadow-lg rounded-2xl p-10 border border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all"
>
<h3 className="text-2xl font-bold mb-4 text-blue-800 group-hover:text-blue-600">
{joinUs("forms.feedback.title")}
</h3>
<p className="text-blue-700">
{joinUs("forms.feedback.description")}
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
              {joinUs("subteams.title")}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-gray-700">
              {/* Aerodynamics */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {joinUs("subteams.aero.title")}
                </h3>
                <p>
                  {joinUs("subteams.aero.description")}
                </p>
              </div>

              {/* Mechanical & Manufacturing */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {joinUs("subteams.mechanical.title")}
                </h3>
                <p>
                  {joinUs("subteams.mechanical.description")}
                </p>
              </div>

              {/* Control Systems */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {joinUs("subteams.control.title")}
                </h3>
                <p>
                  {joinUs("subteams.control.description")}
                </p>
              </div>

              {/* Power Systems */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {joinUs("subteams.power.title")}
                </h3>
                <p>
                  {joinUs("subteams.power.description")}
                </p>
              </div>

              {/* Sustainability */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {joinUs("subteams.sustainability.title")}
                </h3>
                <p>
                  {joinUs("subteams.sustainability.description")}
                </p>
              </div>
              {/* Business */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {joinUs("subteams.business.title")}
                </h3>
                <p>
                  {joinUs("subteams.business.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
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
