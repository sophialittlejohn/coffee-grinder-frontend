import React from "react";
import { useMutation } from "@apollo/client";
import { Button } from "../../elements/Button";
import { Stack } from "../../layout/Stack";
import { Text } from "../../elements/Text";
import { UPDATE_COFFEE_MUTATION } from "../Coffee/queries";
import { GrindAmount } from "../Grind/GrindAmount";
import { GrindSize } from "../Grind/GrindSize";
import { useConfiguration } from "./useConfiguration";
import { ConfigureStatus } from "./ConfigureStatus";
import { useRouter } from "next/router";

type ConfigureFormProps = {
  coffeeId: number;
};

export const ConfigureForm: React.FC<ConfigureFormProps> = ({ coffeeId }) => {
  const [updateCoffeeMutation] = useMutation<any>(UPDATE_COFFEE_MUTATION);
  const { amount, size, status } = useConfiguration();
  const { push } = useRouter();

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    await updateCoffeeMutation({
      variables: {
        id: Number(coffeeId),
        status,
        amount: String(amount || ""),
        size: String(size || ""),
      },
    });
    push("/coffee");
  };

  return (
    <Stack gap="24px">
      <Stack gap="4px">
        <Text size="12px" bold color="orange">
          Add configuration
        </Text>
        <GrindSize />
        <GrindAmount />
      </Stack>
      <Stack gap="8px">
        <Text size="12px" bold color="orange">
          Rating
        </Text>
        <ConfigureStatus />
      </Stack>
      <Button
        onClick={handleSubmit}
        variant="secondary"
        disabled={parseFloat(amount) < 0 || parseInt(size) < 0}
      >
        Submit
      </Button>
    </Stack>
  );
};
