import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import SearchFilter from "../../components/SearchFilter";
import userEvent from "@testing-library/user-event";

const testProps = {
  text: "test-text",
  options: ["option-1", "option-2", "option-3"],
  state: "option1",
  stateSetter: vi.fn(),
};

describe("SearchFilter", () => {
  it("should render the label correctly", () => {
    render(<SearchFilter text={testProps.text} options={testProps.options} state={""} stateSetter={testProps.stateSetter} />);

    const label = screen.getByText(testProps.text);
    expect(label).toBeInTheDocument();
  });
  
  it("should render all the options", () => {
    render(<SearchFilter text={testProps.text} options={testProps.options} state={testProps.state} stateSetter={testProps.stateSetter} />);

    testProps.options.forEach((option) => {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    });
  });

  it("should call stateSetter on change", async () => {
    render(<SearchFilter text={testProps.text} options={testProps.options} state={testProps.state} stateSetter={testProps.stateSetter} />);

    const select = screen.getByLabelText("test-text");
    await userEvent.selectOptions(select, "option-2");

    expect(testProps.stateSetter).toHaveBeenCalledWith("option-2");
  });
});
