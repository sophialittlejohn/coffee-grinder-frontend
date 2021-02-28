import React, { useEffect, useState } from "react";
import styled, { CSSObject } from "styled-components";
import { COLORS } from "../materials/colors";
import { Text } from "./Text";

const StyledStack = styled.div`
  position: relative;
`;

const StyledInput = styled.input<StyledInputProps>`
  height: 35px;
  width: ${({ width }) => width || "100%"};
  padding: 6px 12px;
  font-size: 18px;
  font-size: ${({ size }) => (size === "large" ? "18px" : "14px")};
  box-sizing: border-box;
  border: ${({ errorMessage }) =>
    errorMessage ? `1px solid ${COLORS.red}` : `1px solid ${COLORS.black}`};
  background: ${COLORS.lightYellow};
  border-radius: 4px;
`;

const StyledLabel = styled.label<StyledLabelProps>`
  font-size: 16px;
  padding-right: 0;
  pointer-events: none;
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.35s ease;
  color: ${COLORS.black};
  background: ${COLORS.lightYellow};

  ${(props) => props.styles}

  ${(props) =>
    props.isFocused &&
    `
    font-size: 13px;
    transform: translateY(-24px) translateX(-5px);
    padding: 0 8px;
    color: ${COLORS.black};
    font-weight: 300;

    & ~ input {
      border: 2px solid ${COLORS.black};
      border-radius: 4px;
    }
  `}
`;

const StyledEndIcon = styled.div`
  position: absolute;
  right: 14px;
  top: 10px;
`;

const StyledError = styled(Text)`
  position: absolute;
`;

type StyledInputProps = Pick<InputProps, "size" | "errorMessage">;
type StyledLabelProps = Pick<InputProps, "size" | "isInline"> & {
  isFocused: boolean;
  styles: CSSObject;
};

interface InputProps {
  label: string;
  type?: "text" | "password" | "number";
  isInline?: boolean;
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  size?: "small" | "large";
  styles?: CSSObject;
  endIcon?: JSX.Element;
  width?: string;
  errorMessage?: String;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  isInline,
  size = "large",
  value,
  styles = {},
  endIcon,
  errorMessage,
  onChange,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!value) {
      setFocused(false);
    } else {
      if (!focused) {
        setFocused(true);
      }
    }
  }, [value]);

  return (
    <>
      <StyledStack>
        <StyledLabel
          htmlFor={label}
          isInline={isInline}
          isFocused={focused}
          styles={styles}
        >
          {label}
        </StyledLabel>
        <StyledInput
          autoComplete="off"
          id={label}
          onClick={(e) => e.stopPropagation()}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={(event) => !event.target.value && setFocused(false)}
          type={type}
          value={value}
          errorMessage={focused ? "" : errorMessage}
          {...props}
        />
        {endIcon && <StyledEndIcon>{endIcon}</StyledEndIcon>}
        {errorMessage ? (
          <StyledError color="red" size="12px">
            {errorMessage}
          </StyledError>
        ) : null}
      </StyledStack>
    </>
  );
};
