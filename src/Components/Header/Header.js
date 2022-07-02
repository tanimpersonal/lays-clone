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
    if (window.scrollY > 50) {
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
      z: "0",
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: "-500px",
      z: "0",
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
        <AnimatePresence>
          <motion.div
            key="full-menu"
            initial={{ opacity: 1, position: "fixed", top: 30 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="w-[100%] bg-[#FBB517] py-2 mx-auto z-50"
          >
            <div className="button flex flex-col items-center gap-1 full-menu">
              <div className="first h-[2px] w-5 bg-white"></div>
              <div className="first h-[2px] w-5 bg-white"></div>
              <div className="first h-[2px] w-5 bg-white"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            key="list-menu"
            initial={{ y: -50, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2, type: "Inertia" }}
            exit={{ opacity: 0 }}
            className="nav w-[90%] mx-auto list-menu"
          >
            <div class="navbar bg-[#FFE600] relative z-20 navigation mx-auto">
              <div class="flex-1">
                <Link to="/" class="normal-case text-xl">
                  <img className="w-28" src={logo} alt="" />
                </Link>
              </div>
              <div class="flex-none">
                <ul class="flex mr-2">
                  <li onMouseEnter={toggle} onMouseLeave={toggle}>
                    <a
                      className="parent-class px-5 py-2 rounded-full hover:bg-red-700"
                      href="#"
                    >
                      Products
                    </a>
                    <motion.div
                      initial="exit"
                      animate={mouse ? "enter" : "exit"}
                      variants={subMenuAnimate}
                      id="mega"
                      className="absolute w-[100%] header left-0"
                    >
                      <ProductMegaMenu></ProductMegaMenu>
                    </motion.div>
                  </li>
                  <li>
                    <a className="parent-class px-5 py-2 rounded-full hover:bg-red-700">
                      Item 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Header;
