import React from "react";
import { Link } from "react-router-dom";
import SliderComponent from "./SliderComponent";

const images = [
    "https://wallpapercave.com/wp/wp1877575.jpg",
    "https://cdn.wallpapersafari.com/9/17/wZb7fJ.jpg",
    "https://c0.wallpaperflare.com/preview/692/133/226/camera-fujifilm-plant-polaroid.jpg",
    "https://wallpaperboat.com/wp-content/uploads/2020/11/10/60057/shopping-33.jpg",
    "https://pbs.twimg.com/media/FpQUtPcWAAAj7LT?format=jpg&name=large"
    // Add more image URLs as needed
  ];

const Body = () => {
  return (
    <div className="shadow-lg">
      <div className="container mx-auto">
      <SliderComponent images={images} />
    </div>
      <div className="text-white    ">
        <p
          className="m-11 p-11 absolute bottom-[180px] left-[80px] uppercase text-6xl
        //  bg-gray-800/60
        bg-gradient-to-tl from-slate-900/50 to-gray-400/50
          flex flex-col rounded-3xl shadow-2xl shadow-white"
        >
          the brand setting
          <br />
          <span className="font-bold">your trend</span>
          <Link to={"/products"}>
            <button className=" my-5 border rounded-md text-2xl p-1 w-[180px]">
              Discover More
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Body;