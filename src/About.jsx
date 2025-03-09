import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-16 font-para">
          I'm a passionate Front-end Developer with experience building robust web applications using Next.js, TypeScript, and Tailwind CSS. Currently, I work at Totally Optimized Solutions, where I lead frontend development, mentor team members, and deliver scalable solutions. I’ve contributed to projects like loan management systems and complex dashboards, while also developing various reusable components.
        </p>

        <br />

        <p className="text-xl font-para">
          Previously, I interned at SV Infotech Software Solutions, where I enhanced the company website's user experience and developed Restful APIs for seamless user interactions.
        </p>

        <br />

        <p className="text-xl font-para">
          I’m always eager to learn and take on new challenges. Let’s connect and discuss how I can contribute to your team!
        </p>
      </div>
    </div>
  );
};

export default About;
