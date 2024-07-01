import React from "react";
import Image from "next/image";

const CustomPlayButton = () => {
  return (
    <div className="playButton">
      <Image
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/desktop-play-button.bab1740.png"
        alt="Play Button"
        width={100}
        height={100}
        className="playButtonImage"
      />
    </div>
  );
};

export default CustomPlayButton;
