"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-lg opacity-30"></div>
            <div className="relative overflow-hidden rounded-lg">
              <img src="/placeholder.svg?height=600&width=600" alt="John Doe" className="w-full h-auto rounded-lg" />
            </div>
          </motion.div>

          <div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
            >
              About Me
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-300">
              Hello! I'm John Doe, a passionate Full Stack Developer and UI/UX Designer with over 5 years of experience
              creating beautiful, functional digital experiences.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-300">
              I specialize in building modern web applications using cutting-edge technologies. My approach combines
              technical expertise with creative problem-solving to deliver solutions that not only work flawlessly but
              also provide exceptional user experiences.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-8 text-gray-300">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or
              hiking in the great outdoors.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

