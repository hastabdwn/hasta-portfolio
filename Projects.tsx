"use client";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="project"
      className="py-20 bg-[#FFFDF0] dark:bg-[#252525] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-12 tracking-tighter dark:text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#2d2d2d] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              {/* Project Image Container */}
              <div
                className="h-56 border-b-4 border-black overflow-hidden relative"
                style={{ backgroundColor: project.accentColor }}
              >
                <div className="absolute inset-0 flex items-center justify-center font-black text-2xl opacity-20 z-0 text-center px-4">
                  {project.title}
                </div>

                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-black dark:text-white leading-tight">
                    {project.title}
                  </h3>
                  <span className="shrink-0 px-2 py-1 border-2 border-black text-[10px] font-black bg-[#FFD23F] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm font-medium mb-6 dark:text-gray-300 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-4 mb-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-3 py-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-xs font-black"
                    >
                      <FaGithub size={16} className="text-black" />
                      <span className="text-black">GitHub</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-3 py-2 border-2 border-black bg-[#93c5fd] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-xs font-black"
                    >
                      <HiOutlineExternalLink size={16} className="text-black" />
                      <span className="text-black">Live Demo</span>
                    </a>
                  )}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 border-2 border-black text-[10px] font-black bg-[#E8D5C4] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Detail Button */}
                <div className="mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/btn inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-black text-sm text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    View Details
                    <ArrowUpRight
                      size={16}
                      className="group-hover/btn:rotate-45 transition-transform"
                      strokeWidth={3}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
