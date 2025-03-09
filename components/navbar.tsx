"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar({ currentSection }: { currentSection: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen, isMobile])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#121212]/90 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-light text-white">
              MSN
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-white transition-all duration-300 relative ${
                    currentSection === link.href.substring(1) ? "font-medium" : "hover:text-[#a0a0a0]"
                  }`}
                >
                  {link.name}
                  {currentSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#121212] md:hidden pt-24"
          >
            <div className="flex flex-col items-center space-y-8 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-2xl ${currentSection === link.href.substring(1) ? "font-medium" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

