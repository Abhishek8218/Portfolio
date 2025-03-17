"use client"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { motion } from "framer-motion"

const SocialLinks = () => {
  const Links = [
    {
      id: 1,
      icon: <FaGithub size={30} />,
      text: "GitHub",
      href: "https://github.com/Abhishek8218",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      icon: <FaLinkedin size={30} />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/abhishek-kumar-9656a3220",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={30} />,
      text: "E-Mail",
      href: "mailto: abhishek.kumar.official2002.com",
    },
    {
      id: 4,
      icon: <FaInstagram size={30} />,
      text: "Insta..",
      href: "https://www.instagram.com/abhishek_27k/",
      style: "rounded-br-md",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 },
  }

  return (
    <div className="flex flex-col md:top-[35%] md:left-0 md:fixed md:flex-row md:items-center md:justify-center z-20">
      <motion.div className="hidden md:block md:mr-10" variants={container} initial="hidden" animate="show">
        <ul>
          {Links.map(({ id, icon, text, href, style }) => (
            <motion.li
              key={id}
              className={`flex justify-between items-center px-4 w-40 h-14 ${
                style ? style : ""
              } ml-[-100px] hover:ml-[-10px] bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 backdrop-blur-sm hover:rounded-lg transition-all duration-300 mb-2`}
              variants={item}
              whileHover={{
                boxShadow: "0 10px 15px -3px rgba(138, 43, 226, 0.1), 0 4px 6px -2px rgba(138, 43, 226, 0.05)",
              }}
            >
              <a
                href={href}
                className="flex justify-between text-white text-xl items-center w-full"
                target="_blank"
                rel="noreferrer"
              >
                {text}
                <motion.span
                  size={30}
                  className="hidden md:inline ml-4"
                  whileHover={{ rotate: 12 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {icon}
                </motion.span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="md:hidden flex justify-center items-center my-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <ul className="flex">
          {Links.map(({ id, icon, href }) => (
            <motion.li
              key={id}
              className="mx-3"
              variants={item}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <span size={30}>{icon}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default SocialLinks

