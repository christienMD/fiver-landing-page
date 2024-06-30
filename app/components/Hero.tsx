import Image from "next/image";
import SearchIput from "./SearchIput";

const Hero = () => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center container mx-auto md:max-w-7xl bg-gradient-to-t from-green-950 to-green-900 h-[500px] mt-10 pt-7 rounded-lg">
      <h1 className="text-5xl lg:text-6xl max-w-lg md:max-w-2xl text-white text-center font-medium">
        Find the right <span className="text-green-500">freelance</span>{" "}
        service, right away
      </h1>
      <div className="w-full px-6 md:px-0 mb-6">
        <SearchIput />
      </div>

      <div className="hidden md:flex gap-5 items-center">
        <span className="text-white opacity-45 pe-2">Trusted by:</span>
        <Image
          alt=""
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.398bc1c.svg"
          width={80}
          height={80}
          className="opacity-45"
        />
        <Image
          alt=""
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.129f8ec.svg"
          width={80}
          height={80}
          className="opacity-45"
        />
        <Image
          alt=""
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.e1b0070.svg"
          width={80}
          height={80}
          className="opacity-45"
        />
        <Image
          alt=""
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pg.a47f1ab.svg"
          width={80}
          height={80}
          className="opacity-45"
        />
        <Image
          alt=""
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.0520267.svg"
          width={80}
          height={80}
          className="opacity-45"
        />
        <Image
          alt=""
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.67915a0.svg"
          width={80}
          height={80}
          className="opacity-45"
        />
      </div>
    </section>
  );
};

export default Hero;
