import React from "react";
import TestimonialCard, { TestimonialProps } from "./TestimonialCards";
import TestimonialSwiper from "./TestimonialSwipper";

export const testimonials: TestimonialProps[] = [
  {
    name: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
    logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lavender-logo-x2.3fff9e7.png",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi",
    thumnail:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg",
    testimony:
      "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
  },
  {
    name: "Caitlin Tormey, Chief Commercial Officer",
    logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl",
    thumnail:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg",
    testimony:
      "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
  },
];

const Testimonials = () => {
  return (
    <div className="mb-14 container mx-auto md:max-w-7xl">
      <h2 className="text-4xl md:text-5xl text-zinc-700">
        What they&apos;re saying about Fiverr
      </h2>
      <div>
        <TestimonialSwiper />
      </div>
    </div>
  );
};

export default Testimonials;
