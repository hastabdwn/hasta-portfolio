import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import {
  getAllProjects,
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Hasta`,
    description: project.description,
  };
}

// Komponen untuk render image di dalam PortableText (body)
const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-6">
        <img
          src={urlFor(value).width(1000).url()}
          alt={value.alt || ""}
          className="w-full border-4 border-black"
        />
        {value.caption && (
          <p className="text-xs text-center mt-2 font-medium dark:text-gray-400">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const allProjects = await getAllProjects();
  const accent = project.accentColor || "#93c5fd";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-[#252525] transition-colors duration-300 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <Link
            href="/#project"
            className="inline-flex items-center gap-2 mb-10 px-4 py-2 border-2 border-black font-black text-sm bg-white dark:bg-[#2d2d2d] dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <ArrowLeft size={16} strokeWidth={3} />
            Back to Projects
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter dark:text-white mb-6">
            {project.title}
          </h1>

          {/* Thumbnail (tanpa kotak/border) */}
          <div className="relative w-full h-72 md:h-96 mb-10">
            {!project.thumbnail && (
              <div
                className="absolute inset-0 flex items-center justify-center font-black text-4xl opacity-10 text-black"
                style={{ backgroundColor: accent }}
              >
                {project.title}
              </div>
            )}
            {project.thumbnail && (
              <Image
                src={urlFor(project.thumbnail).width(1600).url()}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            )}
          </div>

          {/* Long Description (rich text body) */}
          {project.body && project.body.length > 0 && (
            <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white dark:bg-[#2d2d2d] p-8 mb-8 prose dark:prose-invert max-w-none">
              <PortableText value={project.body} components={ptComponents} />
            </div>
          )}

          {/* Bottom Nav */}
          <div className="flex justify-between items-center pt-4 border-t-4 border-black">
            <Link
              href="/#project"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black font-black text-sm bg-white dark:bg-[#2d2d2d] dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <ArrowLeft size={16} strokeWidth={3} />
              All Projects
            </Link>
            <div className="flex gap-3">
              {allProjects
                .filter((p) => p.slug !== project.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-3 border-2 border-black font-black text-xs text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    style={{ backgroundColor: p.accentColor || "#E8D5C4" }}
                  >
                    {p.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
