"use client";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-white dark:bg-[#252525] text-black dark:text-white transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8 z-10 items-start">
          <div className="flex items-center gap-2 w-fit px-4 py-2 bg-[#FFD23F] border-4 border-black text-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            Hello
          </div>

          <div className="relative">
            <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase italic text-left">
              <span className="relative inline-block">
                <span className="relative z-10 bg-[#FFA552] border-4 border-black px-4 py-2 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-black inline-block transform -rotate-2 mb-4">
                  I&apos;m Hasta
                </span>
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl max-w-xl font-bold text-left">
            This is my personal space where I share my work, ideas, and things I
            enjoy building in the digital space.
          </p>

          <a
            href="#project"
            className="group relative px-10 py-5 bg-[#FFA552] border-4 border-black text-black font-black text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex items-center gap-3 active:bg-[#FFD23F]"
          >
            My Work
            <ArrowUpRight
              className="group-hover:rotate-45 transition-transform"
              strokeWidth={4}
            />
          </a>
        </div>

        {/* MOCKUP DASHBOARD */}
        <div className="relative group w-full">
          {/* Decorative Back Elements */}
          {/* <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFA552] border-4 border-black rounded-full -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#93c5fd] border-4 border-black -z-10 rotate-12"></div> */}

          {/* Main Mockup Window */}
          <div className="relative bg-white border-4 border-black rounded-sm shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-transform group-hover:scale-[1.01]">
            <div className="border-b-4 border-black p-4 flex items-center justify-between bg-white text-black font-black">
              <div className="flex gap-3">
                <div className="w-4 h-4 rounded-full bg-[#ff5f56] border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
                <div className="w-4 h-4 rounded-full bg-[#ffbd2e] border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
                <div className="w-4 h-4 rounded-full bg-[#27c93f] border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
              </div>
            </div>

            <div className="p-8 bg-white text-black space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FFD23F] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-3xl font-black">2+</div>
                  <div className="text-[10px] font-bold uppercase mt-1">
                    Experience
                  </div>
                </div>
                <div className="bg-[#FFA552] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-3xl font-black">3+</div>
                  <div className="text-[10px] font-bold uppercase mt-1">
                    Projects
                  </div>
                </div>
              </div>

              <div className="border-4 border-black p-4 h-40 flex items-end justify-between gap-3 bg-gray-50">
                {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`flex-1 border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] ${i === 5 ? "bg-[#ff5f56]" : "bg-[#93c5fd]"}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
