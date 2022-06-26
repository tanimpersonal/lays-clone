import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import cheddar from "../../Assest/Cheddar-Cheese-Puffs-14.625-x-12-3.5-Oz.png";
import CustomDot from "./CustomDot";

import "./ProductCarousel.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ProductCarousel = () => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        showDots
        customDot={<CustomDot />}
        infinite
      >
        <div id="item" className="bg-[#00308F]">
          <div className="image">
            <img
              id="img"
              //   className="transition-transform overflow-hidden"
              src={cheddar}
              alt=""
            />
          </div>
          <div className="text p-5 bg-[#00308F]">
            <h1 className="text-white text-2xl font-bold">SOLDIER SNACK</h1>
            <p className="text-white text-4xl">Variety Pack</p>
            <button
              id="button"
              className="bg-[#EF3128] rounded-3xl px-5 py-2 text-white mt-3"
            >
              View All
            </button>
          </div>
        </div>
        <div id="item" className="bg-[#00308F]">
          <div className="image">
            <img
              id="img"
              //   className="transition-transform overflow-hidden"
              src={cheddar}
              alt=""
            />
          </div>
          <div className="text p-5 bg-[#00308F]">
            <h1 className="text-white text-2xl font-bold">SOLDIER SNACK</h1>
            <p className="text-white text-4xl">Variety Pack</p>
            <button
              id="button"
              className="bg-[#EF3128] rounded-3xl px-5 py-2 text-white mt-3"
            >
              View All
            </button>
          </div>
        </div>
        <div id="item" className="bg-[#00308F]">
          <div className="image">
            <img
              id="img"
              //   className="transition-transform overflow-hidden"
              src={cheddar}
              alt=""
            />
          </div>
          <div className="text p-5 bg-[#00308F]">
            <h1 className="text-white text-2xl font-bold">SOLDIER SNACK</h1>
            <p className="text-white text-4xl">Variety Pack</p>
            <button
              id="button"
              className="bg-[#EF3128] rounded-3xl px-5 py-2 text-white mt-3"
            >
              View All
            </button>
          </div>
        </div>
        <div id="item" className="bg-[#00308F]">
          <div className="image">
            <img
              id="img"
              //   className="transition-transform overflow-hidden"
              src={cheddar}
              alt=""
            />
          </div>
          <div className="text p-5 bg-[#00308F]">
            <h1 className="text-white text-2xl font-bold">SOLDIER SNACK</h1>
            <p className="text-white text-4xl">Variety Pack</p>
            <button
              id="button"
              className="bg-[#EF3128] rounded-3xl px-5 py-2 text-white mt-3"
            >
              View All
            </button>
          </div>
        </div>
        <div id="item" className="bg-[#00308F]">
          <div className="image">
            <img
              id="img"
              //   className="transition-transform overflow-hidden"
              src={cheddar}
              alt=""
            />
          </div>
          <div className="text p-5 bg-[#00308F]">
            <h1 className="text-white text-2xl font-bold">SOLDIER SNACK</h1>
            <p className="text-white text-4xl">Variety Pack</p>
            <button
              id="button"
              className="bg-[#EF3128] rounded-3xl px-5 py-2 text-white mt-3"
            >
              View All
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
