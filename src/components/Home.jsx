import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { lapbg, profile } from "../utils";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

import "../constants/BlueEarth.css";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //for about text
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => {
      const text = new SplitType(el, { types: "lines" });
      gsap.from(text.lines, {
        scrollTrigger: {
          trigger: el,
          start: isDesktop ? "left 90%" : "0px center",
          end: isDesktop ? "left 50%" : "200px bottom",
          scrub: 1,
          // markers: true,
        },
        opacity: 0,
        duration: 0.3,
        stagger: 0.2,
      });
    });
  }, [isDesktop]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 30]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["70%", "0%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const zoomy = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Step 2: Update the window size when the window is resized

  return (
    <div className="relative bg-black ">
      <div
        id="home"
        ref={ref}
        className="relative z-10 h-[200vh]  overflow-hidden"
      >
        <motion.div
          style={{ scale: scale }}
          className=" sticky top-18 grid h-screen  origin-[65%_60%]  md:origin-[66%_59%] lg:origin-[66%_70%] xl:origin-[66%_85%]"
        >
          <div
            className=" flex lapCs  p-12 h-screen "
            style={{
              backgroundImage: `url(${lapbg})`,
            }}
          >
            <div className="flex h-full flex-col md:ml-12 ml-0 mt-20">
              <p className="mb-5 max-w-[12ch] md:ml-32 ml-1 text-6xl font-bold leading-[0.85] md:my-2 md:text-[80px] xl:text-[128px]">
                <h2 className=" shad">SRIRAM</h2>
                <TypeAnimation
                  sequence={[
                    "FrontEnd Dev",
                    1000,
                    "UI-UX Designer",
                    1000,
                    "Video Editor",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="font-bold
      text-gray-900 text-xl md:text-5xl"
                />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-[-130vh] py-20 h-full relative overflow-hidden  bg-black  ">
        <div className="horizon">
          <div class="glow"></div>
        </div>
        <div id="earth"></div>
        <div
          id="title"
          className=" md:mt-[30px] mt-[10px] md:text-[130px] text-[60px]"
        >
          ABOUT
        </div>

        <motion.div
          id="about"
          style={isDesktop ? { x: imageX } : { x: 0, y: imageY }}
          className=" mx-auto flex justify-between md:flex-row flex-col items-center  h-fit w-full  max-w-[90%] gap-3 rounded-[60px]  forGlass px-10 shadow-2xl     "
        >
          <img
            src={profile}
            alt="profile-img"
            width={100}
            className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] profile-img"
          />
          <p className="reveal text-sm md:text-2xl text-white">
            As a junior Ux/UI designer I get to my love for technology with my
            passion for design and art.I enjoy using my creativity and
            problem-solving skills to create digital experiences that not only
            look great but also work seamlessly for the user . when I'm not
            designing,
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
