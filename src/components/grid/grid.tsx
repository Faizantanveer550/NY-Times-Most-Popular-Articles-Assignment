import { AgGridReact } from "ag-grid-react";
import { GridProps } from "./grid.types";
import { GridStyled } from "./grid.styles";

const Grid = (props: GridProps) => {
  return (
    <GridStyled>
      <AgGridReact {...props} />;
    </GridStyled>
  );
};

export default Grid;
