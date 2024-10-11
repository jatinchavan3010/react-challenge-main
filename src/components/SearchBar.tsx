import { useState } from "react";
import { Region } from "../constants";

interface SearchBarProps {
  onSearch: (search: string) => void;
  onClear: () => void;
  onRegionSelect: (region: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onClear,
  onRegionSelect,
}) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  // Function to handle searching for a country
  const handleSearch = () => {
    if (search.trim()) {
      onSearch(search);
      setSelectedRegion("");
    }
  };

  // Function to handle pressing "Enter" key in the search input
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Function to handle region selection
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const region = event.target.value;
    setSelectedRegion(region);
    onRegionSelect(region);
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
        <select
          className="select-region"
          data-testid="select-region"
          value={selectedRegion}
          onChange={handleRegionChange}
          aria-label="Select a region"
        >
          <option value={""} disabled>
            Select Region
          </option>
          <option value={Region.All}>All</option>
          <option value={Region.Africa}>Africa</option>
          <option value={Region.Americas}>Americas</option>
          <option value={Region.Asia}>Asia</option>
          <option value={Region.Europe}>Europe</option>
        </select>
        <button
          className="clear-btn"
          aria-label="Clear result"
          data-testid="clear-all-button"
          onClick={() => {
            setSearch("");
            setSelectedRegion("");
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
