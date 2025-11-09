import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Video, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.footer 
            className="border-t border-white/10 bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-6 py-8 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                    {/* Brand */}
                    <motion.div 
                        className="md:col-span-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="text-xl font-bold tracking-wider mb-3 glitch-hover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            BUZZY<span className="text-white/60">WIZZY</span>
                        </motion.div>
                        <motion.p 
                            className="text-white/60 text-sm leading-relaxed max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            The art of making the imposible possible. We Don't Just Create Games, We Tell Stories.
                        </motion.p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.h4 
                            className="text-sm font-bold tracking-wider mb-3 text-white/80"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            NAVIGATE
                        </motion.h4>
                        <div className="space-y-2">
                            {[
                                { label: "About", href: "#about" },
                                { label: "Projects", href: "#projects" },
                                // { label: "Crew", href: "#crew" },
                                { label: "Connect", href: "#contact" }
                            ].map((link, index) => (
                                <motion.a 
                                    key={link.label}
                                    href={link.href} 
                                    className="block text-sm text-white/60 hover:text-white transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.h4 
                            className="text-sm font-bold tracking-wider mb-3 text-white/80"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            CONNECT
                        </motion.h4>
                        <div className="flex space-x-2">
                            {[
                                { icon: Instagram, delay: 1.0, url: "https://www.instagram.com/buzzy_wizzy_studio/", label: "Instagram" },
                                { icon: Linkedin, delay: 1.1, url: "https://www.linkedin.com/company/buzzy-wizzy/?originalSubdomain=id", label: "LinkedIn" },
                                { icon: Video, delay: 1.2, url: "https://www.tiktok.com/@buzzywizzy", label: "TikTok" },
                                { icon: MessageCircle, delay: 1.3, url: "https://wa.me/6281265255752", label: "WhatsApp" } // Replace 6281234567890 with your WhatsApp number (country code + number, no + or spaces)
                            ].map((social, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: social.delay }}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <a 
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                    >
                                        <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                                            <social.icon className="h-4 w-4" />
                                        </Button>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true }}
                >
                    <motion.div 
                        className="text-white/60 text-xs uppercase tracking-wide mb-3 md:mb-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >
                        © 2025 BUZZY WIZZY. Copyright Reserved.
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    )
}
