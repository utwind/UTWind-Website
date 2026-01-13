"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type TeamKey =
  | "executives"
  | "mechanical"
  | "control"
  | "power"
  | "aero"
  | "sustainability"
  | "web";

type TeamMember = {
  name: string;
  year: string;
  position: string;
  img: string;
};

const teamData: Record<TeamKey, TeamMember[]> = {
  executives: [
    {
      name: "Avani Yadav",
      year: "ECE2T6 + PEY",
      position: "President",
      img: "/images/Avani webpic.jpg",
    },
    {
      name: "Kristen Ho",
      year: "MECH2T6 + PEY",
      position: "President",
      img: "/images/IMG_5860 - Kristen Ho.jpeg",
    },
    {
      name: "Calvert Zhu",
      year: "MSE2T7 + PEY",
      position: "VP Communications",
      img: "/images/IMG_1901 - Calvert Zhu.jpeg",
    },
    {
      name: "Dhara Patel",
      year: "ECE2T7 + PEY",
      position: "VP Communications",
      img: "/images/IMG_1437_Original - Dhara Patel.jpeg",
    },
    {
      name: "Aaron Gu",
      year: "Rotman Commerce",
      position: "VP Finance",
      img: "/images/unnamed (1) - Aaron Gu.jpg",
    },
  ],
  mechanical: [
    {
      name: "Elena Sloan",
      year: "MECH2T5 + PEY",
      position: "Mechanical & Manufacturing Lead",
      img: "/images/wind_25 - Elena Sloan.jpg",
    },
    {
      name: 'Justin ("Justine") Ding',
      year: "MECH 2T6 +1",
      position: "Mechanical & Manufacturing Lead",
      img: "/images/PXL_20250524_154408480 - 渡辺フウキ.jpg",
    },
  ],
  control: [
    {
      name: "Wanning He",
      year: "ECE",
      position: "Control Systems Lead",
      img: "/images/EB048E2E-10A1-4331-A315-78C3A287A657 - Wanning He.jpeg",
    },
    {
      name: "Jacob Duplessis",
      year: "ECE",
      position: "Contol Systems Lead",
      img: "/images/image - Jacob Duplessis.jpg",
    },
  ],
  power: [
    {
      name: "Alexis Terefenko",
      year: "ECE2T6 + PEY",
      position: "Power Systems Lead",
      img: "/images/IMG_7490 - Alexis Terefenko.jpeg",
    },
    {
      name: "Alec MacGregor",
      year: "EngSci Energy Systems 2T6 + PEY",
      position: "Power Systems Lead",
      img: "/images/IMG_0262~2 - Alec MacGregor.jpg",
    },
  ],
  aero: [
    {
      name: "Sogand Okhovatian",
      year: "Aerospace - UTIAS -MSc",
      position: "Aerodynamics Lead",
      img: "/images/linked in profile picture (2) - Sogand Okhovatian.JPG",
    },
    {
      name: "Angela Deng",
      year: "EngSci Physics 2T5 + PEY",
      position: "Aerodynamics Lead",
      img: "/images/IMG_4446 - Angela Deng.jpeg",
    },
  ],
  sustainability: [
    {
      name: "Mai Shimozato",
      year: "ECE 2T6 + PEY",
      position: "Sustainability Lead",
      img: "/images/IMG_5983 - Mai Shimozato.jpg",
    },
  ],
  web: [
    {
      name: "Matthew Ting",
      year: "MSE 2T7 + PEY",
      position: "Webmaster",
      img: "/images/Matthew Ting.png",
    },
  ],
};

export default function TeamPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<TeamKey>("executives");

  const navbarRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  // Navbar show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = navbarRef.current;
      if (!nav) return;

      const currentY = window.scrollY;
      if (currentY > lastScrollY.current) {
        // Scrolling down → fade up & out
        nav.classList.add("opacity-0", "-translate-y-10");
        nav.classList.remove("opacity-100", "translate-y-0");
      } else {
        // Scrolling up → fade back in
        nav.classList.remove("opacity-0", "-translate-y-10");
        nav.classList.add("opacity-100", "translate-y-0");
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderTeam = (teamKey: TeamKey) => {
    const team = teamData[teamKey];
    return team.map((member) => (
      <div
        key={member.name}
        className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition"
      >
        <Image
          src={member.img}
          alt={member.name}
          width={128}
          height={128}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-gray-600">{member.year}</p>
        <p className="text-gray-500 italic">{member.position}</p>
      </div>
    ));
  };

  const baseBtnClasses =
    "team-btn font-semibold py-3 px-4 rounded-md transition text-left";

  const inactiveBtnClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
  const activeBtnClasses = "bg-indigo-700 text-white";

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navbar */}
      <nav
        id="navbar"
        ref={navbarRef}
        className="bg-white shadow-md sticky top-0 z-50 transition-all duration-200 opacity-100 translate-y-0"
      >
        <div className="flex justify-between items-center py-4 pl-4 pr-6">
          {/* Logo */}
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

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              Home
            </Link>
            <Link
              href="/competition"
              className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Competition
            </Link>
            <Link href="/team" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              Team
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Projects
            </Link>
            <Link
              href="/joinus"
              className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Join Us
            </Link>
            <Link
              href="/sponsors"
              className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Sponsors
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="menu-btn"
            className="block md:hidden focus:outline-none"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 text-gray-700 ${mobileOpen ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 text-gray-700 ${mobileOpen ? "block" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
          <div
            id="mobile-menu"
            className={`${
              mobileOpen ? "flex" : "hidden"
            } md:hidden flex-col items-center bg-white shadow-md space-y-4 py-4`}
          >
            <Link href="/" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/competition" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>
              Competition
            </Link>
            <Link href="/team" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>
              Team
            </Link>
            <Link href="/projects" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>
              Projects
            </Link>
            <Link href="/joinus" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>
              Join Us
            </Link>
            <Link href="/sponsors" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>
              Sponsors
            </Link>
            <Link href="/#contact" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
      </nav>

      {/* Team Section */}
      <section id="team" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-6">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4 flex flex-col space-y-4">
            <button
              className={`${baseBtnClasses} ${
                activeTeam === "executives" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("executives")}
            >
              Executives
            </button>
            <button
              className={`${baseBtnClasses} ${
                activeTeam === "mechanical" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("mechanical")}
            >
              Mechanical &amp; Manufacturing Leads
            </button>
            <button
              className={`${baseBtnClasses} ${
                activeTeam === "control" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("control")}
            >
              Control Systems Leads
            </button>
            <button
              className={`${baseBtnClasses} ${
                activeTeam === "power" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("power")}
            >
              Power Systems Leads
            </button>
            <button
              className={`${baseBtnClasses} ${
                activeTeam === "aero" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("aero")}
            >
              Aerodynamics Leads
            </button>
            <button
              className={`${baseBtnClasses} ${
                activeTeam === "sustainability" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("sustainability")}
            >
              Sustainability Lead
            </button>
            <button
              className={`${baseBtnClasses} ${
                activeTeam === "web" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("web")}
            >
              Webmaster
            </button>
          </div>

          {/* Right Grid */}
          <div className="w-full md:w-3/4">
            <div
              id="team-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {renderTeam(activeTeam)}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 text-gray-300 py-6 mt-20">
        <div className="flex items-center justify-between px-6">
          {/* Left: Logo */}
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

          {/* Right: Text */}
          <p className="text-sm text-black">
            © 2025 UTWind | University of Toronto
          </p>
        </div>
      </footer>
    </div>
  );
}
