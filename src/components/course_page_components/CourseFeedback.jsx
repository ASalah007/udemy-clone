import { Rating } from "@mui/material";
import React from "react";

export default function CourseFeedback() {
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-bold mb-3">Student feedback</h1>
      <div className="flex sm:gap-8 flex-col sm:flex-row ">
        <div className="flex md:flex-col items-end md:items-center md:pb-6">
          <span className="text-[80px] tracking-widest font-bold text-yellow-700 translate-y-2">
            4.4
          </span>
          <div className="hidden md:block">
            <Rating defaultValue={4.4} precision={0.5} readOnly={true} />
          </div>
          <span className="text-yellow-700 font-bold text-lg whitespace-nowrap pb-2">
            Course Rating
          </span>
        </div>
        <div className="w-full grow flex flex-col gap-1 justify-center">
          {[43, 37, 15, 3, 2].map((e, i) => {
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-full bg-gray-200 h-2">
                  <div
                    className={`bg-gray-500 h-2`}
                    style={{ width: e + "%" }}
                  ></div>
                </div>
                <Rating defaultValue={5 - i} readOnly={true} />
                <span className="underline text-primary min-w-[40px]">
                  {e}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
