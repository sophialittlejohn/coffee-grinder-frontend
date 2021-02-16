import { Fragment } from "react";
import styled from "styled-components";
import { H3 } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { Configuration } from "./types";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  max-height: 100px;
  overflow: scroll;
`;

type ConfigureHistoryProps = {
  history: Configuration[];
};

export const ConfigureHistory: React.FC<ConfigureHistoryProps> = ({
  history,
}) => {
  return (
    <StyledGrid>
      <H3 size="14px">Date</H3>
      <H3 size="14px">Size</H3>
      <H3 size="14px">Amount</H3>
      <H3 size="14px">Status</H3>
      {history.map((entry) => (
        <Fragment key={`${entry.id}-${entry.createdAt}`}>
          <Text size="12px">
            {new Date(Number(entry.createdAt)).toLocaleDateString()}
          </Text>
          <Text size="12px">{entry.size}</Text>
          <Text size="12px">{entry.amount}</Text>
          <Text size="12px">
            {entry.status.toLocaleLowerCase().replace("_", " ")}
          </Text>
        </Fragment>
      ))}
    </StyledGrid>
  );
};
