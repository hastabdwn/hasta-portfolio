import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { ThemeProvider } from './components/theme-provider'

export const metadata: Metadata = {
  title: {
    default: "Hasta Portfolio",
    template: "%s | Hasta Portfolio",
  },
  description: "Web Portfolio",
  keywords: ["Next.js 15", "SEO", "TailwindCSS", "React"],
  openGraph: {
    title: "Hasta Portfolio",
    description: "Web Portfolio",
    url: "https://hasta-portfolio.vercel.app/",
    siteName: "Hasta Portfolio",
    images: [
      {
        url: "https://hasta-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview SEO Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasta Portfolio",
    description: "Web Portfolio",
    images: ["https://hasta-portfolio.vercel.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hasta-portfolio.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#282828] dark:text-white transition-all">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
