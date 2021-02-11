import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { H2 } from "../../elements/Heading";
import { Input } from "../../elements/Input";
import { Stack } from "../../layout/Stack";
import { useUserContext } from "../../lib/userContext";
import { CREATE_COFFEE_MACHINE } from "./queries";
import { CoffeeMachine } from "./types";

type CreateCoffeeMachine = {
  createCoffeeMachine: CoffeeMachine;
};

export const CoffeeMachineForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");

  const { push } = useRouter();

  const { updateUser } = useUserContext();

  const onCompleted = async (data: CreateCoffeeMachine) => {
    if (data?.createCoffeeMachine && updateUser) {
      await updateUser({ primaryMachine: Number(data.createCoffeeMachine.id) });
      push("/coffee");
    }
  };

  const [createCoffeeMachine] = useMutation<CreateCoffeeMachine>(
    CREATE_COFFEE_MACHINE,
    { onCompleted }
  );

  return (
    <form>
      <H2>Create a new machine</H2>
      <Stack gap="16px">
        <Input
          value={name}
          onChange={(value) => setName(value as string)}
          type="text"
          label="Name"
        />
        <Input
          value={brand}
          onChange={(value) => setBrand(value as string)}
          type="text"
          label="Brand"
        />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            createCoffeeMachine({ variables: { name, brand } });
          }}
        />
      </Stack>
    </form>
  );
};
