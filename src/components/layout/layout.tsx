import { LayoutStyled } from "./layout.styles";
import { LayoutProps } from "./layout.types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyled>
      {children ?? <div data-testid="layout-with-out-child" />}
    </LayoutStyled>
  );
};

export default Layout;
