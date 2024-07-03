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
    <div className="relative h-72 w-72 lg:h-80 sm:w-full group">
      {/* Image Section */}
      <Image
        alt={title}
        src={imgUrl}
        fill
        className="rounded-md object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Heart Icon */}
      <HeartIcon className="absolute top-2 right-2 text-white h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Text and Ellipsis Section */}
      <div className="hidden group-hover:flex flex-col justify-end absolute inset-0 p-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <p>
              Featured in: <span className="font-bold">{title}</span>
            </p>
            <p>
              by: <span className="font-bold">{author}</span>
            </p>
          </div>
          <div className="hs-dropdown relative inline-flex">
            <EllipsisHorizontalIcon
              id="hs-dropdown-custom-icon-trigger"
              className="hs-dropdown-toggle text-white h-10 w-10 mt-2 cursor-pointer hover:rounded-full hover:bg-white hover:text-black rounded-full"
            />
            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 z-20"
              aria-labelledby="hs-dropdown-custom-icon-trigger"
            >
              <p className="text-black">See Gig</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiverrMadeItemCard;
