import Image from 'next/image';
import React from 'react'

const Description = () => {
  return (
    <div className="mb-14 container mx-auto md:max-w-7xl">
      <h2 className="text-4xl md:text-5xl w-full md:max-w-2xl text-zinc-600">
        A whole world of freelance talent at your fingertips
      </h2>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="flex flex-col gap-2 my-auto">
          <Image
            alt=""
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.72379ee.svg"
            width={48}
            height={48}
          />
          <h3 className="text-lg md:text-[24px] my-2">Over 700 categories</h3>
          <p className="font-light text-base">
            Get results from skilled freelancers from all over the world, for
            every task, at any price point.
          </p>
        </div>
        <div className="flex flex-col gap-2 my-auto">
          <Image
            alt=""
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/handshake.287b5d3.svg"
            width={48}
            height={48}
          />
          <h3 className="text-lg md:text-[24px] my-2">
            Clear, upfront pricing
          </h3>
          <p className="font-light text-base">
            No hourly rates, just project-based pricing. Payments only get
            released when you approve.
          </p>
        </div>
        <div className="flex flex-col gap-2 my-auto">
          <Image
            alt=""
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lightning.2cded3f.svg"
            width={48}
            height={48}
          />
          <h3 className="text-lg md:text-[24px] my-2">
            Quality work done faster
          </h3>
          <p className="font-light text-base">
            Filter to find the right freelancers quickly and get great work
            delivered in no time, every time.
          </p>
        </div>
        <div className="flex flex-col gap-2 my-auto">
          <Image
            alt=""
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/support.660ad7f.svg"
            width={48}
            height={48}
          />
          <h3 className="text-lg md:text-[24px] my-2">
            24/7 award-winning support
          </h3>
          <p className="font-light text-base">
            Chat with our team to get your questions answered or resolve any
            issues with your orders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description