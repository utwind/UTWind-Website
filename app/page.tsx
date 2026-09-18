'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Inter, Montserrat, Orbitron } from "next/font/google";

export default function Home() {
  // ref for navbar and mobile menu state
  const navbarRef = useRef<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);


  useEffect(() => {
  const shouldScroll = sessionStorage.getItem("scrollToContact");

  if (shouldScroll === "true") {
    sessionStorage.removeItem("scrollToContact");

    const timer = setTimeout(() => {
      const section = document.getElementById("contact");

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 1100);

    return () => clearTimeout(timer);
  }
}, []);
  
  useEffect(() => {
    // aos init
    AOS.init({ duration: 1000, once: true });

    // navbar scroll effect
    const handleScroll = () => {
      const el = navbarRef.current;
      if (!el) return;
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current) {
        el.classList.add('opacity-0', '-translate-y-10');
        el.classList.remove('opacity-100', 'translate-y-0');
      } else {
        el.classList.remove('opacity-0', '-translate-y-10');
        el.classList.add('opacity-100', 'translate-y-0');
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  // simple toggle using state
  const toggleMenu = () => setMobileOpen((v) => !v);
type TeamUpdate = {
  date: string;
  title: string;
  description: string;
  image?: string; // optional image URL
};

const TEAM_UPDATES: TeamUpdate[] = [
  {
    date: "Sep 16, 2026",
    title: "SolidWorks Workshop for Beginners!",
    description:
      `Hey @channel, quick heads up on an upcoming opportunity!

Our next mechanical sub-team meeting is an intro SolidWorks technical workshop at the Galbraith ECF (GB144), on Friday, September 18th from 18:00-20:00.

This is designed for people with little to no SolidWorks experience, and you don't need to be in Mech or MechE to come. If you're on Business, Electrical, Aero, or any other subteam and any major, you're welcome. CAD is one of the most transferable skills you can pick up on a design team, and this is the easiest possible entry point for you to learn a new skill for your portfolio, resume, or any personal projects you may want to create!

Spots are limited by lab capacity and filling up fast, so please sign up here to reserve a guaranteed seat: https://forms.gle/iAPLw3bPE3ahbGCu7 We will be doing registration at the door, and there may be walk-in available on a FCFS basis if there are no-shows.

Workshop starts promptly at 18:15 so please be on time!

A few logistics:

ECF computers are available to run SolidWorks, so you can just show up
If you'd rather bring your own laptop, install Remote ECF beforehand (no VPN needed on UofT wifi), or install SolidWorks directly
Already comfortable with SolidWorks? Check out a challenge @Shafwat sent out in the #mechanical channel.


Feel free to bring a friend who's been thinking about joining UTWind as the event is open to all UofT students!

Questions? Message @Shafwat or @Teagan McKenzie!`,
  },
  {
    date: "Sep 9, 2026",
    title: "Start of Semester Kick Off Update",
 description: `Hi @everyone, thank you to those who were able to make it out to our kick-off event today!

If any of your friends want to join UTWind, as them to fill out the recruitment form in our Instagram BIO and we will send them a Slack Invite to this workspace!

Feel free to reach out to myself or any of the other leads if you have any questions and check our master schedule for events happening within UTWind. This spreadsheet will always contain most up-to-date information about event times and locations!

There will be more specific information for each sub-team in their own respective channels, so please join any that interest you!

Looking forward to working with everyone this design cycle!
`,
    //image: "/images/updates/blade-design.jpg",
  },
  {
  date: "Sep 6, 2026",
  title: "Welcome to the 2026–2027 UTWind Design Cycle!",
  description: `Hello @everyone! Welcome to the 2026–2027 UTWind Design Cycle!

We’re kicking things off with our Kick-Off Meeting on Wednesday, Sept 9th, 18:15-20:00 in the Myhal Arena. For new members, this is the best way to learn more about our sub-teams and decide which ones to join. For returning members, it’s a chance to reconnect and see what’s planned for the cycle.

For new members, to join a sub-team just click on channel(s) that correspond to the sub-teams of interest to you:

• #aerodynamics (Leads: @Alex Kim, @Glenn)

• #controls (Leads: @Wanning He, @Jacob Duplessis)

• #powersystems (Leads: @Alec MacGregor, @Deniz Kantar)

• #mechanical (Leads: @Teagan McKenzie, @Shafwat)

• #sustainability (Leads: @Stella Cook, @Pakhi)

• #business (Business Director: @Dhara Patel)

The sub-teams will have their first meetings after the kick-off. Check your respective channel(s) for details regarding when and where the weekly meetings will happen.

If you have any questions, feel free to contact anyone on the leadership team at anytime! Thanks everyone and looking forward to a successful design cycle!`,

  // image: "/images/updates/pet-bins.jpg",
},
  
  // Add more updates here
];
  const [activeIndex, setActiveIndex] = useState(0);

  const activeUpdate = TEAM_UPDATES[activeIndex]
  return (
    <main className="bg-gray-50 text-gray-800">

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
          <Link href="/#contact" className="hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Contact</Link>
          
          
        </div>
    </nav>

      {/* hero */}
<section className="relative h-screen overflow-hidden flex items-center text-white bg-gradient-to-br from-sky-900 via-blue-800 to-slate-900">
  {/* Animated turbine background */}
  <div className="absolute inset-0 flex items-center justify-center opacity-35">
    <div className="relative w-[520px] h-[520px] md:w-[780px] md:h-[780px]">
      {/* Tower */}
      <div className="absolute left-1/2 top-[52%] w-8 h-[420px] md:h-[560px] bg-gradient-to-b from-white/80 to-white/30 -translate-x-1/2 rounded-t-md clip-tower"></div>

      {/* Spinning rotor wrapper */}
      <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-full h-full animate-spin-slow">
          {/* Blade 1 */}
          <div className="turbine-blade absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom"></div>

          {/* Blade 2 */}
          <div className="turbine-blade absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom rotate-[120deg]"></div>

          {/* Blade 3 */}
          <div className="turbine-blade absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom rotate-[240deg]"></div>

          {/* Hub */}
          <div className="absolute left-1/2 top-1/2 w-20 h-20 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-xl border border-white/40"></div>

          {/* Center cap */}
          <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-slate-200 rounded-full -translate-x-1/2 -translate-y-1/2 z-20"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/45"></div>

  {/* Text content */}
  <div className="relative z-20 max-w-3xl px-8 md:px-16">
        <h1 className="font-racing text-8xl md:text-9xl font-bold mb-6 drop-shadow-lg">
      UTWind
    </h1>
    <h2 className="text-5xl md:text-6xl font-light mb-4 drop-shadow-lg">
      Face the Wind
    </h2>
    <p className="text-2xl md:text-3xl leading-relaxed drop-shadow-md">
      University of Toronto Wind Turbine Team
    </p>
  </div>
</section>


    <section id="team-updates" className="bg-sky-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold tracking-wide text-sky-600 uppercase">
              Team Updates
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What&apos;s happening at UTWind
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Stay up to date with our latest competition progress, PET
              recycling milestones, and team events.
            </p>
          </div>
          <p className="text-xs text-slate-500 text-right">
            Scroll our updates and announcements from our Slack Channel • Click to expand details
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Scrollable list */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">
              Timeline
            </h3>
            <div className="max-h-96 overflow-y-auto pr-2 space-y-4">
              {TEAM_UPDATES.map((update, index) => (
                <button
                  key={update.date + update.title}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left rounded-xl border p-3 sm:p-4 transition 
                  ${
                    index === activeIndex
                      ? "border-sky-500 bg-sky-50"
                      : "border-slate-200 hover:border-sky-300 hover:bg-sky-50/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-medium uppercase tracking-wide text-sky-700">
                      {update.date}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {update.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {update.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Active update details with image */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 sm:p-6 flex flex-col overflow-y-auto max-h-[32rem] pr-2">
            <div className="mb-4">
              <p className="text-xs font-semibold tracking-wide text-sky-600 uppercase">
                {activeUpdate.date}
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                {activeUpdate.title}
              </h3>
            </div>

            {activeUpdate.image && (
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={activeUpdate.image}
                  alt={activeUpdate.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            )}

            <p className="whitespace-pre-line text-sm md:text-base text-slate-700 leading-relaxed">
                {activeUpdate.description}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* about */}
      <section id="about" className="bg-blue-500 text-white py-20" data-aos="fade-up">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6">About Us</h2>
          <p className="text-xl">
            UTWind is a student team dedicated to building sustainable small-scale wind turbines.
            Formed in 2021, our team has grown to more than 80 talented students designing, building,
            and testing small-scale turbines for international competitions and research.
          </p>
          <a
            href="/team"
            className="inline-block mt-8 bg-indigo-200 hover:bg-indigo-400 text-black font-semibold py-4 px-10 rounded-lg shadow-md text-lg transition duration-300"
          >
            Meet the Team
          </a>
        </div>
      </section>

      {/* vision */}
      <section id="vision" className="bg-white text-gray-800 py-20" data-aos="fade-up">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6">Vision</h2>
          <p className="text-xl italic leading-relaxed">
            &quot;Our vision is to bring wind energy to light for students at the University of Toronto,
            so they will be prepared and inspired to light up the world in a sustainable way.
            By working together, we hope to develop our skills in the context of a project we are
            passionate about. The team is a place where knowledge is shared and passed on. The
            project is designed to focus not just on what we learn today, but what we can achieve
            in designing a more sustainable future!&quot;
          </p>
        </div>
      </section>
    <section
      id="contact"
      className="scroll-mt-24"
    >
      {/* Contact content */}
    </section>
      <section id="contact" className="bg-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
          <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Interested in learning more about UTWind or collaborating with us?  
            We’d love to hear from you! Please reach out via email or visit us at Myhal Centre.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:contact@utwind.com" className="text-indigo-600 font-semibold hover:underline">
                  contact@utwind.com
                </a>
               <a
                  href="https://www.instagram.com/utwindclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-blue-700 font-semibold hover:text-blue-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                  >
                    <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm8.75 2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                  </svg>

                  <span>@utwind</span>
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong><br />
                Myhal Centre for Engineering Innovation & Entrepreneurship<br />
                55 St George St, Toronto, ON M5S 0C9
              </p>
              <p className="text-gray-600 font-bold">
                Feel free to reach out with questions about joining, sponsorship opportunities, or partnerships — our team will respond as soon as possible.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Myhal+Centre+for+Engineering+Innovation+and+Entrepreneurship,+55+St+George+St,+Toronto,+ON+M5S+0C9&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

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


      
    </main>
  );
}
