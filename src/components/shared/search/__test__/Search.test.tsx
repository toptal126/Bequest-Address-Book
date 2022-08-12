// import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../../Search";

describe("Search", () => {
  test("Search component value", () => {
    render(<Search onSubmit={() => {}} />);
    const inputElement = screen.getByTestId("search-field");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement).toHaveAttribute("value", "test");
  });

  test("Should get correct value when search component submit fire", () => {
    let value = "";
    const onSubmit = (v: string) => {
      value = v;
    };
    render(<Search onSubmit={onSubmit} />);
    const inputElement = screen.getByTestId("search-field");
    fireEvent.change(inputElement, { target: { value: "test" } });
    const buttonElement = screen.getByTestId("search-field-button");
    fireEvent.click(buttonElement);
    expect(value).toBe("test");
  });
});
