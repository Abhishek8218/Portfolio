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
        I am a BCA graduate currently working as a web development intern. During my internship, I have gained practical experience in building and maintaining web applications, collaborating with team members, and using modern web technologies to deliver high-quality projects.
        </p>

        <br />

        <p className="text-xl font-para">
        As an aspiring fullstack web developer, I am deeply passionate about technology and enjoy creating functional and visually appealing websites using the latest web technologies. I am a fast learner who is always eager to expand my skillset and take on new challenges.

<br /> <br />If you're looking for a driven and enthusiastic developer ready to make an impact, I would love to connect and discuss how I can contribute to your team.


        </p>
      </div>
    </div>
  );
};

export default About;