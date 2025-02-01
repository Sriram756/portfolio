import {
  faAndroid,
  faBehanceSquare,
  faFigma,
  faHtml5,
  faInstagram,
  faNode,
  faNodeJs,
  faReact,
  faSquareJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Orbit = () => {
  return (
    <section className="w-full  h-screen flex justify-center relative bg-gradient-to-b from-black to-gray-950">
      <div className="  relative md:static px-10">
        <ul className="orbit-wrap ">
          <li className="orbit-center">
            <div className="orbit-center__icon">
              <i className="fa-solid fa-code"></i>
            </div>
          </li>
          <li>
            <ul className="ring-0">
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2xl"
                    style={{ color: "#E1306C" }}
                  />
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faFigma}
                    size="2xl"
                    style={{ color: "#1ABCFE" }}
                  />
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    style={{ color: "#FFD43B" }}
                    size="2xl"
                  />
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faNode}
                    size="2xl"
                    style={{ color: "#07e40b" }}
                  />
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faBehanceSquare}
                    size="2xl"
                    style={{ color: "#ffc800" }}
                  />
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-1">
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faReact}
                    size="2xl"
                    style={{ color: "#74C0FC" }}
                  />
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    size="2xl"
                    style={{ color: "#FFA500" }}
                  />
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    size="2xl"
                    style={{ color: "#2965f1" }}
                  />
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-2">
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faPython}
                    size="2xl"
                    style={{ color: "#ffc800" }}
                  />
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faAndroid}
                    size="2xl"
                    style={{ color: "#0fff1f" }}
                  />{" "}
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faWordpress}
                    size="2xl"
                    style={{ color: "#74C0FC" }}
                  />
                </div>
              </li>
              <li>
                <div className="orbit-icon"></div>
              </li>
              <li>
                <div className="orbit-icon"></div>
              </li>
              <li>
                <div className="orbit-icon"></div>
              </li>
              <li>
                <div className="orbit-icon"></div>
              </li>
              <li>
                <div className="orbit-icon"></div>
              </li>
            </ul>
          </li>
          {/* 
          <li> */}
          {/* <ul className="ring-3">
            <li>
              <div className="orbit-icon py"></div>
            </li>
            <li>
              <div className="orbit-icon"></div>
            </li>
            <li>
              <div className="orbit-icon"></div>
            </li>
          </ul> */}
        </ul>
      </div>
    </section>
  );
};

export default Orbit;
