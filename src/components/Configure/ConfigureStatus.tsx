import React from "react";
import styled from "styled-components";
import { Inline } from "../../layout/Inline";
import { COLORS } from "../../materials/colors";
import { useConfiguration } from "./useConfiguration";

const StyledChipLabel = styled.label<{ checked: boolean }>`
  background-color: ${COLORS.white};
  font-size: 16px;
  width: 30%;
  border: 1px solid rgba(196, 196, 196, 0.8);
  border-radius: 38px;
  text-align: center;
  padding: 6px;
  position: relative;
  ${({ checked }) =>
    checked
      ? `
    background-color: ${COLORS.orange};
    color: ${COLORS.white};
  `
      : `
    background-color: ${COLORS.white};
    color: ${COLORS.black};
  `}
  }

  &:active,
  &:focus {
    outline: none;
  }

  & > input {
    opacity: 0;
    position: absolute;
  }
`;

type ConfigureStatusProps = {};

export const ConfigureStatus: React.FC<ConfigureStatusProps> = () => {
  const { configure, status } = useConfiguration();

  return (
    <Inline justifyContent="space-evenly">
      <StyledChipLabel checked={"TOO_EARLY" === status}>
        too early
        <input
          type="checkbox"
          value="too early"
          checked={"TOO_EARLY" === status}
          onChange={() => configure("status", "TOO_EARLY")}
        />
      </StyledChipLabel>
      <StyledChipLabel checked={"PERFECT" === status}>
        perfect
        <input
          type="checkbox"
          value="perfect"
          checked={"PERFECT" === status}
          onChange={() => configure("status", "PERFECT")}
        />
      </StyledChipLabel>
      <StyledChipLabel checked={"TOO_LATE" === status}>
        too late
        <input
          type="checkbox"
          value="too late"
          checked={"TOO_LATE" === status}
          onChange={() => configure("status", "TOO_LATE")}
        />
      </StyledChipLabel>
    </Inline>
  );
};
