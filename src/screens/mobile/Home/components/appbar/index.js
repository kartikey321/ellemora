import React from "react";
import "./index.css";
import EllemoraLogo from "../../../../../assets/images/ellemora_logo.png";
import SearchIcon from "../../../../../assets/svg/search.svg";
import ProfileIcon from "../../../../../assets/svg/profile.svg";
import FavIcon from "../../../../../assets/svg/fav.svg";
import BagIcon from "../../../../../assets/svg/bag.svg";
import MenuIcon from "../../../../../assets/svg/menu.svg";

function HomeAppBar() {
  return (
    <div style={{ backgroundColor: "white" }} className="appbar">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img src={MenuIcon} className="top-icon" />
        <div className="ellemora">ELLEMORA</div>
      </div>
      <div style={{ justifyContent: "space-around" }}>
        <img src={SearchIcon} className="top-icon" />
        <img src={ProfileIcon} className="top-icon" />
        <img src={FavIcon} className="top-icon" />
        <img src={BagIcon} className="top-icon" />
      </div>
    </div>
  );
}

export default HomeAppBar;
