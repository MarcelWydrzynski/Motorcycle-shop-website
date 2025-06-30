import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import CategoryCard from "../../components/Homepage/CategoryCard";
import { MemoryRouter } from "react-router-dom";

describe("CategoryCard", () => {
  it("should render the card with the correct name & correct img path", () => {
    render(
      <MemoryRouter>
        <CategoryCard img="dummy-path" text="testCategory" />
      </MemoryRouter>
    );

    const cardText = screen.getByText(/testCategory/i);
    const cardImage = cardText.closest("a")?.querySelector("img");

    expect(cardText).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveAttribute("src", "dummy-path");
  });

  it("should render null if text is 'None Selected'", () => {
    const { container } = render(
      <MemoryRouter>
        <CategoryCard img="dummy-path" text="None Selected" />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeNull();
  });
});
