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
              'url("https://ibb.co/M7Qz0fK',
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
                An AI software build with React, Typescript, Node.js, Next,js, Clerk and different Api
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://esifi-jdcee57ny-ismafavesco.vercel.app/"
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
               Basic semi-responsive social media website made with HTML, CSS and JavaScript 
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
          {/* Project 3 Starts */}
          <div
            style={{
              backgroundImage:
              'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yNTEtbWluZC1pbnN0Z3JhbS0wMy5qcGc.jpg',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-sky-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Coming Soon</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                Projects are in maintainance for perfect user experience

                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="{/*PROJECT REDIRECT LINK*/}"
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
          {/* Project 4 starts */}
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
                A dice game made with HTML, CSS and JavaScript that has a unique feature.
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
          {/* Works Container Ends */}
        </div>
      </div>
    </div>
  );
};

export default Work;
