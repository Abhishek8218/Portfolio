"use client"
import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"
import academixPro from "../assets/academixPro.png"
import tos from "../assets/tos.png"
import upi from "../assets/upi.png"
import dindyaali from "../assets/dindyaali.png"
import bedwood from "../assets/bedwood.png"
import seekmonk from "../assets/seekmonk.png"
import nextgen from "../assets/nextgen.png"
import dashboard from "../assets/dashboard.png"
import hyperdash from "../assets/hyperdash.png"

const Portfolio = () => {
  const portfolios = [
    // {
    //   id: 1,
    //   src: "https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHklMjBhbmQlMjBzYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    //   title: "Mood-Tracker",
    //   href: "https://assignment-26-abhishekkuma449.codeyogi-batch-2.repl.co",
    //   description: "A web app to track and visualize your daily mood patterns.",
    // },
    // {
    //   id: 2,
    //   src: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   title: "To-Do Web App",
    //   href: "https://assignment-23-abhishekkuma449.codeyogi-batch-2.repl.co",
    //   description: "A clean, intuitive task management application.",
    // },
    // {
    //   id: 3,
    //   src: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   title: "One-Store47",
    //   href: "https://onestore21.netlify.app/",
    //   description: "A comprehensive e-commerce platform with modern UI.",
    // },
    {
      id: 4,
      src: "https://img.freepik.com/free-vector/helping-partner-concept-illustration_114360-8867.jpg?t=st=1709637197~exp=1709640797~hmac=a4dd69a178ee84e6e0f9287b801345d648104993e0a8a6e45dd9da6bd2bf07f9&w=740",
      title: "Business-Person Page",
      href: "https://its-business-landing-page.vercel.app/",
      description: "Professional landing page for business professionals.",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "TSP-Cares",
      href: "https://tsp-cares.vercel.app/",
      description: "A charity platform connecting donors with causes.",
    },
    {
      id: 6,
      src: "https://img.freepik.com/free-vector/restaurant-facade-background_23-2147673396.jpg?t=st=1709640605~exp=1709644205~hmac=6a65c894a84259ea674230522c9c815b7f2d508c5f09ebf9656fc035497cc983&w=740",
      title: "Restaurant UI",
      href: "https://its-restaurant-ui.netlify.app/",
      description: "Elegant UI design for a restaurant website.",
    },
    {
      id: 7,
      src: "https://img.freepik.com/free-vector/paper-style-core-values-background_23-2149079276.jpg?t=st=1709634295~exp=1709637895~hmac=dcb391f977aacd10c7b9b7a93543e905aabd12a65b56ee954d7b307ce61e50e0&w=996",
      title: "Service Ticketing",
      href: "https://service-ticketing-app.vercel.app/",
      description: "A robust ticketing system for service management.",
    },
    {
      id: 8,
      src: "https://img.freepik.com/free-photo/colorful-image-woman-s-face-with-words-word-bottom_188544-12871.jpg?t=st=1709634192~exp=1709637792~hmac=3884df6cd92eb8d61166d84e8039da24e8a60720e20826f8091507e82e324a15&w=1060",
      title: "Artify",
      href: "https://its-artify.vercel.app/login",
      description: "A platform for artists to showcase their work.",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Infinity Insights",
      href: "https://infinity-insights.vercel.app/",
      description: "Data visualization and analytics dashboard.",
    },
    {
      id: 11,
      src: academixPro,
      title: "AcademixPro",
      href: "https://academixpro.vercel.app/",
      description: "Educational platform for students and educators.",
    },
    {
      id: 12,
      src: tos,
      title: "TOS",
      href: "https://www.tos.systems",
      self: false,
      description: "Enterprise solutions for business optimization.",
    },
    {
      id: 13,
      src: upi,
      title: "TOS Gateway",
      href: "https://tos-upi-gateway.vercel.app/",
      self: false,
      description: "Secure payment gateway integration system.",
    },
    {
      id: 14,
      src: dindyaali,
      title: "Dindyaali Homestay",
      href: "https://dindyaalistays.com/",
      self: false,
      description: "Booking platform for a premium homestay.",
    },
    {
      id: 15,
      src: bedwood,
      title: "Bedwood",
      href: "https://bedwoodfurnishing.com/",
      self: false,
      description: "E-commerce site for premium furniture.",
    },
    {
      id: 16,
      src: hyperdash,
      title: "HyperDash",
      href: "https://hyperdash-delta.vercel.app/",
      description: "Car Advertisment Website.",
    },
    {
      id: 17,
      src: seekmonk,
      title: "SeekMonk",
      href: "https://www.seekmonk.com/",
      self: false,
      description: "Job search and recruitment platform.",
    },
    {
      id: 18,
      src: nextgen,
      title: "NextGen-Tech",
      href: "https://nextgentechh.vercel.app",
      description: "Innovative technology solutions showcase.",
    },
    {
      id: 19,
      src: dashboard,
      title: "Modern Dashboard Design",
      href: "https://modern-dashboard-lyart.vercel.app/project?tab=Ongoing",
      description: "Modern & Sleek Dashboard template.",
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
    show: { y: 0, opacity: 1 },
  }

  return (
    <div name="portfolio" className="w-full text-white md:h-fit">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
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
            Portfolio
          </motion.p>
          <p className="py-6 mt-16 text-purple-100">Check out some of my work right here :-</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolios.reverse().map(({ id, src, title, href, description, self = true }) => (
            <motion.div
              key={id}
              className="flex flex-col justify-between rounded-lg overflow-hidden group"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={src}
                  alt="project thumbnail"
                  className="rounded-t-lg w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-green-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-sm text-white/90">{description}</p>
                  </div>
                </div> */}
              </div>

              <div className="bg-gradient-to-r from-[#35A29F] to-[#6cc5b6] p-4 rounded-b-lg backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-white">{title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-green-300/60 hover:bg-purple-700 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                {!self && (
                  <p className="text-xs mt-2 text-white-300">
                    Owner:{" "}
                    <a href="https://tos.systems" className="text-white font-bold hover:underline">
                      TOS
                    </a>
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          <motion.p
            className="text-xl col-span-full text-center mt-8 text-purple-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            More Awesome Projects are on their Way....
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio

