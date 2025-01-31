import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../constants/Shiny.css";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-slate-900 to-slate-600 text-white relative"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl border-b-4 inline font-bold border-gray-500">
            Contact
          </p>
          <p className="py-6">submit the below form to get touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="enter your name "
              className="p-2 bg-transparent border-2 text-white rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="enter your E-mail "
              className="p-2 bg-transparent border-2 my-4 text-white rounded-md focus:outline-none"
            />
            <textarea
              name="msg"
              rows="10"
              placeholder="enter your message"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white"
            ></textarea>

            <button className="shiny-cta my-8">
              <span>Lets Talk</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
