import React from "react";
import { CaretDownFill } from "react-bootstrap-icons";
import styled from "styled-components";
import { Text } from "./Text";

type Option = {
  label: string;
  value: number;
};

type SelectProps = {
  options: Option[];
  onChange: (value: number) => void;
  label?: string;
  width?: string;
};

type StyledSelectProps = Pick<SelectProps, "width">;

const StyledSelectWrapper = styled.div`
  position: relative;
`;

const StyledSelect = styled.select<StyledSelectProps>`
  display: flex;
  width: ${({ width }) => width || "75px"};
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  height: 35px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;

  & > p {
    font-weight: 700;
  }
`;

const StyledIcon = styled(CaretDownFill)`
  position: absolute;
  right: 0;
  pointer-events: none;
`;

export const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  label,
  width,
}) => {
  return (
    <StyledSelectWrapper>
      <StyledLabel htmlFor="grams">
        <Text>{label}</Text>
        <StyledSelect
          onChange={(event) => onChange(Number(event.target.value))}
          name="grams"
          id="grams"
          width={width}
        >
          {options.map(({ label, value }) => {
            return (
              <option key={label} value={value}>
                {label}
              </option>
            );
          })}
        </StyledSelect>
        <StyledIcon />
      </StyledLabel>
    </StyledSelectWrapper>
  );
};
