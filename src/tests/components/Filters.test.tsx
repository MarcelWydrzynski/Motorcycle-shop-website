import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filters from "../../components/Filters";
import { describe, it, expect, vi } from "vitest";

describe("Filters component", () => {
  it("resets filters when clicking the visible Reset Filters button", async () => {
    render(<Filters />);
    const user = userEvent.setup();

    // Only select visible buttons with the matching accessible name
    const resetButton = screen.getByRole("button", {
      name: /reset filters/i,
      hidden: false, // <-- this is important!
    });

    await user.click(resetButton);

    // Assert filters are reset to defaults
    expect(screen.getByLabelText(/select your category/i)).toHaveValue("None Selected");
    expect(screen.getByLabelText(/select your brand/i)).toHaveValue("None Selected");
    expect(screen.getByLabelText(/select your price/i)).toHaveValue("None Selected");
  });
});
