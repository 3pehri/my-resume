"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Code, Server, Shield, Database } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Cursor from "@/components/cursor"
import ProjectCard from "@/components/project-card"
import { useMobile } from "@/hooks/use-mobile"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  const ref = useRef(null)
  const isMobile = useMobile()
  const [currentSection, setCurrentSection] = useState("hero")
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + height - 200) {
            setCurrentSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "Cloud Migration & Kubernetes Deployment",
      description:
        "Led the migration of on-premises applications to AWS cloud infrastructure using Terraform and implemented Kubernetes for container orchestration.",
      tags: ["AWS", "Terraform", "Kubernetes", "Docker", "CI/CD"],
      year: "2025",
      icon: <Server size={24} className="text-blue-400" />,
    },
    {
      title: "Automated CI/CD Pipeline",
      description:
        "Designed and implemented a fully automated CI/CD pipeline using Jenkins, GitLab CI, and ArgoCD for continuous deployment to Kubernetes clusters.",
      tags: ["Jenkins", "GitLab CI", "ArgoCD", "Kubernetes", "Automation"],
      year: "2024",
      icon: <Code size={24} className="text-green-400" />,
    },
    {
      title: "Enterprise Network Security Overhaul",
      description:
        "Redesigned network security architecture with advanced firewall configurations, VPN solutions, and implemented zero-trust security principles.",
      tags: ["Network Security", "FortiGate", "VPN", "Zero-Trust", "MikroTik"],
      year: "2023",
      icon: <Shield size={24} className="text-purple-400" />,
    },
  ]

  // Interactive skill cards with hover animation
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: <Server className="w-10 h-10 mb-4 text-blue-400" />,
      skills: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "GitLab"],
    },
    {
      title: "Security & Networking",
      icon: <Shield className="w-10 h-10 mb-4 text-purple-400" />,
      skills: ["MikroTik", "FortiGate", "VPN", "Firewalls", "Zero Trust", "Cisco"],
    },
    {
      title: "Infrastructure & Data",
      icon: <Database className="w-10 h-10 mb-4 text-green-400" />,
      skills: ["Linux", "Ansible", "Monitoring", "Backup", "Proxmox", "Virtualization"],
    },
  ]

  return (
    <>
      <Cursor />
      <main className="bg-[#121212] text-white" ref={ref}>
        <Navbar currentSection={currentSection} />

        {/* Hero Section with Particles Background */}
        <section id="hero" className="h-screen flex items-center relative overflow-hidden">
          <ParticlesBackground />
          <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity, scale, y }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight font-playfair">
                Mohammad Sepehri Nia
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light text-[#e0e0e0] max-w-2xl">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
                  DevOps Engineer | IT Infrastructure Specialist
                </motion.span>
              </p>
              <div className="flex flex-wrap gap-4 text-[#a0a0a0]">
                <motion.span
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  📍 Tehran, Iran
                </motion.span>
                <motion.span
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  📧 ads.sepehr@gmail.com
                </motion.span>
                <motion.span
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  🔗 LinkedIn
                </motion.span>
              </div>
              <motion.div
                className="flex items-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <a
                  href="#about"
                  className="group flex items-center text-lg border-b border-white pb-1 transition-all duration-300 hover:pr-4"
                >
                  Discover more
                  <ArrowRight size={18} className="ml-2 transition-all duration-300 group-hover:ml-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <a href="#about" className="text-white">
              <ArrowDown size={24} />
            </a>
          </motion.div>
        </section>

        {/* About Section with Parallax Effect */}
        <section id="about" className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
            >
              <div className="order-2 md:order-1">
                <motion.h2
                  className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  About Me
                </motion.h2>
                <motion.p
                  className="text-lg mb-6 text-[#e0e0e0] leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Results-driven IT Infrastructure & DevOps Specialist with over 6 years of experience in network
                  administration, IT operations, and cloud infrastructure.
                </motion.p>
                <motion.p
                  className="text-lg mb-6 text-[#e0e0e0] leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Expertise in automating deployments, optimizing system performance, and ensuring enterprise-grade
                  security. Proficient in CI/CD pipelines, containerization (Docker, Kubernetes), Infrastructure as Code
                  (Terraform, Ansible), and cloud computing (AWS, GCP, Azure).
                </motion.p>
                <motion.p
                  className="text-lg mb-8 text-[#e0e0e0] leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Passionate about scalability, automation, and reliability engineering.
                </motion.p>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#experience"
                    className="group flex items-center text-lg border-b border-white pb-1 transition-all duration-300 hover:pr-4"
                  >
                    View my experience
                    <ArrowRight size={18} className="ml-2 transition-all duration-300 group-hover:ml-4" />
                  </a>
                </motion.div>
              </div>
              <div className="order-1 md:order-2 relative">
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-30 blur-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
                <motion.div
                  className="aspect-[3/4] overflow-hidden relative rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7825.jpg-bpZSJnAVc6jjitjZ7vJf9XRkus4Nbj.jpeg"
                    alt="Mohammad Sepehri Nia"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Skills Section with Interactive Cards */}
            <div className="mt-24">
              <motion.h3
                className="text-2xl font-light mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Core Expertise
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#232323] p-6 rounded-lg border border-[#333333] hover:border-[#555555] transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      {category.icon}
                      <h4 className="text-xl font-medium mb-4">{category.title}</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-sm bg-[#2a2a2a] text-[#e0e0e0] px-3 py-1 rounded-full hover:bg-[#333333] transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section with Timeline */}
        <section id="experience" className="py-24 md:py-32 bg-[#121212]">
          <div className="container mx-auto px-4 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-light mb-16 tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Experience
              </motion.h2>

              <div className="space-y-16 relative">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-5 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="md:col-span-1 md:text-right relative">
                    <motion.div
                      className="hidden md:block absolute right-0 top-2 w-3 h-3 rounded-full bg-blue-500 translate-x-[6.5px] z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <p className="text-[#a0a0a0]">Apr 2025 - Present</p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-medium mb-2">DevOps & IT Infrastructure Specialist</h3>
                    <p className="text-lg mb-4">ZarinPal, Tehran, Iran</p>
                    <ul className="list-disc pl-5 space-y-2 text-[#e0e0e0]">
                      <li>
                        Spearheading cloud migration strategies and implementing scalable, high-availability
                        architectures for fintech solutions.
                      </li>
                      <li>
                        Developing automated deployment pipelines (CI/CD) to enhance software delivery efficiency.
                      </li>
                      <li>Implementing Kubernetes-based microservices with Helm and Prometheus monitoring.</li>
                      <li>
                        Optimizing network security policies and firewall configurations for high-traffic applications.
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-5 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="md:col-span-1 md:text-right relative">
                    <motion.div
                      className="hidden md:block absolute right-0 top-2 w-3 h-3 rounded-full bg-indigo-500 translate-x-[6.5px] z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <p className="text-[#a0a0a0]">Jul 2024 - Dec 2024</p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-medium mb-2">IT Specialist</h3>
                    <p className="text-lg mb-4">Amir Co., Tehran, Iran</p>
                    <ul className="list-disc pl-5 space-y-2 text-[#e0e0e0]">
                      <li>
                        Managed enterprise IT infrastructure, ensuring 99.9% uptime and secure network operations.
                      </li>
                      <li>Configured and optimized VPNs, firewalls, and Layer 3 routing for a multi-site network.</li>
                      <li>Designed and implemented automated backup solutions (Veeam, Rsync, Acronis).</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-5 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="md:col-span-1 md:text-right relative">
                    <motion.div
                      className="hidden md:block absolute right-0 top-2 w-3 h-3 rounded-full bg-purple-500 translate-x-[6.5px] z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <p className="text-[#a0a0a0]">Jan 2019 - Jul 2023</p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-medium mb-2">Network & Security Engineer</h3>
                    <p className="text-lg mb-4">Pishgaman Shabake Arad, Tehran, Iran</p>
                    <ul className="list-disc pl-5 space-y-2 text-[#e0e0e0]">
                      <li>Led network design and security hardening for corporate clients.</li>
                      <li>Deployed and maintained MikroTik & Cisco routers, VLANs, and FortiGate firewalls.</li>
                      <li>Configured site-to-site and remote access VPNs for a secure distributed workforce.</li>
                      <li>Provided incident response and network troubleshooting to minimize downtime.</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-5 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="md:col-span-1 md:text-right relative">
                    <motion.div
                      className="hidden md:block absolute right-0 top-2 w-3 h-3 rounded-full bg-cyan-500 translate-x-[6.5px] z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <p className="text-[#a0a0a0]">Jan 2021 - Jan 2022</p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-medium mb-2">Remote Network Administrator</h3>
                    <p className="text-lg mb-4">Hani Motors (Thailand) Co Ltd, Tehran, Iran</p>
                    <ul className="list-disc pl-5 space-y-2 text-[#e0e0e0]">
                      <li>Managed international network operations remotely, ensuring secure connectivity.</li>
                      <li>Conducted log analysis and threat mitigation to prevent cyber threats.</li>
                      <li>Automated routine tasks using Bash scripting to optimize network performance.</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-5 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="md:col-span-1 md:text-right relative">
                    <motion.div
                      className="hidden md:block absolute right-0 top-2 w-3 h-3 rounded-full bg-green-500 translate-x-[6.5px] z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <p className="text-[#a0a0a0]">May 2016 - May 2019</p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-medium mb-2">IT Support & System Administrator</h3>
                    <p className="text-lg mb-4">Adib Carpet, Tehran, Iran</p>
                    <ul className="list-disc pl-5 space-y-2 text-[#e0e0e0]">
                      <li>Deployed and maintained Windows Server environments and Active Directory policies.</li>
                      <li>Managed end-user IT support, troubleshooting network and hardware issues.</li>
                      <li>Configured Hyper-V virtualized environments for business continuity.</li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-16 pt-16 border-t border-[#333333]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-light mb-8">Education</h3>

                <div className="space-y-12">
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-5 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:col-span-1">
                      <p className="text-[#a0a0a0]">2016 - 2018</p>
                    </div>
                    <div className="md:col-span-4">
                      <h4 className="text-xl font-medium mb-2">BSc in Computer Software Engineering</h4>
                      <p className="text-lg">Islamic Azad University</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-5 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:col-span-1">
                      <p className="text-[#a0a0a0]">2014 - 2016</p>
                    </div>
                    <div className="md:col-span-4">
                      <h4 className="text-xl font-medium mb-2">Associate Degree in Information Technology</h4>
                      <p className="text-lg">Semnan University</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="mt-16 pt-16 border-t border-[#333333]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-light mb-8">Skills & Expertise</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">DevOps & CI/CD</h4>
                    <p className="text-[#e0e0e0]">Jenkins, GitLab CI/CD, GitHub Actions, ArgoCD</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">Cloud Platforms</h4>
                    <p className="text-[#e0e0e0]">AWS (EC2, S3, IAM, Route53), GCP, Azure</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">Infrastructure as Code</h4>
                    <p className="text-[#e0e0e0]">Terraform, Ansible</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">Containerization & Orchestration</h4>
                    <p className="text-[#e0e0e0]">Docker, Kubernetes (K8s), Helm</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">Networking & Security</h4>
                    <p className="text-[#e0e0e0]">MikroTik, Cisco, FortiGate, Kerio Control, VPN, Firewalls</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">Monitoring & Logging</h4>
                    <p className="text-[#e0e0e0]">Prometheus, Grafana, ELK Stack, Nagios</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">Linux & Windows Administration</h4>
                    <p className="text-[#e0e0e0]">RHEL, Ubuntu, CentOS, Windows Server</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">Version Control & Scripting</h4>
                    <p className="text-[#e0e0e0]">Git, Bash, PowerShell, Python</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">Virtualization & Cloud Computing</h4>
                    <p className="text-[#e0e0e0]">VMware ESXi, Hyper-V, Proxmox</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-medium mb-4">Backup & Disaster Recovery</h4>
                    <p className="text-[#e0e0e0]">Veeam, Acronis, Rsync, ZFS Snapshots</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section with Animated Cards */}
        <section id="projects" className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-light mb-16 tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>

              <div className="grid grid-cols-1 gap-16">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section with Animation and Updated Photo */}
        <section id="contact" className="py-24 md:py-32 bg-[#121212] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500 rounded-full filter blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
            >
              <div>
                <motion.h2
                  className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Contact
                </motion.h2>
                <motion.p
                  className="text-lg mb-12 text-[#e0e0e0] leading-relaxed max-w-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Interested in working together? Feel free to reach out through any of the following channels.
                </motion.p>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <a
                      href="mailto:ads.sepehr@gmail.com"
                      className="text-lg text-[#e0e0e0] hover:text-white transition-colors group flex items-center"
                    >
                      <span className="border-b border-transparent group-hover:border-white pb-px">
                        ads.sepehr@gmail.com
                      </span>
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <a
                      href="tel:+989303042965"
                      className="text-lg text-[#e0e0e0] hover:text-white transition-colors group flex items-center"
                    >
                      <span className="border-b border-transparent group-hover:border-white pb-px">
                        +98 930 304 2965
                      </span>
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/mohammadsepehrinia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[#e0e0e0] hover:text-white transition-colors group flex items-center"
                    >
                      <span className="border-b border-transparent group-hover:border-white pb-px">
                        linkedin.com/in/mohammadsepehrinia
                      </span>
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-2">Location</h3>
                    <p className="text-lg text-[#e0e0e0]">Tehran, Iran</p>
                  </motion.div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg opacity-30 blur-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
                <motion.div
                  className="aspect-square overflow-hidden relative rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7335.jpg-a61mykm8sqN5VBTOtIFezWmw2EUyiP.jpeg"
                    alt="Mohammad Sepehri Nia"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

