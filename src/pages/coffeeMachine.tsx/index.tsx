import { NextPage } from "next";
import React from "react";
import { CoffeeMachineForm } from "../../components/CoffeeMachine/CoffeeMachineForm";
import { CoffeeMachineLinkForm } from "../../components/CoffeeMachine/CoffeeMachineLinkForm";
import { CoffeeMachineList } from "../../components/CoffeeMachine/CoffeeMachineList";
import { PageLayout } from "../../components/Layout/PageLayout";
import { Stack } from "../../layout/Stack";

const CoffeeMachinePage: NextPage = () => {
  return (
    <PageLayout title="Coffee Machines" withAuth>
      <Stack>
        <CoffeeMachineList />
        <CoffeeMachineForm />
        <CoffeeMachineLinkForm />
      </Stack>
    </PageLayout>
  );
};

export default CoffeeMachinePage;
