import { cleanup, render } from "@testing-library/react";
import ProductGridSection from "../Sections/ProductGridSection";
import "@testing-library/jest-dom";

afterEach(cleanup); //resets after each it-part

it("renders like it should", () => {
  const div = document.createElement("div");
  render(<ProductGridSection />, div);
});

it("Renders the title with prop", () => {
  const { getByTestId } = render(<ProductGridSection title='Testing Title' />);

  const value = getByTestId("title");

  expect(value).toHaveTextContent("Testing Title");
});

it("Renders the title with prop again", () => {
  const { getByTestId } = render(
    <ProductGridSection title='Another Test To Confirm' />
  );

  const value = getByTestId("title");

  expect(value).toHaveTextContent("Another Test To Confirm");
});
