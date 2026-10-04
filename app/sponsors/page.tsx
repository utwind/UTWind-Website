"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import ContactLink from "../components/ContactLink";

export default function SponsorsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navbarRef = useRef<HTMLElement | null>(null);

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 750,
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
            <Link href="/gallery" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Gallery</Link>
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
          <Link href="/gallery" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Gallery</Link>
          <ContactLink className="px-4 py-2 rounded-lg hover:bg-gray-200 transition" />
          
          
        </div>
    </nav>
      <section
        id="sponsors"
        className="bg-white pb-20"
        data-aos="fade-up"
      >
          <div className="w-full bg-blue-50 border-y border-blue-200 py-16 mb-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold mb-10 text-blue-800">
            Our Sponsors and Partners
          </h2>

    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-2xl leading-relaxed text-gray-800">
        Huge thanks to our sponsors that play a vital role in turning
        theory into real-world engineering. With their support, UTWind is
        able to prototype new turbine designs, test renewable technologies,
        and represent the University of Toronto at international
        competitions. We thank you for empowering the next generation of
        engineers shaping the future of sustainable energy!
      </p>
    </div>
              </div>
          <div className="flex justify-center mt-8 mb-10">
            <a
              href="\files\UTWind Sponsorship Package 2026-2027.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-16 py-10 text-2xl font-semibold text-white shadow-md transition hover:bg-blue-800 hover:shadow-lg"
            >
              View Sponsorship Package
            </a>
          </div>
  </div>

      
      
      {/* Sponsor Rankings */}

      <div className="space-y-16">
        {/* Diamond */}
        <div>
          <h3 className="text-center py-4 text-6xl font-bold text-blue-900 mb-8">
            Diamond Sponsors
          </h3>

          <div className="flex justify-center">
            <a
              href="https://skule.ca/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/SKULE.png"
                alt="Skule"
                width={260}
                height={160}
                className="h-40 w-auto object-contain mx-auto"
              />
            </a>
          </div>
        </div>
        {/* Platinum */}
        {/*
        <div>
          <h3 className="text-center py-4 text-4xl font-bold text-blue-900 mb-8">
            Platinum Sponsors
          </h3>

          <p className="text-gray-500 italic">
            No platinum sponsors currently
          </p>
        </div>
        */}
        {/* Gold */}
        <div>
          <h3 className="text-center py-4 text-6xl font-bold text-yellow-600 mb-8">
            Gold Sponsors
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {/* SEF */}
            <a
              href="https://skule.ca/finances/SEF.html"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/sef-logo.jpg"
                alt="SEF"
                width={600 }
                height={228}
                className="h-32 w-full object-contain mx-auto"
              />
            </a>

            {/* CPSIF */}
            <a
              href="https://www.engineering.utoronto.ca/current-students/centralized-process-for-student-initiative-funding-cpsif/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/CPSIF.png"
                alt="CPSIF"
                width={220}
                height={140}
                className="h-32 w-full object-contain mx-auto"
              />
            </a>
          </div>
        </div>

        {/* Silver */}
        <div>
          <h3 className="text-center py-4 text-6xl font-bold text-gray-500 mb-8">
            Silver Sponsors
          </h3>

          <div className="flex justify-center">
            <a
              href="https://www.utern.ca/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/UTERN.png"
                alt="UTERN"
                width={220}
                height={140}
                className="h-32 w-auto object-contain mx-auto"
              />
            </a>
          </div>
        </div>

        {/* Bronze */}
        <div>
          <h3 className="text-center py-4 text-6xl font-bold text-amber-700 mb-8">
            Bronze Sponsors
          </h3>

          <div className="flex justify-center">
            <a
              href="https://www.hakko.com/english/products/"
              target="_blank"
              rel="noreferrer"
              className="block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/Hakko.png"
                alt="Hakko"
                width={220}
                height={140}
                className="h-32 w-auto object-contain mx-auto"
              />
            </a>
          </div>
        </div>

        {/* Technical Partners */}
        <div>
          <h3 className="text-center py-4 text-6xl font-bold text-blue-900 mb-8">
            Technical Partners
          </h3>

          <div className="grid grid-cols-6 gap-10 items-center">
            <a
              href="https://www.utoronto.ca/"
              target="_blank"
              rel="noreferrer"
              className="col-span-2 block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/Uoft.png"
                alt="University of Toronto"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
                data-aos="zoom-in"
              />
            </a>

            <a
              href="https://www.solidworks.com/"
              target="_blank"
              rel="noreferrer"
              className="col-span-2 block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/Solidworks.png"
                alt="SolidWorks"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
                data-aos="zoom-in"
              />
            </a>

            <a
              href="https://www.altium.com/"
              target="_blank"
              rel="noreferrer"
              className="col-span-2 block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/Altium.png"
                alt="Altium"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
                data-aos="zoom-in"
              />
            </a>

            <a
              href="https://gillinstruments.com/"
              target="_blank"
              rel="noreferrer"
              className="col-span-2 col-start-2 block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/GILL.png"
                alt="Gill Instruments"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
                data-aos="zoom-in"
              />
            </a>

            <a
              href="https://www.ansys.com/"
              target="_blank"
              rel="noreferrer"
              className="col-span-2 col-start-4 block transform hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <Image
                src="/images/sponsors/ANSYS.png"
                alt="ANSYS"
                width={200}
                height={128}
                className="w-full h-32 object-contain mx-auto"
                data-aos="zoom-in"
              />
            </a>
          </div>
        </div>
        </div>
        </section>
          {/* Sponsors Tiers */}
          <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="bg-blue-900 text-white rounded-t-2xl px-6 py-10 text-center">
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide">
                Sponsorship Tiers
              </h2>

              <div className="w-3/4 max-w-3xl h-1 bg-white mx-auto my-5" />

              <p className="max-w-5xl mx-auto text-lg md:text-2xl leading-relaxed">
                We offer customizable partnerships through technical expertise,
                financial contributions, and in-kind support. These contributions fund
                critical components, materials, research, competition expenses, and
                team operations. In return, sponsors gain direct access to skilled
                engineering students while advancing their ESG priorities. This
                support enables UTWind to design, build, test, and compete with
                innovative clean-energy technologies.
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto shadow-lg rounded-b-2xl">
              <table className="w-full min-w-[1000px] border-collapse text-center">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="border border-blue-300 px-4 py-5"></th>

                    <th className="border border-blue-300 px-4 py-5">
                      <div className="text-xl font-bold text-blue-500">Diamond</div>
                      <div className="text-blue-300 mt-1">$10,000+</div>
                    </th>

                    <th className="border border-blue-300 px-4 py-5">
                      <div className="text-xl font-bold text-blue-300">Platinum</div>
                      <div className="text-blue-300 mt-1">$5,000+</div>
                    </th>

                    <th className="border border-blue-300 px-4 py-5">
                      <div className="text-xl font-bold text-yellow-300">Gold</div>
                      <div className="text-blue-300 mt-1">$2,500+</div>
                    </th>

                    <th className="border border-blue-300 px-4 py-5">
                      <div className="text-xl font-bold text-slate-350">Silver</div>
                      <div className="text-blue-300 mt-1">$1,000+</div>
                    </th>

                    <th className="border border-blue-300 px-4 py-5">
                      <div className="text-xl font-bold text-amber-700">Bronze</div>
                      <div className="text-blue-300 mt-1">$500+</div>
                    </th>

                    <th className="border border-blue-300 px-4 py-5">
                      <div className="text-xl font-bold text-green-300">Technical Partner</div>
                      <div className="text-sm text-blue-300 mt-1">
                        Products, services, or technical support
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-blue-50 text-blue-950">
                  {/* Row 1 */}
                  <tr>
                    <td className="tier-label">
                      Invitation to team events & showcases
                    </td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="tier-label">
                      Invitation to annual sponsor networking and recruitment event
                    </td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className="tier-label">
                      Sponsor job postings shared with members
                    </td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell text-sm text-gray-500">
                      By agreement
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td className="tier-label">Logo on team apparel</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell text-gray-400">—</td>
                    <td className="tier-cell text-gray-400">—</td>
                    <td className="tier-cell text-sm text-gray-500">
                      By agreement
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr>
                    <td className="tier-label">Access to team résumé book</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell text-gray-400">—</td>
                    <td className="tier-cell text-gray-400">—</td>
                    <td className="tier-cell text-sm text-gray-500">
                      By agreement
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr>
                    <td className="tier-label">
                      Team attendance at sponsor event¹
                    </td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell">✓</td>
                    <td className="tier-cell text-sm text-gray-500">
                      By agreement
                    </td>
                    <td className="tier-cell text-gray-400">—</td>
                    <td className="tier-cell text-gray-400">—</td>
                    <td className="tier-cell text-sm text-gray-500">
                      By agreement
                    </td>
                  </tr>

                  {/* Row 7 */}
                  <tr>
                    <td className="tier-label">Logo on website (linked for all)</td>
                    <td className="tier-cell text-sm font-semibold">
                      Featured profile
                    </td>
                    <td className="tier-cell text-sm font-semibold">
                      Featured profile
                    </td>
                    <td className="tier-cell text-sm">
                      Secondary feature
                    </td>
                    <td className="tier-cell text-sm">Logo only</td>
                    <td className="tier-cell text-sm">Logo only</td>
                    <td className="tier-cell text-sm text-gray-500">
                      By agreement
                    </td>
                  </tr>

                  {/* Row 8 */}
                  <tr>
                    <td className="tier-label">
                      Logo on banners & competition displays
                    </td>
                    <td className="tier-cell">XL</td>
                    <td className="tier-cell">Large</td>
                    <td className="tier-cell">Medium</td>
                    <td className="tier-cell">Small</td>
                    <td className="tier-cell">Name listing</td>
                    <td className="tier-cell text-sm text-gray-500">
                      By agreement
                    </td>
                  </tr>

                  {/* Row 9 */}
                  <tr>
                    <td className="tier-label">Logo on turbine</td>
                    <td className="tier-cell">XL</td>
                    <td className="tier-cell">Large</td>
                    <td className="tier-cell">Medium</td>
                    <td className="tier-cell">Small</td>
                    <td className="tier-cell text-sm text-gray-500">
                      By agreement
                    </td>
                    <td className="tier-cell text-sm text-gray-500">
                      By agreement
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Notes */}
            <div className="mt-5 text-sm text-gray-600">
              <p>
                All sponsorship amounts and equivalent contribution values are stated
                in Canadian dollars (CAD).
              </p>
              <p>
                We are always open to discussing sponsorship opportunities outside the
                above ranges.
              </p>
              <p>
                ¹ Subject to member availability and mutually agreed travel
                arrangements.
              </p>
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
