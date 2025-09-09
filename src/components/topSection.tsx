import { useState } from "react";
import Search from "./search";
import logo from "../assets/images/logo.png";

const TopSection = () => {
  return (
    <div id="topSection">
      <div id="topSection-logo-search">
        <img id="logo" src={logo} alt="logo" />
        <Search
          onSearch={(value) => {
            //search link
          }}
        />
      </div>
      <div id="divider"></div>
    </div>
  );
};

export default TopSection;
