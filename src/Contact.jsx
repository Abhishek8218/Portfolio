"use client"
import { motion } from "framer-motion"
import { FaPaperPlane } from "react-icons/fa"

const Contact = () => {
  return (
    <div name="contact" className="w-full h-fit p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
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
            Contact
          </motion.p>
          <p className="py-6 mt-16 text-purple-100">Submit the form below to get in touch with me</p>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.form
            action="https://getform.io/f/5de0f79e-298a-4598-9def-58f0abc500b4"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent placeholder:text-white border-2 border-purple-500 focus:border-purple-700 rounded-md text-white focus:outline-none w-full backdrop-blur-sm"
              />
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 placeholder:text-white bg-transparent border-2 border-purple-500 focus:border-purple-700 rounded-md text-white focus:outline-none w-full backdrop-blur-sm"
              />
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={10}
                className="p-2 bg-transparent placeholder:text-white border-2 border-purple-500 focus:border-purple-700 rounded-md text-white focus:outline-none w-full backdrop-blur-sm"
              ></textarea>
            </motion.div>

            <motion.button
              className="text-white placeholder:text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md shadow-lg shadow-purple-500/20 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              Let's talk
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                <FaPaperPlane />
              </motion.span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact

