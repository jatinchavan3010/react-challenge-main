import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { describe, it, expect, vi } from "vitest"; // Import from vitest
import { Region } from "../constants";

describe("SearchBar Component", () => {
  it("renders search input and buttons", () => {
    render(
      <SearchBar
        onSearch={() => {}}
        onRegionSelect={() => {}}
        onClear={() => {}}
      />
    );

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("select-region")).toBeInTheDocument();
    expect(screen.getByTestId("clear-all-button")).toBeInTheDocument();
  });

  it("calls onSearch with input value when search button is clicked", () => {
    const mockOnSearch = vi.fn();

    render(
      <SearchBar
        onSearch={mockOnSearch}
        onRegionSelect={() => {}}
        onClear={() => {}}
      />
    );

    const searchInput = screen.getByTestId("search-input");
    const searchButton = screen.getByTestId("search-button");

    // Change the input value
    fireEvent.change(searchInput, { target: { value: "Canada" } });

    // Assert the search input is enabled
    expect(searchInput).toBeEnabled();

    // Click the search button
    fireEvent.click(searchButton);

    // Verify that onSearch was called with the correct value
    expect(mockOnSearch).toHaveBeenCalledWith("Canada");
  });

  it("disables the search button when input is empty", () => {
    render(
      <SearchBar
        onSearch={() => {}}
        onRegionSelect={() => {}}
        onClear={() => {}}
      />
    );

    expect(screen.getByTestId("search-button")).toBeDisabled();
  });

  it("renders selected region country cards", () => {
    const mockOnRegionSelect = vi.fn();

    render(
      <SearchBar
        onSearch={() => {}}
        onRegionSelect={mockOnRegionSelect}
        onClear={() => {}}
      />
    );

    const regionSelect = screen.getByTestId("select-region");

    fireEvent.change(regionSelect, { target: { value: Region.Asia } });

    // Assert that OnRegionSelect was called and Asia region was rendered
    expect(mockOnRegionSelect).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Asia")).toBeInTheDocument();
  });
});
