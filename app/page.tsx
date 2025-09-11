import Seo from "./components/Seo";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Seo
        title="Home | Hasta Portfolio"
        description="Ini adalah halaman utama Hasta Portfolio"
        url="https://hasta-portfolio.vercel.app/"
      />
      <div className="min-h-dvh p-2 flex justify-center items-center">
        <div className="py-16 space-y-4 w-full max-w-5xl text-center">
          <h1 className="text-2xl font-semibold mb-2">Hi, I&#39;m Hasta.</h1>
          <h1 className="text-2xl font-semibold mb-2">Frontend Developer & Data Analyst</h1>
          <p className="text-gray-600 dark:text-white">I design and develop web applications that merge intuitive interfaces with data-driven functionality, delivering solutions that are both user-friendly and high-performing.</p>
          <div className='space-x-2'>
            <Link href="/about" className="px-3 py-1 text-white bg-[#ff4040] dark:bg-[#3c3c3c] rounded-full text-sm">
              Learn more about me
            </Link>
            <Link href="/portfolio" className="px-3 py-1 text-white bg-[#ff4040] dark:bg-[#3c3c3c] rounded-full text-sm">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
