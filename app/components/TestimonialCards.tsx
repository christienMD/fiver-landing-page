"use client";
import CustomPlayButton from "./CustomPlayButton";

import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const TestimonialCards = () => {
  return (
    <div className="grid md:grid-cols-2 mt-10 p-3 gap-6">
      <div className="player-wrapper h-80 rounded-xl overflow-hidden">
        <ReactPlayer
          className="react-player"
          url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi"
          width="100%"
          height="100%"
          light="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
          playing
          controls
          playIcon={<CustomPlayButton />}
        />
      </div>
      <div>
        <h3 className="text-2xl text-zinc-500 mb-2">
          Brighid Gannon (DNP, PMHNP-BC), Co-Founder
        </h3>
        <Image
          alt=""
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lavender-logo-x2.3fff9e7.png"
          className="object-cover"
          width={150}
          height={150}
          loading="lazy"
        />
        <blockquote className="text-[24px] text-[#003912] mt-4">
          <em>
            &quot;We used Fiverr for SEO, our logo, website, copy, animated
            videos — literally everything. It was like working with a human
            right next to you versus being across the world.&quot;
          </em>
        </blockquote>
      </div>
      </div>
  );
};

export default TestimonialCards;
