"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ContactLink({
  className = "",
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    // Already on home page
    if (pathname === "/") {
      const section = document.getElementById("contact");

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    // Coming from another page
    sessionStorage.setItem("scrollToContact", "true");
    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      Contact
    </button>
  );
}