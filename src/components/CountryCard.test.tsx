import { render, screen } from "@testing-library/react";
import CountryCard from "./CountryCard";

const mockCountry = {
  name: { common: "Canada" },
  capital: "Ottawa",
  region: "Americas",
  flags: {
    svg: "https://flagcdn.com/w320/ca.png",
    alt: "Flag of Canada",
  },
};

describe("CountryCard Component", () => {
  it("displays country information correctly", () => {
    render(<CountryCard country={mockCountry} />);

    expect(screen.getByTestId("country-card")).toBeInTheDocument();
    expect(screen.getByTestId("country-name")).toHaveTextContent("Canada");
    expect(screen.getByTestId("country-capital")).toHaveTextContent(
      "Capital: Ottawa"
    );
    expect(screen.getByTestId("country-region")).toHaveTextContent(
      "Region: Americas"
    );
    expect(screen.getByAltText("Flag of Canada")).toBeInTheDocument();
    expect(screen.queryByAltText("Flag of Mexico")).not.toBeInTheDocument();
  });
});
