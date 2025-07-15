"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Code, Gamepad2, Palette, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

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
    }
    status: "ACTIVE" | "BUSY" | "AWAY"
    glitchName?: string
}

const crewMembers: CrewMember[] = [
    {
        id: "1",
        name: "MEMBER 1",
        role: "Lead Developer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["React", "TypeScript", "Node.js", "Game Dev"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member1@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "M3MB3R 1"
    },
    {
        id: "2",
        name: "MEMBER 2",
        role: "Creative Director",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["UI/UX", "Figma", "Branding", "Motion"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member2@buzzywizzy.com"
        },
        status: "BUSY",
        glitchName: "M3MB3R 2"
    },
    {
        id: "3",
        name: "MEMBER 3",
        role: "Game Designer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Unity", "C#", "Level Design", "Narrative"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member3@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "M3MB3R 3"
    },
    {
        id: "4",
        name: "MEMBER 4",
        role: "Sound Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Audio", "Music", "Sound FX", "Mixing"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            email: "member4@buzzywizzy.com"
        },
        status: "AWAY",
        glitchName: "M3MB3R 4"
    },
    {
        id: "5",
        name: "MEMBER 5",
        role: "Backend Developer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Python", "Django", "PostgreSQL", "AWS"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member5@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "M3MB3R 5"
    },
    {
        id: "6",
        name: "MEMBER 6",
        role: "Frontend Developer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Vue.js", "JavaScript", "CSS", "HTML"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member6@buzzywizzy.com"
        },
        status: "BUSY",
        glitchName: "M3MB3R 6"
    },
    {
        id: "7",
        name: "MEMBER 7",
        role: "Data Scientist",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Python", "Machine Learning", "TensorFlow", "Analytics"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member7@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "M3MB3R 7"
    },
    {
        id: "8",
        name: "MEMBER 8",
        role: "DevOps Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member8@buzzywizzy.com"
        },
        status: "AWAY",
        glitchName: "M3MB3R 8"
    },
    {
        id: "9",
        name: "MEMBER 9",
        role: "Product Manager",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Strategy", "Analytics", "Agile", "Leadership"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member9@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "M3MB3R 9"
    },
    {
        id: "10",
        name: "MEMBER 10",
        role: "QA Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Testing", "Automation", "Selenium", "Quality"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member10@buzzywizzy.com"
        },
        status: "BUSY",
        glitchName: "M3MB3R 10"
    },
    {
        id: "11",
        name: "MEMBER 11",
        role: "Security Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Cybersecurity", "Penetration Testing", "OWASP", "Compliance"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member11@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "M3MB3R 11"
    },
    {
        id: "12",
        name: "MEMBER 12",
        role: "Mobile Developer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["React Native", "Swift", "Kotlin", "Mobile"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member12@buzzywizzy.com"
        },
        status: "AWAY",
        glitchName: "M3MB3R 12"
    },
    {
        id: "13",
        name: "MEMBER 13",
        role: "Technical Writer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Documentation", "Technical Writing", "API Docs", "Content"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member13@buzzywizzy.com"
        },
        status: "ACTIVE",
        glitchName: "M3MB3R 13"
    },
    {
        id: "14",
        name: "MEMBER 14",
        role: "System Administrator",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        expertise: ["Linux", "Networking", "Server Management", "Infrastructure"],
        avatar: "/placeholder.svg?height=200&width=200",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member14@buzzywizzy.com"
        },
        status: "BUSY",
        glitchName: "M3MB3R 14"
    }
]

export default function CrewSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [glitchingMember, setGlitchingMember] = useState<string | null>(null)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(crewMembers.length / 2))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(crewMembers.length / 2)) % Math.ceil(crewMembers.length / 2))
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

    const getExpertiseIcon = (skill: string) => {
        if (skill.includes("React") || skill.includes("TypeScript") || skill.includes("Node")) return <Code className="h-3 w-3" />
        if (skill.includes("Game") || skill.includes("Unity")) return <Gamepad2 className="h-3 w-3" />
        if (skill.includes("UI") || skill.includes("Design") || skill.includes("Branding")) return <Palette className="h-3 w-3" />
        return <Zap className="h-3 w-3" />
    }

    return (
        <section id="crew" className="py-16 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
                <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-white/10 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-white/5 -rotate-12 animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-wider">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">CREW</span>
                    </h2>
                    <p className="text-white/60 text-sm uppercase tracking-wider mb-4">
                        Digital rebels shaping the future
                    </p>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
                </div>

                {/* Crew Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {crewMembers.slice(currentIndex * 2, currentIndex * 2 + 2).map((member, index) => (
                            <Card
                                key={member.id}
                                className={`glassmorphic-card p-0 overflow-hidden group cursor-pointer member-card ${index === 0 ? 'member-slide-enter' : 'member-slide-enter-reverse'
                                    }`}
                                onClick={() => triggerGlitch(member.id)}
                            >
                                <div className="relative">
                                    {/* Member Avatar */}
                                    <div className="aspect-video relative overflow-hidden">
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
                                        {glitchingMember === member.id && (
                                            <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                                                <div className="text-xl md:text-2xl font-bold text-white breaking-silence">
                                                    {member.glitchName}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Member Info */}
                                    <div className="p-5">
                                        <h3 className="text-lg md:text-xl font-bold mb-2 tracking-wider glitch-hover">
                                            {glitchingMember === member.id ? member.glitchName : member.name}
                                        </h3>
                                        <p className="text-white/60 mb-2 text-sm uppercase tracking-wide font-mono">
                                            {member.role}
                                        </p>
                                        <p className="text-white/80 mb-3 text-sm leading-relaxed">
                                            {member.bio}
                                        </p>

                                        {/* Expertise Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {member.expertise.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skillIndex}
                                                    variant="outline"
                                                    className="text-xs border-white/20 text-white/70 hover:border-white/40 hover:text-white expertise-badge"
                                                >
                                                    {getExpertiseIcon(skill)}
                                                    <span className="ml-1">{skill}</span>
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex space-x-2">
                                            {member.social.github && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="p-2 hover:bg-white/10 hover:text-white"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Github className="h-4 w-4" />
                                                </Button>
                                            )}
                                            {member.social.linkedin && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="p-2 hover:bg-white/10 hover:text-white"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Linkedin className="h-4 w-4" />
                                                </Button>
                                            )}
                                            {member.social.email && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="p-2 hover:bg-white/10 hover:text-white"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Mail className="h-4 w-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Navigation */}
                    {crewMembers.length > 2 && (
                        <div className="flex justify-center items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={prevSlide}
                                className="p-2 hover:bg-white/10 hover:text-white border border-white/20"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>

                            <div className="flex space-x-2">
                                {Array.from({ length: Math.ceil(crewMembers.length / 2) }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/30'
                                            }`}
                                    />
                                ))}
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={nextSlide}
                                className="p-2 hover:bg-white/10 hover:text-white border border-white/20"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}