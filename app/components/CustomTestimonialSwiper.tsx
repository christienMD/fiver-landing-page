"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PopularServiceCard from "./PopularServiceCard";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Swiper as SwiperInstance } from "swiper";
import TestimonialCards, { TestimonialProps } from "./TestimonialCards";


interface SwiperProps {
  data: TestimonialProps[];
  slidesPerView?: number | "auto";
  spaceBetween?: number;
}

const CustomTestimonialSwiper = ({
  data,
  slidesPerView = "auto",
  spaceBetween = 16,
}: SwiperProps) => {
  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [slidesPerGroup, setSlidesPerGroup] = useState(1);

  useEffect(() => {
    const calculateSlidesPerGroup = () => {
      if (typeof window !== "undefined") {
        setSlidesPerGroup(Math.floor(window.innerWidth / (250 + spaceBetween)));
      }
    };

    calculateSlidesPerGroup();

    window.addEventListener("resize", calculateSlidesPerGroup);
    return () => window.removeEventListener("resize", calculateSlidesPerGroup);
  }, [spaceBetween]);

  const onBeforeInit = (swiper: SwiperInstance) => {
    if (
      typeof swiper.params.navigation !== "boolean" &&
      swiper.params.navigation
    ) {
      const navigation = swiper.params.navigation;
      if (navPrevButton.current && navNextButton.current) {
        navigation.prevEl = navPrevButton.current;
        navigation.nextEl = navNextButton.current;
      }
    }
  };

  const handleSlideChange = (swiper: SwiperInstance) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="container mx-auto md:max-w-7xl mt-7 relative">
      <Swiper
        onBeforeInit={onBeforeInit}
        onSwiper={(swiper) => {
          handleSlideChange(swiper);
        }}
        onSlideChange={(swiper) => {
          handleSlideChange(swiper);
        }}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        slidesPerGroup={slidesPerGroup}
        modules={[Navigation]}
        className="w-full"
      >
        {data.map((service, index) => (
          <SwiperSlide
            key={index}
            className="slide"
            style={{ width: slidesPerView === "auto" ? "auto" : "100%" }}
          >
            <div className="flex items-center justify-center w-full">
              <TestimonialCards
                name={service.name}
                logo={service.logo}
                testimony={service.testimony}
                videoUrl={service.videoUrl}
                thumnail={service.thumnail}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={navPrevButton}
        className={`prev-button absolute top-1/2 transform -translate-y-1/2 left-3 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow ${
          isBeginning ? "hidden" : ""
        }`}
      >
        <svg
          width="8"
          height="16"
          className="h-6 w-6"
          viewBox="0 0 8 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z"
            fill="black"
          />
        </svg>
      </button>

      <button
        ref={navNextButton}
        className={`next-button absolute top-1/2 transform -translate-y-1/2 right-3 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow ${
          isEnd ? "hidden" : ""
        }`}
      >
        <svg
          width="8"
          height="15"
          className="h-6 w-6"
          viewBox="0 0 8 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.772102 14.3093L0.153379 13.6906C0.00694026 13.5442 0.00694026 13.3067 0.153379 13.1603L5.80022 7.5L0.153379 1.83967C0.00694026 1.69323 0.00694026 1.45577 0.153379 1.30931L0.772102 0.690585C0.918534 0.544151 1.15598 0.544151 1.30242 0.690585L7.84661 7.23482C7.99307 7.38125 7.99307 7.61869 7.84661 7.76516L1.30242 14.3093C1.15598 14.4558 0.918534 14.4558 0.772102 14.3093Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomTestimonialSwiper;
