"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Code, Gamepad2, Palette, Zap, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface CrewMember {
    id: string
    name: string
    role: string
    bio: string
    expertise: string[]
    avatar: string
    social: {
        github?: string
        linkedin?: string
        email?: string
        facebook?: string
        twitter?: string
        instagram?: string
    }
    status: "ACTIVE" | "BUSY" | "AWAY"
    glitchName?: string
}

const crewMembers: CrewMember[] = [
    {
        id: "1",
        name: "Mirza Muhamad",
        role: "CPO",
        bio: "Chief Product Officer leading product strategy and innovation.",
        expertise: ["Product Strategy", "Innovation", "Leadership"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com",
            email: "mirza@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "M1RZ4 M"
    },
    {
        id: "2",
        name: "Shafiq Husein",
        role: "CEO",
        bio: "Chief Executive Officer driving the company vision and growth.",
        expertise: ["Leadership", "Strategy", "Vision"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            linkedin: "https://linkedin.com",
            email: "shafiq@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "SH4F1Q H"
    },
    {
        id: "3",
        name: "Hironimus Rian",
        role: "COO",
        bio: "Chief Operating Officer managing daily operations and efficiency.",
        expertise: ["Operations", "Management", "Efficiency"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com",
            email: "hironimus@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "H1R0N1MUS R"
    },
    {
        id: "4",
        name: "Gyan M",
        role: "CTO",
        bio: "Chief Technology Officer overseeing technical strategy and development.",
        expertise: ["Technology", "Development", "Architecture"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com",
            email: "gyan@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "GY4N M"
    },
    {
        id: "5",
        name: "Bayu Nugroho",
        role: "CCO",
        bio: "Chief Creative Officer leading creative direction and design.",
        expertise: ["Creative", "Design", "Branding"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            email: "bayu@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "B4YU N"
    }
]

export default function CrewSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [glitchingMember, setGlitchingMember] = useState<string | null>(null)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % crewMembers.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + crewMembers.length) % crewMembers.length)
    }

    const triggerGlitch = (memberId: string) => {
        setGlitchingMember(memberId)
        setTimeout(() => {
            setGlitchingMember(null)
        }, 500)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "ACTIVE": return "bg-green-500/20 text-green-400 border-green-500/30"
            case "BUSY": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
            case "AWAY": return "bg-red-500/20 text-red-400 border-red-500/30"
            default: return "bg-white/20 text-white border-white/30"
        }
    }

    return (
        <motion.section 
            id="crew" 
            className="py-16 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                ></motion.div>
                <motion.div 
                    className="absolute top-1/3 right-1/4 w-48 h-48 border border-white/10 rotate-45"
                    animate={{ 
                        rotate: [45, 405],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-white/5 -rotate-12"
                    animate={{ 
                        rotate: [-12, 348],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                    }}
                ></motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold mb-3 tracking-wider"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">CREW</span>
                    </motion.h2>
                    <motion.p 
                        className="text-white/60 text-sm uppercase tracking-wider mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Digital rebels shaping the future
                    </motion.p>
                    <motion.div 
                        className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    ></motion.div>
                </motion.div>

                {/* Crew Carousel */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Navigation Arrows */}
                        <motion.div 
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={prevSlide}
                                    className="p-3 hover:bg-white/10 hover:text-white border border-white/20 rounded-full bg-black/50 backdrop-blur-sm"
                                    aria-label="Previous crew member"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={nextSlide}
                                    className="p-3 hover:bg-white/10 hover:text-white border border-white/20 rounded-full bg-black/50 backdrop-blur-sm"
                                    aria-label="Next crew member"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Crew Members Grid */}
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {crewMembers.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="group cursor-pointer"
                                    onClick={() => triggerGlitch(member.id)}
                                >
                                    <Card className="glassmorphic-card p-0 overflow-hidden member-card h-full">
                                        <div className="relative">
                                            {/* Member Avatar - Square */}
                                            <div className="aspect-square relative overflow-hidden">
                                                <Image
                                                    src={member.avatar}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                                                {/* Status Badge */}
                                                <Badge className={`absolute top-3 right-3 text-xs font-mono ${getStatusColor(member.status)}`}>
                                                    {member.status}
                                                </Badge>

                                                {/* Glitch Overlay */}
                                                <AnimatePresence>
                                                    {glitchingMember === member.id && (
                                                        <motion.div 
                                                            className="absolute inset-0 bg-black/80 flex items-center justify-center"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <motion.div 
                                                                className="text-lg font-bold text-white breaking-silence"
                                                                initial={{ scale: 0.8, rotate: -5 }}
                                                                animate={{ scale: 1, rotate: 0 }}
                                                                exit={{ scale: 0.8, rotate: 5 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                {member.glitchName}
                                                            </motion.div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Member Info */}
                                            <div className="p-4 text-center">
                                                <h3 className="text-lg font-bold mb-1 tracking-wider glitch-hover text-white">
                                                    {glitchingMember === member.id ? member.glitchName : member.name}
                                                </h3>
                                                <p className="text-white/60 mb-3 text-sm uppercase tracking-wide font-mono">
                                                    {member.role}
                                                </p>

                                                {/* Social Links */}
                                                <div className="flex justify-center space-x-2">
                                                    {member.social.facebook && (
                                                        <motion.div
                                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="p-2 hover:bg-white/10 hover:text-white"
                                                                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                                                            >
                                                                <Facebook className="h-4 w-4" />
                                                            </Button>
                                                        </motion.div>
                                                    )}
                                                    {member.social.twitter && (
                                                        <motion.div
                                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="p-2 hover:bg-white/10 hover:text-white"
                                                                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                                                            >
                                                                <Twitter className="h-4 w-4" />
                                                            </Button>
                                                        </motion.div>
                                                    )}
                                                    {member.social.instagram && (
                                                        <motion.div
                                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="p-2 hover:bg-white/10 hover:text-white"
                                                                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                                                            >
                                                                <Instagram className="h-4 w-4" />
                                                            </Button>
                                                        </motion.div>
                                                    )}
                                                    {member.social.linkedin && (
                                                        <motion.div
                                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="p-2 hover:bg-white/10 hover:text-white"
                                                                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                                                            >
                                                                <Linkedin className="h-4 w-4" />
                                                            </Button>
                                                        </motion.div>
                                                    )}
                                                    {member.social.email && (
                                                        <motion.div
                                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="p-2 hover:bg-white/10 hover:text-white"
                                                                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                                                            >
                                                                <Mail className="h-4 w-4" />
                                                            </Button>
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Dots Indicator */}
                        <motion.div 
                            className="flex justify-center items-center space-x-2 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            viewport={{ once: true }}
                        >
                            {crewMembers.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                                    aria-label={`Go to member ${index + 1}`}
                                    whileHover={{ scale: 1.5 }}
                                    whileTap={{ scale: 0.8 }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}