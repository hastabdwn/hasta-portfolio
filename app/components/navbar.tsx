'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import { usePathname } from 'next/navigation'
import { menu } from '../data.js'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <header className='flex items-center justify-between text-black dark:text-white dark:bg-[#3c3c3c] bg-white p-2 fixed left-0 right-0 top-0 z-50'>
            <nav className='w-full max-w-5xl flex items-center justify-between mx-auto'>
                {/* Logo & Desktop Menu */}
                <div className='flex items-center space-x-2'>
                    <Link href="/" className='text-lg font-bold'>H</Link>
                    <div className='hidden md:flex items-center space-x-2'>
                        {menu.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`px-1 hover:underline decoration-wavy ${pathname === item.href ? 'underline decoration-wavy' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Theme Toggle & Mobile Menu Button */}
                <div className='flex items-center space-x-2'>
                    <ThemeToggle />
                    <button
                        className='md:hidden bg-white dark:bg-[#3c3c3c] text-black pointers flex items-center'
                        onClick={toggleMobileMenu}
                        type="button"
                        aria-label="Open mobile menu"
                    >
                        <span className='h-6 w-6 text-black dark:text-white'>☰</span>
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden m-[10px] dark:bg-[#3c3c3c] text-black dark:text-white z-10 absolute top-14 left-0 right-0 bg-white p-1 rounded-xl transition-all border border-gray-500 dark:border-gray-100">
                        <div className='flex flex-col p-4 text-center'>
                            {menu.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`block py-2 px-2 hover:underline decoration-wavy dark:text-white ${pathname === item.href ? 'underline decoration-wavy' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}