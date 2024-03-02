import React, { useState } from "react";
import HomeAppBar from "./components/appbar";
import "./Home.css";
import BackgroundImage from "../../../assets/images/home_background.png";
import {
  MdKeyboardArrowLeft as LeftArrow,
  MdKeyboardArrowRight as RightArrow,
} from "react-icons/md";

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [filterList, setFilterList] = useState([
    "Lehengas",
    "Ready to wear sarees",
    "Dresses",
    "Lehengas1",
    "Dresses1",
    "Dresses2",
    "Lehengas2",
  ]);
  const [selectedOption, setSelectedOption] = useState(-1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: height * 0.4,
          flexDirection: "column",
          display: "flex",
          justifyContent: "stretch",
          // Align items vertically in the container
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: height * 0.4,
            flexDirection: "column",
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
          }}
        ></div>
        <div
          style={{
            alignItems: "stretch",
            zIndex: 2,
            width: "100%",
            height: height * 0.4,
            flexDirection: "column",
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
          }}
        >
          <HomeAppBar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div className="style-text">TAILORED DESIGNING JUST FOR YOU.</div>
            <div className="button-box">
              <div className="text">Experience Ellemora</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 25 }}></div>
      <div className="bottom-page">
        <div className="style-text" style={{ color: "#434343" }}>
          New arrivals
        </div>
        <div className="bottom-text" style={{ color: "#434343" }}>
          At Ellemora, we weave a symphony of style and grace, Exquisite
          emotions in every trace.
        </div>

        <div
          style={{
            position: "relative",
            flexShrink: 0,
            width: "92%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="left-arrow">
            <LeftArrow size={16} color="#C2C2C2" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "10px",
              padding: "2px",
              paddingLeft: "12px",
              paddingRight: "12px",
              width: "92%",
              overflowX: "auto", // This will make the row scrollable horizontally
              "-ms-overflow-style": "none" /* For Internet Explorer/Edge */,
              "&::-webkit-scrollbar": {
                display: "none" /* For WebKit browsers (Chrome, Safari) */,
              },
            }}
          >
            {filterList.map((e, index) => {
              return (
                <div
                  className="filter-button"
                  style={{
                    backgroundColor: selectedOption == index ? "#545454" : null,
                  }}
                  onClick={() => {
                    setSelectedOption(index);
                  }}
                >
                  <div
                    className="filter-text"
                    style={{
                      color: selectedOption == index ? "white" : null,
                    }}
                  >
                    {e}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="right-arrow">
            <RightArrow size={16} color="#C2C2C2" />
          </div>
        </div>
      </div>
      <div style={{ justifyContent: "end", marginRight: "15px" }}>
        <div className="view_all">VIEW ALL</div>
      </div>
    </div>
  );
}

export default Home;
