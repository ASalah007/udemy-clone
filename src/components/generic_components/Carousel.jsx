import React, { useEffect } from "react";
import { useState } from "react";

export default function Carousel(props) {
  const [
    transAmount,
    transValue,
    goLeft,
    goRight,
    handleTransitionEnd,
    renderElms,
  ] = useAllStates(props);

  return (
    <div className=" overflow-hidden relative ">
      <div
        className="flex "
        style={{
          transform: `translateX(-${transAmount})`,
          transition: `${transValue}`,
        }}
        onTransitionEnd={() => handleTransitionEnd()}
      >
        {renderElms()}
      </div>

      {/* right and left controls */}
      {[
        ["Keyboard_arrow_left", "left-3", goLeft],
        ["keyboard_arrow_right", "right-3", goRight],
      ].map((b, i) => {
        return (
          <button
            key={i}
            className={`hidden lg:flex absolute ${b[1]} top-1/2 z-10 bg-black text-white justify-center items-center w-11 h-11 rounded-full`}
            onClick={() => b[2]()}
          >
            <span className="material-symbols-outlined text-3xl">{b[0]}</span>
          </button>
        );
      })}
    </div>
  );
}

const useAllStates = (props) => {
  const elmsCount = React.Children.count(props.children) + 2;

  // takes an index and returns the translation amount
  const calcTrans = (index) => {
    return 100 * index + "%";
  };

  const renderElms = () => {
    const arr = React.Children.toArray(props.children);
    const style = "w-full grow shrink-0";

    let elms = [
      <div key={-1} className={style}>
        {arr[arr.length - 1]}
      </div>,
    ];

    arr.forEach((e, i) => {
      elms.push(
        <div
          key={i}
          className={style}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={(e) => handleTouchEnd(e)}
        >
          {e}
        </div>
      );
    });

    elms.push(
      <div key={-2} className={style}>
        {arr[0]}
      </div>
    );

    return elms;
  };

  const [activeIndex, setActiveIndex] = useState(1);
  const [transAmount, setTransAmount] = useState(calcTrans(1));
  const [transValue, setTransValue] = useState("transform .4s");
  const [delayedMotion, setDelayedMotion] = useState("none");

  useEffect(() => {
    if (delayedMotion === "none") return;

    if (delayedMotion === "left") goLeft();
    else goRight();

    setDelayedMotion("none");
  }, [delayedMotion]);

  useEffect(() => {
    let id;
    if (activeIndex === 1) id = setInterval(() => goRight(), 3000);
    if (activeIndex === elmsCount - 2) clearInterval(id);
    return () => clearInterval(id);
  }, [activeIndex]);

  const goLeft = () => {
    if (activeIndex === 0) {
      handleTransitionEnd();
      setDelayedMotion("left");
      return;
    }
    setTransValue("transform .4s");
    setTransAmount(calcTrans(activeIndex - 1));
    setActiveIndex((i) => i - 1);
  };

  const goRight = () => {
    if (activeIndex === elmsCount - 1) {
      handleTransitionEnd();
      setDelayedMotion("right");
      return;
    }
    setTransValue("transform .4s");
    setTransAmount(calcTrans(activeIndex + 1));
    setActiveIndex((i) => i + 1);
  };

  const handleTransitionEnd = (e) => {
    if (activeIndex === elmsCount - 1) {
      setTransValue("none");
      setTransAmount(calcTrans(1));
      setActiveIndex(1);
    } else if (activeIndex === 0) {
      setTransValue("none");
      setTransAmount(calcTrans(elmsCount - 2));
      setActiveIndex(elmsCount - 2);
    }
  };

  const [x, setX] = useState(5);
  const [xdiff, setXdiff] = useState(0);

  const handleTouchStart = (e) => {
    setX(e.touches[0].clientX);
    setTransValue("none");
    setXdiff(0);
  };

  const handleTouchMove = (e) => {
    if (x === 0) return;
    const diff = e.touches[0].clientX - x;
    setTransAmount(e.currentTarget.offsetLeft - diff + "px");
    setXdiff(diff);
  };

  const handleTouchEnd = (e) => {
    setTransValue("transform .4s");

    if (xdiff < -(e.currentTarget.clientWidth * 0.2) && xdiff < 0) {
      goRight();
    } else if (xdiff > e.currentTarget.clientWidth * 0.2 && xdiff > 0) {
      goLeft();
    } else {
      setTransAmount(calcTrans(activeIndex));
    }
  };
  return [
    transAmount,
    transValue,
    goLeft,
    goRight,
    handleTransitionEnd,
    renderElms,
  ];
};
