"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/Slider.json";
import { sliderSettings } from "../../utils/common";
import { motion } from "framer-motion";
import { titleVarients } from "@/src/utils/animations";

const Residencies = () => {
  return (
    <section className="r-wrapper" id="r-section">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <motion.span
            variants={titleVarients}
            initial="offscreen"
            whileInView={"onscreen"}
            className="primaryText"
          >
            WEHAT WE DO
          </motion.span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span>{card.price}</span>
                </span>
                <div className="txt">
                  <motion.span
                    variants={titleVarients}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className="head"
                  >
                    {card.name}
                  </motion.span>
                  <motion.span
                    variants={titleVarients}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className="card-details"
                  >
                    {card.detail}
                  </motion.span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
