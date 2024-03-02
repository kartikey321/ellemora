import React from "react";
import "./index.css";
import EllemoraLogo from "../../../../../assets/images/ellemora_logo.png";
import { FaSearch } from "react-icons/fa";
import { RiShoppingCart2Line as ShoppingIcon } from "react-icons/ri";
import { IoMenu as Menu } from "react-icons/io5";

function HomeAppBar() {
  return (
    <div className="appbar">
      <div>
        <img src={EllemoraLogo} height={30} className="logo" />
      </div>
      <div style={{ justifyContent: "space-around" }}>
        <FaSearch class="top-icon" size={17.1} color="white" />
        <ShoppingIcon class="top-icon" size={17.1} color="white" />
        <Menu class="top-icon" size={17.1} color="white" />
      </div>
    </div>
  );
}

export default HomeAppBar;
