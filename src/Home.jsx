import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import profile from "../assets/profile.jpeg";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div name="home" className=" md:pt-20  h-fit w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen">
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-fit px-4 md:flex-row py-10">
        <div className="flex flex-col justify-center h-fit pt-20 pb-15 md:mr-8">
          <h2 className="text-4xl sm:text-7xl font-bold">I'm a Frontend Developer</h2>
          <p className="mt-4 text-gray-400">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>

          <div>
            <button className="flex py-3 px-5 my-4 items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white 
 w-fit">
              Resume <span  className=""><AiOutlineDownload size={20} className=" ml-1"/></span>
            </button>
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
