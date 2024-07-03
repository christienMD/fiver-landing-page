"use client";

import CustomServiceSwiper from "./CustomServiceSwiper";
import { services } from "./Services";

const ServiceSwiper = () => {
  return (
    <div>
      <CustomServiceSwiper data={services} spaceBetween={16} />
    </div>
  );
};

export default ServiceSwiper;
