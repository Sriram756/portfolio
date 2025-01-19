import React, { useEffect } from "react";
import { gsap } from "gsap";
import { serviceDetails } from "../constants";

const Services = () => {
  useEffect(() => {
    const reveal = () => {
      const revealers = document.querySelectorAll(".text");
      const images = document.querySelectorAll(".serviceImg");
      const revealPoint = window.innerHeight / 2;

      revealers.forEach((text, i) => {
        const { top, bottom } = text.getBoundingClientRect();

        if (top < window.innerHeight - revealPoint) {
          gsap.to(images[i], {
            opacity: 1,
            zIndex: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          gsap.to(images[i], {
            opacity: 0,

            duration: 0.5,
            ease: "power2.out",
          });
        }

        if (bottom < 0 + revealPoint) {
          gsap.to(images[i], {
            opacity: 0,

            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Trigger on mount to initialize

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="bg-gray-300 relative">
      <div className="flex flex-row max-w-[1080px] mx-auto relative">
        {/* Sticky Part */}
        <div className="flex-1  ml-2 sticky top-0 h-screen  flex items-center justify-center">
          {serviceDetails.map((item, index) => (
            <div
              key={index}
              className="imgBox  absolute w-[250px] h-[200px] md:w-[500px] md:h-[300px] bg-black flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="serviceImg  w-full h-full opacity-0 "
              />
            </div>
          ))}
        </div>

        {/* Scrollable Text Section */}
        <div className="flex-1">
          {serviceDetails.map((item, index) => (
            <div
              key={index}
              className="text h-screen flex flex-col justify-center px-4"
            >
              <h2 className="md:text-5xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500 font-bold mb-4">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
