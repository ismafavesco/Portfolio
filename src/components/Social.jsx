import React from "react";
import {
  FaHome,
  FaUser,
  FaRegEnvelope,
  FaAtom,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="fixed top-[30%] sm:right-6 right-3">
      <ul className="flex flex-col gap-6">
        
        <li className="relative group text-2xl sm:text-3xl bg-[#DD2A7B] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#DD2A7B] rounded-full">
            <p className="text-base">Instagram</p>
          </div>
          <a href="https://www.instagram.com/ismafavesco/" target={"_blank"}>
            <FaInstagram />
          </a>
        </li>
        
        <li className="relative group text-2xl sm:text-3xl bg-[#006192] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#006192] rounded-full">
            <p className="text-base">LinkedIn</p>
          </div>
          <a
            href="https://www.linkedin.com/in/ismael-favela-985896233/"
            target={"_blank"}
          >
            <FaLinkedinIn />
          </a>
        </li>
      
        <li className="relative group text-2xl sm:text-3xl bg-[#171515] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#171515] rounded-full">
            <p className="text-base">Github</p>
          </div>
          <a href="https://github.com/ismafavesco" target={"_blank"}>
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
