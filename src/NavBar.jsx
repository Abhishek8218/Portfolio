import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  const [selected, setSelected] = useState(null); // Initialize selected state to null

  const link = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "contact" },
    { id: 5, link: "skills" },
  ];

  const handleSelect = (linkId) => {
    setSelected(linkId); // Update selected state with the clicked link's ID
    setMobile(false); // Close mobile menu when a link is clicked
  };

  return (
    <div className="bg-black flex justify-between items-center w-full h-16 px-4 fixed">
      <div>
        <h1 className="text-white text-3xl ml-4 font-name sm:text-5xl">Abhishek</h1>
      </div>
      <ul className="hidden md:flex">
        {link.map(({ id, link }) => (
          <li key={id} className="text-gray-200 px-4 capitalize cursor-pointer font-medium hover:scale-105 duration-200">
            <Link
              to={link}
              smooth
              duration={800}
              className={selected === id ? "underline underline-offset-8" : ""} // Apply underline if selected
              onClick={() => handleSelect(id)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setMobile(!mobile)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
        {mobile ? <FaTimes size={30} /> : <FaBars size={30} className="" />}
      </div>
      {mobile && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-white bg-gradient-to-r from-gray-500 to-black md:hidden">
          {link.map(({ id, link }) => (
            <li key={id} className="py-6 cursor-pointer capitalize font-para text-4xl">
              <Link
                to={link}
                smooth
                duration={800}
                offset={-80}
                className={selected === id ? "underline underline-offset-8" : ""} // Apply underline if selected
                onClick={() => handleSelect(id)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
