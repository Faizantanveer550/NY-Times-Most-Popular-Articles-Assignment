import { render } from "@testing-library/react";
import Grid from "./grid";

test("Snapshot Testa", () => {
  const { asFragment } = render(<Grid columnDefs={[]} rowData={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
