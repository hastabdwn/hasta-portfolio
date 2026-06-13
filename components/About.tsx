import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#252525] text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-5xl font-black mb-12 dark:text-white">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1">
            <div className="h-full bg-[#F4F4F0] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xl font-medium leading-relaxed text-black">
                {aboutData.description}
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="h-full bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex flex-wrap gap-3">
                {aboutData.allSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-5 py-2 border-2 border-black rounded-full font-black text-sm text-black bg-[#FFD23F] hover:bg-[#FFA552] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
