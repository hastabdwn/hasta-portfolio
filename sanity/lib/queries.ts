import { client } from './client'

export interface SanityProject {
  _id: string
  title: string
  slug: string
  description?: string
  body?: any[] // PortableText
  thumbnail?: any
  category?: string
  tools?: string[]
  githubUrl?: string
  demoUrl?: string
  accentColor?: string
  order?: number
}

// Ambil semua project (untuk halaman utama)
export async function getAllProjects(): Promise<SanityProject[]> {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      thumbnail,
      category,
      tools,
      githubUrl,
      demoUrl,
      accentColor
    }
  `)
}

// Ambil satu project berdasarkan slug (untuk halaman detail)
export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      body,
      thumbnail,
      category,
      tools,
      githubUrl,
      demoUrl,
      accentColor
    }`,
    { slug }
  )
}

// Ambil semua slug (untuk generateStaticParams)
export async function getAllProjectSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(`*[_type == "project"]{ "slug": slug.current }`)
}