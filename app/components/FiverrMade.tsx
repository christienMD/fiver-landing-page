import React from "react";
import FiverrHeading from "./FiverrHeading";
import FiverrMadeItemCard from "./FiverrMadeItemCard";

const FiverrMade = () => {
  const cardItems = [
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/1ac8625c49b85a6ca62be3e153c57930-1717999633/IMG_1125.jpeg",
      title: "kjszdavbkhbjh",
      author: "AHUJVJU",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/7a6ebd8db81442f5a251741d4f9fa49b-1716745571/Main%20Artwork.jpg",
      title: "Album Cover Design",
      author: "ferdyuno",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/cdd3feed184b9df55d11656518a84155-1718331102/1.jpg",
      title: "Album Cover Design",
      author: "ferdyuno",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c68bf753cf0726ae32c64dddff2efb85-1716540098/view1.jpg",
      title: "Album Cover Design",
      author: "ferdyuno",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/b5d3949fe01874fb0e8f26b81ef50029-1718540465/view%201.png",
      title: "Architecture & Interior Design",
      author: "by toheed_ahmad",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c138cfdf4859bb497ff904beeb4be5f8-1717583961/Creative_self_new.jpg",
      title: "Architecture & Interior Design",
      author: "by toheed_ahmad",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/17716ed6af412ebc5ef5ec3a2b22505e-1718623076/Coping%20modern%20minimalist%20logo%20designs%20business%20logo%20company%20logo%20business%20logo%20logo%20maker.png",
      title: "Architecture & Interior Design",
      author: "by toheed_ahmad",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/3a6c015206a023a754e1e4b75780bf4d-1716573906/REVISION-1.jpg",
      title: "Architecture & Interior Design",
      author: "by toheed_ahmad",
    },
  ];

  return (
    <div className="container mx-auto md:max-w-7xl mb-10">
      <FiverrHeading label="Made on Fiverr" />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 mt-7 gap-3">
        {cardItems.map((item) => (
          <FiverrMadeItemCard key={item.imgUrl} title={item.title} author={item.author} imgUrl={item.imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default FiverrMade;
