import React, { useEffect, useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";

export interface MediaItem {
  url: string;
  type: string;
}

interface Props {
  mediaItem: MediaItem;
  selectedIndex: number;
  media: MediaItem[];
  index: number;
}

const RenderMedia: React.FC<Props> = ({ mediaItem, selectedIndex, media, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (index === selectedIndex && mediaItem.type === "video") {
        const { top, bottom } = videoRef.current?.getBoundingClientRect() ?? { top: 0, bottom: 0 };
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible && !isPlaying) {
          videoRef.current?.play();
          setIsPlaying(true);
        } else if (!isVisible && isPlaying) {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedIndex, isPlaying, mediaItem, index]);

  const handleTogglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {mediaItem.type === "image" && (
        <img
          style={{ objectFit: "cover", height: 600, width: "100%" }}
          src={mediaItem.url}
          alt="carousel"
        />
      )}
      {mediaItem.type === "video" && (
        <div style={{ position: "relative" }}>
          <video
            onLoad={() => {}}
            loop
            muted
            ref={videoRef}
            style={{ objectFit: "cover", height: 600, width: "100%" }}
            src={mediaItem.url}
            onClick={handleTogglePlay}
          />
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 999,
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleTogglePlay}
          >
            {isPlaying ? (
              <IoPauseSharp size={25} color="white" />
            ) : (
              <FaPlay size={26} color="white" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default RenderMedia;
