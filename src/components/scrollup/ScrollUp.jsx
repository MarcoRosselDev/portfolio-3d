import React from "react";
import "./scrollUp.css";

const ScrollUp = (dark) => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a
      href="#"
      className={`scrollup ${dark.mode === true ? "scrollUp-dark" : ""} `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="scrollup__icon boxicon-arrow-up "
      >
        <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" />
      </svg>
    </a>
  );
};

export default ScrollUp;
