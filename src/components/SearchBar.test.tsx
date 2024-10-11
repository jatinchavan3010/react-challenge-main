import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { describe, it, expect, vi } from "vitest"; // Import from vitest

describe("SearchBar Component", () => {
  it("renders search input and buttons", () => {
    const mockOnSearch = vi.fn();
    const mockOnShowAll = vi.fn();
    const mockOnClear = vi.fn();

    render(
      <SearchBar
        onSearch={mockOnSearch}
        onShowAll={mockOnShowAll}
        onClear={mockOnClear}
      />
    );

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("show-all-button")).toBeInTheDocument();
    expect(screen.getByTestId("clear-all-button")).toBeInTheDocument();
  });

  it("calls onSearch with input value when search button is clicked", () => {
    const mockOnSearch = vi.fn();

    render(
      <SearchBar
        onSearch={mockOnSearch}
        onShowAll={() => {}}
        onClear={() => {}}
      />
    );

    const searchInput = screen.getByTestId("search-input");
    const searchButton = screen.getByTestId("search-button");

    // Change the input value
    fireEvent.change(searchInput, { target: { value: "Canada" } });

    // Assert the input is enabled
    expect(searchInput).toBeEnabled();

    // Click the search button
    fireEvent.click(searchButton);

    // Verify that onSearch was called with the correct value
    expect(mockOnSearch).toHaveBeenCalledWith("Canada");
  });

  it("disables the search button when input is empty", () => {
    render(
      <SearchBar onSearch={() => {}} onShowAll={() => {}} onClear={() => {}} />
    );

    expect(screen.getByTestId("search-button")).toBeDisabled();
  });

  it("calls onShowAll when Show All button is clicked", () => {
    const mockOnShowAll = vi.fn();

    render(
      <SearchBar
        onSearch={() => {}}
        onShowAll={mockOnShowAll}
        onClear={() => {}}
      />
    );

    // Click the Show All button
    fireEvent.click(screen.getByTestId("show-all-button"));

    // Assert that onShowAll was called
    expect(mockOnShowAll).toHaveBeenCalledTimes(1);
  });
});
