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

type GrindSizeProps = {};

export const GrindSize: React.FC<GrindSizeProps> = () => {
  const { size, configure } = useConfiguration();

  const handleUpdateGrind = (type: "up" | "down") => {
    const newSize = type === "up" ? size + 1 : size - 1;
    configure("size", newSize);
  };

  const handleInputGrind = (newValue: number) => {
    configure("size", Number(newValue) || 0);
  };

  return (
    <StyledGrid>
      <Text>Grind size</Text>
      <Input
        isInline
        size="small"
        label=""
        value={size}
        type="number"
        width="60px"
        onChange={(newValue) => handleInputGrind(newValue as number)}
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
