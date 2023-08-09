import React from "react";

//copyright simple component
const Footer = () => {
  let date = new Date();
  let copyrightDate = date.getFullYear();
  return (
    <div className="bg-sky-100 dark:bg-slate-900 dark:text-white p-4 font-myfont">
      <p className="text-base text-center">
        Copyright &copy; {copyrightDate}  | Ismael All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
