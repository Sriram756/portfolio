import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aurora, cloudMask, fog, hills, man, tree } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    // Preload all images
    const preloadImages = [aurora, cloudMask, fog, hills, man, tree];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  useEffect(() => {
    // Define responsive GSAP animations
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-area",
          start: "100px 20%",
          end: "500px center",
          scrub: 5,
          toggleActions: "play none none restart",
          markers: true,
        },
      });

      tl.fromTo(".sky", { y: 0 }, { y: -600 }, 0)
        .fromTo(".cloud1", { y: 100 }, { y: -1000 }, 0)
        .fromTo(".cloud2", { y: -100 }, { y: -500 }, 0)
        .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
        .fromTo(".mount-bg", { y: -90 }, { y: -600 }, 0)
        .fromTo(".mount-mg", { y: -90 }, { y: -550 }, 0)
        .fromTo(".mount-fg", { y: -120 }, { y: -600 }, 0);
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-area",
          start: "top 20%",
          end: "500px 70%",
          scrub: 1,
          markers: true,
        },
      });

      tl.fromTo(".sky", { y: 0 }, { y: -50 }, 0)
        .fromTo(".cloud1", { y: 250 }, { y: -400 }, 0)
        .fromTo(".cloud2", { y: -50 }, { y: -250 }, 0)
        .fromTo(".cloud3", { y: -25 }, { y: -325 }, 0)
        .fromTo(".mount-bg", { y: -5 }, { y: -50 }, 0)
        .fromTo(".mount-mg", { y: -3 }, { y: -125 }, 0)
        .fromTo(".mount-fg", { y: 60 }, { y: -300 }, 0);
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="relative  h-screen w-full overflow-y-hidden bg-zinc-300 font-[Montserrat] text-white opacity-1">
      {/* Scroll area */}
      <div className="scroll-area h-[200px] "></div>

      {/* Main SVG area */}
      <main
        className="absolute
       top-0 left-1/2 w-full max-w-[1200px] transform -translate-x-1/2 sm:max-w-full"
      >
        <svg
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
        >
          <mask id="mask-text">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image
                href={cloudMask}
                width="1200"
                height="800"
                alt="Cloud Mask"
              />
            </g>
          </mask>

          {/* Background Elements */}
          <image
            className="sky"
            href={aurora}
            width="1200"
            height="800"
            alt="Sky"
          />
          <image
            className="mount-bg"
            href={hills}
            width="1200"
            height="800"
            alt="Mount Background"
          />
          <image
            className="cloud2"
            href={fog}
            width="1200"
            height="800"
            alt="Cloud Layer 2"
          />
          <image
            className="mount-mg"
            href={tree}
            width="1200"
            height="800"
            alt="Mount Midground"
          />
          <image
            className="mount-fg"
            href={man}
            width="1200"
            height="800"
            x="-20%"
            alt="Mount Foreground"
          />

          <text
            x="50%"
            y="30%"
            textAnchor="middle"
            fill="#fff"
            style={{ fontSize: "clamp(50px, 3vw, 32px)", fontWeight: "bold" }}
          >
            Developer with Designer Eye
          </text>

          <g mask="url(#mask-text)">
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#BCC8C6" />
                <stop offset="100%" stop-color="#F8FAFC" />
              </linearGradient>
            </defs>
            <rect
              fill="url(#gradient)"
              // fill="#B9BBB6"
              width="100%"
              height="100%"
            />

            <text
              x="50%"
              y="30%"
              textAnchor="middle"
              fill="#000000"
              style={{ fontSize: "clamp(50px, 3vw, 32px)", fontWeight: "bold" }}
            >
              Designer with Developer Mind
            </text>
          </g>
        </svg>
      </main>
    </div>
  );
};

export default Projects;
