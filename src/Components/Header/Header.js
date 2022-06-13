import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assest/Logo/logo.png";
import ProductMegaMenu from "../ProductMegaMenu/ProductMegaMenu";
import "./Header.css";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  return (
    <div className="nav relative w-[80%] mx-auto">
      <div class="navbar  bg-[#FFE600] mx-auto">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
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
      {click ? (
        <div className="absolute animate__animated animate__slideInDown top-22 ">
          <ProductMegaMenu></ProductMegaMenu>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
