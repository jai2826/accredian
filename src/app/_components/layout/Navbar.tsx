"use client";

import MenuIcon from "@/app/_components/ui/menu-icon";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" }, // Removed the "#" from the ID for the observer
    { name: "Stats", href: "stats" },
    { name: "Clients", href: "clients" },
    { name: "Accredian Edge", href: "accredianEdge" },
    { name: "CAT", href: "cat" },
    { name: "How It Works", href: "howItWorks" },
    { name: "FAQs", href: "faqs" },
    { name: "Testimonials", href: "testimonials" },
  ];

  // --- SCROLL SPY LOGIC ---
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for navbar height

      navLinks.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveId(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect =
        document.body.getBoundingClientRect().top;
      const elementRect =
        element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-4 px-6 md:px-14">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-12">
        <img
          src="/logo.webp"
          alt="logo"
          className="w-[124px] h-[32px] object-contain cursor-pointer"
          onClick={() => scrollToSection("home")}
        />

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex justify-end items-center flex-1 space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-[16px] font-circular cursor-pointer transition-all ease-in-out duration-100 py-2 relative",
                  activeId === link.href
                    ? "text-blue-600 font-semibold tracking-tight"
                    : "text-black tracking-tight",
                )}>
                {link.name}
                {/* Visual indicator for active state */}
                {activeId === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE NAV TOGGLE */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 -mr-3 focus:outline-none relative z-[60]"
            aria-label="Toggle Menu">
            {isOpen ? (
              <XIcon
                size={32}
                className="text-black"
              />
            ) : (
              <MenuIcon />
            )}
          </button>

          {/* MOBILE MENU PANEL */}
          <div
            className={cn(
              "absolute top-[70px] right-5 bg-white shadow-2xl p-6 rounded-2xl border border-gray-100 w-64 transition-all duration-300 origin-top-right z-50",
              isOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-4 pointer-events-none",
            )}>
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() =>
                      scrollToSection(link.href)
                    }
                    className={cn(
                      "relative block w-fit text-left text-[16px] font-circular transition-colors ease-in-out duration-100 py-1",
                      activeId === link.href
                        ? "text-blue-600 font-bold"
                        : "text-black font-semibold",
                    )}>
                    {link.name}
                    {activeId === link.href && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-full" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
