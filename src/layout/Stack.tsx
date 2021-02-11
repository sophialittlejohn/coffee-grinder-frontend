import React from "react";
import styled, { CSSObject } from "styled-components";

interface StackProps {
  alignItems?: "center" | "baseline" | "flex-end";
  justifyContent?: "center" | "flex-end" | "space-between" | "space-evenly";
  gap?: "0" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "46px";
  marginOnLastChild?: boolean;
  styles?: CSSObject;
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  & > *:nth-child(n) {
    margin-top: 0 !important;
    margin-bottom: ${({ gap }) => (gap ? gap : "0")};
  }

  ${(props) =>
    !props.marginOnLastChild &&
    `
  & > *:last-child {
    margin-bottom: 0;
  }
  `}
  ${(props) => props.styles}
`;

export const Stack: React.FC<StackProps> = ({ children, ...props }) => {
  return <StyledStack {...props}>{children}</StyledStack>;
};
