"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Gamepad2, Mail, ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import CrewSection from "@/components/CrewSection"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import MyNewProject from "../assets/jxBvZQ.png"
import Losmen from "../assets/VpUjY1.png"
import Tetra from "../assets/Jps9NB.png"
import PressTheBeat from "../assets/V_sfHB.jpg"
import Raturu from "../assets/n6WJ03.png"

export default function BuzzyWizzyPage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 320)
      setScrollPosition(newPosition)
      scrollContainerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
      const newPosition = Math.min(maxScroll, scrollPosition + 320)
      setScrollPosition(newPosition)
      scrollContainerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            className="text-center mb-10"
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
              ABOUT
            </motion.h2>
            <motion.p 
              className="text-white/60 text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              BUZZY WIZZY STUDIO
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-base text-white/80 mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Founded by a team of passionate developers and creative storytellers from President University, Buzzy Wizzy Studio focuses on developing high-quality edutainment experiences.
              </motion.p>
              <motion.p 
                className="text-base text-white/60 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We bridge the gap between education and entertainment by designing immersive games that teach real-world concepts — from programming logic to problem-solving — in ways students love.
              </motion.p>
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { icon: Trophy, title: "QUALITY", desc: "We prioritize quality in every project." },
                  { icon: Gamepad2, title: "INNOVATION", desc: "We embrace innovation to stay ahead." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="glassmorphic-card p-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.2, type: "spring", stiffness: 200 }}
                    >
                      <item.icon className="h-6 w-6 mb-2 mx-auto" />
                    </motion.div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="glassmorphic-card p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div 
                className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="h-12 w-12 text-white/60" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            className="text-center mb-10"
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
              PROJECTS
            </motion.h2>
            <motion.p 
              className="text-white/60 text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our latest work and experiments
            </motion.p>
          </motion.div>

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
                  onClick={scrollLeft}
                  className="p-3 hover:bg-white/10 hover:text-white border border-white/20 rounded-full bg-black/50 backdrop-blur-sm"
                  aria-label="Scroll left"
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
                  onClick={scrollRight}
                  className="p-3 hover:bg-white/10 hover:text-white border border-white/20 rounded-full bg-black/50 backdrop-blur-sm"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide pb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-6 w-max px-16">
            {[
              {
                title: "My New Project (1)",
                genre: "Backroom Horror",
                status: "COMPLETED",
                description: "Adventure game where you play as a developer trapped inside your own digital creation.",
                image: MyNewProject,
                link: "https://buzzy-wizzy-studio.itch.io/my-new-project-1"
              },
              {
                title: "LOSMEN",
                genre: "Adventure Game",
                status: "COMPLETED",
                description: "Kamu terdampar sendirian di dunia yang udah rusak. Nggak ada arah, nggak ada tujuan pasti, yang penting bertahan hidup.",
                image: Losmen,
                link: "https://buzzy-wizzy-studio.itch.io/lost-man"
              },
              {
                title: "TETRA",
                genre: "Strategy Game",
                status: "COMPLETED",
                description: "What if Tetris wasn't just a puzzle, but a battle?",
                image: Tetra,
                link: "https://buzzy-wizzy-studio.itch.io/tetra"
              },
              {
                title: "PRESS THE BEAT",
                genre: "Interactive Story",
                status: "COMPLETED",
                description: "Developer: Placeholder Studio. Publisher: Placeholder Games Inc.",
                image: PressTheBeat,
                link: "https://buzzy-wizzy-studio.itch.io/press-the-beat"
              },
              {
                title: "RATURU: HOME FEVER",
                genre: "The Trials of Faith",
                status: "COMPLETED",
                description: "In RATURU : Home Fever, you step into the feverish dreams of a young child battling a high fever.",
                image: Raturu,
                link: "https://buzzy-wizzy-studio.itch.io/raturu-home-fever"
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
                onClick={() => window.open(project.link, '_blank')}
                className="flex-shrink-0 w-80"
              >
                <Card className="glassmorphic-card p-0 overflow-hidden group cursor-pointer h-[500px] flex flex-col">
                  <motion.div 
                    className="h-48 relative overflow-hidden flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                    >
                      <Badge className="absolute top-3 right-3 bg-white/20 text-white border-white/20 text-xs">
                        {project.status}
                      </Badge>
                    </motion.div>
                  </motion.div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <motion.h3 
                        className="text-lg font-bold mb-2 tracking-wider"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-white/60 mb-2 text-sm uppercase tracking-wide"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
                      >
                        {project.genre}
                      </motion.p>
                      <motion.p 
                        className="text-white/80 text-sm line-clamp-3 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.2 }}
                      className="mt-auto"
                    >
                      <Button variant="ghost" className="w-full justify-between text-white hover:bg-white/10 text-sm">
                        LEARN MORE
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <CrewSection />

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4 tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              CONNECT
            </motion.h2>
            <motion.p 
              className="text-white/60 text-sm uppercase tracking-wider mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ready to work together?
            </motion.p>
            <motion.p 
              className="text-base text-white/80 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-mono font-bold text-sm tracking-wider">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                  </motion.div>
                  GET IN TOUCH
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
