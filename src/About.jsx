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
          I am currently pursuing my third year in BCA and have completed a 6-month web development course with React from Codeyogi platform. Additionally, I recently completed a 1-month virtual internship where I gained practical experience in web development.<br /> <br />As an aspiring fullstack web developer, I am deeply passionate about technology and enjoy creating functional and visually appealing websites using the latest web technologies."
        </p>

        <br />

        <p className="text-xl font-para">
          I am a fast learner who is always eager to expand my skillset and take on new challenges. Currently, I am seeking an internship opportunity to gain real-world experience and apply my knowledge in a practical setting. <br /> <br />If you're looking for a dedicated and hardworking individual who is eager to learn and grow, please don't hesitate to contact me.
        </p>
      </div>
    </div>
  );
};

export default About;