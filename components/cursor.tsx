"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const computedStyle = window.getComputedStyle(target)
      setIsPointer(computedStyle.cursor === "pointer")
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white z-50 pointer-events-none mix-blend-difference"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        mass: 0.1,
        stiffness: 150,
        damping: 15,
      }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isPointer ? 0 : 1,
        }}
      />
    </motion.div>
  )
}

