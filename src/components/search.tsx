import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  onSearch(value: string): void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [searchedValue, setSearchedvalue] = useState("");
  return (
    <div id="search-container">
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search"
        value={searchedValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchedvalue(e.target.value);
          onSearch(searchedValue);
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
