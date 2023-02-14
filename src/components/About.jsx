import React from "react";

const About = () => {
  return (
    //This is the About Me section
    <div
      name="about"
      className="bg-sky-100 dark:bg-slate-900 dark:text-white h-screen w-full flex-col flex items-center font-myfont"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="sm:text-6xl text-3xl border-b-4 border-sky-700 inline">
            About Me
          </h1>
        </div>
        <div className="grid md:grid-cols-2 md:gap-8 mt-5 md:mt-8">
          <div className="text-sky-700  md:text-4xl text-3xl font-bold md:text-left ">
            <p className="">Hello, nice to see you here. Please take a look around.</p>
          </div>
          <div className="text-base md:text-xl mt-4 md:mt-0">
            <p className="md:text-left">
            I'm  a big passionate for coding and technology, 
             also have a strong understanding of software/web/AI development and a drive to continuously improve my skills, 
             as well as to learn something new everyday.
             In my free time, I enjoy staying active through sports and going to the gym. 
             I believe in the importance of both physical and mental wellness and strive to maintain a healthy balance in my life.
             
            <p className="text-sky-700 font-bold ">You need a developer? Feel free to contact me."</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
