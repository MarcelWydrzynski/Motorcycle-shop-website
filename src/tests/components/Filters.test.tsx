import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filters from "../../components/Filters";
import { describe, it, expect } from "vitest";

describe("Filters component", () => {
  it("resets filters when clicking the Reset Filters button", async () => {
    render(<Filters />);
    const user = userEvent.setup();

    const resetButton = screen.getByRole("button", { name: /reset filters/i });

    await user.click(resetButton);

    expect(screen.getByLabelText(/category/i)).toHaveValue("None Selected");
    expect(screen.getByLabelText(/brand/i)).toHaveValue("None Selected");
    expect(screen.getByLabelText(/price/i)).toHaveValue("None Selected");
  });
});
