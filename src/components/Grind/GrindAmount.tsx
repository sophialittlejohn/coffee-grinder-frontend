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

export const GrindAmount: React.FC = () => {
  const { amount, configure } = useConfiguration();

  const handleUpdateGrind = (type: "up" | "down") => {
    const floatAmount = parseFloat(amount);
    const newAmount = type === "up" ? floatAmount + 0.5 : floatAmount - 0.5;
    configure({ type: "amount", value: `${newAmount}` });
  };

  const handleInputGrind = (newValue: number) => {
    configure({ type: "amount", value: `${newValue}` });
  };

  return (
    <StyledGrid>
      <Text>Amount</Text>
      <Inline gap="12px" alignItems="center">
        <Input
          width="60px"
          label=""
          value={amount}
          type="number"
          onChange={(newValue) => handleInputGrind(parseFloat(newValue))}
          errorMessage={parseFloat(amount) < 0 ? "Invalid value" : undefined}
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
