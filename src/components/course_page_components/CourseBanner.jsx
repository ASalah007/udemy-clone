import React from "react";
import Breadcrumbs from "../generic_components/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import Rating from "../Rating.jsx";
import utils from "../../utils.js";

export default function Coursebanner(props) {
  return (
    <div className="w-screen absolute left-0 top-0 bg-udemyBlack text-white min-h-[450px] pt-28 flex flex-col gap-3 items-center ">
      <div className="w-full max-w-[750px] xl:max-w-[1500px]">
        <div className="max-w-[800px] w-full">
          {/* mini nav */}
          <div className="px-5 xl:px-11 mb-3 xl:mb-0 w-full">
            <Breadcrumbs>
              <Link
                to={props.context_info.category.url}
                className="text-purple-600 xl:text-purple-300 font-extrabold text-sm"
              >
                {props.context_info.category.title}
              </Link>
              <Link
                to={props.context_info?.subcategory?.url || ""}
                className="text-purple-600 xl:text-purple-300 font-extrabold text-sm"
              >
                , {props.context_info?.subcategory?.title || props.title}
              </Link>
            </Breadcrumbs>
          </div>
          {/* end mini nav */}

          {/* subnail */}
          <button className="w-full xl:hidden">
            <div className="">
              <img alt="#" src={props.image_750x422} className="w-full" />
            </div>
          </button>
          {/* end subnail */}

          {/* course info */}
          <div className="mainContent max-w-[800px] xl:px-8">
            <div className="xl:bg-udemyBlack py-3 xl-py-0 w-full xl:text-white">
              <div className="px-3 flex flex-col gap-3 py-4">
                <h1 className="text-2xl lg:text-3xl font-bold">
                  {props.title}
                </h1>
                <p className="xl:text-lg">{props.headline}</p>
                <div className="flex gap-2 md:items-center flex-col md:flex-row ">
                  <Rating
                    ratingCount={props.rating}
                    studentsCount={props.num_reviews}
                    studentsCountClassName="text-[.9rem] text-purple-600 xl:text-[#cec0fc] underline whitespace-nowrap"
                    studentsCountPostfix=" ratings"
                  />
                  <span className="text-sm  whitespace-nowrap">
                    {utils.formatCount(props.num_subscribers)} students
                  </span>
                </div>

                <p className=" text-sm">
                  Created by{" "}
                  {props.visible_instructors.map((e, i) => {
                    return (
                      <>
                        <Link
                          to="/"
                          className="text-[.9rem] text-purple-600 xl:text-purple-300 underline"
                        >
                          {e.title}
                        </Link>
                        {i < props.visible_instructors.length - 1 ? ", " : ""}
                      </>
                    );
                  })}
                </p>

                <div className="flex flex-col gap-4 xl:flex-row">
                  <div className="flex items-center gap-1 text-sm">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      info
                    </span>
                    <span>Last updated {props.last_update_date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="material-symbols-outlined">Language</span>
                    <span>{props.locale.simple_english_title}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      closed_caption
                    </span>
                    <span className="">{props.caption_languages[0]}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 xl:hidden">
                  <div className="text-3xl font-bold mt-4">E£269.99</div>
                  <div className="text-red-300 text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined">alarm</span>
                    <span className="font-bold">10 hours</span> left at that
                    price
                  </div>

                  <button className="block w-full bg-purple-500 text-white font-bold p-4">
                    Add to cart
                  </button>

                  <div className="text-center text-sm">
                    30-Days Money-Back Guarantee
                  </div>

                  <div className="flex justify-around my-3 flex-wrap items-baseline">
                    {[
                      ["Share", "/"],
                      ["Gift this course", "/"],
                      ["Apply Coupon", "/"],
                    ].map((e, i) => {
                      return (
                        <Link
                          key={i}
                          to={e[1]}
                          className="border-b border-white font-bold text-sm whitespace-nowrap m-2"
                        >
                          {e[0]}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end course info */}
        </div>
      </div>
    </div>
  );
}
