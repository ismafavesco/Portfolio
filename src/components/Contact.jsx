import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-sky-100 dark:bg-slate-900 dark:text-white min-h-screen max-h-full w-full flex-col flex items-center font-myfont  justify-center"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="sm:text-6xl text-3xl border-b-4 border-sky-700 inline">
            Contact Me
          </h1>
        </div>
      

        <div className="mt-8 w-full md:w-3/4 md:mx-auto">
          <form
            action="https://getform.io/f/afbf98aa-27a1-44d2-9ee4-03db94811b87"
            method="POST"
          > 
        {/* Name */}
            <input
              type="text"
              placeholder="Enter Your Full Name"
              name="name"
              className="w-full p-2 text-base mb-4 focus:outline-sky-700 rounded-full"
              required
            />
        {/* Email */}

            <input
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              className="w-full p-2 text-base mb-4 focus:outline-sky-700 rounded-full"
              required
            />
          
        {/* Subject */}
            <input
              type="text"
              placeholder="Enter Your Subject"
              name="subject"
              className="w-full p-4 text-base mb-4 focus:outline-sky-700 rounded-full"
              required
            />

        {/* Message */}
            <textarea
              name="message"
              className="w-full p-2 text-base mb-4 h-40 resize-none focus:outline-sky-700 rounded-lg"
              required
              placeholder="Enter Your Message"
            ></textarea>
            <button

            //submit button
              type="submit"
              className="w-full p-2 bg-sky-700 text-white text-lg font-bold border-2 border-sky-700 hover:bg-white hover:text-sky-700 cursor-pointer duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
