"use client";

import { useState , useEffect} from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoDescription = () => {
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
      setPlaying(true);
    }, []);

  return (
    <div className="player-wrapper mt-16 h-[450px] rounded-lg overflow-hidden">
      <ReactPlayer
        className="react-player"
        url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/e0f330e4c8d6e3bf843a3bd3164fa275-1706087048062/How%20Fiverr%20Works%20EN%20Subs%2016x9"
        width="100%"
        height="100%"
        light="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef51b45f79342925d5268e0b2377eae8-1704717764992/thumbnail.png"
        controls
        playing={playing}
        muted
        config={{
          file: {
            attributes: {
              autoPlay: true,
              muted: true,
            },
          },
        }}
      />
    </div>
  );
};

export default VideoDescription;
