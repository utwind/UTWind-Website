"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageSwitcher from "../components/LanguageSwitcher";

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
  positionKey: string;
  img: string;
  linkedin: string;
};

const teamData: Record<TeamKey, TeamMember[]> = {
  president: [
    {
      name: "Chenyu Li",
      year: "MECH 2T9 + PEY",
      positionKey: "president",
      img: "/images/2026-2027 team picture folder/Chenyu_Li_MECH2T9+PEY_President.jpg",
      linkedin: "https://ca.linkedin.com/in/li-chenyu"
    },
  ],
  business: [
    {
      name: "Dhara Patel",
      year: "ECE 2T6 + PEY + 1",
      positionKey: "businessDirector",
      img: "/images/2026-2027 team picture folder/Dhara_Patel_ECE2T6+PEY+1_Business_Director.png",
      linkedin: "https://ca.linkedin.com/in/dhara-patel-eng"
    },
    {
      name: "Diane Qin",
      year: "MECH 2T9 + PEY",
      positionKey: "marketingLead",
      img: "/images/2026-2027 team picture folder/Diane_Qin_Mech_2T9+PEY_Marketing.png",
      linkedin: "https://www.linkedin.com/in/dianecqin/"
    },
    {
      name: "Thomas Dong",
      year: "INDY 2T9 + PEY",
      positionKey: "financeLead",
      img: "/images/2026-2027 team picture folder/Thomas_Dong_INDY2T9+PEY_FinanceLead.jpg",
      linkedin: "https://ca.linkedin.com/in/thomas-dong26"
    },
    {
      name: "Calvert Zhu",
      year: "MSE 2T7 + PEY",
      positionKey: "sponsorshipsLead",
      img: "/images/2026-2027 team picture folder/Calvert_Zhu_MSE2T7+PEY_Sponsorship.JPG",
      linkedin: "https://www.linkedin.com/in/calvert-zhu/ "
    },
    {
      name: "Juneeta Vangala",
      year: "INDY 2T8 + PEY",
      positionKey: "operationsCoLead",
      img: "/images/2026-2027 team picture folder/Juneeta_Vangala_Indy2T8+PEY_OperationsLead .PNG",
      linkedin: "https://ca.linkedin.com/in/juneetavangala"
    },
    {
      name: "Han Hsu Eain",
      year: "INDY 2T9 + PEY",
      positionKey: "operationsCoLead",
      img: "/images/2026-2027 team picture folder/Han_Hsu_Eain_INDY2T9+PEY_OperationsCoLead.jpg",
      linkedin: "https://www.linkedin.com/in/han-hsu-306ab32ba/" 
    },
  ],
  mechanical: [
    {
      name: "Teagan McKenzie",
      year: "MECH 2T7 + PEY",
      positionKey: "mechanicalCoLead",
      img: "/images/2026-2027 team picture folder/STeagan_McKenzie_MECH2T7+PEY_MechanicalCoLead.jpg",
      linkedin: "https://ca.linkedin.com/in/teagan-mckenzie-16a5401b2"
    },
    {
      name: 'Shafwat Khan',
      year: "MECH 2T8 + PEY",
      positionKey: "mechanicalCoLead",
      img: "/images/2026-2027 team picture folder/Shafwat_Khan_MECH2T8+PEY_MechanicalCoLead.jpg",
      linkedin: "https://ca.linkedin.com/in/shafwat-khan-b8b664339"
    },
  ],
  control: [
    {
      name: "Wanning He",
      year: "ECE 2T6",
      positionKey: "controlCoLead",
      img: "/images/2026-2027 team picture folder/Wanning_He_ECE_2T6_ControlsCoLead.jpg",
      linkedin: "https://ca.linkedin.com/in/wanning-he"
    },
    {
      name: "Jacob Duplessis",
      year: "ECE 2T7 + PEY",
      positionKey: "controlCoLead",
      img: "/images/2026-2027 team picture folder/Jacob_Duplessis_ECE_2T7_ControlsCoLead.jpg",
      linkedin: "https://www.linkedin.com/in/jacob-duplessis-34aa4b248/"
    },
  ],
  power: [
    {
      name: "Alec MacGregor",
      year: "EngSci Energy Systems 2T6 + PEY",
      positionKey: "powerCoLead",
      img: "/images/2026-2027 team picture folder/Alec_MacGregor_ENGSCI2T6+PEY_PowerCoLead.jpg",
      linkedin: "https://www.linkedin.com/in/alec-macgregor-b1b342276"
    },
    {
      name: "Deniz Kantar",
      year: "ECE 2T8 + PEY",
      positionKey: "powerCoLead",
      img: "/images/2026-2027 team picture folder/Deniz_Kantar_ECE_2T8+PEY_PowerCoLead.jpg",
      linkedin: "https://ca.linkedin.com/in/deniz-kantar"
    },
  ],
  aero: [
    {
      name: "Alex Kim",
      year: "MSE 2T8 + PEY",
      positionKey: "aeroCoLead",
      img: "/images/2026-2027 team picture folder/Alex_Kim_MSE2T8+PEY_AeroCoLead.jpg",
      linkedin: "https://www.linkedin.com/in/alexsehwankim/"
    },
    {
      name: "Glenn Yu",
      year: "EngSci 2T9 + PEY",
      positionKey: "aeroCoLead",
      img: "/images/2026-2027 team picture folder/Glenn_Yu_ENGSCI2T9+PEY_AeroColead.jpg",
      linkedin: "https://ca.linkedin.com/in/glenn-yu-6a29bb381"
    },
    
  ],
  sustainability: [
    {
      name: "Stella Cook",
      year: "CHEM 2T7 + PEY",
      positionKey: "sustainabilityCoLead",
      img: "/images/2026-2027 team picture folder/Stella_Cook_CHEM2T7+PEY_SustainabilityLead.jpg",
      linkedin: "https://ca.linkedin.com/in/stella-cook-046948246"
    },
    {
      name: "Pakhi Gupta",
      year: "CIV 2T7 + PEY",
      positionKey: "sustainabilityCoLead",
      img: "/images/2026-2027 team picture folder/Pakhi_Gupta_Civ2T7+PEY_SustainabilityBusinessLead.jpg",
      linkedin: "https://ca.linkedin.com/in/pakhigupta29"
    }
  ],
  
  web: [
    {
      name: "Matthew Ting",
      year: "MSE 2T7 + PEY",
      positionKey: "webmaster",
      img: "/images/2026-2027 team picture folder/Matthew_Ting_MSE2T7+PEY_Webmaster.png",
      linkedin: "https://ca.linkedin.com/in/matthewting16"
    },
  ],
};

export default function TeamPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const nav = useTranslations("Navbar");
  const teamT = useTranslations("Team");
  const footer = useTranslations("Footer");

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
    const members = teamData[teamKey];

    return members.map((member) => (
    <div
      key={member.name}
      className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition w-96 min-h-[430px]"
    >
      {/* Image + LinkedIn hover */}
      <div className="group relative w-52 h-52 mx-auto mb-8">
        <Image
          src={member.img}
          alt={member.name}
          width={600}
          height={600}
          quality={100}
          className="w-52 h-52 rounded-full object-cover"
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

      <h3 className="font-bold text-2xl">{member.name}</h3>
      <p className="text-gray-600 text-xl mt-2">{member.year}</p>
      <p className="text-gray-500 italic text-xl mt-2">
        {teamT(`positions.${member.positionKey}`)}
      </p>
    </div>
  ));
};

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

     {/* Team Section */}
<section id="team" className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Page Title */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        {teamT("title")}
      </h1>

      <p className="text-gray-600 mt-4 text-lg">
        {teamT("description")}
      </p>
    </div>

    {/* President */}
    <div className="mb-20">
      <div className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg mb-10 text-center">
        <h2 className="text-3xl font-bold">
          {teamT("sections.president")}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {renderTeam("president")}
      </div>
    </div>

    {/* Business */}
    <div className="mb-20">
      <div className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg mb-10 text-center">
        <h2 className="text-3xl font-bold">
          {teamT("sections.business")}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {renderTeam("business")}
      </div>
    </div>

    {/* Mechanical */}
    <div className="mb-20">
      <div className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg mb-10 text-center">
        <h2 className="text-3xl font-bold">
          {teamT("sections.mechanical")}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {renderTeam("mechanical")}
      </div>
    </div>

    {/* Control Systems */}
    <div className="mb-20">
      <div className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg mb-10 text-center">
        <h2 className="text-3xl font-bold">
          {teamT("sections.control")}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {renderTeam("control")}
      </div>
    </div>

    {/* Power Systems */}
    <div className="mb-20">
      <div className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg mb-10 text-center">
        <h2 className="text-3xl font-bold">
          {teamT("sections.power")}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {renderTeam("power")}
      </div>
    </div>

    {/* Aerodynamics */}
    <div className="mb-20">
      <div className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg mb-10 text-center">
        <h2 className="text-3xl font-bold">
          {teamT("sections.aero")}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {renderTeam("aero")}
      </div>
    </div>

    {/* Sustainability */}
    <div className="mb-20">
      <div className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg mb-10 text-center">
        <h2 className="text-3xl font-bold">
          {teamT("sections.sustainability")}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {renderTeam("sustainability")}
      </div>
    </div>

    {/* Webmaster */}
    <div>
      <div className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg mb-10 text-center">
        <h2 className="text-3xl font-bold">
          {teamT("sections.web")}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {renderTeam("web")}
      </div>
    </div>

  </div>
</section>
     
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
