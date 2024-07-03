"use client";

import CustomTestimonialSwiper from "./CustomTestimonialSwiper";
import { testimonials } from "./Testimonials";

const TestimonialSwiper = () => {
  return (
    <div>
      <CustomTestimonialSwiper data={testimonials} slidesPerView={1} spaceBetween={16} />
    </div>
  );
};

export default TestimonialSwiper;
