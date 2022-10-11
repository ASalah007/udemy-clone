import React from "react";
import CourseNavbar from "../components/course_page_components/CourseNavbar.jsx";
import Coursebanner from "../components/course_page_components/CourseBanner.jsx";
import CourseInfo from "../components/course_page_components/CourseInfo.jsx";
import CourseContent from "../components/course_page_components/CourseContent.jsx";
import CourseDescription from "../components/course_page_components/CourseDescription.jsx";
import CourseInstructors from "../components/course_page_components/CourseInstructors.jsx";
import CourseFeedback from "../components/course_page_components/CourseFeedback.jsx";
import CourseReviews from "../components/course_page_components/CourseReviews.jsx";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

let course;
let data;
let reviews;

export default function Course() {
  const [isLoading, setIsLoading] = React.useState(0);
  const { courseId } = useParams();
  React.useEffect(() => {
    window.scrollBy(0, -1000);
    fetch("http://localhost:3000/summary")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((cat) => {
          cat.items.forEach((c) => {
            if (c.published_title === courseId) {
              course = c;
              setIsLoading((o) => o + 1);
              return false;
            }
          });
        });
      });
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((d) => {
        data = d.find((ele) => {
          return ele.id == course.id;
        });
        setIsLoading((o) => o + 1);
      });
    fetch("http://localhost:3000/review")
      .then((res) => res.json())
      .then((d) => {
        reviews = d.find((ele) => {
          return ele.id == course.id;
        });
        setIsLoading((o) => o + 1);
      });
  }, []);

  return isLoading < 3 ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <CircularProgress />
    </div>
  ) : (
    <div className="flex flex-col">
      <CourseNavbar {...course} />
      <Coursebanner {...course} />
      <CourseInfo {...course} />
      <div className="mt-[1370px] xl:mt-[480px] flex flex-col items-center ">
        <div className="mainContentWrapper max-w-[750px] xl:max-w-[1400px] min-h-[369px] w-full flex flex-col">
          <div className="mainContent max-w-[800px] min-h-[350px] flex flex-col gap-10 w-full overflow-hidden px-5 xl:px-0">
            {/* outcome section */}
            <div className="p-6 border border-gray-400">
              <h1 className="mb-5 font-bold text-2xl">What you'll learn</h1>
              <div className="flex flex-wrap items-center justify-between gap-y-2">
                {course.objectives_summary.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-800"
                    >
                      <span className="material-symbols-outlined">check</span>
                      <span>{e}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* end outcome section */}

            <CourseContent {...course} {...data} />

            {/* requirement section */}
            <div>
              <h1 className="text-2xl font-bold mb-4">Requirements</h1>
              <ul className="flex flex-col gap-2">
                {data.details.Requirements.map((e, i) => {
                  return (
                    <li key={i} className="list-disc text-2xl ml-2 list-inside">
                      <span className="text-base pb-3">{e}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* end requirement section */}

            <CourseDescription desc={data.details.description} />
            <CourseInstructors instructors={course.visible_instructors} />
            <CourseFeedback {...course} />
            <CourseReviews reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
