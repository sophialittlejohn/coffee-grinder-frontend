import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { H2 } from "../../elements/Heading";
import { Input } from "../../elements/Input";
import { useUserContext } from "../../lib/userContext";
import { CONNECT_COFFEE_MACHINE } from "./queries";
import { ConnectCoffeeMachineMutation } from "./types";

export const CoffeeMachineLinkForm: React.FC = () => {
  const { updateUser } = useUserContext();
  const [coffeeMachineCode, setCoffeeMachineCode] = useState("");

  const { push } = useRouter();

  const onCompleted = async (data: ConnectCoffeeMachineMutation) => {
    if (data && data.connectCoffeeMachineToUser.id) {
      await updateUser({
        primaryMachine: Number(data.connectCoffeeMachineToUser.id),
      });
      push("/coffee");
    }
  };

  const [connectCoffeeMachine] = useMutation<ConnectCoffeeMachineMutation>(
    CONNECT_COFFEE_MACHINE,
    { onCompleted }
  );

  return (
    <form>
      <H2>Connect to an exisitig coffee machine</H2>
      <Input
        value={coffeeMachineCode}
        onChange={(value) => setCoffeeMachineCode(value as string)}
        label="Coffee machine code"
      />
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          connectCoffeeMachine({ variables: { code: coffeeMachineCode } });
        }}
      />
    </form>
  );
};
