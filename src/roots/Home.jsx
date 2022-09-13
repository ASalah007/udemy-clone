import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Carousel from "../components/generic_components/Carousel.jsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "../components/Card.jsx";
import Swiper from "../components/generic_components/Swiper.jsx";
import { CircularProgress } from "@mui/material";

let data;

function Home() {
  const [
    courseSectionData,
    changeCategory,
    activeCategory,
    dataLoaded,
    keyword,
  ] = useAllStates();
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

      <div className="my-2  px-3 ">
        <div className="border-y border-gray-300 mb-9 md:hidden">
          {!dataLoaded ? (
            <CircularProgress />
          ) : (
            data.map((category, i) => {
              return (
                <Accordion
                  key={category.id}
                  disableGutters={true}
                  square={true}
                  sx={{ border: "0px", boxShadow: "none" }}
                  defaultExpanded={i === 0 ? true : false}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="courses"
                  >
                    <h1 className="text-md font-bold my-2">{category.title}</h1>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex xs:shrink-0 scroll-smooth overflow-scroll snap-x ">
                      {!dataLoaded ? (
                        <CircularProgress />
                      ) : (
                        category.items.map((course, i) => {
                          return (
                            <div
                              key={i}
                              className="grow mx-2 xs:shrink-0 snap-start "
                            >
                              <Card {...course} />
                            </div>
                          );
                        })
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>
              );
            })
          )}
        </div>

        <div className="hidden md:block px-5">
          <h1 className="font-bold text-3xl my-3 font-serif">
            A broad Selection of Courses
          </h1>
          <p className="text-lg mb-3">
            Choose from 204,000 online video courses with new additions
            published every month
          </p>
          <div className="relative">
            <div className="flex scroll-smooth overflow-scroll snap-x scrollbar-hide max-w-fit">
              {!dataLoaded ? (
                <CircularProgress />
              ) : (
                data.map((e, i) => {
                  return (
                    <button
                      key={i}
                      className="grow pr-5 whitespace-nowrap snap-start font-bold text-gray-500"
                      onClick={() => changeCategory(i)}
                      style={{
                        color: activeCategory === i ? "black" : "",
                      }}
                    >
                      {e.title}
                    </button>
                  );
                })
              )}
            </div>
            <div className="p-7 mt-3 border border-gray-300">
              <h1 className="text-2xl font-bold">{courseSectionData.header}</h1>
              <p className="text-md line-clamp-3 my-3">
                {courseSectionData.description}
              </p>
              <button className="border border-black py-3 px-4 text-sm  font-bold hover:bg-gray-100 my-3">
                Explore {courseSectionData.title}
              </button>

              <Swiper id={courseSectionData.id}>
                {!dataLoaded ? (
                  <div className="flex justify-around w-full">
                    <CircularProgress />
                    <CircularProgress />
                    <CircularProgress />
                    <CircularProgress />
                  </div>
                ) : (
                  courseSectionData.items
                    .filter((course) => {
                      if (!keyword) return true;
                      return (
                        course.title.includes(keyword) ||
                        course.published_title.includes(keyword) ||
                        course.visible_instructors.some((inst) =>
                          inst.title.includes(keyword)
                        )
                      );
                    })
                    .map((course, i) => {
                      return (
                        <div
                          key={i}
                          className="grow mx-2 xs:shrink-0 snap-start "
                        >
                          <Card {...course} />
                        </div>
                      );
                    })
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const useAllStates = (props) => {
  const [courseSectionData, setCourseSectionData] = useState({
    header: "",
    title: "",
    description: "",
    id: "",
    items: [""],
  });
  const [dataLoaded, setDataLoaded] = useState(false);

  const changeCategory = (index) => {
    setCourseSectionData(data[index]);
    setActiveCategory(index);
  };

  useEffect(() => {
    fetch("http://localhost:3000/summary")
      .then((response) => {
        return response.json();
      })
      .then((e) => {
        data = e;
        setDataLoaded(true);

        setCourseSectionData(data[0]);
      });
  }, []);
  const [activeCategory, setActiveCategory] = useState(0);

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("searchbar")?.toLowerCase();

  return [
    courseSectionData,
    changeCategory,
    activeCategory,
    dataLoaded,
    keyword,
  ];
};

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
