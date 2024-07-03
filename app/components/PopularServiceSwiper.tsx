"use client";

import CustomSwiper from "./CustomSwiper";
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
