"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div name="about" className="w-full h-fit text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        {/* Title */}
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

        {/* Clapcle Experience */}
        <motion.p
          className="text-xl mt-16 font-para text-purple-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I’m a <span className="font-semibold ">Front-end Developer</span> currently working at{" "}
          <span className="font-semibold ">Clapcle (Remote)</span> since April 2025. My work primarily
          focuses on building and scaling a large, dynamic ERP system with a modular architecture and clean state
          management, designed to handle complex business workflows. I emphasize crafting pixel-perfect, responsive UIs
          that ensure a seamless user experience across all devices.
          <br />
          <br />
          Alongside my role, I collaborate with backend and product teams to align development efforts with project
          objectives, maintaining efficiency and consistency in a fast-paced agile environment.
        </motion.p>

        <br />

        {/* Totally Optimized Solutions */}
        <motion.p
          className="text-xl font-para text-purple-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Previously, I worked as a <span className="font-semibold ">Front-end Developer</span> at{" "}
          <span className="font-semibold ">Totally Optimized Solutions, Dehradun</span> (Aug 2024 – Mar
          2025). There, I led client discussions, conducted code reviews, and handled end-to-end frontend development
          for multiple projects using Next.js, TypeScript, Tailwind CSS, and TanStack Query. My contributions included
          building robust, scalable interfaces and delivering high-quality solutions across complex dashboards and
          business applications.
        </motion.p>

        <br />

        {/* Freelance / Closing */}
        <motion.p
          className="text-xl font-para text-purple-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Beyond full-time roles, I also take on <span className="font-semibold ">freelance projects</span>,
          helping startups and businesses build responsive, performant, and visually appealing web applications. I enjoy
          transforming ideas into engaging digital experiences and continuously exploring new technologies to refine my
          craft.
        </motion.p>
      </div>
    </div>
  )
}

export default About
