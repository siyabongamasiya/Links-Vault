import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  onSearch(value: string): void;
  currentValue : string
}

const Search = ({ onSearch ,currentValue}: SearchProps) => {
  return (
    <div id="search-container">
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search"
        value={currentValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = e.target.value;
          onSearch(newValue); 
        }}
      />
      <FaSearch
        id="search-icon"
        onClick={() => {
          console.log("searching");
        }}
      />
    </div>
  );
};

export default Search;
