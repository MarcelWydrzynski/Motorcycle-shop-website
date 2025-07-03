import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import EmployeeCard from "../../components/Aboutuspage/EmployeeCard";

const testProps = {
  img: "test-img-path.png",
  position: "test-ceo",
  name: "Marcel Test",
};

describe("EmployeeCard", () => {
  it("should render all the data passed in props correctly", () => {
    render(<EmployeeCard img={testProps.img} position={testProps.position} name={testProps.name} />);

    const image = screen.getByAltText(`Employee ${testProps.name} profile picture`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-img-path.png");

    const nameElement = screen.getByText("Marcel Test");
    expect(nameElement).toBeInTheDocument();

    const positionElement = screen.getByText("test-ceo");
    expect(positionElement).toBeInTheDocument();
  });

  it("should render null if img prop is missing", () => {
    const { container } = render(<EmployeeCard position={testProps.position} name={testProps.name} />);
    expect(container).toBeEmptyDOMElement();
  });
});
