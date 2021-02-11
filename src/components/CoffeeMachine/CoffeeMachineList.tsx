import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Text } from "../../elements/Text";
import { Button } from "../../elements/Button";
import { H2 } from "../../elements/Heading";
import { StyledLi, StyledUl } from "../../elements/List";
import { Stack } from "../../layout/Stack";
import { useUserContext } from "../../lib/userContext";
import { COFFEE_MACHINE_LIST_QUERY } from "./queries";
import { CoffeeMachineQuery } from "./types";

export const CoffeeMachineList: React.FC = () => {
  const { updateUser } = useUserContext();
  const { push } = useRouter();

  const handleSelect = async (id: number) => {
    await updateUser({ primaryMachine: Number(id) });
    push("/coffee");
  };

  const { data, error, loading, refetch } = useQuery<CoffeeMachineQuery>(
    COFFEE_MACHINE_LIST_QUERY
  );

  useEffect(() => {
    if (typeof refetch == "function") {
      refetch();
    }
  }, [refetch]);

  if (error) return <Text>{error.message}</Text>;
  if (loading) return <Text>Loading</Text>;
  if (data && data.coffeeMachines.length > 0)
    return (
      <>
        <H2>My machines</H2>
        <StyledUl>
          {data.coffeeMachines.map((machine) => {
            return (
              <Button
                key={machine.id}
                variant="ghost"
                onClick={() => handleSelect(machine.id)}
              >
                <StyledLi>
                  <Stack>
                    <Text>{machine.name}</Text>
                    <Text>{machine.brand}</Text>
                    <Text>{machine.code}</Text>
                  </Stack>
                </StyledLi>
              </Button>
            );
          })}
        </StyledUl>
      </>
    );
  else return null;
};
