/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import { Country } from "./components/CountryCard";
import ErrorCard from "./components/ErrorCard";
import Loading from "./components/Loading";

const BASE_URL = "https://restcountries.com/v3.1";

interface ErrorState {
  message: string;
  isError: boolean;
}

const App = () => {
  const [countryList, setCountryList] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>({
    message: "",
    isError: false,
  });

  const fetchCountries = async (url: string) => {
    setLoading(true);
    setError({ message: "", isError: false });

    try {
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
        setError({ message: error.message, isError: true });
      } else {
        setError({ message: "An unexpected error occurred.", isError: true });
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

  const clearSearch = () => {
    setCountryList([]);
    setError({
      message: "",
      isError: false,
    });
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        onShowAll={handleShowAll}
        onClear={clearSearch}
      />
      {loading && <Loading />}
      {error.isError && <ErrorCard error={error.message} />}
      {!loading && !error.isError && <CountryList countryList={countryList} />}
    </>
  );
};

export default App;
