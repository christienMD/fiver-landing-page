import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
}

const ServiceCard = ({ title, image }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="shadow-md flex items-center justify-center py-6 rounded-xl px-2 h-32 w-28 lg:w-32 hover:bg-radial-center cursor-pointer">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            alt=""
            src={image}
            width={30}
            height={30}
            className="sm:w-10"
          />
          <p className="hidden lg:block cursor-pointer text-sm font-semibold text-center my-auto">
            {title}
          </p>
        </div>
      </div>
      <p className="cursor-pointer text-center mt-3 lg:hidden">{title}</p>
    </div>
  );
};

export default ServiceCard;
