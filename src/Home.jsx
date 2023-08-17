import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import profile from "../assets/profile.jpeg";
import SocialLinks from "./SocialLinks";
import Abhishek_Kumar_Resume from "../Abhishek_Kumar_Resume.pdf"
const Home = () => {

  
  return (
    <div name="home" className=" md:pt-20  h-fit w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-fit">
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-fit px-4 md:flex-row py-10">
        <div className="flex flex-col justify-center h-fit pt-20 pb-15 md:mr-8">
          <h2 className="text-4xl sm:text-7xl font-bold"> Front-End React Developer</h2>
          <p className="mt-4  text-gray-300">
            Welcome to my portfolio website! I'm Abhishek, a frontend developer. I'm passionate about creating visually appealing and functional websites using the latest web technologies. Currently, I specialize in frontend development and am looking forward to learning fullstack development soon. Feel free to browse my portfolio and reach out to me with any questions or project inquiries. Thank you for stopping by!
          </p>

          <div>
            <a href={Abhishek_Kumar_Resume} download >
            <div className="flex py-3 px-5 my-6 items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white 
 w-fit" >
              Resume <span  className=""><AiOutlineDownload size={20} className=" ml-1"/></span>
            </div>
              </a>
          </div>
          <SocialLinks/>
        </div>
        <img
          src={profile}
          alt="profile"
          className="rounded-2xl mx-auto  md: max-w-xs mt-6 md:mt-0 object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
