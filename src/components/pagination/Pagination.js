import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-y-[10px]">
      <span className="cursor-pointer w-10 h-10 flex justify-center items-center font-medium hover:text-white hover:bg-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </span>
      <ul className="flex items-center gap-y-[10px]">
        <li className="cursor-pointer w-10 h-10 flex justify-center items-center font-medium hover:text-white hover:bg-secondary">
          1
        </li>
        <li className="cursor-pointer w-10 h-10 flex justify-center items-center font-medium hover:text-white hover:bg-secondary is-current text-white bg-secondary">
          2
        </li>
        <li className="cursor-pointer w-10 h-10 flex justify-center items-center font-medium hover:text-white hover:bg-secondary">
          ...
        </li>
        <li className="cursor-pointer w-10 h-10 flex justify-center items-center font-medium hover:text-white hover:bg-secondary">
          3
        </li>
        <li className="cursor-pointer w-10 h-10 flex justify-center items-center font-medium hover:text-white hover:bg-secondary">
          4
        </li>
        <li className="cursor-pointer w-10 h-10 flex justify-center items-center font-medium hover:text-white hover:bg-secondary">
          5
        </li>
      </ul>
      <span className="cursor-pointer w-10 h-10 flex justify-center items-center font-medium hover:text-white hover:bg-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
};

export default Pagination;
