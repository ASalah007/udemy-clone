import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel.jsx";

function Home() {
  const data = [
    {
      header: "Unlock the power of your people",
      body: " Udemy Business is trusted by 10.5K+ companies around the world. Find out what we can do for yours.",
      img: "/assets/banner-2.jpg",
    },
    {
      header: "Learning that gets you",
      body: "Skills for your present (and your future). Get started with us.",
      img: "/assets/banner.jpg",
    },
  ];
  return (
    <div className="h-[480px] lg:h-[380px] lg:px-2">
      <Carousel items={1}>
        {data.map((e, i) => {
          return (
            <div key={i} className="w-screen">
              <Link to="/course">
                <img
                  src={e.img}
                  alt="banner"
                  className="md:min-w-full h-[250px] lg:h-auto object-cover object-[80%] md:object-center"
                />
              </Link>
              <div className="py-3 px-6 lg:absolute top-10 left-10 bg-white lg:w-[400px] lg:p-6 lg:shadow-lg">
                <h1 className="font-serif font-semibold text-2xl lg:text-4xl">
                  {e.header}
                </h1>
                <p className="py-2 text-sm lg:text-md lg:pt-3 leading-relaxed">
                  {e.body}
                </p>
                <button className="flex lg:hidden justify-between items-center border border-black w-full p-3 mt-4">
                  <span className="text-gray-500">
                    What do you want to learn?
                  </span>
                  <span className="material-symbols-outlined">search</span>
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Home;
