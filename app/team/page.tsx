"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type TeamKey =
  | "president"
  | "mechanical"
  | "control"
  | "power"
  | "aero"
  | "sustainability"
  | "business"
  | "web";

type TeamMember = {
  name: string;
  year: string;
  position: string;
  img: string;
  linkedin: string;
};

const teamData: Record<TeamKey, TeamMember[]> = {
  president: [
    {
      name: "Chenyu Li",
      year: "MECH 2T9 + PEY",
      position: "President",
      img: "/images/2026-2027 team picture folder/Chenyu_Li_MECH2T9+PEY_President.jpg",
      linkedin: "https://ca.linkedin.com/in/li-chenyu"
    },
  ],
  business: [
    {
      name: "Dhara Patel",
      year: "ECE 2T6 + PEY + 1",
      position: "Business Director",
      img: "/images/2026-2027 team picture folder/Dhara_Patel_ECE2T6+PEY+1_Business_Director.png",
      linkedin: "https://ca.linkedin.com/in/dhara-patel-eng"
    },
    {
      name: "Diane Qin",
      year: "MECH2T9 + PEY",
      position: "Marketing Lead",
      img: "/images/2026-2027 team picture folder/Diane_Qin_Mech_2T9+PEY_Marketing.png",
      linkedin: "https://www.linkedin.com/in/dianecqin/"
    },
    {
      name: "Thomas Dong",
      year: "INDY2T9 + PEY",
      position: "Finance Lead",
      img: "/images/2026-2027 team picture folder/Thomas_Dong_INDY2T9+PEY_FinanceLead.jpg",
      linkedin: "https://ca.linkedin.com/in/thomas-dong26"
    },
    {
      name: "Calvert Zhu",
      year: "MSE2T7 + PEY",
      position: "Sponsorships Co-Lead",
      img: "/images/2026-2027 team picture folder/Calvert_Zhu_MSE2T7+PEY_Sponsorship.JPG",
      linkedin: "https://www.linkedin.com/in/calvert-zhu/ "
    },
    {
      name: "Stefano Ma",
      year: "ENVS+W&O2T9",
      position: "Sponsorships Co-Lead",
      img: "/images/2026-2027 team picture folder/Stefano_Ma_ENVS+W&O2T9_SponsorshipLead.png",
      linkedin: "https://ca.linkedin.com/in/ma-bing-hung-309075396"
    },
    {
      name: "Juneeta Vangala",
      year: "INDY2T8 + PEY",
      position: "Operations Lead",
      img: "/images/2026-2027 team picture folder/Juneeta_Vangala_Indy2T8+PEY_OperationsLead .PNG",
      linkedin: "https://ca.linkedin.com/in/juneetavangala"
    },
  ],
  mechanical: [
    {
      name: "Teagan McKenzie",
      year: "MECH2T7 + PEY",
      position: "Mechanical Co-Lead",
      img: "/images/2026-2027 team picture folder/STeagan_McKenzie_MECH2T7+PEY_MechanicalCoLead.jpg",
      linkedin: "https://ca.linkedin.com/in/teagan-mckenzie-16a5401b2"
    },
    {
      name: 'Shafwat Khan',
      year: "MECH 2T8 + PEY",
      position: "Mechanical Co-Lead",
      img: "/images/2026-2027 team picture folder/Shafwat_Khan_MECH2T8+PEY_MechanicalCoLead.jpg",
      linkedin: "https://ca.linkedin.com/in/shafwat-khan-b8b664339"
    },
  ],
  control: [
    {
      name: "Wanning He",
      year: "ECE2T6",
      position: "Control Systems Co-Lead",
      img: "/images/2026-2027 team picture folder/Wanning_He_ECE_2T6_ControlsCoLead.jpg",
      linkedin: "https://ca.linkedin.com/in/wanning-he"
    },
    {
      name: "Jacob Duplessis",
      year: "ECE2T7 + PEY",
      position: "Contol Systems Co-Lead",
      img: "/images/2026-2027 team picture folder/Jacob_Duplessis_ECE_2T7_ControlsCoLead.jpg",
      linkedin: "https://www.linkedin.com/in/jacob-duplessis-34aa4b248/"
    },
  ],
  power: [
    {
      name: "Alec MacGregor",
      year: "EngSci Energy Systems 2T6 + PEY",
      position: "Power Systems Co-Lead",
      img: "/images/2026-2027 team picture folder/Alec_MacGregor_ENGSCI2T6+PEY_PowerCoLead.jpg",
      linkedin: "https://www.linkedin.com/in/alec-macgregor-b1b342276"
    },
    {
      name: "Deniz Kantar",
      year: "ECE2T8 + PEY",
      position: "Power Systems Co-Lead",
      img: "/images/2026-2027 team picture folder/Deniz_Kantar_ECE_2T8+PEY_PowerCoLead.jpg",
      linkedin: "https://ca.linkedin.com/in/deniz-kantar"
    },
  ],
  aero: [
    {
      name: "Alex Kim",
      year: "MSE 2T8 + PEY",
      position: "Aerodynamics Co-Lead",
      img: "/images/2026-2027 team picture folder/Alex_Kim_MSE2T8+PEY_AeroCoLead.jpg",
      linkedin: "https://www.linkedin.com/in/alexsehwankim/"
    },
    {
      name: "Glenn Yu",
      year: "EngSci 2T9 + PEY",
      position: "Aerodynamics Co-Lead",
      img: "/images/2026-2027 team picture folder/Glenn_Yu_ENGSCI2T9+PEY_AeroColead.jpg",
      linkedin: "https://ca.linkedin.com/in/glenn-yu-6a29bb381"
    },
    
  ],
  sustainability: [
    {
      name: "Stella Cook",
      year: "CHEM2T7 + PEY",
      position: "Sustainability Co-Lead",
      img: "/images/2026-2027 team picture folder/Stella_Cook_CHEM2T7+PEY_SustainabilityLead.jpg",
      linkedin: "https://ca.linkedin.com/in/stella-cook-046948246"
    },
    {
      name: "Pakhi Gupta",
      year: "CIV2T7 + PEY",
      position: "Sustainability Co-Lead",
      img: "/images/2026-2027 team picture folder/Pakhi_Gupta_CIV2T7+PEY_SustainabilityBusinessLead.jpg",
      linkedin: "https://ca.linkedin.com/in/pakhigupta29"
    }
  ],
  
  web: [
    {
      name: "Matthew Ting",
      year: "MSE 2T7 + PEY",
      position: "Webmaster",
      img: "/images/2026-2027 team picture folder/Matthew_Ting_MSE2T7+PEY_Webmaster.png",
      linkedin: "https://ca.linkedin.com/in/matthewting16"
    },
  ],
};

export default function TeamPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<TeamKey>("president");

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
      {/* Image + LinkedIn hover */}
      <div className="group relative w-32 h-32 mx-auto mb-4">
        <Image
          src={member.img}
          alt={member.name}
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover"
        />

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s LinkedIn profile`}
            className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {/* LinkedIn logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-white"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V9H7.1v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
          </a>
        )}
      </div>

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
              <Link href="/" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Home</Link>
              <Link href="/competition" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Competition</Link>
              <Link href="/team" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Team</Link>
              <Link href="/projects" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Projects</Link>
              <Link href="/joinus" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Join Us</Link>
              <Link href="/sponsors" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Sponsors</Link>
              <Link href="/gallery" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Gallery</Link>
              <Link href="/#contact" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Contact</Link>
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
                activeTeam === "president" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("president")}
            >
              President
            </button>
            <button
              className={`${baseBtnClasses} ${
                activeTeam === "business" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("business")}
            >
              Business Leads
            </button>
            <button
              className={`${baseBtnClasses} ${
                activeTeam === "mechanical" ? activeBtnClasses : inactiveBtnClasses
              }`}
              onClick={() => setActiveTeam("mechanical")}
            >
              Mechanical Leads
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
      <footer className="bg-blue-100 py-6 mt-20">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4">
          {/* left */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Image
              src="/images/Utwind footer logo.png"
              alt="UTWind Logo"
              width={200}
              height={200}
              className="h-16 w-auto object-contain shrink-0"
              quality={100}
              unoptimized
            />
            <span className="text-lg font-semibold text-black truncate">
              contact@utwind.com
            </span>
          </div>
      
          {/* right */}
          <p className="text-sm text-black shrink-0">
            © 2025 UTWind | University of Toronto
          </p>
        </div>
      </footer>
    </div>
  );
}
