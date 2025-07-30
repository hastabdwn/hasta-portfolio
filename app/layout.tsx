import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { ThemeProvider } from './components/theme-provider'

export const metadata: Metadata = {
  title: "Hasta",
  description: "Web Portfolio of Hasta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#282828] dark:text-white">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
