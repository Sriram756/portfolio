import React, { useEffect } from "react";
import { gsap } from "gsap";
import { serviceDetails } from "../constants";

const Services = () => {
  useEffect(() => {
    const reveal = () => {
      const revealers = document.querySelectorAll(".text");
      const images = document.querySelectorAll(".serviceImg");
      const revealPoint = window.innerHeight * 0.2; // Adjusted for better timing

      revealers.forEach((text, i) => {
        const rect = text.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight - revealPoint &&
          rect.bottom > revealPoint;

        gsap.to(images[i], {
          opacity: isVisible ? 1 : 0,
          zIndex: isVisible ? 1 : -1,
          duration: 0.3,
        });
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Trigger once on mount

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <p className="text-xl md:text-4xl font-bold inline border-b-4 border-gray-500 text-transparent bg-clip-text bg-white px-5 md:ml-14">
        Services
      </p>
      <div className="flex  flex-row  w-screen relative">
        {/* Sticky Image Section */}
        <div className="w-1/2 sticky md:top-0 top-1/4 h-screen flex items-center justify-center">
          {serviceDetails.map((item, index) => (
            <div
              key={index}
              className="imgBox absolute  w-10/12 h-1/3 md:w-96 md:h-64 bg-black flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="serviceImg w-full h-full opacity-0 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>

        {/* Scrollable Text Section */}
        <div className="w-1/2  py-12">
          {serviceDetails.map((item, index) => (
            <div
              key={index}
              className="text h-screen w-full flex flex-col justify-center"
            >
              <h2 className="text-xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500 mb-4">
                {item.title}
              </h2>
              <p className="text-base font-light md:text-lg text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
