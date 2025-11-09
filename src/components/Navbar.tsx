"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ContactModal from "./ContactModal"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div className="container mx-auto px-6 py-3 flex items-center justify-between max-w-7xl">
                <motion.div 
                    className="text-xl font-bold tracking-wider glitch-hover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    BUZZY<span className="text-white/60">WIZZY</span>
                </motion.div>

                {/* Desktop Menu */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden md:flex items-center space-x-6"
                >
                    {[
                        { label: "ABOUT", href: "#about" },
                        { label: "PROJECTS", href: "#projects" },
                        // { label: "CREW", href: "#crew" },
                        { label: "CONNECT", href: "#contact" }
                    ].map((item, index) => (
                        <motion.a 
                            key={item.label}
                            href={item.href}
                            className="hover:text-white/80 transition-colors text-sm font-medium tracking-wider"
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Desktop CTA Button */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        variant="outline"
                        className="hidden md:flex border-white/20 text-white hover:bg-white hover:text-black bg-transparent font-mono text-xs tracking-wider"
                        onClick={() => setIsContactModalOpen(true)}
                    >
                        CONTACT US
                    </Button>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white p-2"
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <AnimatePresence mode="wait">
                        {isMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="h-5 w-5" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="h-5 w-5" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden"
                    >
                        <motion.div 
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="container mx-auto px-6 py-4 space-y-3 max-w-7xl"
                        >
                            {[
                                { label: "ABOUT", href: "#about" },
                                { label: "PROJECTS", href: "#projects" },
                                // { label: "CREW", href: "#crew" },
                                { label: "CONNECT", href: "#contact" }
                            ].map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className="block hover:text-white/80 transition-colors text-sm font-medium tracking-wider"
                                    onClick={() => setIsMenuOpen(false)}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    variant="outline"
                                    className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent font-mono text-xs tracking-wider mt-3"
                                    onClick={() => {
                                        setIsContactModalOpen(true)
                                        setIsMenuOpen(false)
                                    }}
                                >
                                    CONTACT US
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contact Modal */}
            <ContactModal 
                isOpen={isContactModalOpen} 
                onClose={() => setIsContactModalOpen(false)}
                recipientEmail="buzzywizzy0208@gmail.com" // Change this to your client's email address
            />
        </motion.nav>
    )
}
