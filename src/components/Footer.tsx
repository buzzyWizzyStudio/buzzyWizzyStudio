import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-6 py-8 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="text-xl font-bold tracking-wider mb-3 glitch-hover">
                            BUZZY<span className="text-white/60">WIZZY</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold tracking-wider mb-3 text-white/80">NAVIGATE</h4>
                        <div className="space-y-2">
                            <a href="#about" className="block text-sm text-white/60 hover:text-white transition-colors">
                                About
                            </a>
                            <a href="#projects" className="block text-sm text-white/60 hover:text-white transition-colors">
                                Projects
                            </a>
                            <a href="#crew" className="block text-sm text-white/60 hover:text-white transition-colors">
                                Crew
                            </a>
                            <a href="#contact" className="block text-sm text-white/60 hover:text-white transition-colors">
                                Connect
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-bold tracking-wider mb-3 text-white/80">CONNECT</h4>
                        <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                                <Github className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                                <Linkedin className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white/60 text-xs uppercase tracking-wide mb-3 md:mb-0">
                        © 2025 BUZZY WIZZY. LOREM IPSUM DOLOR SIT AMET.
                    </div>
                </div>
            </div>
        </footer>
    )
}
