import React from "react";
import "./EmailBox.css";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { containerVarients } from "@/src/utils/animations";

const EmailBox = () => {
  return (
    <motion.div
      initial={{
        width: ".5rem",
        borderRadius: "100%",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "ease-out",
          duration: 1,
        },
      }}
      className="emailbox"
    >
      <motion.div
      variants={containerVarients(0.6)}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{
        once: true,
      }}
      >
        {/* Icon */}
        <LuMail size={30} color="gray" />
      </motion.div>
      {/* Input */}
      <motion.input
      variants={containerVarients(0.7)}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{
        once: true,
      }}
       type="email" placeholder="Enter Email" />
      <motion.div
      variants={containerVarients(0.9)}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{
        once: true,
      }}
       className="connect-btn">Connect</motion.div>
    </motion.div>
  );
};

export default EmailBox;
