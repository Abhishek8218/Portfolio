"use client"
import { motion } from "framer-motion"

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import github from "../assets/github.png"
import mongo1 from "../assets/mongo1.png"
import tailwind from "../assets/tailwind.png"
import sass from "../assets/sass.png"
import node from "../assets/node.png"
import postman from "../assets/postman.png"
import bootstrap from "../assets/bootstrap.png"
import typescript from "../assets/typescript.png"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: mongo1,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
    {
      id: 11,
      src: node,
      title: "Node Js",
      style: "shadow-green-300",
    },
    {
      id: 12,
      src: postman,
      title: "PostMan",
      style: "shadow-orange-500",
    },
    {
      id: 13,
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-[#5d3169]",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <div name="skills" className="w-full h-fit">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="text-4xl font-bold border-b-4 border-purple-500 p-2 inline bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Skills
          </motion.p>
          <p className="py-6 mt-16 text-purple-100">These are the technologies I've skilled in</p>
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  sm:px-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm border border-purple-500/20 ${style}`}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(138, 43, 226, 0.1), 0 10px 10px -5px rgba(138, 43, 226, 0.04)",
              }}
            >
              <img src={src || "/placeholder.svg"} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-purple-100">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

