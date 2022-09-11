import React from "react";
import { Link } from "react-router-dom";

const links = [
  ["Udemy Budiness", "Tech on Udemy", "Get the app", "About us", "Contact us"],
  ["Careers", "Blog", "Help and Support", "Affiliate", "Investors"],
  [
    "Terms",
    "Privacy policy",
    "Cookie setting",
    "Sitemap",
    "Accessibility statement",
  ],
];
function Footer() {
  return (
    <footer className="bg-udemyBlack text-gray-200 min-w-full px-10 ">
      <div className="py-6 grid grid-cols-1 lg:grid-cols-4">
        {links.map((e, i) => (
          <div key={i}>
            {e.map((l, j) => (
              <Link
                to="/"
                key={j}
                className="block py-1 text-sm hover:underline"
              >
                {l}
              </Link>
            ))}
          </div>
        ))}

        <div className="row-start-1 lg:row-auto mb-6">
          <button className="lg:float-right grid grid-cols-4 p-3 border border-gray-300 text-white hover:bg-[#444]">
            <span className="material-symbols-outlined">language</span>
            <span className="col-span-2">Language</span>
          </button>
        </div>
      </div>
      <div className="lg:py-10 pb-20 flex lg:items-center flex-col lg:flex-row justify-between">
        <Link to="/">
          <img
            src="/assets/logo-udemy-inverted.svg"
            alt="logo"
            className="w-24 min-w-[80px] my-2"
          />
        </Link>
        <div className="text-gray-200 text-sm">© 2022 Udemy, Inc.</div>
      </div>
    </footer>
  );
}
export default Footer;
