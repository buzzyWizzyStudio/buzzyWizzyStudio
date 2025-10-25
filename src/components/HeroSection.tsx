"use client"

import { Button } from "@/components/ui/button"
import { Play, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroSection() {
    const [glitchText, setGlitchText] = useState("PLACEHOLDER TEXT")
    const [currentSlide, setCurrentSlide] = useState(0)

    const glitchVariants = [
        "PLACEHOLDER TEXT",
        "PL4C3H0LD3R T3XT",
        "P̴L̴A̴C̴E̴H̴O̴L̴D̴E̴R̴ ̴T̴E̴X̴T̴",
        "PLACEHOLDER TEXT"
    ]

    // Carousel data with placeholder content
    const carouselSlides = [
        {
            id: 1,
            title: "VOID",
            subtitle: "Visual Novel",
            image: "https://picsum.photos/910/336?random=1",
            link: "#",
            description: "Developer: Placeholder Studio. Publisher: Placeholder Games Inc."
        },
        {
            id: 2,
            title: "ANIMA SPECTRA",
            subtitle: "Adventure Game",
            image: "https://picsum.photos/910/336?random=2",
            link: "#",
            description: "Developer: Placeholder Studio. Publisher: Placeholder Games Inc."
        },
        {
            id: 3,
            title: "XAGIA WARS",
            subtitle: "Strategy Game",
            image: "https://picsum.photos/910/336?random=3",
            link: "#",
            description: "Developer: Placeholder Studio. Publisher: Placeholder Games Inc."
        },
        {
            id: 4,
            title: "FIRESIDE",
            subtitle: "Interactive Story",
            image: "https://picsum.photos/910/336?random=4",
            link: "#",
            description: "Developer: Placeholder Studio. Publisher: Placeholder Games Inc."
        },
        {
            id: 5,
            title: "STELLA GALE",
            subtitle: "The Trials of Faith",
            image: "https://picsum.photos/910/336?random=5",
            link: "#",
            description: "Developer: Placeholder Studio. Publisher: Placeholder Games Inc."
        },
        {
            id: 6,
            title: "GARUDA",
            subtitle: "Action RPG",
            image: "https://picsum.photos/910/336?random=6",
            link: "#",
            description: "Developer: Placeholder Studio. Publisher: Placeholder Games Inc."
        }
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

    // Auto-play carousel
    useEffect(() => {
        const carouselInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
        }, 5000)

        return () => clearInterval(carouselInterval)
    }, [carouselSlides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
    }

    return (
        <>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8">
            {/* Background Image */}
            <div className="absolute top-0 left-0 right-0 h-[350px] z-0">
                <motion.div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                                <rect width="100%" height="100%" fill="#6b7280"/>
                                <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" opacity="0.3"/>
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#4b5563;stop-opacity:0.5" />
                                        <stop offset="50%" style="stop-color:#6b7280;stop-opacity:0.3" />
                                        <stop offset="100%" style="stop-color:#9ca3af;stop-opacity:0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        `)}')`
                    }}
                    initial={{ 
                        opacity: 0, 
                        scale: 1.1,
                        filter: "brightness(1.2)"
                    }}
                    animate={{ 
                        opacity: [0, 0.3, 0.25, 0.3],
                        scale: [1.1, 1, 1.02, 1],
                        filter: [
                            "brightness(1.2)", 
                            "brightness(1)", 
                            "brightness(0.8)", 
                            "brightness(1)"
                        ]
                    }}
                    transition={{ 
                        duration: 2.5,
                        ease: "easeOut",
                        times: [0, 0.6, 0.8, 1]
                    }}
                >
                    {/* Flicker overlay for subtle dimming effect */}
                    <motion.div
                        className="absolute inset-0 bg-black"
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: [0, 0, 0.1, 0, 0.05, 0, 0.08, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.8, 1]
                        }}
                    />
                </motion.div>
            </div>
            
            {/* Animated Background Grid */}
            <motion.div 
                className="absolute inset-0 opacity-[0.02]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.02 }}
                transition={{ duration: 2 }}
            >
                <motion.div 
                    className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
                    animate={{ 
                        backgroundPosition: ["0px 0px", "50px 50px"],
                    }}
                    transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                ></motion.div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[
                    { top: "25%", left: "25%", size: "w-2 h-2", opacity: "bg-white/20", delay: 0 },
                    { top: "33%", right: "33%", size: "w-1 h-1", opacity: "bg-white/30", delay: 0.5 },
                    { bottom: "25%", left: "33%", size: "w-1.5 h-1.5", opacity: "bg-white/15", delay: 1 },
                    { bottom: "33%", right: "25%", size: "w-1 h-1", opacity: "bg-white/25", delay: 1.5 }
                ].map((dot, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${dot.size} ${dot.opacity} rounded-full`}
                        style={{ 
                            top: dot.top, 
                            left: dot.left, 
                            right: dot.right, 
                            bottom: dot.bottom 
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 3,
                            delay: dot.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Geometric Background Elements */}
            <div className="absolute inset-0 opacity-5">
                {[
                    { top: "80px", left: "40px", size: "w-32 h-32", rotation: 45, delay: 0 },
                    { bottom: "80px", right: "40px", size: "w-24 h-24", rotation: -12, delay: 1 },
                    { top: "50%", left: "50%", size: "w-64 h-64", rotation: 12, delay: 2, center: true }
                ].map((shape, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${shape.size} border border-white/10`}
                        style={{ 
                            top: shape.top, 
                            left: shape.left, 
                            right: shape.right, 
                            bottom: shape.bottom,
                            transform: shape.center ? "translate(-50%, -50%)" : "none"
                        }}
                        initial={{ opacity: 0, scale: 0, rotate: 0 }}
                        animate={{ 
                            opacity: [0, 0.05, 0],
                            scale: [0, 1, 0],
                            rotate: [0, shape.rotation + 360, shape.rotation]
                        }}
                        transition={{
                            duration: 8,
                            delay: shape.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl md:-mt-32">
                {/* Main Content */}
                <motion.div 
                    className="space-y-4 md:space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Main Heading */}
                    <motion.div 
                        className="space-y-1"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
                            <motion.span 
                                className="block text-white/90 mb-2"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                BUZZY
                            </motion.span>
                            <motion.span 
                                className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60 glitch-overlay"
                                data-text={glitchText}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                {glitchText}
                            </motion.span>
                        </h1>
                        <motion.div 
                            className="w-32 h-0.5 bg-gradient-to-r from-white/50 to-transparent mx-auto"
                            initial={{ width: 0 }}
                            animate={{ width: 128 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        ></motion.div>
                    </motion.div>

                    {/* Subheading */}
                    <motion.p 
                        className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br className="hidden sm:block" />
                        <span className="text-white/50">Sed do eiusmod tempor incididunt ut labore.</span>
                    </motion.p>
                </motion.div>
            </div>
        </section>

        {/* Carousel Banner Container */}
        <div className="w-full relative">
            <div className="relative w-full h-[480px] overflow-hidden bg-black/20 backdrop-blur-sm -mt-64">
                {/* Carousel Container */}
                <div className="relative w-full h-full">
                    <motion.div 
                        className="flex h-full"
                        animate={{ x: `-${currentSlide * 100}%` }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {carouselSlides.map((slide, index) => (
                            <div 
                                key={slide.id}
                                className="w-full h-full flex-shrink-0 relative group cursor-pointer"
                                onClick={() => window.open(slide.link, '_blank')}
                            >
                                {/* Slide Background Image */}
                                <div className="absolute inset-0">
                                    <img 
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                                </div>

                                {/* Slide Content Overlay with AnimatePresence */}
                                <div className="absolute inset-0 flex items-end justify-center pb-24 md:pb-20">
                                    <div className="text-center px-4">
                                        <AnimatePresence mode="wait">
                                            <motion.h3 
                                                key={`title-${currentSlide}`}
                                                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                {slide.title}
                                            </motion.h3>
                                        </AnimatePresence>
                                        
                                        <AnimatePresence mode="wait">
                                            <motion.p 
                                                key={`subtitle-${currentSlide}`}
                                                className="text-sm md:text-lg text-white/80 mb-2 md:mb-4"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.4, delay: 0.1 }}
                                            >
                                                {slide.subtitle}
                                            </motion.p>
                                        </AnimatePresence>
                                        
                                        {/* <AnimatePresence mode="wait">
                                            <motion.div 
                                                key={`steam-${currentSlide}`}
                                                className="bg-red-900/80 text-white px-4 py-2 rounded text-sm"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.4, delay: 0.2 }}
                                            >
                                                Available on Steam!
                                            </motion.div>
                                        </AnimatePresence> */}
                                    </div>
                                </div>

                                {/* Slide Info (Bottom) with AnimatePresence */}
                                <div className="absolute bottom-4 md:bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
                                    <AnimatePresence mode="wait">
                                        <motion.div 
                                            key={`description-${currentSlide}`}
                                            className="bg-black/60 text-white text-center py-2 px-4 rounded text-xs md:text-sm"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4, delay: 0.3 }}
                                        >
                                            {slide.description}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Slide Indicators */}
                    {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {carouselSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-white' 
                                        : 'bg-white/50 hover:bg-white/70'
                                }`}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}
