"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Mail, User, MessageSquare } from "lucide-react"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
    recipientEmail?: string // Email address to send to (e.g., "contact@example.com")
}

export default function ContactModal({ isOpen, onClose, recipientEmail = "buzzywizzy0208@gmail.com" }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const nameInputRef = useRef<HTMLInputElement>(null)
    const modalRef = useRef<HTMLDivElement>(null)

    // Handle escape key and body scroll lock
    useEffect(() => {
        if (isOpen) {
            // Lock body scroll
            document.body.style.overflow = "hidden"
            
            // Focus first input
            setTimeout(() => {
                nameInputRef.current?.focus()
            }, 100)

            // Handle escape key
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    onClose()
                }
            }

            document.addEventListener("keydown", handleEscape)
            return () => {
                document.removeEventListener("keydown", handleEscape)
                document.body.style.overflow = ""
            }
        } else {
            document.body.style.overflow = ""
        }
    }, [isOpen, onClose])

    // Focus trap
    useEffect(() => {
        if (!isOpen) return

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return

            const focusableElements = modalRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
            
            if (!focusableElements || focusableElements.length === 0) return

            const firstElement = focusableElements[0] as HTMLElement
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus()
                    e.preventDefault()
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus()
                    e.preventDefault()
                }
            }
        }

        document.addEventListener("keydown", handleTabKey)
        return () => document.removeEventListener("keydown", handleTabKey)
    }, [isOpen])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        // Create mailto link with form data
        const subject = encodeURIComponent(formData.subject)
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )
        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`
        
        // Open email client
        window.location.href = mailtoLink
        
        // Reset form and close modal after a short delay
        setTimeout(() => {
            setFormData({ name: "", email: "", subject: "", message: "" })
            onClose()
        }, 500)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black backdrop-blur-xl z-[9999]"
                        onClick={onClose}
                    />
                    {/* Modal */}
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none min-h-screen">
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="max-w-md w-full max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-hide pointer-events-auto bg-black border-4 border-white/50 shadow-[0_0_50px_rgba(255,255,255,0.3)] rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="contact-modal-title"
                        >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b-2 border-white/50 bg-black">
                            <h2 id="contact-modal-title" className="text-2xl font-bold tracking-wider text-white drop-shadow-lg">CONTACT US</h2>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                className="p-2 hover:bg-white/30 rounded-full transition-colors text-white border-2 border-white/30"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-white mb-6 text-sm font-medium"
                            >
                                Ready to work together? Let's create something amazing!<br />
                                <span className="text-white/60 text-xs">(This will open your email client)</span>
                            </motion.p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Field */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <label className="block text-sm font-medium mb-2 text-white">
                                        Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                                        <input
                                            ref={nameInputRef}
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-black border-2 border-white/50 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition-all text-white placeholder-white/60"
                                            placeholder="Your name"
                                        />
                                    </div>
                                </motion.div>

                                {/* Email Field */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <label className="block text-sm font-medium mb-2 text-white">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-black border-2 border-white/50 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition-all text-white placeholder-white/60"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </motion.div>

                                {/* Subject Field */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <label className="block text-sm font-medium mb-2 text-white">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-black border-2 border-white/50 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition-all text-white placeholder-white/60"
                                        placeholder="What's this about?"
                                    />
                                </motion.div>

                                {/* Message Field */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <label className="block text-sm font-medium mb-2 text-white">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/40" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="w-full pl-10 pr-4 py-3 bg-black border-2 border-white/50 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition-all text-white placeholder-white/60 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-white text-black hover:bg-white/90 font-mono font-bold tracking-wider py-3 shadow-[0_0_20px_rgba(255,255,255,0.5)] border-2 border-white"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        OPEN EMAIL CLIENT
                                    </Button>
                                </motion.div>
                            </form>
                        </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}