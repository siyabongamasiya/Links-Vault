import { useState } from "react";
import Search from "./search";
import logo from "../assets/images/logo.png";
import type Link from "../models/link";

interface TopSectionProps {
  onSearch(value: string): void;
}

const TopSection = ({ onSearch }: TopSectionProps) => {
  return (
    <div id="topSection">
      <div id="topSection-logo-search">
        <img id="logo" src={logo} alt="logo" />
        <Search
          onSearch={(value) => {
            onSearch(value);
          }}
        />
      </div>
      <div id="divider"></div>
    </div>
  );
};

export default TopSection;
