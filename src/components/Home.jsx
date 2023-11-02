import React from "react";
import Me from "../assets/Me.jpg";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

//Present myself
const Home = () => {
  return (
    <div
      name="home"
      className="bg-sky-100 dark:bg-slate-900 dark:text-white h-screen w-full flex-col flex items-left font-myfont"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center items-center sm:flex-row">
        <div className="sm:flex  gap-4 items-center">
          <div className=" mx-auto h-36 w-36 sm:h-60 sm:w-60">
            <img
              src={Me}
              alt=""
              className="w-full object-cover h-full shadow-md shadow-sky-700 rounded-lg"
            />
          </div>
          <div className="mt-5">
            <p className="text-sky-700 text-2xl :text-2xl mb-1">Welcome! My Name is</p>
            <h1 className="sm:text-6xl text-2xl mb-1 font-bold">Ismael Favela </h1>
            <p className=" text-l sm:text-4xl mb-5 mx-aut"> I'm a 
            <span className=" text-sky-700 text-xl sm:text-3xl mb-1 font-bold"> </span>
             {/*ANIMATION */}
            <TypeAnimation 
            sequence={['Programmer',2000 , 'Software Engineer',2000, 'Technology Fan',2000]}
            speed={50}
            className="text-sky-700 text-xl sm:text-3xl mb-1  font-bold"
            repeat={Infinity}
            wrapper="span"
            />
            </p>

             <Link to="work" smooth={true} duration={500}>
              <button className="py-2 px-3 border-2 border-sky-700 bg-sky-700 rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-sky-700 duration-300 ">
                My Projects
              </button>
            </Link>
            
                  <button className="sm:ml-4 ml-2 mt-2 py-2 px-3 border-2 border-sky-700 bg-sky-700 rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-sky-700 duration-300"
                 onClick={() => window.open('https://drive.google.com/file/d/1LXe3uoy2MUahHxe8KfBnj-YcWYXDncWh/view?usp=sharing')} >
                  Resume
                  </button>
                 
                  <button className= " mx-auto flex sm:ml-4 ml-2 mt-2 py-2 px-3 border-2 border-sky-700 bg-sky-700 rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-sky-700 duration-300"
                  onClick={() => window.open('https://www.buymeacoffee.com/ismafavesco', '_blank')} >
                     Buy me a coffee? ☕
                  </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
