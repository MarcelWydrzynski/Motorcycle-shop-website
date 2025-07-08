// ProductCard.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../../components/Wishlistpage/WishlistProductCard";
import { BrowserRouter } from "react-router-dom";

const mockMotorcycle = {
  brand: "Yamaha",
  model: "MT-07",
  horsepower: 75,
  cc: 689,
  category: "Naked",
  image: "/images/yamaha-mt07.png",
  performance: { weight: "184 kg" },
  short_description: "Lightweight, agile and powerful mid-size naked bike.",
  price: "$7,699",
};

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("ProductCard", () => {
  it("renders motorcycle details correctly", () => {
    renderWithRouter(<ProductCard motorcycle={mockMotorcycle} toggleWishlisted={vi.fn()} updateCart={vi.fn()} />);

    expect(screen.getByText("Yamaha MT-07")).toBeInTheDocument();
    expect(screen.getByText("75 hp")).toBeInTheDocument();
    expect(screen.getByText("689cc")).toBeInTheDocument();
    expect(screen.getByText("184 kg")).toBeInTheDocument();
    expect(screen.getByText("Lightweight, agile and powerful mid-size naked bike.")).toBeInTheDocument();
    expect(screen.getByText("$7,699")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /yamaha mt-07/i })).toBeInTheDocument();
  });


  it("calls updateCart and toggleWishlisted when cart button is clicked", () => {
    const toggleWishlisted = vi.fn();
    const updateCart = vi.fn();

    renderWithRouter(<ProductCard motorcycle={mockMotorcycle} toggleWishlisted={toggleWishlisted} updateCart={updateCart} />);

    const cartButton = screen.getAllByRole("button")[1];
    fireEvent.click(cartButton);
    expect(updateCart).toHaveBeenCalledWith(mockMotorcycle);
    expect(toggleWishlisted).toHaveBeenCalledWith(mockMotorcycle);
  });

  it("has correct link to the motorcycle details page", () => {
    renderWithRouter(<ProductCard motorcycle={mockMotorcycle} toggleWishlisted={vi.fn()} updateCart={vi.fn()} />);

    const link = screen.getByRole("link", { name: /view motorcycle/i });
    expect(link).toHaveAttribute("href", "/products/yamaha-mt-07");
  });

  it("has correct hover class for delete and cart buttons", () => {
    renderWithRouter(<ProductCard motorcycle={mockMotorcycle} toggleWishlisted={vi.fn()} updateCart={vi.fn()} />);

    const deleteBtn = screen.getByTestId("delete-btn");
    const cartBtn = screen.getByTestId("cart-btn");

    expect(deleteBtn).toHaveClass("group-hover:bg-white");
    expect(cartBtn).toHaveClass("group-hover:bg-white");
  });
});
