import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import ProductCard from "../../components/ProductCard";
import { MemoryRouter } from "react-router-dom";
import { Motorcycle } from "../../shared/types";
import generateSlug from "../../hooks/genertateSlug";

const testMotorcycle = {
  id: 1,
  brand: "Honda",
  model: "CBR",
  cc: 1000,
  horsepower: 200,
  category: "sport",
  short_description: "Powerful sport bike",
  long_description: "Longer description here",
  performance: {
    "0-100kph": "3.5",
    topSpeed: "300kph",
    fuelConsumption: "2.5",
    weight: "180kg",
    seatHeight: "4450mm",
    fuelCapacity: "19 litres",
  },
  image: "test-url.jpg",
  price: "$10,000",
};

const testMotorcycleElectric = {
  id: 1,
  brand: "Honda",
  model: "CBR",

  horsepower: 200,
  category: "sport",
  short_description: "Powerful sport bike",
  long_description: "Longer description here",
  performance: {
    "0-100kph": "3.5",
    topSpeed: "300kph",
    fuelConsumption: "2.5",
    weight: "180kg",
    seatHeight: "4450mm",
    fuelCapacity: "19 litres",
  },
  image: "test-url.jpg",
  price: "$10,000",
};
describe("ProductCard", () => {
  it("should redner message the data is not avaialble when motorcycle prop is empty", () => {
    render(
      <MemoryRouter>
        <ProductCard />
      </MemoryRouter>
    );

    const errorMessage = screen.getByText(/error/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders motorcycle data correctly", () => {
    render(
      <MemoryRouter>
        <ProductCard motorcycle={testMotorcycle} />
      </MemoryRouter>
    );

    expect(screen.getByRole("img", { name: /honda cbr/i })).toHaveAttribute("src", "test-url.jpg");
    expect(screen.getByText(/honda cbr/i)).toBeInTheDocument();
    expect(screen.getByText(/200 hp/i)).toBeInTheDocument();
    expect(screen.getByText(/1000cc/i)).toBeInTheDocument();
    expect(screen.getByText(/180kg/i)).toBeInTheDocument();
    expect(screen.getByText(/powerful sport bike/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10,000/i)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/products/honda-cbr");
  });

  it("should render elctric instead of cc when the motorcycle CC is empty "),
    () => {
      render(
        <MemoryRouter>
          <ProductCard motorcycle={testMotorcycleElectric} />
        </MemoryRouter>
      );

      expect(screen.getByText(/electric/i)).toBeInTheDocument();
    };
  it("should render the button `view motorcycle` with the correwct path", () => {
    render(
      <MemoryRouter>
        <ProductCard motorcycle={testMotorcycle} />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /view motorcycle/i });
    expect(button).toBeInTheDocument();

    const parentLink = button.closest("a");
    expect(parentLink).toHaveAttribute("href", `/products/${generateSlug(testMotorcycle.brand, testMotorcycle.model)}`);
  });
});
