import React from "react";

export default function Dropdown(props) {
  const [showbody, setShowBody] = React.useState(false);
  const [head, setHead] = React.useState(props.children[0]);
  return (
    <div className="flex flex-col relative">
      <div
        className="flex items-center justify-between px-3 md:px-0 md:justify-around border border-black md:w-40 py-3"
        onClick={() => setShowBody((old) => !old)}
      >
        <span className="text-gray-400">{head}</span>
        <span className="material-symbols-outlined">expand_more</span>
      </div>

      <div
        className=" top-14 shadow-2xl absolute w-36 text-lg text-gray-400   z-10"
        style={{ display: showbody ? "block" : "none" }}
      >
        {React.Children.toArray(props.children).map((e, i) => {
          return (
            <div
              key={i}
              className="w-full bg-white hover:text-gray-50 pl-4 hover:bg-gray-500"
              onClick={() => {
                setHead(props.children[i]);
                setShowBody(false);
              }}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
}
