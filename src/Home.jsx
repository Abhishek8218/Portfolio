"use client"
import { GoLinkExternal } from "react-icons/go"
import SocialLinks from "./SocialLinks"
import hero from "../assets/hero.png"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div name="home" className="h-fit w-full text-white md:h-fit pt-16 sm:pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-fit px-4 md:flex-row py-10">
        <motion.div
          className="flex flex-col justify-center h-fit sm:pt-20 pb-15 md:mr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#35A29F] to-[#9ac7c5]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full-Stack Web Developer
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-purple-100 font-para"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Welcome to my portfolio website! I'm Abhishek, a fullstack developer. I'm passionate about creating visually
            appealing and functional websites using the latest web technologies. Feel free to browse my portfolio and
            reach out to me with any questions or project inquiries. Thank you for stopping by!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="flex py-3 px-5 my-6 items-center link-hover rounded-md text-white w-fit bg-gradient-to-r from-[#2d7c7a] to-[#83c6c1] hover:from-purple-400 hover:to-blue-400 shadow-lg shadow-purple-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://drive.google.com/file/d/1BhsynuzSoh4e2oDEHzcLMDJS9M7flPV-/view?usp=sharing"
                target="blank"
                download
                className=" flex items-center"
              >
                Resume
                <span className="ml-1">
                  <GoLinkExternal size={20} />
                </span>
              </a>
            </motion.div>
          </motion.div>

          <div className="md:hidden">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
           {/* bg-gradient-to-r from-[#35A29F] to-[#35A29F] blur-md */}
          <div className="absolute -inset-1 rounded-2xl "></div>
          <img
            src={hero || "/placeholder.svg"}
            alt="profile"
            className="rounded-2xl hero-filter max-sm:h-[400px] mx-auto relative md:max-w-xs mt-6 md:mt-0 object-cover z-10"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Home

