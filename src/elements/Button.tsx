import React from "react";
import styled, { CSSObject } from "styled-components";
import { COLORS } from "../materials/colors";
import { Text } from "./Text";

type ButtonProps = {
  tabIndex?: number;
  variant?: "primary" | "secondary" | "icon" | "ghost";
  round?: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  padding?: string;
  styles?: CSSObject;
  loading?: boolean;
};

const BaseButton = styled.button<ButtonProps>`
  border-radius: 4px;
  padding: ${({ padding }) => padding || "8px 0"};
  font-size: 16px;
  border-color: transparent;

  &:active,
  &:focus {
    outline: 1px solid red;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background-color: #c4c4c4;
  color: ${COLORS.black};
  ${(props) => props.styles}
`;

const SecondaryButton = styled(BaseButton)`
  color: #432b1b;
  font-weight: bold;
  background-color: ${COLORS.champain};
  ${(props) => props.styles};
`;

const GhostButton = styled.button<ButtonProps>`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  font-size: 16px;
  ${(props) => props.styles};
`;

const IconButton = styled(BaseButton)`
  border: transparent;
  line-height: 0;
  background-color: transparent;

  &:disabled {
    border: none;
    color: inherit;
    pointer-events: none;
  }
  ${(props) => props.styles};
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  tabIndex = 0,
  loading = false,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClick(e);
  };

  const joinedProps = { tabIndex, disabled, onClick: handleClick, ...props };

  switch (props.variant) {
    case "primary":
      return (
        <PrimaryButton {...joinedProps}>
          {loading ? <Text color="black">Loading...</Text> : children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton {...joinedProps}>
          {loading ? <Text color="black">Loading...</Text> : children}
        </SecondaryButton>
      );
    case "icon":
      return (
        <IconButton {...joinedProps}>
          {loading ? <Text color="black">Loading...</Text> : children}
        </IconButton>
      );
    case "ghost":
      return (
        <GhostButton {...joinedProps}>
          {loading ? <Text color="black">Loading...</Text> : children}
        </GhostButton>
      );
    default:
      return <BaseButton {...joinedProps}>{children}</BaseButton>;
  }
};
