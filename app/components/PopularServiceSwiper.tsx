"use client";

import CustomSwiper from "./CustomSwiper";
import PopularServiceCard from "./PopularServiceCard";
import { popularServices } from "./PopularServices";

const PopularServiceSwiper = () => {
  return (
    <div>
      <CustomSwiper
        data={popularServices}
        spaceBetween={16}
      />
    </div>
  );
};

export default PopularServiceSwiper;
