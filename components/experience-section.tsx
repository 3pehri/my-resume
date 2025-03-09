"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description:
      "Lead the frontend development team in building modern web applications using React, Next.js, and TypeScript. Implemented CI/CD pipelines and improved performance by 40%.",
  },
  {
    title: "UI/UX Designer & Developer",
    company: "Creative Solutions",
    location: "New York, NY",
    period: "2019 - 2021",
    description:
      "Designed and developed user interfaces for various clients. Created responsive designs and implemented them using modern frontend technologies.",
  },
  {
    title: "Web Developer",
    company: "Digital Agency",
    location: "Boston, MA",
    period: "2017 - 2019",
    description:
      "Developed websites and web applications for clients across different industries. Worked with JavaScript, React, and Node.js.",
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Work Experience
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            My professional journey has equipped me with a diverse skill set and valuable industry experience.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-12 relative pl-8 md:pl-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="flex items-center text-cyan-400 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8 relative">
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-500 to-purple-600 hidden md:block"></div>
                  )}
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-cyan-500 -ml-1.5 hidden md:block"></div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center text-purple-400 mb-4">
                    <Briefcase size={16} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

