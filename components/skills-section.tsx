"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "GraphQL"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Wireframing"],
  },
  {
    category: "Other",
    items: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodology"],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            My Skills
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            I've worked with a variety of technologies and tools throughout my career. Here's a snapshot of my technical
            expertise and capabilities.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30"></div>
            <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6">
              <p className="text-lg text-gray-300">
                I'm constantly learning and adding new skills to my repertoire. Currently exploring{" "}
                <span className="text-cyan-400">Web3 technologies</span> and{" "}
                <span className="text-purple-400">AI integration</span> in web applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

