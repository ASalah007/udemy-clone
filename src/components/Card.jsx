import React from "react";
import Rating from "./Rating.jsx";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to="/">
      <div className="min-w-[220px] max-w-[350px] inline-block">
        <img
          src="https://img-b.udemycdn.com/course/480x270/426570_1b91_3.jpg"
          alt="#"
        />
        <h1 className="text-md font-bold line-clamp-2 ">{props.title}</h1>
        <div className="text-xs text-gray-600 my-1">{props.author}</div>
        <Rating ratingCount={4.3} studentsCount={52334} />

        <div className="font-bold my-1">{props.price}</div>
      </div>
    </Link>
  );
}

export default Card;
