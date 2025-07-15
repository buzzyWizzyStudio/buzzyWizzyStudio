"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between max-w-7xl">
                <div className="text-xl font-bold tracking-wider glitch-hover">
                    BUZZY<span className="text-white/60">WIZZY</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#about" className="hover:text-white/80 transition-colors text-sm font-medium tracking-wider">
                        ABOUT
                    </a>
                    <a href="#projects" className="hover:text-white/80 transition-colors text-sm font-medium tracking-wider">
                        PROJECTS
                    </a>
                    <a href="#crew" className="hover:text-white/80 transition-colors text-sm font-medium tracking-wider">
                        CREW
                    </a>
                    <a href="#contact" className="hover:text-white/80 transition-colors text-sm font-medium tracking-wider">
                        CONNECT
                    </a>
                </div>

                {/* Desktop CTA Button */}
                <Button
                    variant="outline"
                    className="hidden md:flex border-white/20 text-white hover:bg-white hover:text-black bg-transparent font-mono text-xs tracking-wider"
                >
                    JOIN US
                </Button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white p-2"
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10">
                    <div className="container mx-auto px-6 py-4 space-y-3 max-w-7xl">
                        <a
                            href="#about"
                            className="block hover:text-white/80 transition-colors text-sm font-medium tracking-wider"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ABOUT
                        </a>
                        <a
                            href="#projects"
                            className="block hover:text-white/80 transition-colors text-sm font-medium tracking-wider"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            PROJECTS
                        </a>
                        <a
                            href="#crew"
                            className="block hover:text-white/80 transition-colors text-sm font-medium tracking-wider"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            CREW
                        </a>
                        <a
                            href="#contact"
                            className="block hover:text-white/80 transition-colors text-sm font-medium tracking-wider"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            CONNECT
                        </a>
                        <Button
                            variant="outline"
                            className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent font-mono text-xs tracking-wider mt-3"
                        >
                            JOIN US
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
