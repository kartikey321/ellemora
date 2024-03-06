import React, { useState } from "react";
import "./index.css";
import Carousel from "./components/carousel/carousel";
import { FormatINR } from "../../../helpers/Helpers";
import { HiOutlineExclamationCircle as Exclamation } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { RiArrowDropDownLine as Dropdown } from "react-icons/ri";
import { RiShoppingBagLine as ShoppingIcon } from "react-icons/ri";
import HomeAppBar from "../Home/components/appbar";
import item1Image from "../../../assets/images/item1.png";
import item2Image from "../../../assets/images/item2.png";
import fashionVideo from "../../../assets/videos/fashion_video.mp4";
function ProductPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const toggleOpen = () => setIsOpen(!isOpen);
  const media = [
    { type: "image", src: item1Image },

    { type: "image", src: item2Image },
    { type: "image", src: item2Image },
    { type: "video", src: fashionVideo },
  ];
  return (
    <div
      className="body"
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        marginLeft: 0,
        overflowY: "scroll",
      }}
    >
      <HomeAppBar />
      <Carousel media={media} />
      <div className="color-pallete-layout">
        {[
          "rgba(87, 0, 0, 1)",
          "rgba(87, 52, 0, 1)",
          "rgba(80, 87, 0, 1)",
          "rgba(0, 87, 71, 1)",
          "rgba(87, 0, 0, 1)",
        ].map((val, index) => {
          return (
            <div className="color-pallete-box">
              <div
                style={{ backgroundColor: val, height: "100%", width: "100%" }}
              ></div>
            </div>
          );
        })}
      </div>
      <div
        style={{ marginTop: "8px", marginLeft: "16px", marginRight: "16px" }}
      >
        <div className="item-title">PINK CASCADE SET</div>
        <div style={{ marginTop: "10px" }}></div>
        <div className="item-desc">
          Mughal Majesty: Exquisite Designs Inspired by India
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div className="main-money">{FormatINR(14000)}</div>
          <div className="sub-money">{FormatINR(24000)}</div>
          <div className="discount-box">
            <div className="discount">60%</div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "space-between",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "8px",
              marginLeft: "5px",
            }}
            className="item-desc"
          >
            Inclusive of all taxes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Exclamation color="#CD0000" />
            <div
              style={{
                color: "#CD0000",
                fontSize: "8px",
                marginLeft: "5px",
              }}
              className="item-desc"
            >
              This item will be back in stock after 6 days
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "8px", display: "flex", flexDirection: "row" }}
        >
          <div onClick={toggleOpen} className="size-box">
            <div></div>
            <div>{"Size"}</div>
            <Dropdown size={28} color="black" />
          </div>
          <div className="share-box">
            <IoMdShare size={28} color="black" />
          </div>
          <div className="fav-box">
            <FaRegHeart size={28} color="black" />
          </div>
        </div>
        <div className="add-to-cart">
          <ShoppingIcon size={28} color="white" />
          <div style={{ width: 15 }}></div>
          <div className="cart-text">Add to bag</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="bottom-content">
        <div className="desc-head">PRODUCT DESCRIPTION</div>
        <div className="desc-body">
          Elegant and classic blue dress is crafted in bamberg satin. The dress
          has ring and sequin disc scalloped detailings and a lilac bamberg
          satin halter slip. Easy to wear that combines classic and contemporary
          styles.
        </div>
        <div
          style={{
            marginTop: "13px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              marginTop: "13px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="desc1">
              <div className="desc-head">COMPONENTS</div>
              <div className="desc-body">1 Suit</div>
            </div>
            <div style={{ marginTop: "12px" }} className="desc1">
              <div className="desc-head">COMPOSITION</div>
              <div className="desc-body">Foil Jersey</div>
            </div>
            <div style={{ marginTop: "12px" }} className="desc1">
              <div className="desc-head">PRODUCT CODE</div>
              <div className="desc-body">AIJ9839</div>
            </div>
          </div>
          <div
            style={{
              marginTop: "13px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="desc1">
              <div className="desc-head">FIT</div>
              <div className="desc-body">Fitted at the bust and waist</div>
            </div>
            <div style={{ marginTop: "12px" }} className="desc1">
              <div className="desc-head">CARE</div>
              <div className="desc-body">Dry Clean only</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
