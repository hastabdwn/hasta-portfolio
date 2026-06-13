import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60; // Revalidate every 60 seconds for ISR (Incremental Static Regeneration)

export default async function Projects() {
  const projectsData = await getAllProjects();

  return (
    <section
      id="project"
      className="py-20 bg-white dark:bg-[#252525] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-12 tracking-tighter dark:text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project._id}
              className="group bg-white dark:bg-[#2d2d2d] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <div className="h-56 border-b-4 border-black overflow-hidden relative bg-white dark:bg-[#1a1a1a]">
                {!project.thumbnail && (
                  <div
                    className="absolute inset-0 flex items-center justify-center font-black text-2xl opacity-20 z-0 text-center px-4"
                    style={{
                      backgroundColor: project.accentColor || "#E8D5C4",
                    }}
                  >
                    {project.title}
                  </div>
                )}
                {project.thumbnail && (
                  <Image
                    src={urlFor(project.thumbnail).width(800).url()}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105 z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-black dark:text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm font-medium mb-6 dark:text-gray-300 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.tools || []).map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 border-2 border-black text-[10px] font-black bg-[#E8D5C4] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* GitHub, Live Demo, View Details sejajar */}
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-xs font-black"
                    >
                      <FaGithub size={16} className="text-black" />
                      <span className="text-black">GitHub</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 border-2 border-black bg-[#93c5fd] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-xs font-black"
                    >
                      <HiOutlineExternalLink size={16} className="text-black" />
                      <span className="text-black">Live Demo</span>
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/btn inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-black text-sm text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                    style={{
                      backgroundColor: project.accentColor || "#E8D5C4",
                    }}
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
