import styled from "styled-components";
import { Stack } from "../../layout/Stack";
import { Text } from "../../elements/Text";
import { Coffee } from "../Coffee/types";
import { ConfigureCard } from "./ConfigureCard";
import { ConfigureForm } from "./ConfigureForm";
import { ConfigurationProvider } from "./useConfiguration";

const StyledConfigureContainer = styled(Stack)`
  max-width: 450px;
  margin: 0 auto;
`;

type ConfigureProps = {
  coffee: Coffee;
};

export const Configure: React.FC<ConfigureProps> = ({ coffee }) => {
  return (
    <StyledConfigureContainer gap="24px">
      <Stack gap="0">
        <Text size="12px" bold color="orange">
          Last configuration
        </Text>
        <ConfigureCard coffee={coffee} />
      </Stack>
      <ConfigurationProvider
        amount={Number(coffee?.configurations[0]?.amount) || 0}
        size={Number(coffee?.configurations[0]?.size) || 0}
      >
        <ConfigureForm coffeeId={coffee.id} />
      </ConfigurationProvider>
    </StyledConfigureContainer>
  );
};
