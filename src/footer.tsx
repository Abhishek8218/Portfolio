"use client"
import { FaHeart } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer
      className="w-full py-8 text-center text-white bg-[#389a9fa2] backdrop-blur-md shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">Abhishek Kumar</h3>
            <p className="text-purple-200">Full-Stack Web Developer</p>
          </motion.div>

          <motion.div
            className="flex items-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>Made with</p>
            <FaHeart className="mx-2 text-pink-500" />
            <p>using React & Framer Motion</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 pt-6 border-t border-purple-700"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>© {new Date().getFullYear()} Abhishek Kumar. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer

