"use client";
import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { contactLinks } from "@/data/contact";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-[#252525] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-black mb-6 tracking-tighter dark:text-white">
              Get In Touch
            </h2>
            <p className="text-lg font-bold mb-8 dark:text-gray-300 max-w-md">
              I&apos;m always open to chat about Data projects, or any
              other collaboration opportunities.
            </p>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group w-fit"
                  >
                    <div
                      className={`p-3 border-2 border-black ${link.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all`}
                    >
                      <Icon size={24} className="text-black" />
                    </div>
                    <span className="font-black dark:text-white text-sm tracking-widest">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Form */}
          <div className="bg-white dark:bg-[#2d2d2d] border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-black text-sm dark:text-white tracking-wide">
                  Your Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="p-4 border-4 border-black font-bold outline-none focus:bg-[#FFFDF0] dark:bg-[#3d3d3d] dark:text-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-black text-sm dark:text-white tracking-wide">
                  Email Address
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  className="p-4 border-4 border-black font-bold outline-none focus:bg-[#FFFDF0] dark:bg-[#3d3d3d] dark:text-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-black text-sm dark:text-white tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="p-4 border-4 border-black font-bold outline-none focus:bg-[#FFFDF0] dark:bg-[#3d3d3d] dark:text-white resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-3 py-4 border-4 border-black bg-[#FFA552] font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-black"
              >
                {status === "loading" ? (
                  <>
                    Sending{" "}
                    <AiOutlineLoading3Quarters
                      className="animate-spin"
                      size={20}
                    />
                  </>
                ) : status === "success" ? (
                  "Message Sent! ✓"
                ) : (
                  <>
                    Send Message <IoSendSharp size={20} />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-red-600 font-bold text-center bg-red-50 border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                  Gagal mengirim pesan. Coba lagi nanti.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
