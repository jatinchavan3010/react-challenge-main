import { render, screen } from "@testing-library/react";
import CountryList from "./CountryList";

const mockCountries = [
  {
    name: { common: "Canada" },
    capital: "Ottawa",
    region: "Americas",
    flags: {
      svg: "https://flagcdn.com/ca.svg",
      alt: "Flag of Canada",
    },
  },
  {
    name: { common: "Mexico" },
    capital: "Mexico City",
    region: "Americas",
    flags: {
      svg: "https://flagcdn.com/mx.svg",
      alt: "Flag of Mexico",
    },
  },
];

describe("CountryList Component", () => {
  it("renders a no search message when the country list is empty", () => {
    render(<CountryList countryList={[]} />);
    expect(screen.getByTestId("no-search-message")).toBeInTheDocument();
  });

  it("renders the list of countries", () => {
    render(<CountryList countryList={mockCountries} />);

    expect(screen.getByTestId("country-list")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();
    expect(screen.getByText("Mexico")).toBeInTheDocument();
  });
});
