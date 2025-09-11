import Seo from "../components/Seo"
import { aboutMe, techStack, contact } from '../data.js'

export default function About() {
  return (
    <div className="min-h-dvh p-2 flex justify-center">
      <Seo
        title="About | Hasta Portfolio"
        description="Halaman About dari Hasta Portfolio"
        url="https://hasta-portfolio.vercel.app/about"
      />
      <div className="py-16 space-y-4 w-full max-w-5xl">
        {/* About Me */}
        <h1 className="text-2xl font-semibold mb-2">About Me</h1>
        {aboutMe.map((item, index) => (
          <p key={index} className="text-black dark:text-white text-left">{item.description}</p>
        ))}

        {/* Tech Stack */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((skill) => (
              <p key={skill.id} className="px-3 py-1 text-white bg-[#ff4040] dark:bg-[#3c3c3c] rounded-full">{skill.name}</p>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <div>
            {contact.map((item) => (
              <p key={item.id} className="text-black dark:text-white text-left">
                <a href={item.href} target='_blank' className="hover:underline">{item.name}</a>
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}