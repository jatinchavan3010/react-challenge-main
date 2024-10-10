/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import { Country } from "./components/CountryCard";
import ErrorCard from "./components/ErrorCard";

const BASE_URL = "https://restcountries.com/v3.1";

const App = () => {
  const [countryList, setCountryList] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchCountries = async (url: string) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? "No countries found. Please try another search."
            : "Failed to fetch countries!"
        );
      }

      const data = await response.json();
      setCountryList(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (search: string) => {
    fetchCountries(`${BASE_URL}/name/${search}`);
  };

  const handleShowAll = () => {
    fetchCountries(`${BASE_URL}/all`);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} onShowAll={handleShowAll} />
      {loading && <p>Loading...</p>}
      {error && <ErrorCard error={error} />}
      {!loading && !error && <CountryList countryList={countryList} />}
    </>
  );
};

export default App;
