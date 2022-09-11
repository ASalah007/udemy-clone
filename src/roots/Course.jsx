import React from "react";
import CourseNavbar from "../components/course_page_components/CourseNavbar.jsx";
import Coursebanner from "../components/course_page_components/CourseBanner.jsx";
import CourseInfo from "../components/course_page_components/CourseInfo.jsx";
import CourseContent from "../components/course_page_components/CourseContent.jsx";
import CourseDescription from "../components/course_page_components/CourseDescription.jsx";
import CourseInstructors from "../components/course_page_components/CourseInstructors.jsx";
import CourseFeedback from "../components/course_page_components/CourseFeedback.jsx";
import CourseReviews from "../components/course_page_components/CourseReviews.jsx";

export default function Course() {
  return (
    <div className="flex flex-col">
      <CourseNavbar />
      <Coursebanner />
      <CourseInfo />
      <div className="mt-[1370px] xl:mt-[480px] flex flex-col items-center ">
        <div className="mainContentWrapper max-w-[750px] xl:max-w-[1400px] min-h-[369px] w-full flex flex-col">
          <div className="mainContent max-w-[800px] min-h-[350px] flex flex-col gap-10 w-full overflow-hidden px-5 xl:px-0">
            {/* outcome section */}
            <div className="p-6 border border-gray-400">
              <h1 className="mb-5 font-bold text-2xl">What you'll learn</h1>
              <div className="flex flex-wrap items-center justify-between gap-y-2">
                {[
                  "Create their own Python Programs",
                  "Become an experienced Python Programmer",
                  "Parse the Web and Create their Own Games",
                ].map((e, i) => {
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

            <CourseContent />

            {/* requirement section */}
            <div>
              <h1 className="text-2xl font-bold mb-4">Requirements</h1>
              <ul className="flex flex-col gap-2">
                {[
                  "Macintosh (OSX)/ Windows(Vista and higher) Machine",
                  "Internet Connection",
                ].map((e, i) => {
                  return (
                    <li key={i} className="list-disc text-2xl ml-2 list-inside">
                      <span className="text-base pb-3">{e}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* end requirement section */}

            <CourseDescription />
            <CourseInstructors instructors={instructors} />
            <CourseFeedback />
            <CourseReviews reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}

const reviews = [
  {
    title: "Ahmed Salah",
    rating: 4.4,
    body: "what i liked the most about this course is that the instructor fully understand the topic that he is explainging",
  },
  {
    title: "Ahmed Salah",
    rating: 4.4,
    body: "what i liked the most about this course is that the instructor fully understand the topic that he is explainging",
  },
  {
    title: "Ahmed Salah",
    rating: 4.4,
    body: "what i liked the most about this course is that the instructor fully understand the topic that he is explainging",
  },
  {
    title: "Ahmed Salah",
    rating: 4.4,
    body: "what i liked the most about this course is that the instructor fully understand the topic that he is explainging",
  },
  {
    title: "Ahmed Salah",
    rating: 4.4,
    body: "what i liked the most about this course is that the instructor fully understand the topic that he is explainging",
  },
];

const instructors = [
  {
    _class: "user",
    id: 10260436,
    title: "Avinash Jain",
    name: "Avinash",
    display_name: "Avinash Jain",
    job_title: "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
    image_50x50: "https://img-c.udemycdn.com/user/50x50/10260436_946b_6.jpg",
    image_100x100:
      "https://img-c.udemycdn.com/user/100x100/10260436_946b_6.jpg",
    initials: "AJ",
    url: "/user/avinashjain5/",
    rating: 4.4,
    reviews: 21455,
    students: 4545352,
    courses: 16,
  },
  {
    _class: "user",
    id: 52310762,
    title: "The Codex",
    name: "The",
    display_name: "The Codex",
    job_title: "Teaching Python through Projects",
    image_50x50: "https://img-c.udemycdn.com/user/50x50/52310762_220a.jpg",
    image_100x100: "https://img-c.udemycdn.com/user/100x100/52310762_220a.jpg",
    initials: "TC",
    url: "/user/thecodex/",
    rating: 4.3,
    reviews: 21455,
    students: 4545352,
    courses: 16,
  },
];
