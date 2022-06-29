import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assest/Logo/logo.png";
import ProductMegaMenu from "../ProductMegaMenu/ProductMegaMenu";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [mouse, toggoleMouse] = useState(false);
  const [scroll, setScroll] = useState(false);
  const setSticky = () => {
    if (window.scrollY > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", setSticky);
  const toggle = () => {
    toggoleMouse(!mouse);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: "20px",
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: "-500px",
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <section>
      {scroll ? (
        <div className="w-[100%] bg-[#FBB517] animate__animated animate__slideInUp py-2 mx-auto fixed z-50 top-0">
          <div className="button flex flex-col items-center gap-1">
            <div className="first h-[2px] w-5 bg-white"></div>
            <div className="first h-[2px] w-5 bg-white"></div>
            <div className="first h-[2px] w-5 bg-white"></div>
          </div>
        </div>
      ) : (
        <div
          className={`nav w-[90%] mx-auto ${
            scroll && "animate__animated animate__slideInDown"
          }`}
        >
          <div class="navbar bg-[#FFE600] relative z-20 navigation mx-auto">
            <div class="flex-1">
              <a class="normal-case text-xl">
                <img className="w-28" src={logo} alt="" />
              </a>
            </div>
            <div class="flex-none">
              <ul class="flex gap-5 mr-2">
                <li>
                  <a>Item 1</a>
                </li>
                <li onMouseEnter={toggle} onMouseLeave={toggle}>
                  <a className="parent-class">Parent</a>
                  <motion.div
                    initial="exit"
                    animate={mouse ? "enter" : "exit"}
                    variants={subMenuAnimate}
                    id="mega"
                    className="absolute w-[100%] header z-10 left-0"
                  >
                    <ProductMegaMenu></ProductMegaMenu>
                  </motion.div>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
