import React from "react";
import styled, { CSSObject } from "styled-components";
import { Colors, COLORS } from "../materials/colors";

type TextProps = {
  color?: Colors;
  italic?: boolean;
  size?: "12px" | "16px" | "18px" | "20px";
  styles?: CSSObject;
  bold?: boolean;
};

const StyledParagraph = styled.p<TextProps>`
  margin: 0;
  color: ${({ color }) => (color ? COLORS[color] : "black")};
  font-style: ${({ italic }) => italic && "italic"};
  line-height: 1.9;
  font-size: ${({ size }) => size || "16px"};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  ${(props) => props.styles}
`;

export const Text: React.FC<TextProps> = ({ children, color, ...props }) => {
  return (
    <StyledParagraph color={color} {...props}>
      {children}
    </StyledParagraph>
  );
};
