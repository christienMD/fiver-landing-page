import Image from "next/image";
import FiverrHeading from "./FiverrHeading";
import React from "react";

const GetHelp = () => {
  return (
    <section>
      <FiverrHeading label="Guides to help you grow" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-10">
        <div className="">
          <div className="relative h-72 w-52">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-zinc-600">Start a buisiness</p>
        </div>
        <div className="">
          <div className="relative h-72 w-52">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-2 text-zinc-600">Start a buisiness</h3>
        </div>
        <div className="">
          <div className="relative h-72 w-52">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-2 text-zinc-600">Start a buisiness</h3>
        </div>
      </div>
    </section>
  );
};

export default GetHelp;
