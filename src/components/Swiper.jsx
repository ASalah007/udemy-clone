import React, { useEffect } from "react";

export default function Swiper(props) {
  const [totalScroll, setTotalScroll] = React.useState(0);
  const coursesContainer = React.createRef();

  const calcScrollAmount = () => {
    const width = coursesContainer.current.clientWidth;
    const childWidth = coursesContainer.current.firstChild.clientWidth;
    const scrollCount = width / childWidth - 1 || 1;
    return scrollCount * childWidth;
  };

  const scrollLeft = () => {
    setTotalScroll((old) => old - calcScrollAmount());
    coursesContainer.current.scrollBy({
      left: -calcScrollAmount(),
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    coursesContainer.current.classList.remove("scroll-smooth");
    coursesContainer.current.scrollLeft = 0;
    setTotalScroll(0);
  }, [props.dd]);

  const scrollRight = () => {
    setTotalScroll((old) => old + calcScrollAmount());
    coursesContainer.current.scrollBy({
      left: calcScrollAmount(),
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={coursesContainer}
      className="flex xs:shrink-0 scroll-smooth overflow-scroll snap-x mt-5 scrollbar-hide"
    >
      {props.children}

      {/* right and left controls */}
      {[
        ["Keyboard_arrow_left", "left-3", scrollLeft],
        ["keyboard_arrow_right", "right-3", scrollRight],
      ].map((b, i) => {
        return (
          <button
            key={i}
            className={`hidden md:flex absolute ${b[1]} top-[60%] z-10 bg-black text-white justify-center items-center w-11 h-11 rounded-full`}
            onClick={() => b[2]()}
            style={{
              display: i === 0 && totalScroll <= 0 ? "none" : "flex",
            }}
          >
            <span className="material-symbols-outlined text-3xl">{b[0]}</span>
          </button>
        );
      })}
    </div>
  );
}
