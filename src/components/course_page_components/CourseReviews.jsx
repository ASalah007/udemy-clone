import React from "react";
import Dropdown from "../generic_components/Dropdown";
import Review from "./Review";

export default function CourseReviews(props) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl mb-3">Reviews</h1>
      <form className="flex items-stretch w-full gap-5 flex-col md:flex-row">
        <div className="flex justify-between border border-black pl-5">
          <input
            placeholder="Search reviews"
            className="max-w-[80%] md:grow outline-none"
          />
          <button
            type="submit"
            className=" bg-udemyBlack text-white w-14 flex justify-center font-bold text-xl items-center"
          >
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>
        </div>
        <Dropdown>
          <span>All Ratings</span>
          <span>5 stars </span>
          <span>4 stars </span>
          <span>3 stars </span>
          <span>2 stars </span>
          <span>1 stars </span>
        </Dropdown>
      </form>
      {props.reviews.results.map((e, i) => [<Review key={i} {...e} />])}
    </div>
  );
}
