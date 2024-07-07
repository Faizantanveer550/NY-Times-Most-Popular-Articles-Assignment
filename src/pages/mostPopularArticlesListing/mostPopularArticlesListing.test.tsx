import { render, screen, fireEvent } from "@testing-library/react";
import MostPopularArticlesListing from "./mostPopularArticlesListing";

test("Snapshot Test", () => {
  const { asFragment } = render(<MostPopularArticlesListing />);
  expect(asFragment()).toMatchSnapshot();
});

test("Heading Renders Correctly", () => {
  render(<MostPopularArticlesListing />);

  expect(screen.getByText("Most Popular Articles")).toBeInTheDocument();
});

test("Avaliable periods renders correctly", () => {
  render(<MostPopularArticlesListing />);

  expect(screen.getByText("Available periods")).toBeInTheDocument();
});

test("Avaliable periods changing correctly", () => {
  render(<MostPopularArticlesListing />);

  const dropdown = screen.getByTestId("period-selection");
  fireEvent.click(dropdown);

  fireEvent.click(screen.getByTestId("Last 7 days"));

  expect(
    screen.getByTestId("Last 7 days-selected").innerText
  ).toBeInTheDocument();
});

test("View article button working correctly", () => {
  render(<MostPopularArticlesListing />);

  const button = screen.getByTestId("action-renderer-1");

  fireEvent.click(button);

  expect(button.hasAttribute("href")).toBe(true);
});
