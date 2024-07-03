import React from "react";
import ServiceCard, { Service } from "./ServiceCard";
import PopularServices from "./PopularServices";
import ServiceSwiper from "./ServiceSwiper";

export const services: Service[] = [
  {
    title: "Programming & Tech",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming-tech.49dbf0d.svg",
  },
  {
    title: "Graphics & Design",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.3272c08.svg",
  },
  {
    title: "Digital Marketing",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/digital-marketing.85e8846.svg",
  },
  {
    title: "Writing & Translation",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.dc66eb8.svg",
  },
  {
    title: "Video & Animation",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.21fb1d6.svg",
  },
  {
    title: "AI Services",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/ai-services.40511da.svg",
  },
  {
    title: "Music & Audio",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.6a411f2.svg",
  },
  {
    title: "Business",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.772c3c9.svg",
  },
  {
    title: "Consulting",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/consulting.93989a4.svg",
  },
];
const Services = () => {
  return (
    <div className="container mx-auto md:max-w-7xl mt-7">
      <div className="grid lg:hidden xl:grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-9 gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
       <div className="hidden lg:block xl:hidden">
        <ServiceSwiper />
       </div>
      <PopularServices />
    </div>
  );
};

export default Services;
