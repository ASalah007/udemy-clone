import utils from "../utils.js";

const Rating = (props) => {
  const {
    ratingCount,
    studentsCount,
    starsLimit,
    studentsCountClassName,
    onStudentsClick,
    studentsCountPostfix,
    className,
  } = props;
  return (
    <div className={"flex items-center "}>
      <span className="font-bold mr-[4px] text-md text-yellow-600 ">
        {ratingCount.toFixed(1)}
      </span>

      {utils.range(starsLimit || Math.floor(ratingCount)).map((i) => (
        <img
          key={i}
          className="w-[15px] h-[15px] mx-[1px] -translate-y-[2px]"
          src="/assets/star.png"
          alt="star"
        />
      ))}

      {ratingCount - Math.floor(ratingCount) > 0 && !starsLimit && (
        <img
          className="w-[15px] h-[15px] mx-[1px] -translate-y-[2px]"
          src="/assets/half-star.png"
          alt="star"
        />
      )}

      <span
        className={
          "text-xs ml-1 text-gray-500 tranlsate-y-[1px] " +
          studentsCountClassName
        }
        onClick={(e) => onStudentsClick(e)}
      >
        {"(" +
          utils.formatCount(studentsCount) +
          (studentsCountPostfix || "") +
          ")"}
      </span>
    </div>
  );
};

export default Rating;
