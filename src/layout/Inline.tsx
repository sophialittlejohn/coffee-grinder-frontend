import React from "react";
import styled from "styled-components";

interface InlineProps {
  alignItems?: "center" | "baseline";
  justifyContent?: "center" | "flex-end" | "space-between" | "space-evenly";
  gap?: "0" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px";
  marginOnLastChild?: boolean;
}

const StyledInline = styled.div<InlineProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  & > *:nth-child(n) {
    margin-top: 0 !important;
    margin-right: ${({ gap }) => (gap ? gap : "0")} !important;
  }

  ${(props) =>
    !props.marginOnLastChild &&
    `
  & > *:last-child {
    margin-right: 0 !important;
  }
  `}
`;

export const Inline: React.FC<InlineProps> = ({ children, ...props }) => {
  return <StyledInline {...props}>{children}</StyledInline>;
};
