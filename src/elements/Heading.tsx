import React from "react";
import styled, { CSSObject } from "styled-components";
import { COLORS, Colors } from "../materials/colors";

const commomStyles = (props: HeadingProps) => {
  return `
    font-weight: ${props.fontWeight || "bold"};
    color: ${COLORS[props.color || "black"]};
    font-size: ${props.size || "auto"};
`;
};

type HeadingProps = {
  fontWeight?: "bold" | "regular" | "thin";
  color?: Colors;
  size?: string;
  styles?: CSSObject;
};

export const H1: React.FC<HeadingProps> = ({
  children,
  color = "black",
  ...props
}) => {
  return (
    <StyledH1 color={color} {...props}>
      {children}
    </StyledH1>
  );
};

const StyledH1 = styled.h1<HeadingProps>`
  margin-top: 0;
  margin-bottom: 0;
  ${(props) => commomStyles(props)};
`;

export const H2: React.FC<HeadingProps> = ({
  children,
  color = "black",
  ...props
}) => {
  return (
    <StyledH2 color={color} {...props}>
      {children}
    </StyledH2>
  );
};

const StyledH2 = styled.h2<HeadingProps>`
  margin-top: 0;
  margin-bottom: 0;
  ${(props) => commomStyles(props)};
  ${(props) => props.styles};
`;

export const H3: React.FC<HeadingProps> = ({
  children,
  color = "black",
  ...props
}) => {
  return (
    <StyledH3 color={color} {...props}>
      {children}
    </StyledH3>
  );
};

const StyledH3 = styled.h3<HeadingProps>`
  margin-top: 0;
  margin-bottom: 0;
  ${(props) => commomStyles(props)};
  ${(props) => props.styles};
`;
