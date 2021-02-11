import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import styled from "styled-components";
import { Button } from "../../elements/Button";
import { Chip } from "../../elements/Chip";
import { H3 } from "../../elements/Heading";
import { Inline } from "../../layout/Inline";
import { Stack } from "../../layout/Stack";
import { Text } from "../../elements/Text";
import { COLORS } from "../../materials/colors";
import { Coffee } from "../Coffee/types";
import { ConfigureHistory } from "./ConfigureHistory";

const StyledCardContainer = styled(Stack)`
  min-width: 343px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 16px;
  padding-left: 30px;
  background-color: ${COLORS.white};
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

type ConfigureCardProps = {
  coffee: Coffee;
};

export const ConfigureCard: React.FC<ConfigureCardProps> = ({ coffee }) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <StyledCardContainer gap="16px">
      <Inline justifyContent="space-between" alignItems="center">
        <H3>{coffee.name}</H3>
        <Chip size="small">
          {coffee?.configurations[0]?.status
            .toLocaleLowerCase()
            .replace("_", " ") || "none"}
        </Chip>
      </Inline>
      <StyledGrid>
        <div>
          <Text>Grind size</Text>
          <Text>Amount</Text>
        </div>
        <div>
          <Text color="black">{coffee?.configurations[0]?.size || 0}</Text>
          <Text>{coffee?.configurations[0]?.amount || 0} sec</Text>
        </div>
      </StyledGrid>
      <Inline gap="4px">
        <Text color="blue" size="12px">
          See history
        </Text>
        <Button
          padding="0px"
          variant="icon"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? (
            <ChevronUp size={20} color={COLORS.black} />
          ) : (
            <ChevronDown size={20} color={COLORS.black} />
          )}
        </Button>
      </Inline>
      {showHistory && <ConfigureHistory history={coffee?.configurations} />}
    </StyledCardContainer>
  );
};
