import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
  ];

  return (
    <div className="flex flex-col md:top-[35%] md:left-0 md:fixed md:flex-row md:items-center md:justify-center">
      <div className="hidden md:block md:mr-10">
        <ul>
          {Links.map(({ id, icon, text, href, style }) => (
            <li
              key={id}
              className={`flex justify-between items-center px-4 w-40 h-14 ${
                style ? style : ""
              } ml-[-100px] hover:ml-[-10px] bg-gray-500 hover:rounded-lg`}
            >
              <a
                href={href}
                className="flex justify-between text-white text-xl items-center w-full"
              >
                {text}
                <span size={30} className="hidden md:inline ml-4">{icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden flex justify-center items-center my-6">
        <ul className="flex">
          {Links.map(({ id, icon, href }) => (
            <li key={id} className="mx-3">
              <a  href={href}>  <span size={30}>{icon}</span> </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
