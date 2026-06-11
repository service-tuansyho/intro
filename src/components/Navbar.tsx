'use client'
import Link from 'next/link'
import { useState } from 'react'
import AnimatedLogo from './AnimatedLogo'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-700 bg-[#f3f4f6] backdrop-blur">
            <div className="mx-auto max-w-6xl px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
                            <AnimatedLogo className="w-16 h-16" />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#features" className="text-accent hover:text-[#000000] transition">
                            Features
                        </Link>
                        <Link href="/#how-it-works" className="text-accent hover:text-[#000000] transition">
                            How It Works
                        </Link>
                        <Link href="/#roadmap" className="text-accent hover:text-[#000000] transition">
                            Roadmap
                        </Link>
                        <Link href="/docs" className="text-accent hover:text-[#000000] transition">
                            Docs
                        </Link>
                        <Link href="https://app.carnobon.com/" className="rounded-full bg-[#ffffff] px-6 py-2 font-semibold text-[#000000] shadow-lg transition-colors">
                            Launch App
                        </Link>
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-3 border-t border-slate-700 pt-4">
                        <Link href="/#features" className="block text-accent hover:text-[#000000] transition">
                            Features
                        </Link>
                        <Link href="/#how-it-works" className="block text-accent hover:text-[#000000] transition">
                            How It Works
                        </Link>
                        <Link href="/#roadmap" className="block text-accent hover:text-[#000000] transition">
                            Roadmap
                        </Link>
                        <Link href="/docs" className="block text-accent hover:text-[#000000] transition">
                            Docs
                        </Link>
                        <button className="w-full rounded-full bg-[#ffffff] px-6 py-2 font-semibold text-[#000000] shadow-lg transition-colors">
                            Launch App
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}
