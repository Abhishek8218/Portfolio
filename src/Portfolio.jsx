
import React from "react";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "One-Store47",
      href: "https://onestore21.netlify.app/"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "To-Do Web App",
      href: "https://assignment-23-abhishekkuma449.codeyogi-batch-2.repl.co"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHklMjBhbmQlMjBzYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
      title: "Mood-Tracker",
      href: "https://assignment-26-abhishekkuma449.codeyogi-batch-2.repl.co"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "TSP-Cares",
      href: "https://tsp-cares.vercel.app/"
    },
    {
      id: 5,
      src: "/assets/Service-ticket-thumbnail.png",
      title: "Service Ticketing",
      href: "https://service-ticketing-app.vercel.app/"
    },
    {
      id: 6,
      src: "assets/artify-thumbnail.png",
      title: "Artify",
      href: "https://its-artify.vercel.app/login"
    },

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
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-2 py-3 m-4 duration-200 hover:scale-105 hover:underline hover:underline-offset-8 hover:text-blue-500" href={href}>
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