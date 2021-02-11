import React from "react";
import styled from "styled-components";
import { COLORS } from "../materials/colors";
import { Button } from "./Button";
import Portal from "./Portal";
import { Stack } from "../layout/Stack";

type ModalProps = {
  disclosure: any;
  isOpen: boolean;
  disabled?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContent = styled(Stack)`
  position: absolute;
  top: 0;
  background: ${COLORS.black};
  color: white;
  height: 100%;
  width: 70%;
  padding: 16px;
  box-shadow: 4px 0px 11px -5px rgba(0, 0, 0, 0.75);
`;

export const Modal: React.FC<ModalProps> = ({
  disclosure,
  isOpen,
  setIsOpen,
  children,
  disabled = false,
}) => {
  return (
    <>
      <Button
        disabled={disabled}
        variant="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {disclosure}
      </Button>
      {isOpen && (
        <Portal>
          <ModalContent>{children}</ModalContent>
        </Portal>
      )}
    </>
  );
};
