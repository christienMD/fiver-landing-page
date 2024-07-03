import Image from "next/image";
import React from "react";

export interface PopularService {
    bgColor: string;
    imgUrl: string;
    title: string;
}

const PopularServiceCard = ({bgColor , imgUrl , title}:PopularService) => {
  return (
    <div className={`mt-2 ${bgColor} text-white w-48 h-64 rounded-2xl hover:opacity-90 cursor-pointer`}>
      <h2 className="text-xl font-semibold p-3">{title}</h2>
      <div className="px-1.5 mt-5">
        <Image
          alt=""
          src={imgUrl}
          className="object-cover rounded-2xl"
          width={225}
          height={100}
        />
      </div>
    </div>
  );
};

export default PopularServiceCard;
