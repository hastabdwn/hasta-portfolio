"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "About", href: "/#about" },
    { name: "Project", href: "/#project" },
    { name: "Contact", href: "/#contact" },
  ];

  // Logika untuk mendeteksi section yang aktif saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "project", "contact"];
      const scrollPosition = window.scrollY + 100; // offset agar deteksi lebih awal

      if (scrollPosition < 500) {
        setActiveSection("home");
        return;
      }

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(
              id === "project"
                ? "Project"
                : id.charAt(0).toUpperCase() + id.slice(1),
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 border-b-4 border-black bg-white dark:bg-[#252525] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-black dark:text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-2xl tracking-tighter shrink-0">
          Hasta
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-bold tracking-wide">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.name ||
              (link.name === "Home" && activeSection === "home");

            return (
              <a
                key={link.name}
                href={link.href}
                className="relative group px-4 py-2 transition-all duration-200"
              >
                {/* Background Active/Hover - Neobrutalism Style */}
                <span
                  className={`absolute inset-0 bg-[#FFA552] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-opacity duration-200 z-0 
                                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                ></span>

                <span
                  className={`relative z-10 transition-colors duration-200
                                    ${isActive ? "text-black" : "text-black dark:text-white group-hover:text-black"}`}
                >
                  {link.name}
                </span>
              </a>
            );
          })}

          {/* Toggle Theme (Desktop) */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 p-2 border-2 border-black bg-[#93c5fd] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            <Sun size={20} className="hidden dark:block" />
            <Moon size={20} className="block dark:hidden" />
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 border-2 border-black bg-[#93c5fd] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-black ${isOpen ? "max-h-80 border-b-4" : "max-h-0"}`}
      >
        <div className="px-6 py-8 flex flex-col gap-4 bg-[#FFFDF0] dark:bg-[#252525] font-black tracking-widest text-center">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.name ||
              (link.name === "Home" && activeSection === "home");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all
                                    ${isActive ? "bg-[#FFA552] text-black" : "bg-white text-black"}`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
