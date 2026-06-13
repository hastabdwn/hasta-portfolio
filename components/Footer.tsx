"use client";
import React from "react";
import { contactLinks } from "@/data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-[#252525] border-t-4 border-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Nama / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-black tracking-tighter dark:text-white">
            Hasta Budiawan
          </h2>
        </div>

        <div className="flex gap-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={`p-3 border-2 border-black ${link.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all`}
                title={link.label}
              >
                <Icon size={20} className="text-black" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="font-black text-sm dark:text-white">
            © {currentYear} - Made with <span className="text-red-500">♥</span>{" "}
            by Hasta Budiawan
          </p>
        </div>
      </div>
    </footer>
  );
}
