import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Parallax = () => {
  useEffect(() => {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // Parallax Layers
    document
      .querySelectorAll("[data-parallax-layers]")
      .forEach((triggerElement) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "0% 0%",
            end: "100% 0%",
            scrub: 1,
          },
        });
        const layers = [
          { layer: "1", yPercent: 70 },
          { layer: "2", yPercent: 55 },
          { layer: "3", yPercent: 40 },
          { layer: "4", yPercent: 10 },
        ];
        layers.forEach((layerObj, idx) => {
          tl.to(
            triggerElement.querySelectorAll(
              `[data-parallax-layer="${layerObj.layer}"]`
            ),
            {
              yPercent: layerObj.yPercent,
              ease: "none",
            },
            idx === 0 ? undefined : "<"
          );
        });
      });
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Parallax Header Section */}
      <section className="relative flex items-center justify-center min-h-screen px-8">
        <div className="absolute inset-0 h-[120%]">
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-black z-20" />
          <div data-parallax-layers className="relative h-full">
            <img
              src="https://i.imgur.com/4nwlFzr.jpeg"
              loading="eager"
              alt="Layer 1"
              data-parallax-layer="1"
              className="absolute w-full h-[117.5%] object-cover top-[-17.5%]"
            />
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
              loading="eager"
              alt="Layer 2"
              data-parallax-layer="2"
              className="absolute w-full h-[117.5%] object-cover top-[-17.5%]"
            />
            <div
              data-parallax-layer="3"
              className="absolute inset-0 flex items-center justify-center"
            >
              <h2 className="font-pp-neue text-[11vw] font-extrabold text-center leading-none">
                Developer with Designer' Eye
              </h2>
            </div>
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
              loading="eager"
              alt="Layer 3"
              data-parallax-layer="4"
              className="absolute w-full h-[117.5%] object-cover top-[-17.5%]"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-black via-transparent to-transparent z-30" />
      </section>

      {/* Parallax Content Section */}
      <section className="relative flex items-center justify-center min-h-screen px-8 bg-black">
        <h2 className="font-pp-neue text-white text-[11vw] font-extrabold text-center leading-none">
          Designer with Developer's Mind
        </h2>
      </section>
    </div>
  );
};

export default Parallax;
