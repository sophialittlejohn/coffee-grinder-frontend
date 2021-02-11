import React from "react";
import { NextPage } from "next";
import { Coffee } from "../../components/Coffee/types";
import { PageLayout } from "../../components/Layout/PageLayout";
import { CoffeeForm } from "../../components/Coffee/CoffeeForm";

interface NewCoffeeProps {
  coffees: Coffee[];
}

const NewCoffeePage: NextPage<NewCoffeeProps> = (props) => {
  return (
    <PageLayout title="Add new beans" withAuth goBack="/coffee">
      <CoffeeForm></CoffeeForm>
    </PageLayout>
  );
};

export default NewCoffeePage;
