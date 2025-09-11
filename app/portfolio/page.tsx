import Seo from "../components/Seo"
import CardPortfolio from '@/app/components/cardportfolio'

export default function Portfolio() {
  return (
    <div>
      <Seo
        title="Portfolio | Hasta Portfolio"
        description="Halaman Portfolio dari Hasta Portfolio"
        url="https://hasta-portfolio.vercel.app/portfolio"
      />
      <div className="min-h-dvh p-2 flex justify-center">
        <div className="py-16 space-y-4 w-full max-w-5xl">
          <h1 className="text-2xl font-semibold mb-2">Portfolio</h1>
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CardPortfolio />
          </div>
          {/* Responsive Grid */}
        </div>
      </div>
    </div>
  )
}
