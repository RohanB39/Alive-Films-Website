"use client"
import React, { useRef } from "react";
import "./BrandingVideo.css";
import { motion, useScroll, useTransform } from "framer-motion";

const BrandingVideo = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })
  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
  return (
    <div className="bv-container">
      <div className="container">
        <motion.video
          ref={ref}
          loop
          muted
          autoPlay
          controls=""
          className="bv-video"
          style={{scale}}
        >
          <source src="/video1.mp4" type="video/mp4" className="videohw" />
        </motion.video>
      </div>
    </div>
  );
};

export default BrandingVideo;
