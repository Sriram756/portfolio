import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Background = () => {
  const tierraRef = useRef(null);
  const kidsRef = useRef(null);

  useEffect(() => {
    const tierraEl = tierraRef.current;
    const kidsEl = kidsRef.current;

    // Parallax effect and scaling with GSAP ScrollTrigger
    if (tierraEl && kidsEl) {
      ScrollTrigger.create({
        trigger: "#cont",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // Parallax effect for tierra (background image)
          gsap.to(tierraEl, {
            backgroundPosition: `center -${progress * 300}px`,
            ease: "none",
          });

          // Scale kids (foreground image)
          gsap.to(kidsEl, {
            scale: 1 + progress,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });
    }
  }, []);

  return (
    <div
      id="cont"
      className="flex justify-start items-start relative h-[250vh]"
    >
      <div
        id="stickyDiv"
        className="flex justify-center items-center w-full h-screen sticky top-0 overflow-hidden"
      >
        <div
          id="tierra"
          ref={tierraRef}
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              'url("https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/2.jpg")',
            backgroundPosition: "center 0px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transition: "all 0.5s",
            filter: "blur(0.5px)",
          }}
        ></div>
        <div
          id="kids"
          ref={kidsRef}
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              'url("https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/Sin%20nombre.png")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transition: "all 0.8s",
            position: "absolute",
            objectFit: "cover",
            filter: "blur(0.9px)",
            overflow: "hidden",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Background;
