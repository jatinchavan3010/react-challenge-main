export type Country = {
  name: {
    common: string;
  };
  capital: string;
  region: string;
  flags: {
    svg: string;
    alt: string;
  };
};

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="country">
      <img src={`${country.flags.svg}`} className="country-flag-image" />
      <section className="country-info">
        <h2 className="country-name">{country.name.common}</h2>
        <p className="country-capital">Capital: {country.capital}</p>
        <p className="country-region">Region: {country.region}</p>
      </section>
    </div>
  );
};

export default CountryCard;
