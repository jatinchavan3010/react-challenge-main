export interface Country {
  name: {
    common: string;
  };
  capital: string;
  region: string;
  flags: {
    svg: string;
    alt: string;
  };
}

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="country-card" role="article">
      <div className="country-flag-image">
        <img src={`${country.flags.svg}`} alt={country.flags.alt} />
      </div>

      <section className="country-info">
        <h3 className="country-name">{country.name.common}</h3>
        <p className="country-capital">
          <b>Capital:</b> {country.capital}
        </p>
        <p className="country-region">
          <b>Region:</b> {country.region}
        </p>
      </section>
    </div>
  );
};

export default CountryCard;
