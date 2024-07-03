import React from "react";
import PopularServiceCard, { PopularService } from "./PopularServiceCard";
import PopularServiceSwiper from "./PopularServiceSwiper";

export const popularServices: PopularService[] = [
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png",
    bgColor: "bg-[#00732e]",
    title: "Website Development",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png",
    bgColor: "bg-[#ff7640]",
    title: "Logo Design",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png",
    bgColor: "bg-[#003912]",
    title: "SEO",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png",
    bgColor: "bg-[#4d1727]",
    title: "Architecture & Design",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png",
    bgColor: "bg-[#687200]",
    title: "Social Media Marketing",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
    bgColor: "bg-[#421300]",
    title: "Voice Over",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png",
    bgColor: "bg-[#254200]",
    title: "Software Development",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png",
    bgColor: "bg-[#8f2900]",
    title: "Data Science & ML",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png",
    bgColor: "bg-[#687200]",
    title: "Data Science & ML",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png",
    bgColor: "bg-[#00732e]",
    title: "E-commerce Marketing",
  },
  {
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png",
    bgColor: "bg-[#be5272]",
    title: "Video Editing",
  },
];

const PopularServices = () => {
  return (
    <div className="mt-20 mb-12 px-2">
      <h2 className="text-5xl font-light text-zinc-600">Popular services</h2>
      <div className="lg:hidden mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {popularServices.map((service, index) => (
          <PopularServiceCard
            key={index}
            title={service.title}
            imgUrl={service.imgUrl}
            bgColor={service.bgColor}
          />
        ))}
      </div>
      <div className="hidden lg:block">
        <PopularServiceSwiper />
      </div>
    </div>
  );
};

export default PopularServices;
