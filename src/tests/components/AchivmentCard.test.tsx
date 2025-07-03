import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import AchivmentCard from "../../components/Aboutuspage/AchivmentCard";

describe("AchivmentCard", () => {
  const validProps = {
    img: "test-img.png",
    number: 20,
    text: "Test achievement",
  };

  it("does not render if `img` is missing", () => {
    const { container } = render(<AchivmentCard number={validProps.number} text={validProps.text} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("does not render if `number` is missing", () => {
    const { container } = render(<AchivmentCard img={validProps.img} text={validProps.text} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("does not render if `text` is missing", () => {
    const { container } = render(<AchivmentCard img={validProps.img} number={validProps.number} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders correctly when all props are present", () => {
    const { getByText, getByAltText } = render(<AchivmentCard {...validProps} />);
    expect(getByAltText("test-img.png")).toBeInTheDocument();
    expect(getByText("20k")).toBeInTheDocument();
    expect(getByText("Test achievement")).toBeInTheDocument();
  });
});
