import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assest/Logo/logo.png";
import ProductMegaMenu from "../ProductMegaMenu/ProductMegaMenu";
import "./Header.css";
const Header = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const setSticky = () => {
    if (window.scrollY > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", setSticky);
  const handleClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
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
              <ul class="menu menu-horizontal p-0">
                <li>
                  <a>Item 1</a>
                </li>
                <li onClick={handleClick} tabindex="0">
                  <a className="parent-class">Parent</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            id="mega"
            className={` absolute w-[90%] z-10  ${
              click ? "animate__animated animate__slideInDown" : "mega"
            }`}
          >
            <ProductMegaMenu></ProductMegaMenu>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
