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
            ["star", props.rating, "Instructor Rating"],
            ["workspace_premium", utils.formatCount(props.reviews), "reviews"],
            ["group", utils.formatCount(props.students), "Students"],
            ["play_circle", props.courses, "Courses"],
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
        <p>
          <strong>
            <em>&nbsp; &nbsp;</em>
          </strong>
          Avinash Jain is currently a senior at UC Berkeley majoring in
          Electrical Engineering and Computer Science. He's the CEO and Founder
          of TheCodex, an online educational&nbsp;platform focused on bringing
          the best programming content to hundreds of&nbsp;thousands of students
          around the world.
        </p>
        <p>
          His programming journey began at the age of 10, starting off with
          simple Python scripts to crawl the weather.&nbsp;Since then, he's
          worked at numerous companies and is professionally experienced in
          Python, iOS Development and Web Development. He's launched a plethora
          of applications in the App Store amassing thousands of downloads.
          Additionaly, he's competed and won in&nbsp;several hackathons around
          the world including PennApps and NWHacks.
        </p>
        <p>
          Avinash has a passion to teach - his enthusiasm and love for
          programming is evident in every video. For the past 7 years he's been
          an instructor on Udemy and he loves motivating and enabling others to
          pursue their programming dreams. He hopes to help students realize the
          power of programming and jumpstart their careers through his courses.
        </p>
        <p>
          Checkout TheCodex for all of his courses, fantastic&nbsp;discounts,
          and&nbsp;any guidance or help.&nbsp;
        </p>
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
