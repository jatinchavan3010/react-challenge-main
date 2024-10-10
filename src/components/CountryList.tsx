import CountryCard, { Country } from "./CountryCard";

type CountryListProps = {
  countryList: Country[];
};

const CountryList: React.FC<CountryListProps> = ({ countryList }) => {
  return (
    <section className="countries-section">
      {countryList.map((country: Country) => {
        return <CountryCard country={country} />;
      })}
    </section>
  );
};

export default CountryList;
