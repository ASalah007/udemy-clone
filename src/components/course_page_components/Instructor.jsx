import React from "react";
import utils from "../../utils";
import { Link } from "react-router-dom";

export default function Instructor(props) {
  const [expandDisc, setExpandDisc] = React.useState(false);
  return (
    <div>
      <Link
        to={props.url}
        className="text-primary border-b-2 border-primary text-lg font-bold whitespace-nowrap"
      >
        {props.title}
      </Link>
      <p className="text-gray-500 py-1">{props.job_title}</p>
      <div className="flex gap-6 text-sm xs:items-center flex-col xs:flex-row pt-3">
        <img
          src={props.image_100x100}
          alt={props.title}
          className="rounded-full w-24"
        />
        <div className="flex flex-col gap-2">
          {[
            ["star", props.Instructor_Rating, "Instructor Rating"],
            ["workspace_premium", utils.formatCount(props.Reviews), "reviews"],
            ["group", utils.formatCount(props.Students), "Students"],
            ["play_circle", props.Courses, "Courses"],
          ].map((info, i) => {
            return (
              <div key={i} className="flex gap-3 items-center">
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {info[0]}
                </span>
                <span>
                  {info[1]} {info[2]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`${!expandDisc ? "max-h-[250px]" : ""} my-4 text-sm`}
        style={{
          maskImage:
            !expandDisc && "linear-gradient(black, black, transparent)",
          WebkitMaskImage:
            !expandDisc && "linear-gradient(black, black, transparent)",
        }}
      >
        {props.description}
      </div>
      <button
        onClick={() => {
          setExpandDisc((old) => !old);
        }}
        className="text-primary text-sm flex items-center gap-2 font-bold mb-5"
      >
        <span>{expandDisc ? "Show less" : "Show more"}</span>
        <span className="material-symbols-outlined">
          {expandDisc ? "expand_less" : "expand_more"}
        </span>
      </button>
    </div>
  );
}
