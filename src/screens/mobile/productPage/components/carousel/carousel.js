// Carousel.js
import React, { useRef, useState, useEffect } from "react";
import RenderMedia from "./render_media";
import "./carousel.css";
const Carousel = ({ media }) => {
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = carouselRef.current.scrollLeft;
    const index = Math.round(scrollPosition / window.innerWidth);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
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
