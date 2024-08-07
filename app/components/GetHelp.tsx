import Image from "next/image";
import FiverrHeading from "./FiverrHeading";
import React from "react";

const GetHelp = () => {
  return (
    <section className="container mx-auto md:max-w-7xl">
      <FiverrHeading label="Guides to help you grow" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center md:gap-5 mt-10">
        <div className="">
          <div className="relative w-[267px] md:w-[225px] h-[186px] md:h-[200px] lg:w-[300px] lg:h-[250px] xl:w-[400px] xl:h-[300px] rounded-md">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg"
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-zinc-700 font-semibold text-lg">
            Start a buisiness
          </p>
        </div>
        <div className="">
          <div className="relative w-[267px] md:w-[225px] h-[186px] md:h-[200px] lg:w-[300px] lg:h-[250px] xl:w-[400px] xl:h-[300px] rounded-md">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <h3 className="mt-2 text-zinc-700 font-semibold text-lg">
            Start a buisiness
          </h3>
        </div>
        <div className="">
          <div className="relative w-[267px] md:w-[225px] h-[186px] md:h-[200px] lg:w-[300px] lg:h-[250px] xl:w-[400px] xl:h-[300px] rounded-md">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              quality={100}
            />
          </div>
          <h3 className="mt-2 text-zinc-700 font-semibold text-lg">
            Start a buisiness
          </h3>
        </div>
      </div>
    </section>
  );
};

export default GetHelp;
