import React from "react";

const AnimatedSerch = () => {
  return (
    <div>
      <div className="flex items-center pointer-events-none z-20 ps-4">
        {/* <svg
          className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg> */}
      </div>
      <input
        type="text"
        className="py-2 px-4 ps-11 block w-full border border-gray-300 rounded-lg text-sm"
        placeholder="Find Services"
      />
    </div>
  );
};

export default AnimatedSerch;
