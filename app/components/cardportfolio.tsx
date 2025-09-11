import { portfolio } from '../data'

export default function CardPortfolio() {
  return (
    <>
      {portfolio.map((project) => (
        <div key={project.id} className="rounded overflow-hidden dark:bg-[#3c3c3c] text-black dark:text-white border border-gray-500 dark:border-none bg-white">
          <div className="p-4">
            <h2 className="font-bold text-lg">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.view} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
          </div>
        </div>
      ))}
    </>
  )
}
