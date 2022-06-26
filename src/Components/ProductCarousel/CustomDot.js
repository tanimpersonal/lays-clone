import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
    div,
  } = rest;
  const divs = [
    <div className="w-4 h-4 bg-transparent hover:bg-[#FFE600] rounded-full"></div>,
    <div className="w-4 h-4 bg-transparent hover:bg-[#FFE600] rounded-full"></div>,
    <div className="w-4 h-4 bg-transparent hover:bg-[#FFE600] rounded-full"></div>,
    <div className="w-4 h-4 bg-transparent hover:bg-[#FFE600] rounded-full"></div>,
    <div className="w-4 h-4 bg-transparent hover:bg-[#FFE600] rounded-full"></div>,
  ];
  console.log(divs);
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={
        active
          ? "active w-4 bg-[#FFE600] rounded-full my-3"
          : "inactive bg-gray-600 rounded-full my-3"
      }
      onClick={() => onClick()}
    >
      {React.Children.toArray(divs)[index]}
    </button>
  );
};
export default CustomDot;
