import { useState } from "react";

interface SearchBarProps {
  onSearch: (search: string) => void;
  onShowAll: () => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onShowAll,
  onClear,
}) => {
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
    <section className="search-section" data-testid="search-section">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country..."
          aria-label="Country search input"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          data-testid="search-input"
        />
        <button
          className="search-button"
          aria-label="Search for countries"
          onClick={handleSearch}
          disabled={!search.length}
          data-testid="search-button"
        >
          Search
        </button>
      </div>
      <div className="btn-container">
        <button
          className="show-all-btn"
          aria-label="Show all countries"
          data-testid="show-all-button"
          onClick={() => {
            setSearch("");
            onShowAll();
          }}
        >
          Show All
        </button>
        <button
          className="clear-btn"
          aria-label="Clear countries"
          data-testid="clear-all-button"
          onClick={() => {
            setSearch("");
            onClear();
          }}
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
