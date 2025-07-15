"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Gamepad2, Mail, ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import CrewSection from "@/components/CrewSection"

export default function BuzzyWizzyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-wider">ABOUT</h2>
            <p className="text-white/60 text-sm uppercase tracking-wider">Lorem ipsum dolor sit amet</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-base text-white/80 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-base text-white/60 mb-6 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glassmorphic-card p-4 text-center">
                  <Trophy className="h-6 w-6 mb-2 mx-auto" />
                  <h3 className="font-bold mb-1">QUALITY</h3>
                  <p className="text-sm text-white/60">Lorem ipsum dolor</p>
                </div>
                <div className="glassmorphic-card p-4 text-center">
                  <Gamepad2 className="h-6 w-6 mb-2 mx-auto" />
                  <h3 className="font-bold mb-1">INNOVATION</h3>
                  <p className="text-sm text-white/60">Consectetur adipiscing</p>
                </div>
              </div>
            </div>
            <div className="glassmorphic-card p-6">
              <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center">
                <Play className="h-12 w-12 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-wider">PROJECTS</h2>
            <p className="text-white/60 text-sm uppercase tracking-wider">Our latest work and experiments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Project Title",
                genre: "Game Development",
                status: "IN PROGRESS",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Project Title",
                genre: "Web Development",
                status: "COMPLETED",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Project Title",
                genre: "Mobile App",
                status: "IN PROGRESS",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((project, index) => (
              <Card key={index} className="glassmorphic-card p-0 overflow-hidden group cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-white/20 text-white border-white/20 text-xs">
                    {project.status}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 tracking-wider">{project.title}</h3>
                  <p className="text-white/60 mb-1 text-sm uppercase tracking-wide">{project.genre}</p>
                  <p className="text-white/80 mb-3 text-sm">{project.description}</p>
                  <Button variant="ghost" className="w-full justify-between text-white hover:bg-white/10 text-sm">
                    LEARN MORE
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CrewSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider">CONNECT</h2>
            <p className="text-white/60 text-sm uppercase tracking-wider mb-6">
              Ready to work together?
            </p>
            <p className="text-base text-white/80 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-mono font-bold text-sm tracking-wider">
                <Mail className="mr-2 h-4 w-4" />
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
