import React from "react";
import Instructor from "./Instructor";

export default function CourseInstructors(props) {
  const instructors = props.instructors;
  return (
    <div>
      <h1 className="text-2xl font-bold">Instructors</h1>
      {instructors.map((e, i) => {
        return <Instructor key={i} {...e} />;
      })}
    </div>
  );
}
