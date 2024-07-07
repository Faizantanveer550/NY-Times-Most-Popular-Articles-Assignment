import "@testing-library/jest-dom/extend-expect"; // Optional import for extended matchers
import { render, screen } from "@testing-library/react";
import Heading from "./heading";

test("Snapshot Test", () => {
  const title = "My Heading";

  const { asFragment } = render(<Heading title={title} />);
  expect(asFragment()).toMatchSnapshot();
});

test("Heading renders the title prop", () => {
  const title = "My Heading";
  render(<Heading title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("Heading renders default title when no prop is provided", () => {
  render(<Heading />); // No title prop

  expect(screen.getByText("Unnamed Heading")).toBeInTheDocument(); // Adjust default text as needed
});

test("Heading applies the correct styles", () => {
  const title = "Styled Heading";
  render(<Heading title={title} />);

  // Assuming the styled component adds a class like 'heading'
  expect(screen.getByText(title)).toHaveClass("heading");
});
