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
    <div className="country-card" role="article" data-testid="country-card">
      <div className="country-flag-image">
        <img
          src={`${country.flags.svg}`}
          alt={country.flags.alt}
          loading="lazy"
        />
      </div>

      <section className="country-info">
        <h3 className="country-name" data-testid="country-name">
          {country.name.common}
        </h3>
        <p className="country-capital" data-testid="country-capital">
          <b>Capital:</b> {country.capital}
        </p>
        <p className="country-region" data-testid="country-region">
          <b>Region:</b> {country.region}
        </p>
      </section>
    </div>
  );
};

export default CountryCard;
