import React from "react";
import { ArrowDownCircleFill, ArrowUpCircleFill } from "react-bootstrap-icons";
import styled from "styled-components";
import { Button } from "../../elements/Button";
import { Inline } from "../../layout/Inline";
import { Input } from "../../elements/Input";
import { Text } from "../../elements/Text";
import { useConfiguration } from "../Configure/useConfiguration";

const StyledGrid = styled.div`
  width: 100%;
  padding: 0 12px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  align-items: center;
`;

type GrindAmountProps = {};

export const GrindAmount: React.FC<GrindAmountProps> = () => {
  const { amount, configure } = useConfiguration();

  const handleUpdateGrind = (type: "up" | "down") => {
    const newAmount = type === "up" ? amount + 0.5 : amount - 0.5;
    configure("amount", newAmount);
  };

  const handleInputGrind = (newValue: number) => {
    configure("amount", Number(newValue) || 0);
  };

  return (
    <StyledGrid>
      <Text>Amount</Text>
      <Inline gap="12px" alignItems="center">
        <Input
          width="60px"
          label=""
          value={amount ? amount.toFixed(1) : 0.0}
          type="number"
          onChange={(newValue) => handleInputGrind(newValue as number)}
        />
        <Text>sec</Text>
      </Inline>
      <Button variant="icon" onClick={() => handleUpdateGrind("down")}>
        <ArrowDownCircleFill size={28} />
      </Button>
      <Button variant="icon" onClick={() => handleUpdateGrind("up")}>
        <ArrowUpCircleFill size={28} />
      </Button>
    </StyledGrid>
  );
};
