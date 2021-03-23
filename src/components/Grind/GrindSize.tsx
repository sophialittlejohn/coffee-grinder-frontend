import React from "react";
import { ArrowDownCircleFill, ArrowUpCircleFill } from "react-bootstrap-icons";
import styled from "styled-components";
import { Button } from "../../elements/Button";
import { Input } from "../../elements/Input";
import { Text } from "../../elements/Text";
import { useConfiguration } from "../Configure/useConfiguration";

// TODO: consolidate with grindAmount and rename to configure

const StyledGrid = styled.div`
  width: 100%;
  padding: 0 12px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
`;


export const GrindSize: React.FC = () => {
  const { size, configure } = useConfiguration();

  const handleUpdateGrind = (type: "up" | "down") => {
    let sizeAsNumber = parseInt(size);
    if (size === "" || size === undefined) {
      sizeAsNumber = 0;
    }
    const newSize = type === "up" ? sizeAsNumber + 1 : sizeAsNumber - 1;
    configure({ type: "size", value: `${newSize}` });
  };

  const handleInputGrind = (newValue: string) => {
    configure({ type: "size", value: newValue });
  };

  return (
    <StyledGrid>
      <Text>Grind size</Text>
      <Input
        isInline
        label=""
        value={size}
        type="text"
        width="60px"
        onChange={(newValue) => handleInputGrind(newValue)}
        errorMessage={parseInt(size) < 0 ? "Invalid value" : undefined}
      />
      <Button variant="icon" onClick={() => handleUpdateGrind("down")}>
        <ArrowDownCircleFill size={28} />
      </Button>
      <Button variant="icon" onClick={() => handleUpdateGrind("up")}>
        <ArrowUpCircleFill size={28} />
      </Button>
    </StyledGrid>
  );
};
