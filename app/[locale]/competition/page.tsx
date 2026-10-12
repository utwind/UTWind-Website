"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CompetitionPage() {
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

        {/* Hero/Intro to Competition */}
        <section id="competitions" className="bg-blue-200 py-20">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-6xl font-bold text-gray-800 mb-8">International Small Wind Turbine Contest (ISWTC)</h2>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Every Summer UTWind competes in the{' '}
              <a
                href="https://www.hanze.nl/en/research/centres/entrance-centre-of-expertise-energy/projects/international-small-wind-turbine-contest-iswtc"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-700 font-semibold hover:underline"
              >
                International Small Wind Turbine Contest (ISWTC)
              </a>{' '}
              in the Netherlands against other international universities. UTWind has been coming home with a trophy since our debut and couldn&apos;t be more proud to represent the University of Toronto. Read more below about each competition.
            </p>
          </div>
        </section>

        {/* Competition History Timeline */}
        <section id="competition-history" className="bg-indigo-50 py-20 relative">
          <div className="max-w-6xl mx-auto px-6 relative">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Competition History</h2>

          {/*2026*/}

            <div className="relative flex flex-col lg:flex-row-reverse items-center mb-24" data-aos="fade-up">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />
              <div className="lg:w-1/2 lg:pl-10 text-center mb-8 lg:mb-0">
                <h3 className="text-6xl font-semibold text-indigo-700 mb-4">2026</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Back in the Netherlands for our fifth consecutive ISWTC, UTWind competed with the second iteration of our Vertical Axis Wind Turbine (VAWT). This year marked major progress: we sent our largest competition delegation yet, arrived with functioning mechanical, power, and control systems, introduced lighter blades and bat-monitoring sensors, and achieved one of our lowest cut-in wind speeds to date. While there is still plenty to improve, the competition gave us valuable insights to carry into our next iteration.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pr-10 text-center">
                <Image src="/images/turbine pics/ISWTC 2026.jpg" alt="ISWTC 2026" width={1200} height={800} className="rounded-xl shadow-md w-full h-auto object-cover mb-3" />
                <p className="text-gray-600 italic text-lg">UTWind&apos;s Lowest Cut-in Speed Turbine - 2026</p>
              </div>
            </div>
             
             {/*2025*/}
            
            <div className="absolute left-1/2 -translate-x-1/2 top-[140px] bottom-[140px] w-1 bg-indigo-300 hidden lg:block" />

            <div className="relative flex flex-col lg:flex-row items-center mb-24" data-aos="fade-up">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />
              <div className="lg:w-1/2 lg:pr-10 text-center mb-8 lg:mb-0">
                <h3 className="text-6xl font-semibold text-indigo-700 mb-4">2025</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  UTWind’s most ambitious turbine yet was our first-ever Vertical Axis Wind Turbine (VAWT). Despite the tight timeline and unfamiliarity, we built an H-Rotor VAWT in just four months and were thrilled to see it spin, generate power, and run with a working control system. Although we didn’t bring home a trophy, we learned a lot and can’t wait to improve in our next iteration.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pl-10 text-center">
                <Image src="/images/turbine pics/ISWTC 2025.png" alt="ISWTC 2025" width={1200} height={800} className="rounded-xl shadow-md w-full h-auto object-cover mb-3" />
                <p className="text-gray-600 italic text-lg">UTWind&apos;s 1st Iteration of VAWT - 2025</p>
              </div>
            </div>

            {/*2024*/}

            <div className="relative flex flex-col lg:flex-row-reverse items-center mb-24" data-aos="fade-up">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />
              <div className="lg:w-1/2 lg:pl-10 text-center mb-8 lg:mb-0">
                <h3 className="text-6xl font-semibold text-indigo-700 mb-4">2024</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The third year competing tested several firsts: recycling PET bottles into filament, using one motor for pitch control, and making flax-fiber blades. With many new teams, it was a huge surprise when the Jury awarded Best Overall Design <strong>(1st place)</strong> to “The Team from Toronto.”
                </p>
              </div>
              <div className="lg:w-1/2 lg:pr-10 text-center">
                <Image src="/images/turbine pics/ISWTC 2024.jpg" alt="ISWTC 2024" width={1200} height={800} className="rounded-xl shadow-md w-full h-auto object-cover mb-3" />
                <p className="text-gray-600 italic text-lg">UTWind&apos;s 1st Place Award Winning Turbine - 2024</p>
              </div>
            </div>

            {/*2023*/}

            <div className="relative flex flex-col lg:flex-row items-center mb-24" data-aos="fade-up">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />
              <div className="lg:w-1/2 lg:pr-10 text-center mb-8 lg:mb-0">
                <h3 className="text-6xl font-semibold text-indigo-700 mb-4">2023</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The second year of UTWind&apos;s participation at the ISWTC was no less challenging because we won the previous competition, however UTWind brought home the <strong>Award for Most Sustainable Turbine.</strong>
                </p>
              </div>
              <div className="lg:w-1/2 lg:pl-10 text-center">
                <Image src="/images/turbine pics/ISWTC 2023.jpg" alt="ISWTC 2023" width={1200} height={800} className="rounded-xl shadow-md w-full h-auto object-cover mb-3" />
                <p className="text-gray-600 italic text-lg">UTWind&apos;s Most Sustainable Award Winning Turbine - 2023</p>
              </div>
            </div>

            {/*2023-2024*/}

            <div className="relative flex flex-col lg:flex-row-reverse items-center" data-aos="fade-up">
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10 hidden lg:block" />
              <div className="lg:w-1/2 lg:pl-10 text-center mb-8 lg:mb-0">
                <h3 className="text-6xl font-semibold text-indigo-700 mb-4">2022</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  This was the first ISWTC that UTWind competed in after almost two years of preparation work during the pandemic. UTWind won Best Overall Design <strong>(1st place)</strong> in its debut at the ISWTC.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pr-10 text-center">
                <Image src="/images/turbine pics/ISWTC 2022.jpg" alt="ISWTC 2022" width={1200} height={800} className="rounded-xl shadow-md w-full h-auto object-cover mb-3" />
                <p className="text-gray-600 italic text-lg">UTWind&apos;s 1st Place Award Winning Turbine - 2022</p>
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
