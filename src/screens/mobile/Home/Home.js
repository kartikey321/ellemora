import React, { useState } from "react";
import HomeAppBar from "./components/appbar";
import "./Home.css";
import BackgroundImage from "../../../assets/images/home_background.png";
import BookImage from "../../../assets/images/book_img.png";
import {
  MdKeyboardArrowLeft as LeftArrow,
  MdKeyboardArrowRight as RightArrow,
} from "react-icons/md";
import ItemCard from "./components/itemCard";

function Home() {
  const storyItems = [
    {
      id: 0,
      name: "Sale",
      image: require("../../../assets/images/item1.png"),
    },
    {
      id: 1,
      name: "Lehengas",
      image: require("../../../assets/images/item2.png"),
    },
    {
      id: 2,
      name: "Dresses",
      image: require("../../../assets/images/item1.png"),
    },
    {
      id: 3,
      name: "Best Seller",
      image: require("../../../assets/images/item2.png"),
    },
    {
      id: 4,
      name: "Basics",
      image: require("../../../assets/images/item2.png"),
    },
    {
      id: 5,
      name: "Sale",
      image: require("../../../assets/images/item1.png"),
    },
  ];
  const items = [
    {
      id: 0,
      name: "PINK CASCADE SET",
      image: require("../../../assets/images/item1.png"),
      price: "15000",
      discountedPrice: "10000",
    },
    {
      id: 1,
      name: "PINK CASCADE SET",
      image: require("../../../assets/images/item2.png"),
      price: "15000",
      discountedPrice: "10000",
    },
    {
      id: 2,
      name: "PINK CASCADE SET",
      image: require("../../../assets/images/item1.png"),
      price: "15000",
      discountedPrice: "10000",
    },
    {
      id: 3,
      name: "PINK CASCADE SET",
      image: require("../../../assets/images/item2.png"),
      price: "15000",
      discountedPrice: "10000",
    },
  ];
  //const [items, setItems] = useState(items1);
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
        height: "100%",
        overflowY: "auto",
      }}
    >
      <HomeAppBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
        }}
      >
        {storyItems.map((item, index) => {
          return (
            <div style={{ width: width / 6 - 7.5 }} className="story">
              <div className="story-item">
                <img
                  src={item.image}
                  style={{
                    objectFit: "cover",
                    height: 55.4,
                    width: 55.4,
                    borderRadius: 50,
                  }}
                />
                <div style={{ height: "5px" }}></div>
                <div className="story-text">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          marginTop: "20px",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: 235,
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
            height: 235,
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        ></div>
        <div
          style={{
            alignItems: "stretch",
            zIndex: 2,
            width: "100%",
            height: 235,
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div style={{ marginBottom: "26px" }} className="style-text">
              TAILORED DEISGNING JUST FOR YOU
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 25 }}></div>
      <div className="bottom-page">
        <div
          className="style-text"
          style={{ color: "#434343", marginBottom: "25px" }}
        >
          New arrivals
        </div>
      </div>
      {/* <div style={{ justifyContent: "end", marginRight: "15px" }}>
        <div className="view_all">VIEW ALL</div>
      </div> */}
      <div
        style={{
          width: "100%",
          overflowX: "auto", // This will make the row scrollable horizontally
          "-ms-overflow-style": "none" /* For Internet Explorer/Edge */,
        }}
        className="hide-scrollbar"
      >
        <div
          style={{
            justifyContent: "stretch",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {items.map((item) => ItemCard(item))}
        </div>
      </div>
      <div
        className="style-text"
        style={{ color: "#434343", marginTop: "20px" }}
      >
        SHOP BY OCCASSION
      </div>
      <div className="bottom-text" style={{ color: "#434343" }}>
        At Ellemora, we weave a symphony of style and grace, Exquisite emotions
        in every trace.
      </div>
      <div style={{ justifyContent: "end", marginRight: "15px" }}>
        <div className="view_all">VIEW ALL</div>
      </div>
      <div
        style={{
          width: "100%",
          overflowX: "auto", // This will make the row scrollable horizontally
          "-ms-overflow-style": "none" /* For Internet Explorer/Edge */,
        }}
        className="hide-scrollbar"
      >
        <div
          style={{
            justifyContent: "stretch",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {items.map((item) => ItemCard(item))}
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          backgroundImage: `url(${BookImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: 235,
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
            height: 235,
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        ></div>
        <div
          style={{
            alignItems: "stretch",
            zIndex: 2,
            width: "100%",
            height: 235,
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div className="style-text">A TALE OF TAILORMADE DREAMS</div>
            <div className="button-box">
              <div className="text">Book your appointment now!</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="style-text"
        style={{ color: "#434343", marginTop: "20px" }}
      >
        SALE
      </div>
      <div className="bottom-text" style={{ color: "#434343" }}>
        At Ellemora, we weave a symphony of style and grace, Exquisite emotions
        in every trace.
      </div>
      <div style={{ justifyContent: "end", marginRight: "15px" }}>
        <div className="view_all">VIEW ALL</div>
      </div>
      <div
        style={{
          width: "100%",
          overflowX: "auto", // This will make the row scrollable horizontally
          "-ms-overflow-style": "none" /* For Internet Explorer/Edge */,
        }}
        className="hide-scrollbar"
      >
        <div
          style={{
            justifyContent: "stretch",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {items.map((item) => ItemCard(item))}
        </div>
      </div>
      <div
        className="style-text"
        style={{ color: "#434343", marginTop: "20px" }}
      >
        Festives
      </div>
      <div className="bottom-text" style={{ color: "#434343" }}>
        At Ellemora, we weave a symphony of style and grace, Exquisite emotions
        in every trace.
      </div>
      <div style={{ justifyContent: "end", marginRight: "15px" }}>
        <div className="view_all">VIEW ALL</div>
      </div>
      <div
        style={{
          width: "100%",
          overflowX: "auto", // This will make the row scrollable horizontally
          "-ms-overflow-style": "none" /* For Internet Explorer/Edge */,
        }}
        className="hide-scrollbar"
      >
        <div
          style={{
            justifyContent: "stretch",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {items.map((item) => ItemCard(item))}
        </div>
      </div>
      <div style={{ height: "45px" }}></div>
      <div className="footer">
        <div className="footer-col">
          <div className="footer-col-head">Collections</div>
          <div className="footer-col-item">Dresses</div>
          <div className="footer-col-item">Sarees</div>
          <div className="footer-col-item">Lehengas</div>
        </div>
        <div className="footer-col">
          <div className="footer-col-head">Collections</div>
          <div className="footer-col-item">Quick Links</div>
          <div className="footer-col-item">About Us</div>
          <div className="footer-col-item">Bespoke</div>
          <div className="footer-col-item">Blog</div>
          <div className="footer-col-item">Size Guide</div>
        </div>

        <div className="footer-col">
          <div className="footer-col-head">Fine Print</div>
          <div className="footer-col-item">Cancellation Policy</div>
          <div className="footer-col-item">Privacy Policy</div>
          <div className="footer-col-item">Refund & Returns Policy</div>
          <div className="footer-col-item">Shipping policy</div>
          <div className="footer-col-item">Size Guide</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
