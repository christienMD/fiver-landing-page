import Image from "next/image";
import React from "react";
import { EllipsisHorizontalIcon, HeartIcon } from "@heroicons/react/24/solid";

interface Props {
  title: string;
  author: string;
  imgUrl: string;
}

const FiverrMadeItemCard = ({ title, author, imgUrl }: Props) => {
  return (

    <div>
      
    </div>
    // <div className="relative group mb-10">
    //   <div className="relative h-[400px] w-[500px] group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-black/50 group-hover:rounded-md transition-colors duration-300">
    //       {/* No fixed height, images will take their natural height */}
    //       <Image
    //         alt={title}
    //         src={imgUrl}
    //         width={500}
    //         height={400}
    //         className=""
    //       />

    //     <div className="text-white absolute top-5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hs-tooltip">
    //       <HeartIcon className="hs-tooltip-toggle h-8 w-9 text-white group-hover:text-white cursor-pointer transition-colors duration-300" />
    //       <span
    //         className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-3 bg-gray-800 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
    //         role="tooltip"
    //       >
    //         Save to list
    //       </span>
    //     </div>

    //     {/* description div */}
    //     <div className="text-white absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //       <div>
    //         <p>
    //           Feautured In: <span className="font-bold">{title}</span>
    //         </p>
    //         <p>
    //           By: <span className="font-bold">{author}</span>
    //         </p>
    //       </div>
    //       <div>
    //         <div className="hs-dropdown relative inline-flex">
    //           <button
    //             id="hs-dropdown-custom-icon-trigger"
    //             type="button"
    //             className="hs-dropdown-toggle flex justify-center items-center p-2 text-sm font-semibold rounded-full text-white shadow-sm bg-white"
    //           >
    //             <EllipsisHorizontalIcon className="h-6 w-6 text-white group-hover:text-black transition-colors duration-300" />
    //           </button>
    //           <div
    //             className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[100px] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
    //             aria-labelledby="hs-dropdown-custom-icon-trigger"
    //           >
    //             <p className="text-black px-2">See Gig</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FiverrMadeItemCard;
