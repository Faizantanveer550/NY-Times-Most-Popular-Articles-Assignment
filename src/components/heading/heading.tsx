import { HeadingPropsStyled } from "./heading.styles";
import { HeadingProps } from "./heading.types";

const Heading = ({ title = "Unnamed Heading" }: HeadingProps) => {
  return <HeadingPropsStyled className="heading">{title}</HeadingPropsStyled>;
};

export default Heading;
