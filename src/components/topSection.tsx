import { useState } from "react";
import Search from "./search";
import logo from "../assets/images/logo.png"

const TopSection = () => {
  const [searchedValue] = useState("");

  return (
    <div>
      <img src={logo} alt="logo" />
      <Search
        searchedValue={searchedValue}
        onclick={() => {
          //search local storage
        }}
      />
    </div>
  );
};

export default TopSection
