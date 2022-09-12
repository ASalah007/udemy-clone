import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function CourseInfo(props) {
  const info = React.createRef();
  const [pos, setPos] = useState("top");

  const handleScroll = (e) => {
    const bdy = document.body.offsetHeight;
    const wdw = window.scrollY;

    if (bdy - wdw < 1200) {
      setPos(() => "bottom");
    } else if (bdy - wdw > bdy - 500) {
      setPos(() => "top");
    } else if (bdy - wdw < bdy - 500 && bdy - wdw > 1200) {
      setPos(() => "between");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style =
    pos === "between"
      ? "fixed top-10 z-30"
      : pos === "top"
      ? "absolute top-32"
      : `absolute`;

  return (
    <div
      ref={info}
      className={`hidden xl:block ${style} xl:right-28  shadow-xl w-[425px] bg-white transition-all delay-75`}
      style={{ top: pos === "bottom" ? document.body.offsetHeight - 1550 : "" }}
    >
      <div
        className={`w-full border ${
          pos === "between" ? "hidden" : " "
        } border-white`}
      >
        <img
          src={props.image_240x135}
          alt="#"
          className="w-full border border-gray-300"
        />
      </div>
      <div className="flex flex-col p-6 gap-3">
        <div className="text-3xl font-bold">
          {props.price.list_price.price_string}
        </div>
        <div className="text-red-500 text-sm flex items-center gap-1">
          <span className="material-symbols-outlined">alarm</span>
          <span className="font-bold">10 hours</span> left at that price
        </div>
        <button className="block w-full bg-purple-500 text-white font-bold p-3">
          Add to cart
        </button>
        <button className="block w-full bg-whtie border border-black font-bold p-3 hover:bg-gray-300">
          Buy now
        </button>

        <div className="text-center text-xs">30-Days Money-Back Guarantee</div>

        <h1 className=" font-bold">This course includes:</h1>
        <div className="flex flex-col gap-1">
          {[
            ["live_tv", `14 hours on-demand video`],
            ["description", "1 article"],
            ["system_update_alt", "3 downloadable resources"],
            ["all_inclusive", "Full lifetime access"],
            ["smartphone", "Access on mobile and TV"],
            ["workspace_premium", "Certificate of completion"],
          ].map((e, i) => {
            return (
              <div key={i} className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[22px]">
                  {e[0]}
                </span>
                <span className="text-sm">{e[1]}</span>
              </div>
            );
          })}
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
                className="border-b border-black font-bold text-sm whitespace-nowrap m-2"
              >
                {e[0]}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 border-t border-gray-300 pt-3">
          <h1 className="text-lg font-bold">Training 5 or more people?</h1>
          <p className="text-md ">
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </p>
          <button className="block w-full bg-whtie border border-black font-bold p-3 hover:bg-gray-300">
            Try Udemy Business
          </button>
        </div>
      </div>
    </div>
  );
}
