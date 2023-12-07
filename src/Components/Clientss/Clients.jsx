"use client";
import React from "react";
import "./Clients.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/clients.json";
import { clientSliderSettings } from "../../utils/cres";
import { motion } from "framer-motion";
import { desVarients, tagVarients } from "@/src/utils/animations";

const Clients = () => {
  return (
    <div className="client">
      <div className="container">
        <div className="client-container">
          <div className="c-headings">
            <span className="title">Our Clients</span>
            <span className="text">
              We work with all the clients around the globe. We have provided
              imagery services to our esteemed clients.
            </span>
          </div>
          {/* Slider */}
          <div className="slider">
            <Swiper {...clientSliderSettings}>
            <SliderButtons />
              {data.map((card, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVarients}
                    className="cimg"
                  >
                    <motion.img
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={tagVarients}
                      src={card.image}
                      alt="home"
                      height={120}
                      width={120}
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slider">
            <Swiper {...clientSliderSettings}>
            <SliderButtons />
              {data.map((card, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVarients}
                    className="cimg"
                  >
                    <motion.img
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={tagVarients}
                      src={card.image}
                      alt="home"
                      height={120}
                      width={120}
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
const SliderButtons = () => {
    const swiper = useSwiper();
    return (
      <div className="flexCenter r-button">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    );
  };
