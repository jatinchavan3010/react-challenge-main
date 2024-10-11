import React from "react";

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
    <article className="country-card" role="article" data-testid="country-card">
      <figure className="country-flag-image">
        <img
          src={`${country.flags.svg}`}
          alt={country.flags.alt}
          loading="lazy"
        />
      </figure>

      <section className="country-info">
        <h3 className="country-name" data-testid="country-name">
          {country.name.common}
        </h3>
        <p className="country-capital" data-testid="country-capital">
          <strong>Capital:</strong> {country.capital}
        </p>
        <p className="country-region" data-testid="country-region">
          <strong>Region:</strong> {country.region}
        </p>
      </section>
    </article>
  );
};

export default CountryCard;
