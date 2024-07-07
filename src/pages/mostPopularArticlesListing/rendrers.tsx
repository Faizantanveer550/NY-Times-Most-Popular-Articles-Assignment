import { ICellRendererParams } from "ag-grid-community";
import { Button } from "antd";

export const ActionRenderer = (props: ICellRendererParams): JSX.Element => {
  return (
    <Button
      href={props?.value}
      target="_blank"
      type="dashed"
      data-testid={`action-renderer-${props?.node?.rowIndex}`}
    >
      View Article
    </Button>
  );
};
