import React from "react";
import utils from "../../utils.js";
import Rating from "../Rating.jsx";

export default function CourseNavbar(props) {
  return (
    <div
      className=" fixed flex bg-white bottom-0 py-2 px-4 gap-4  w-full items-stretch shadow-lg left-0 
      md:bg-udemyBlack md:justify-end md:py-4 md:gap-10 xl:top-0 xl:bottom-auto z-10"
      style={{
        boxShadow: "0 -2px 4px rgb(0 0 0 / .08)",
      }}
    >
      <div className="hidden md:block md:basis-2/3 md:grow text-white xl:p-1">
        <h1 className="font-bold line-clamp-1">{props.title}</h1>
        <div className="flex items-center gap-2">
          <Rating
            starsLimit={1}
            ratingCount={props.rating}
            studentsCount={props.num_reviews}
            studentsCountClassName="text-[.9rem] text-[#cec0fc] underline"
            studentsCountPostfix=" ratings"
          />
          <span className="text-sm">{utils.formatCount(props.num_subscribers)} students</span>
        </div>
      </div>

      <div className="flex gap-4 basis-full md:basis-1/3 justify-end xl:hidden">
        <div className="text-center text-xl font-bold flex items-center justify-center md:text-white">
          <span>{props.price.list_price.price_string}</span>
        </div>
        <button className="grow shrink-0 bg-udemyBlack text-white font-bold py-3 px-5 md:bg-gray-50 md:grow-0 md:text-black">
          Buy now
        </button>
      </div>
    </div>
  );
}
