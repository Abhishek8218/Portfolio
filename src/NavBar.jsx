"use client"

import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"

const NavBar = () => {
  const [mobile, setMobile] = useState(false)
  const [selected, setSelected] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  const link = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSelect = (linkId) => {
    setSelected(linkId)
    setMobile(false)
  }

  return (
    <motion.div
      className={`flex justify-between items-center w-full h-16 px-4 fixed z-50 transition-all duration-300 ${
        scrolled ? "bg-[#389a9fa2] backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <motion.h1
          className="text-white text-3xl ml-4 font-name sm:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05, color: "#a855f7" }}
        >
          Abhishek
        </motion.h1>
      </div>

      <ul className="hidden md:flex">
        {link.map(({ id, link }) => (
          <motion.li
            key={id}
            className="text-gray-200 px-4 capitalize cursor-pointer font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * id }}
            whileHover={{ scale: 1.1 }}
          >
            <Link
              to={link}
              smooth
              duration={800}
              className={`relative ${selected === id ? "text-purple-400" : "hover:text-purple-400"}`}
              onClick={() => handleSelect(id)}
            >
              {link}
              {selected === id && (
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div onClick={() => setMobile(!mobile)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
        {mobile ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.ul
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-white bg-gradient-to-br from-[#071952] via-[#35A29F] to-[#97FEED] md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {link.map(({ id, link }) => (
              <motion.li
                key={id}
                className="py-6 cursor-pointer capitalize font-para text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * id }}
                whileHover={{ scale: 1.1, x: 10 }}
              >
                <Link
                  to={link}
                  smooth
                  duration={800}
                  offset={-80}
                  className={selected === id ? "text-green-300/40" : ""}
                  onClick={() => handleSelect(id)}
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default NavBar

