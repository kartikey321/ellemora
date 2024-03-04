import React from "react";
import "./index.css";
function ItemCard() {
  const items = [
    {
      id: 0,
      name: "PINK CASCADE SET",
      image: "/assets/images/item2.png",
      price: "15000",
      discountedPrice: "10000",
    },
    {
      id: 1,
      name: "PINK CASCADE SET",
      image: "/assets/images/item2.png",
      price: "15000",
      discountedPrice: "10000",
    },
  ];
  return (
    <div className="body">
      <img
        className="image"
        src={require("../../../../../assets/images/item2.png")}
      />
      <div>PINK CASCADE SET</div>
    </div>
  );
}

export default ItemCard;
