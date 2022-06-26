import React from "react";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Social from "../Social/Social";
import Video from "../Video/Video";
import VideoCarousel from "../VideoCarousel/VideoCarousel";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto mt-5">
      <Video></Video>
      <div className="product-carousel bg-red-600 p-20 mt-5">
        <div className="heading text-7xl mb-3 text-white">Products</div>
        <div className="product-carous">
          <ProductCarousel></ProductCarousel>
        </div>
      </div>
      <div className="video-carousel p-20 bg-green-400 mt-5">
        <div className="heading text-7xl mb-3 text-white">Videos</div>
        <VideoCarousel></VideoCarousel>
      </div>
      <div className="social p-20 bg-[#01A9E7] mt-5">
        <div className="heading text-7xl mb-3 text-white">Social</div>
        <Social></Social>
      </div>
    </div>
  );
};

export default Home;
