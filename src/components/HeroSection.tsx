"use client"

import { Button } from "@/components/ui/button"
import { Play, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MyNewProject from "../assets/jxBvZQ.png"
import Losmen from "../assets/VpUjY1.png"
import Tetra from "../assets/Jps9NB.png"
import PressTheBeat from "../assets/V_sfHB.jpg"
import Raturu from "../assets/n6WJ03.png"
import BG from '../assets/bg.png'

export default function HeroSection() {
    const [glitchText, setGlitchText] = useState("WIZZY STUDIO")
    const [currentSlide, setCurrentSlide] = useState(0)

    const glitchVariants = [
        "WIZZY STUDIO",
        "W1ZZY 5TUD10",
        "W̴I̴Z̴Z̴Y̴ ̴S̴T̴U̴D̴I̴O̴",
        "WIZZY STUDIO"
    ]

    // Carousel data with placeholder content
    const carouselSlides = [
        {
            id: 1,
            title: "My New Project (1)",
            subtitle: "Backroom Horror",
            image: MyNewProject,
            link: "https://buzzy-wizzy-studio.itch.io/my-new-project-1",
            description: "Adventure game where you play as a developer trapped inside your own digital creation."
        },
        {
            id: 2,
            title: "LOSMEN",
            subtitle: "Adventure Game",
            image: Losmen,
            link: "https://buzzy-wizzy-studio.itch.io/lost-man",
            description: "Kamu terdampar sendirian di dunia yang udah rusak. Nggak ada arah, nggak ada tujuan pasti, yang penting bertahan hidup."
        },
        {
            id: 3,
            title: "TETRA",
            subtitle: "Strategy Game",
            image: Tetra,
            link: "https://buzzy-wizzy-studio.itch.io/tetra",
            description: "What if Tetris wasn’t just a puzzle, but a battle?"
        },
        {
            id: 4,
            title: "PRESS THE BEAT",
            subtitle: "Interactive Story",
            image: PressTheBeat,
            link: "https://buzzy-wizzy-studio.itch.io/press-the-beat",
            description: "Developer: Placeholder Studio. Publisher: Placeholder Games Inc."
        },
        {
            id: 5,
            title: "RATURU: HOME FEVER",
            subtitle: "Horror Game",
            image: Raturu,
            link: "https://buzzy-wizzy-studio.itch.io/raturu-home-fever",
            description: "In RATURU : Home Fever, you step into the feverish dreams of a young child battling a high fever."
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * glitchVariants.length)
            setGlitchText(glitchVariants[randomIndex])

            setTimeout(() => {
                setGlitchText("WIZZY STUDIO")
            }, 150)
        }, 3000)

        return () => clearInterval(interval)
    }, [glitchVariants])

    // Auto-play carousel
    useEffect(() => {
        const carouselInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
        }, 10000)

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
                        backgroundImage: `url(${BG.src})`
                    }}
                    initial={{ 
                        opacity: 0, 
                        scale: 1.1
                    }}
                    animate={{ 
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ 
                        duration: 1.5,
                        ease: "easeOut"
                    }}
                >
                    {/* Subtle overlay for text readability */}
                    <div className="absolute inset-0 bg-black/20"></div>
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
                        "The art of making the imposible possible."
                        <br className="hidden sm:block" />
                        <span className="text-white/50">"We Don't Just Create Games, We Tell Stories."</span>
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
                            <motion.div 
                                key={slide.id}
                                className="w-full h-full flex-shrink-0 relative group cursor-pointer"
                                onClick={() => window.open(slide.link, '_blank')}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index === currentSlide ? 0.2 : 0 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Slide Background Image */}
                                <motion.div 
                                    className="absolute inset-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                >
                                    <motion.img 
                                        src={typeof slide.image === 'string' ? slide.image : slide.image.src}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1.2, filter: "brightness(0.7)" }}
                                        animate={{ 
                                            scale: 1, 
                                            filter: [
                                                "brightness(0.7)",
                                                "brightness(1)",
                                                "brightness(0.9)",
                                                "brightness(1)"
                                            ]
                                        }}
                                        transition={{ 
                                            duration: 2,
                                            ease: "easeOut",
                                            times: [0, 0.4, 0.7, 1]
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                    />
                                    <motion.div 
                                        className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    ></motion.div>
                                </motion.div>

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
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Navigation Arrows */}
                    <motion.div 
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                    >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={prevSlide}
                                className="p-3 hover:bg-white/10 hover:text-white border border-white/20 rounded-full bg-black/50 backdrop-blur-sm"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                    >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={nextSlide}
                                className="p-3 hover:bg-white/10 hover:text-white border border-white/20 rounded-full bg-black/50 backdrop-blur-sm"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </motion.div>
                    </motion.div>

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
