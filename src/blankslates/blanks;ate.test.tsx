import { render, screen } from "@testing-library/react";
import { popularActivitiesListingBlanksSlate } from "./popularActivitiesListingBlanksSlate";

test("popularActivitiesListingBlanksSlate renders titles", () => {
  render(popularActivitiesListingBlanksSlate);

  expect(screen.getByText("Title")).toBeInTheDocument();
  expect(screen.getByText("Description")).toBeInTheDocument();
  expect(screen.getByText("Published On")).toBeInTheDocument();
  expect(screen.getByText("Modified On")).toBeInTheDocument();
});
