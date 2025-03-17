"use client"

import type React from "react"
import { motion } from "framer-motion"

interface FloatingBallProps {
  size: number
  color: string
  initialX: number
  initialY: number
  duration: number
  delay: number
}

const FloatingBall: React.FC<FloatingBallProps> = ({ size, color, initialX, initialY, duration, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full opacity-70 blur-sm"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        top: `${initialY}%`,
        left: `${initialX}%`,
      }}
      animate={{
        y: [0, -30, 0, 30, 0],
        x: [0, 20, 0, -20, 0],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  )
}

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-[#071952] via-[#35A29F] to-[#97FEED">
      <div className="absolute inset-0 opacity-30">
        <FloatingBall size={200} color="#8a2be2" initialX={10} initialY={20} duration={10} delay={0} />
        <FloatingBall size={150} color="#4b0082" initialX={80} initialY={60} duration={10} delay={1} />
        <FloatingBall size={80} color="#9370db" initialX={50} initialY={30} duration={7} delay={2} />
        <FloatingBall size={120} color="#6a5acd" initialX={20} initialY={70} duration={9} delay={3} />
        <FloatingBall size={90} color="#483d8b" initialX={70} initialY={10} duration={11} delay={4} />
        <FloatingBall size={60} color="#7b68ee" initialX={30} initialY={90} duration={6} delay={5} />
      </div>
    </div>
  )
}

export default AnimatedBackground

