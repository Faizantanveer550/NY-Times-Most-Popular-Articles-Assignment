import { render, screen } from "@testing-library/react";
import Layout from "./layout";

test("Snapshot Test", () => {
  const children = <p>This is the content.</p>;
  const { asFragment } = render(<Layout>{children}</Layout>);
  expect(asFragment()).toMatchSnapshot();
});

test("Layout renders its children", () => {
  const children = <p>This is the content.</p>;
  render(<Layout>{children}</Layout>);

  expect(screen.getByText("This is the content.")).toBeInTheDocument();
});

test("Layout renders an empty container with no children", () => {
  render(<Layout />);

  expect(screen.getByTestId("layout-with-out-child")).toBeInTheDocument(); // Assuming LayoutStyled uses 'region' for layout
});
