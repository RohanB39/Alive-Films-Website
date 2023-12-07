"use client"
import React from "react";
import "./WhatWeDo.css";
import Image from "next/image";
import { features } from "@/src/utils/data";
import { motion } from "framer-motion";
import {
  desVarients,
  tagVarients,
  titleVarients,
} from "@/src/utils/animations";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVarients}
              className="tag"
            >
              WHAT WE DO?
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVarients}
              className="title"
            >
              {" "}
              VIDEO PRODUCTION INDIA
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVarients}
              className="des"
            >
              CORPORATE VIDEOS & INDUSTRIAL VIDEOS, AD FILMS
            </motion.span>
          </div>
          <div className="wwd-blocks">
            <div className="wwd-block">
              <div className="block-features">
                {features.slice(0, 1).map((features, i) => (
                  <div key={i}>
                    <Image
                      src={features.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                  </div>
                ))}
              </div>
              <motion.span
              variants={titleVarients}
              initial="offscreen"
              whileInView={"onscreen"}
               className="sec-title">
                CORPORATE VIDEOS & INDUSTRIAL VIDEOS
              </motion.span>
              <motion.span
              variants={desVarients}
              initial="offscreen"
              whileInView={"onscreen"}
               className="text">
                Our in-house troops hold specialty in producing
                emotionally-driven and engaging videos. When you take us as your
                corporate film production ally, you get the collective
                assistance of talented scriptwriters, video-graphers, and
                editors to create unforgettable corporate videos that are in
                keeping with your strategic marketing goals.
              </motion.span>
            </div>
            <div className="wwd-block">
              <div className="block-features">
                {features.slice(1, 2).map((features, i) => (
                  <div key={i}>
                    <Image
                      src={features.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                  </div>
                ))}
              </div>
              <motion.span
              variants={titleVarients}
              initial="offscreen"
              whileInView={"onscreen"}
               className="sec-title">AD FILMS</motion.span>
              <motion.span
              variants={desVarients}
              initial="offscreen"
              whileInView={"onscreen"}
               className="text">
                We are instrumental in implementing Advertising Film Making
                Services to our valuable customers. These provided services are
                imparted as per the demands and desires of our clients. To add,
                our enormous experience in this domain has empowered us to
                provide reliable services to our clients.
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
