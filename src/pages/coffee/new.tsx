import { Coffee } from "../../components/Coffee/types";
import { CoffeeForm } from "../../components/Coffee/CoffeeForm";
import Head from "next/head";
import { NextPage } from "next";
import { PageLayout } from "../../components/Layout/PageLayout";
import React from "react";
interface NewCoffeeProps {
  coffees: Coffee[];
}

const NewCoffeePage: NextPage<NewCoffeeProps> = () => {
  return (
    <>
      <Head>
        <title>New beans</title>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
        ></script>
      </Head>
      <PageLayout title="Add new beans" withAuth goBack="/coffee">
        <CoffeeForm></CoffeeForm>
      </PageLayout>
    </>
  );
};

export default NewCoffeePage;
