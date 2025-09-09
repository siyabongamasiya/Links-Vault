import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  onSearch(value: string): void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [searchedValue, setSearchedvalue] = useState("");
  return (
    <div id="search-container">
      <input id="search" type="text" name="search" placeholder="Search" />
      <FaSearch id="search-icon" onClick={() => onSearch(searchedValue)} />
    </div>
  );
};

export default Search;
