type Country = {
  name: {
    official: string;
  };
  capital: string;
  region: string;
  flags: {
    svg: string;
    alt: string;
  };
};

type CountryListProps = {
  countryList: Country[];
};

const CountryList: React.FC<CountryListProps> = ({ countryList }) => {
  return (
    <div>
      {countryList.map((country: Country) => {
        return (
          <div>
            {country.name.official}
            <br />
            Capital: {country.capital}
            Region: {country.region}
          </div>
        );
      })}
    </div>
  );
};

export default CountryList;
