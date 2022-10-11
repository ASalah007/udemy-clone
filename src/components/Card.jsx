import React from "react";
import Rating from "./Rating.jsx";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={props.url}>
      <div className="min-w-[220px] max-w-[300px] inline-block">
        <img
          src={props["image_240x135"]}
          alt="#"
          className="w-full border border-gray-300"
        />
        <h1 className="text-md font-bold line-clamp-2 xs:min-h-[60px] xs:min-w-[300px] inline-block">
          {props.title}
        </h1>
        <div className="text-xs text-gray-600 my-1">
          {props.visible_instructors.map((e) => e.title).join(", ")}
        </div>
        <Rating ratingCount={props.rating} studentsCount={props.num_reviews} />

        <div className="font-bold my-1">
          {props.price.list_price.price_string}
        </div>
      </div>
    </Link>
  );
}

export default Card;
