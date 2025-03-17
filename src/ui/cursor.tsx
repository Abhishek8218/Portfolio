"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHoveringLink, setIsHoveringLink] = useState(false)

  // Use spring physics for smooth cursor movement
  const springConfig = { damping: 25, stiffness: 300 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const onMouseMove = (e:MouseEvent) => {
      // Update motion values directly instead of using state
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    // Use event listener on window for better performance
    window.addEventListener("mousemove", onMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [mouseX, mouseY])

  useEffect(() => {
    const handleLinkHover = () => setIsHoveringLink(true)
    const handleLinkLeave = () => setIsHoveringLink(false)

    // Add event listeners for links
    const links = document.querySelectorAll("a, button, .link-hover")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover)
      link.addEventListener("mouseleave", handleLinkLeave)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })
    }
  }, [])

  return (
    <motion.div
      ref={cursorRef}
      className="cursor z-50 fixed top-0 left-0 rounded-full pointer-events-none hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        height: isHoveringLink ? 48 : 32,
        width: isHoveringLink ? 48 : 32,
        backgroundColor: isHoveringLink ? "rgba(138, 43, 226, 0.1)" : "rgba(138, 43, 226, 0.2)",
        border: isHoveringLink ? "2px solid rgba(138, 43, 226, 0.8)" : "2px solid white",
      }}
      transition={{
        type: "spring",
        mass: 0.3,
        stiffness: 800,
        damping: 20,
      }}
    />
  )
}

export default CustomCursor

