"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div name="about" className="w-full h-fit text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <motion.div
          className="pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-purple-500 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            About
          </motion.p>
        </motion.div>

        <motion.p
          className="text-xl mt-16 font-para text-purple-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I'm a passionate Front-end Developer with experience building robust web applications using Next.js,
          TypeScript, and Tailwind CSS. Currently, I work at Totally Optimized Solutions, where I lead frontend
          development, mentor team members, and deliver scalable solutions. I've contributed to projects like loan
          management systems and complex dashboards, while also developing various reusable components.
        </motion.p>

        <br />

        <motion.p
          className="text-xl font-para text-purple-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Previously, I interned at SV Infotech Software Solutions, where I enhanced the company website's user
          experience and developed Restful APIs for seamless user interactions.
        </motion.p>

        <br />

        <motion.p
          className="text-xl font-para text-purple-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I'm always eager to learn and take on new challenges. Let's connect and discuss how I can contribute to your
          team!
        </motion.p>
      </div>
    </div>
  )
}

export default About

