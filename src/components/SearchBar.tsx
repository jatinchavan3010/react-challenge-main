import { useState } from "react";

type SearchBarProps = {
  handleSearch: (search: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <div className="search-button" onClick={() => handleSearch(search)}>
        Search
      </div>
    </>
  );
};

export default SearchBar;
