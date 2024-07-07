import { render, screen } from "@testing-library/react";
import App, { AppContent } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

test("Snapshot Test", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

// Mocked for testing

jest.mock("./pages/mostPopularArticlesListing", () => ({
  MostPopularArticlesListing: jest.fn(() => <div>Mocked Listing</div>),
}));

const mockQueryClient = new QueryClient();

test("AppContent renders child component", () => {
  render(
    <QueryClientProvider client={mockQueryClient}>
      <AppContent />
    </QueryClientProvider>
  );

  expect(screen.getByText("Mocked Listing")).toBeInTheDocument();
});
