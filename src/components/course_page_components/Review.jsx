import React from "react";
import { Rating } from "@mui/material";

export default function Review(props) {
  const [like, setLike] = React.useState(undefined);
  return (
    <div className="flex gap-8 py-5 border-b border-b-gray-300">
      <div className="bg-black rounded-full hidden sm:flex w-16 h-16  justify-center items-center text-white font-bold text-2xl shrink-0">
        {props.title.split(" ")[0][0] +
          (props.title.split(" ").length > 1
            ? props.title.split(" ")[1][0]
            : " ")}
      </div>
      <div className="grow flex flex-col gap-2">
        <h1 className="font-extrabold text-xl">{props.title}</h1>
        <Rating defaultValue={props.rating} readOnly={true} precision={0.5} />
        <p>{props.body}</p>
        <p className="font-light mb-1">
          {like !== undefined
            ? "Thank you for the feedback"
            : "Was this review helpful?"}
        </p>
        <div className="flex items-center gap-3">
          <button
            className={`${
              like === true ? "bg-black text-white " : ""
            } flex justify-center items-center border border-black rounded-full w-14 h-14`}
            onClick={() => {
              setLike((old) => (old === true ? undefined : true));
            }}
          >
            <span className="material-symbols-outlined text-2xl font-bold">
              thumb_up
            </span>
          </button>

          <button
            className={`${
              like === false ? "bg-black text-white " : ""
            } flex justify-center items-center border border-black rounded-full w-14 h-14`}
            onClick={() => {
              setLike((old) => (old === false ? undefined : false));
            }}
          >
            <span className="material-symbols-outlined text-2xl font-bold">
              thumb_down
            </span>
          </button>
          <button className="underline text-lg ml-10">Report</button>
        </div>
      </div>
    </div>
  );
}
