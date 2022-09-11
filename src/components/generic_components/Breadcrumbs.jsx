import React from "react";

export default function Breadcrumbs(props) {
  return (
    <nav className="bg-grey-light rounded-md w-full overflow-scroll scrollbar-hide">
      <ol className="list-reset flex">
        {React.Children.toArray(props.children).map((e, i) => {
          return (
            <>
              <li key={i} className="whitespace-nowrap">
                {e}
              </li>
              <li key={i + 1000}>
                <span
                  className={`material-symbols-outlined translate-y-1 mx-1 ${
                    i === 2 ? "hidden " : " "
                  } ${props.arrowClassName}`}
                >
                  navigate_next
                </span>
              </li>
            </>
          );
        })}
      </ol>
    </nav>
  );
}
