/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
function App() {
  const [countryList, setCountryList] = useState<any>([]);

  const handleSearch = (search: string) => {
    fetch(`https://restcountries.com/v3.1/name/${search}`)
      .then((res) => res.json())
      .then((data) => setCountryList(data));
  };

  return (
    <>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <CountryList countryList={countryList} />
    </>
  );
}

export default App;
