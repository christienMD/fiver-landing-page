import React from 'react'

const SearchIput = () => {
  return (
    <form className="w-full md:max-w-xl mx-auto">
      <div className="relative">
        {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div> */}
        <input
          type="text"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
          placeholder="Search for any service..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-3"
        >
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default SearchIput