import styled from "styled-components";

export const Chip = styled.div<{ size: "small" | "big" }>`
  width: 94px;
  border: 1px solid rgba(196, 196, 196, 0.8);
  border-radius: 38px;
  text-align: center;
  padding: 6px;

  ${({ size }) =>
    size === "small"
      ? `
      padding: 3px;    
  `
      : `
  `}
`;
