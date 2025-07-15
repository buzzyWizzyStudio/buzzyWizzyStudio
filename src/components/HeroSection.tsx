"use client"

import { Button } from "@/components/ui/button"
import { Play, Users } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
    const [glitchText, setGlitchText] = useState("PLACEHOLDER TEXT")

    const glitchVariants = [
        "PLACEHOLDER TEXT",
        "PL4C3H0LD3R T3XT",
        "P̴L̴A̴C̴E̴H̴O̴L̴D̴E̴R̴ ̴T̴E̴X̴T̴",
        "PLACEHOLDER TEXT"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * glitchVariants.length)
            setGlitchText(glitchVariants[randomIndex])

            setTimeout(() => {
                setGlitchText("PLACEHOLDER TEXT")
            }, 150)
        }, 3000)

        return () => clearInterval(interval)
    }, [glitchVariants])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-1500"></div>
            </div>

            {/* Geometric Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/10 -rotate-12 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rotate-12 animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
                {/* Main Content */}
                <div className="space-y-6 md:space-y-8">
                    {/* Terminal-style Header
                    <div className="glassmorphic-card p-4 md:p-6 max-w-3xl mx-auto">
                        <div className="flex items-center justify-start mb-4 text-white/40">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500/50 rounded-full"></div>
                            </div>
                            <div className="ml-4 text-xs font-mono">~/buzzywizzy/</div>
                        </div>
                        <div className="text-left font-mono text-sm md:text-base">
                            <span className="text-green-400">$</span> <span className="text-white/60">echo</span> <span className="text-white">"Welcome to the future"</span>
                        </div>
                    </div> */}

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
                            <span className="block text-white/90 mb-2">BUZZY</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60 breaking-silence">
                                {glitchText}
                            </span>
                        </h1>
                        <div className="w-32 h-0.5 bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
                    </div>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br className="hidden sm:block" />
                        <span className="text-white/50">Sed do eiusmod tempor incididunt ut labore.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-white/90 font-mono font-bold text-sm tracking-wider px-8 py-3"
                        >
                            <Play className="mr-2 h-4 w-4" />
                            EXPLORE WORK
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-mono bg-transparent text-sm tracking-wider px-8 py-3"
                        >
                            <Users className="mr-2 h-4 w-4" />
                            JOIN TEAM
                        </Button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="glassmorphic-card p-4 md:p-6 text-center group hover:bg-white/10 transition-all duration-300">
                            <div className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-white/90">50+</div>
                            <div className="text-xs text-white/60 uppercase tracking-wider font-mono">Projects</div>
                        </div>
                        <div className="glassmorphic-card p-4 md:p-6 text-center group hover:bg-white/10 transition-all duration-300">
                            <div className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-white/90">∞</div>
                            <div className="text-xs text-white/60 uppercase tracking-wider font-mono">Ideas</div>
                        </div>
                        <div className="glassmorphic-card p-4 md:p-6 text-center group hover:bg-white/10 transition-all duration-300">
                            <div className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-white/90">24/7</div>
                            <div className="text-xs text-white/60 uppercase tracking-wider font-mono">Creating</div>
                        </div>
                        <div className="glassmorphic-card p-4 md:p-6 text-center group hover:bg-white/10 transition-all duration-300">
                            <div className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-white/90">100%</div>
                            <div className="text-xs text-white/60 uppercase tracking-wider font-mono">Passion</div>
                        </div>
                    </div>

                    {/* Quick Links
                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                        <a href="#about" className="text-white/60 hover:text-white text-sm font-mono tracking-wider transition-colors">
                            &gt; ABOUT
                        </a>
                        <a href="#projects" className="text-white/60 hover:text-white text-sm font-mono tracking-wider transition-colors">
                            &gt; PROJECTS
                        </a>
                        <a href="#crew" className="text-white/60 hover:text-white text-sm font-mono tracking-wider transition-colors">
                            &gt; CREW
                        </a>
                        <a href="#contact" className="text-white/60 hover:text-white text-sm font-mono tracking-wider transition-colors">
                            &gt; CONTACT
                        </a>
                    </div> */}
                </div>
            </div>

            {/* Scroll Indicator
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center space-y-2">
                    <ArrowRight className="h-4 w-4 text-white/40 rotate-90" />
                    <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
                </div>
            </div> */}
        </section>
    )
}
