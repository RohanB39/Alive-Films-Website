"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Dekstop-Version */}
      <div className="container">
        <div className="n-container">
          {/* Left-Side */}
          <div className="n-logo">
            <span>Alive Films</span>
          </div>
          {/* Right-Side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="h-wrapper" spy={true} smooth={true}>
                <span>Home</span>
              </Link>
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>About</span>
              </Link>
              <Link to="r-wrapper" spy={true} smooth={true}>
                <span>Services</span>
              </Link>
              <span>Films</span>
              <span>Photography</span>
              <Link to="t-wrapper" spy={true} smooth={true}>
                <span>Blog</span>
              </Link>
            </div>
            <div className="request-q">Request Quote</div>
          </div>
        </div>
      </div>
      {/* Mobile/Tab-Version */}
      <div className="nm-container">
        {/* Logo */}
        <span>Alive Films</span>
        {/* Menu-Icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}
        {/* Mobile-Menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="h-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Home</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>About</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="r-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Services</span>
          </Link>
          <span>Films</span>
          <span>Photography</span>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Blog</span>
          </Link>
          <div className="m-request-q">Request Quote</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
