import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("renders SearchBar and search country message on first load", () => {
    render(<App />);

    expect(screen.getByTestId("search-section")).toBeInTheDocument();
    expect(screen.getByTestId("no-search-message")).toBeInTheDocument();
  });

  it("displays loading state when fetching countries", async () => {
    render(<App />);

    // Input search term and trigger search
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Canada" } });
    fireEvent.click(screen.getByTestId("search-button"));

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("displays error message on fetch failure", async () => {
    render(<App />);

    // Mock the fetch function to simulate an error
    global.fetch = vi.fn(() =>
      Promise.reject(new Error("Failed to fetch countries!"))
    );

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "-999" } });

    fireEvent.click(screen.getByTestId("search-button"));

    await waitFor(() => {
      expect(
        screen.getByText(/failed to fetch countries/i)
      ).toBeInTheDocument();
    });
  });
});
