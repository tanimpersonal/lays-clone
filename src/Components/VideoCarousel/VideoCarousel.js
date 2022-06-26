import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
const VideoCarousel = () => {
  const [playing, setPlaying] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [playing3, setPlaying3] = useState(false);
  const handlePause = () => {
    setPlaying(false);
    setPlaying2(false);
    setPlaying3(false);
  };

  // const handlePlayPause = () => {
  //   if (!playing) {
  //     setPlaying(true);
  //   } else {
  //     setPlaying(false);
  //   }
  // };

  // const first = document.getElementById("first");
  // console.log(first?.playing);
  return (
    <div className="">
      <div class="carousel w-full">
        <div
          id="slide1"
          class="carousel-item relative w-full items-center gap-6"
        >
          <div className="video">
            <ReactPlayer
              id="first"
              url="https://www.youtube.com/embed/FttGn7Ws-Ws"
              playing={playing}
              onPlay={() => setPlaying(true)}
            ></ReactPlayer>
          </div>
          <div className="head">
            <div className="heading text-3xl font-bold mb-3 uppercase text-white">
              Soldier Snacks Limon
            </div>
          </div>
        </div>
        <div
          id="slide2"
          class="carousel-item relative w-full items-center gap-6"
        >
          <div className="video">
            <ReactPlayer
              url="https://www.youtube.com/embed/5Fp3S3CIH_s"
              playing={playing2}
              onPlay={() => setPlaying2(true)}
            ></ReactPlayer>
          </div>
          <div className="head">
            <div className="heading text-3xl font-bold mb-3 uppercase text-white">
              Soldier Snacks Limon
            </div>
          </div>
        </div>
        <div
          id="slide3"
          class="carousel-item relative w-full items-center gap-6"
        >
          <div className="video">
            <ReactPlayer
              url="https://www.youtube.com/embed/LzlOyGkugGA"
              playing={playing3}
              onPlay={() => setPlaying3(true)}
            ></ReactPlayer>
          </div>
          <div className="head">
            <div className="heading text-3xl font-bold mb-3 uppercase text-white">
              Soldier Snacks Limon
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a onClick={handlePause} class="btn btn-xs" href="#slide1">
          1
        </a>
        <a onClick={handlePause} class="btn btn-xs" href="#slide2">
          2
        </a>
        <a onClick={handlePause} class="btn btn-xs" href="#slide3">
          3
        </a>
      </div>
    </div>
  );
};

export default VideoCarousel;
