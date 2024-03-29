import React from "react";

import { FaDownload } from "react-icons/fa";
  
const Work = () => {
  return (
    <div
      name="work"
      className="bg-sky-100 dark:bg-slate-900 dark:text-white min-h-screen py-20 max-h-full w-full flex-col flex items-center font-myfont justify-center"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="sm:text-6xl text-3xl border-b-4 border-sky-700 inline">
            My Projects
          </h1>
        </div>
        <div className="mt-5 md:mt-8 grid md:grid-cols-2 gap-6">
          {/* Project 1 Starts */}
          <div
            style={{
              backgroundImage:
              'url("https://i.postimg.cc/3JLG7h2Q/esifi.png',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-sky-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Esifi</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                An AI software created with React, Typescript, Node.js, Next,js, Clerk and different Api (2023)
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://esifi-ismafavesco.vercel.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-sky-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}

          {/* Project 2 Starts */}
          <div
            style={{
              backgroundImage:
              'url("https://i.postimg.cc/FH0C39W2/gymdex.png',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-sky-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Gymdex</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                Gymdex is a user-friendly platform designed to provide Gym enthusiasts access to thousands of exercises on demand. (2023)
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://gymdex.vercel.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-sky-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}
 {/* Project 3 Starts */}
          <div
            style={{
              backgroundImage:
              'url("https://i.postimg.cc/NjtH1jF5/Screenshot-2023-09-28-164045.png',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-sky-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>QuizAI</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                AI quiz generator built with Typescript, React, Prisma, Next.js, Planetscale, Tailwind, and Openai (2023)

                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://quizai-ten.vercel.app"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-sky-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}
         
        {/* Project 4 Starts */}
          <div
            style={{
              backgroundImage:
              'url("https://i.postimg.cc/Gtxjtkyd/favesocial.png',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center ",
              backgroundSize: "cover ",

            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-sky-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Favesocial</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
               Basic semi-responsive social media website made with HTML, CSS and JavaScript (2020)
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://ismafavesco.github.io/Favesocial/"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-sky-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}


          
          {/* Project 5 starts */}
          <div
            style={{
              backgroundImage:
                'url("https://img.freepik.com/premium-vector/dancing-dice-cartoon_96037-277.jpg',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-sky-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Dancing Dice</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                A dice game made with HTML, CSS and JavaScript that has a unique feature. (2019)
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://ismafavesco.github.io/Dancing-Dice/"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-sky-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 6 starts */}
          <div
            style={{
              backgroundImage:
                'url("https://i.postimg.cc/CLdKdLc9/faveballs.png',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-sky-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Faveballs</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                An online multiplayer game built with vanilla Javascript, HTML, and Css runing on an Akami linode server. (2023)
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="http://ismafavesco.com/"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-sky-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}
        </div>
      </div>
    </div>
  );
};

export default Work;
