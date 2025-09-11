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
        <header className='flex items-center justify-between text-black dark:text-white dark:bg-[#282828] transition-all bg-white p-2 fixed left-0 right-0 top-0 z-50'>
            <nav className='w-full max-w-5xl flex items-center justify-between mx-auto'>
                {/* Logo & Desktop Menu */}
                <div className='flex items-center space-x-2 text-xl'>
                    <Link href="/" className='text-xl font-bold'>Hasta</Link>
                    <div className='hidden md:flex items-center space-x-2'>
                        {menu.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`px-1 hover:underline ${pathname === item.href ? 'underline' : ''}`}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Theme Toggle & Mobile Menu Button */}
                <div className='flex justify-center items-center space-x-2 text-xl'>
                    <ThemeToggle />
                    <button
                        className='md:hidden bg-white dark:bg-[#282828] transition-all text-black cursor-pointer text-xl flex justify-center items-center'
                        onClick={toggleMobileMenu}
                        type="button"
                        aria-label="Open mobile menu">
                        <span className='text-black dark:text-white text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span>
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden m-[10px] dark:bg-[#3c3c3c] text-black dark:text-white z-10 absolute top-14 left-0 right-0 bg-white p-1 rounded-xl transition-all border border-gray-500 dark:border-none">
                        <div className='flex flex-col p-4 text-center'>
                            {menu.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`block py-2 px-2 hover:underline text-xl dark:text-white ${pathname === item.href ? 'underline' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}>
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
