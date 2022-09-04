import React from "react";
import { useState } from "react";

export default function Carousel(props) {
  const [
    elms,
    transition,
    goLeft,
    goRight,
    transitionAmount,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleAfterTransition,
  ] = useAllStates(props);

  return (
    <div className="relative min-h-full overflow-hidden min-w-full">
      {/* left control */}
      <button
        className="hidden lg:flex absolute left-3 top-1/2 z-10 bg-black text-white justify-center items-center w-11 h-11 rounded-full"
        onClick={() => goLeft()}
      >
        <span className="material-symbols-outlined text-3xl">
          keyboard_arrow_left
        </span>
      </button>

      {/*carousel items container*/}
      <div
        className={`absolute flex min-h-full min-w-full transition-transform delay-400`}
        style={{
          transform: `translateX(-${transitionAmount})`,
          transition: `${transition}`,
        }}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
        onTransitionEnd={(e) => handleAfterTransition(e)}
      >
        {elms}
      </div>

      {/*right control*/}
      <button
        className="absolute right-3 top-1/2 z-10 bg-black text-white hidden lg:flex justify-center items-center w-11 h-11 rounded-full"
        onClick={() => goRight()}
      >
        <span className="material-symbols-outlined text-3xl">
          keyboard_arrow_right
        </span>
      </button>
    </div>
  );
}

const TRANS_VALUE = "transform .3s";

function useAllStates(props) {
  const [elms] = useState(() => {
    const arr = React.Children.toArray(props.children);
    const style = "relative overflow-hidden";

    let elms = [
      <div key={-1} className={style}>
        {arr[arr.length - 1]}
      </div>,
    ];

    arr.forEach((e, i) => {
      elms.push(
        <div key={i} className={style}>
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
  });

  const calcTrans = (index) => {
    return (100 / elms.length) * index + "%";
  };

  const [xpos, setXpos] = useState(0);
  const [transition, setTransition] = useState(TRANS_VALUE);
  const [swipe, setSwipe] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  const [transitionAmount, setTransitionAmount] = useState(() => calcTrans(1));

  const items = props.items;

  const goRight = () => {
    const newIndex = Math.min(activeIndex + items, elms.length - 1);
    if (activeIndex === elms.length - 1) return;
    setTransitionAmount(calcTrans(newIndex));
    setActiveIndex((i) => newIndex);
  };

  const goLeft = () => {
    const newIndex = Math.max(activeIndex - items, 0);
    if (activeIndex === 0) return;
    setTransitionAmount(calcTrans(newIndex));
    setActiveIndex((i) => newIndex);
  };

  const handleTouchMove = (e) => {
    if (xpos === 0) return;

    const xDiff = e.touches[0].clientX - xpos;
    setTransitionAmount(e.target.offsetParent.offsetLeft - xDiff + "px");
    if (xDiff > 0) setSwipe(1);
    else setSwipe(2);
  };

  const handleTouchStart = (e) => {
    if (activeIndex === 0 || activeIndex === elms.length - 1) return;
    setTransition("none");
    setXpos(e.touches[0].clientX);
    setSwipe(0);
  };

  const handleTouchEnd = (e) => {
    setTransition(TRANS_VALUE);
    if (swipe === 0) return;
    swipe === 1 ? goLeft() : goRight();

    setXpos(0);
  };

  const handleAfterTransition = (e) => {
    if (activeIndex === 0) {
      setTransition(() => "transform .000001s");
      setTransitionAmount(calcTrans(elms.length - 2));
      setActiveIndex(elms.length - 2);
    } else if (activeIndex === elms.length - 1) {
      setTransition(() => "transform .000001s");
      setTransitionAmount(calcTrans(1));
      setActiveIndex(1);
    } else {
      setTransition(() => TRANS_VALUE);
    }
  };

  return [
    elms,
    transition,
    goLeft,
    goRight,
    transitionAmount,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleAfterTransition,
  ];
}
