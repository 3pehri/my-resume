"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations and interactive elements.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js"],
    liveLink: "#",
    githubLink: "#",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Here are some of my recent projects that showcase my skills and expertise in web development and design.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-700 text-cyan-400 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
          >
            <Github size={18} className="mr-2" />
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

