import React from "react";

export default function CourseDescription(props) {
  const [expandDisc, setExpandDisc] = React.useState(false);
  return (
    <div>
      <h1 className="text-2xl font-bold">Description</h1>

      <div
        className={`${!expandDisc ? "max-h-[450px]" : ""} py-2`}
        style={{
          maskImage:
            !expandDisc && "linear-gradient(black, black, transparent)",
          WebkitMaskImage:
            !expandDisc && "linear-gradient(black, black, transparent)",
        }}
      >
        {props.desc}
      </div>

      <button
        className="flex items-center gap-2 text-sm font-bold text-purple-700"
        onClick={() => setExpandDisc((old) => !old)}
      >
        Show {expandDisc ? "less" : "more"}
        <span className="material-symbols-outlined">
          {expandDisc ? "expand_less" : "expand_more"}
        </span>
      </button>
    </div>
  );
}
