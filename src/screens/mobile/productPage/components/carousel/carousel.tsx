import React, { useRef, useState, useEffect } from "react";
import RenderMedia from "./render_media";
import "./carousel.css";

interface MediaItem {
  // Define the type for media items
  // Assuming media items have properties like url, type, etc.
  url: string;
  type: string;
}

interface Props {
  media: MediaItem[];
}

const Carousel: React.FC<Props> = ({ media }) => {
  const carouselRef = useRef<HTMLDivElement>(null); // Specify the type for carouselRef
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Specify the type for currentIndex

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const index = Math.round(scrollPosition / window.innerWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div style={{ position: "relative", margin: "0px", padding: "0px" }}>
      <div
        ref={carouselRef}
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
        }}
        className="hide-scrollbar"
      >
        {media.map((mediaItem, index) => (
          <div
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: "0 0 auto",
              width: "100vw", // Use window width instead of 100%
              scrollSnapAlign: "center",
              height: 600,
            }}
          >
            <RenderMedia
              mediaItem={mediaItem}
              selectedIndex={currentIndex}
              media={media}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
