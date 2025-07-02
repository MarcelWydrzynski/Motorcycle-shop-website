import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import ContactForm from "../../components/Contactpage/ContactForm";

describe("ContactForm", () => {
  it("should render all input fields and the submit button render correctly.", () => {
    render(<ContactForm />);

    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Phone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Leave a comment...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("allows typing in all input fields", async () => {
    render(<ContactForm />);
    await userEvent.type(screen.getByPlaceholderText("Your name"), "Alice");
    await userEvent.type(screen.getByPlaceholderText("Your email"), "alice@example.com");
    await userEvent.type(screen.getByPlaceholderText("Your Phone"), "1234567890");
    await userEvent.type(screen.getByPlaceholderText("Leave a comment..."), "Hello");

    expect(screen.getByPlaceholderText("Your name")).toHaveValue("Alice");
    expect(screen.getByPlaceholderText("Your email")).toHaveValue("alice@example.com");
    expect(screen.getByPlaceholderText("Your Phone")).toHaveValue(1234567890);
    expect(screen.getByPlaceholderText("Leave a comment...")).toHaveValue("Hello");
  });
  
  it("clicks the submit button without crashing", async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));
  });
});
