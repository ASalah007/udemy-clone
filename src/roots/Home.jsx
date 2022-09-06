import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel.jsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "../components/Card.jsx";
import data from "../HomePageCourses.json";
console.log(data);
function Home() {
  return (
    <div>
      <Carousel>
        {bannerData.map((e, i) => {
          return (
            <div key={i} className="relative">
              <Link to="/course" className="inline-block">
                <img
                  src={e.img}
                  alt="banner"
                  className="block min-h-[300px] object-[80%] lg:w-screen object-cover"
                />
              </Link>
              <div className="py-3 px-6 lg:absolute lg:top-5 lg:left-5 xl:top-10 xl:left-10 bg-white lg:w-[500px] lg:p-6 lg:shadow-lg z-10">
                <h1 className="font-serif font-semibold text-2xl lg:text-4xl">
                  {e.header}
                </h1>
                <p className="py-2 text-sm lg:text-md lg:pt-3 leading-relaxed">
                  {e.body}
                </p>
                <button className="flex lg:hidden justify-between items-center border border-black w-full p-3 mt-4">
                  <span className="text-gray-500 whitespace-nowrap text-xs sm:text-sm md:text-lg">
                    What do you want to learn?
                  </span>
                  <span className="material-symbols-outlined">search</span>
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>

      <div className="my-2  px-3">
        <div className="border-y border-gray-300 mb-9">
          {data.categories.map((category, i) => {
            return (
              <Accordion
                key={category.id}
                disableGutters={true}
                square={true}
                sx={{ border: "0px", boxShadow: "none" }}
                defaultExpanded={i === 0 ? true : false}
                className="md:hidden"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="courses"
                >
                  <h1 className="text-md font-bold my-2">{category.title}</h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex xs:shrink-0 scroll-smooth overflow-scroll snap-x snap-mandatory">
                    {category.items.map((course, i) => {
                      return (
                        <div
                          key={i}
                          className="grow mx-2 xs:shrink-0 snap-start snap-always"
                        >
                          <Card {...course} />
                        </div>
                      );
                    })}
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

const bannerData = [
  {
    header: "Unlock the power of your people",
    body: (
      <>
        Udemy Business is trusted by 10.5K+ companies around the world.{" "}
        <Link to="/" className="underline text-blue-700">
          Find out what we can do for yours.
        </Link>
      </>
    ),
    img: "/assets/banner-2.jpg",
  },
  {
    header: "Learning that gets you",
    body: "Skills for your present (and your future). Get started with us.",
    img: "/assets/banner.jpg",
  },
];
