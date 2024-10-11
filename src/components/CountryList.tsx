import { useMemo } from "react";
import CountryCard, { Country } from "./CountryCard";

type CountryListProps = {
  countryList: Country[];
};

const CountryList: React.FC<CountryListProps> = ({ countryList }) => {
  const renderedCountries = useMemo(() => {
    return countryList.map((country) => (
      <CountryCard key={country.name.common} country={country} />
    ));
  }, [countryList]);

  return (
    <>
      {countryList.length ? (
        <section className="countries-section" data-testid="country-list">
          {renderedCountries}
        </section>
      ) : (
        <p className="no-search-message" data-testid="no-search-message">
          Please search for a country!
        </p>
      )}
    </>
  );
};

export default CountryList;
