import React, { useState } from "react";
import "./index.css";
import { FormatINR } from "../../../../../helpers/Helpers";
import { RiShoppingBagLine as ShoppingIcon } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../../../../helpers/routes";
import { FaHeart as Heart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function ItemCard(props) {
  const [fav, setFav] = useState(false);
  const { id, name, image, price, discountedPrice } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        console.log("navigate: ", AppRoutes.PRODUCT);
        navigate(AppRoutes.PRODUCT);
      }}
      className="body"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "158px",
            height: "235px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "stretch",
            marginBottom: "10px",
            position: "relative",
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setFav(!fav);
            }}
            style={{ alignItems: "center", justifyContent: "center" }}
            className="fav"
          >
            {fav ? (
              <Heart
                size={8.9}
                color={"#B60000"}
                style={{ marginLeft: "5px" }}
              />
            ) : (
              <FaRegHeart size={8.9} style={{ marginLeft: "5px" }} />
            )}
          </div>
        </div>
        <div className="img-caption">{name}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginBottom: "10px",
        }}
      >
        <div className="main-money">{FormatINR(discountedPrice)}</div>
        <div className="sub-money">{FormatINR(price)}</div>
      </div>
      <div className="add-to-cart-box">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifySelf: "flex-start",
          }}
        >
          <ShoppingIcon size={11} color="rgba(0, 0, 0, 1)" />
          <div>+</div>
        </div>
        <div className="add-to-cart-text">Add to bag</div>
      </div>
    </div>
  );
}

export default ItemCard;
