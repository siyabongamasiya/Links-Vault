import { FaSearch } from "react-icons/fa";

interface SearchProps {
  searchedValue: string;
  onclick(): void;
}

const Search = ({ onclick }: SearchProps) => {
  return (
    <div>
      <input type="text" name="search" placeholder="Search" />
      <FaSearch
        onClick={() => {
          onclick();
        }}
      />
    </div>
  );
};

export default Search;
