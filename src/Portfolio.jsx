
import React from "react";
import academixPro from "../assets/academixPro.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHklMjBhbmQlMjBzYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
      title: "Mood-Tracker",
      href: "https://assignment-26-abhishekkuma449.codeyogi-batch-2.repl.co"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "To-Do Web App",
      href: "https://assignment-23-abhishekkuma449.codeyogi-batch-2.repl.co"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "One-Store47",
      href: "https://onestore21.netlify.app/"
    },
    {
      id: 4,
      src: "https://img.freepik.com/free-vector/helping-partner-concept-illustration_114360-8867.jpg?t=st=1709637197~exp=1709640797~hmac=a4dd69a178ee84e6e0f9287b801345d648104993e0a8a6e45dd9da6bd2bf07f9&w=740",
      title: "Business-Person Page ",
      href: "https://its-business-landing-page.vercel.app/"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "TSP-Cares",
      href: "https://tsp-cares.vercel.app/"
    },
    {
      id: 6,
        src: "https://img.freepik.com/free-vector/restaurant-facade-background_23-2147673396.jpg?t=st=1709640605~exp=1709644205~hmac=6a65c894a84259ea674230522c9c815b7f2d508c5f09ebf9656fc035497cc983&w=740",
        title: "Restaurant UI",
        href: "https://its-restaurant-ui.netlify.app/"
    },
    {
      id: 7,
      src: "https://img.freepik.com/free-vector/paper-style-core-values-background_23-2149079276.jpg?t=st=1709634295~exp=1709637895~hmac=dcb391f977aacd10c7b9b7a93543e905aabd12a65b56ee954d7b307ce61e50e0&w=996",
      title: "Service Ticketing",
      href: "https://service-ticketing-app.vercel.app/"
    },
    {
      id: 8,
      src: "https://img.freepik.com/free-photo/colorful-image-woman-s-face-with-words-word-bottom_188544-12871.jpg?t=st=1709634192~exp=1709637792~hmac=3884df6cd92eb8d61166d84e8039da24e8a60720e20826f8091507e82e324a15&w=1060",
      title: "Artify",
      href: "https://its-artify.vercel.app/login"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Infinity Insights",
      href: "https://infinity-insights.vercel.app/"
    }, {
      id: 10,
      src: "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?t=st=1717914481~exp=1717918081~hmac=d038f007309a146248c040eda593aef780948533d67d31419df971c723aae4c0&w=996",
      title: "Dynamic Portfolio - Internship Assignment by ThePortfolyo",
      href: "https://dynamic-portfolio-react.vercel.app/"
    },
    {
      id: 11,
      src: academixPro,
      //src: "https://images.unsplash.com/photo-1593444285563-4479fb28226e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "AcademixPro",
      href: "https://academixpro.vercel.app/"
    }
     
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 mt-16">Check out some of my work right here :-</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.reverse().map(({ id, src, title, href }) => (
            <div key={id} className=" flex flex-col justify-between shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="project thumbnail"
                className="rounded-md duration-200 hover:scale-105 min-h-[192px] max-h-[192px] object-cover"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-2 py-3 m-4 font-bold duration-200 hover:scale-105 hover:underline hover:underline-offset-8 hover:text-blue-500" href={href}>
                  {title}
                </a>

              </div>
            </div>
          ))}

          <p className="text-xl">More Awesome Projects are on there Way....</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;