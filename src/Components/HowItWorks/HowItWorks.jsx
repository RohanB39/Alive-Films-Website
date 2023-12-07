import React from "react";
import "./HowItWorks.css";
import { features, hitFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  tagVarients,
  titleVarients,
  featureVarients,
} from "@/src/utils/animations";

const HowItWorks = () => {
  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          {/* Head */}
          <div className="hiw-head">
            <motion.span
              variants={tagVarients}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Meet Our Leadership
            </motion.span>
            <motion.span
              variants={titleVarients}
              initial="offscreen"
              whileInView={"onscreen"}
              className="text"
            >
              Discover the driving force behind our success—our distinguished
              leadership team. United by a shared commitment to excellence,
              these seasoned professionals bring diverse expertise and
              unwavering passion, steering our organization towards innovation
              and accomplishment.
            </motion.span>
          </div>
          <div className="hiw-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
                variants={featureVarients}
                initial="offscreen"
                whileInView={"onscreen"}
                className="hiw-feature"
                key={i}
              >
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "ease-in",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className="details"
                >
                  <span className="des">0{i + 1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                <div className="icon">
                  <Image
                    src={feature.icon}
                    width={128}
                    height={128}
                    alt="feature"
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
