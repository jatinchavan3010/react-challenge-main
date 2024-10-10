import { useState } from "react";

interface SearchBarProps {
  onSearch: (search: string) => void;
  onShowAll: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onShowAll }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      onSearch(search);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className="search-button"
          onClick={handleSearch}
          disabled={!search.length}
        >
          Search
        </button>
      </div>
      <button className="show-all-btn" onClick={onShowAll}>
        Show All
      </button>
    </section>
  );
};

export default SearchBar;
