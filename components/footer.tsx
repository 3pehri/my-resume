"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-[#1a1a1a] border-t border-[#333333]">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <p className="text-[#a0a0a0]">&copy; {currentYear} Mohammad Sepehri Nia</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a
              href="mailto:ads.sepehr@gmail.com"
              className="text-[#a0a0a0] hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a0a0] hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/mohammadsepehrinia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a0a0] hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <button
              onClick={scrollToTop}
              className="text-[#a0a0a0] hover:text-white transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

