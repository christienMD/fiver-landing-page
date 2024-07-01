import React from "react";
import ServiceCard from "./ServiceCard";
import PopularServices from "./PopularServices";

const Services = () => {
  const services = [
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

  return (
    <div className="container mx-auto md:max-w-7xl mt-7">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.image}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
      <PopularServices />
    </div>
  );
};

export default Services;
