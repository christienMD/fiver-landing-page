"use client";
import CustomPlayButton from "./CustomPlayButton";

import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export interface TestimonialProps {
  name: string;
  logo: string;
  testimony: string;
  videoUrl: string;
  thumnail: string;
}

const TestimonialCards = ({
  name,
  logo,
  videoUrl,
  thumnail,
  testimony,
}: TestimonialProps) => {
  return (
    <div className="grid md:grid-cols-2 mt-10 p-4 gap-6">
      <div className="player-wrapper h-80 rounded-xl overflow-hidden">
        <ReactPlayer
          className="react-player"
          url={videoUrl}
          width="100%"
          height="100%"
          light={thumnail}
          playing
          controls
          playIcon={<CustomPlayButton />}
        />
      </div>
      <div>
        <div className="flex items-center">
          <h3 className="text-xl md:text-2xl xl:text-xl text-zinc-500 mb-2">{name} <span className="hidden xl:inline-block text-lg text-zinc-500">|</span></h3>
          <Image
            alt={name}
            src={logo}
            className="object-cover"
            width={125}
            height={115}
            loading="lazy"
          />
        </div>
        <blockquote className="text-[20px] sm:text-[23px] lg:text-[24px] text-[#003912] mt-4">
          <em>&quot;{testimony}&quot;</em>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCards;
