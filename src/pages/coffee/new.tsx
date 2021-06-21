import { Coffee } from "../../components/Coffee/types";
import { CoffeeForm } from "../../components/Coffee/CoffeeForm";
import Head from "next/head";
import { NextPage } from "next";
import { PageLayout } from "../../components/Layout/PageLayout";
import React from "react";
import getConfig from "next/config";

interface NewCoffeeProps {
  coffees: Coffee[];
}

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const NewCoffeePage: NextPage<NewCoffeeProps> = () => {
  return (
    <>
      <Head>
        <title>New beans</title>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${
            serverRuntimeConfig.googlePlacesApiKey ||
            publicRuntimeConfig.googlePlacesApiKey
          }&libraries=places`}
        ></script>
      </Head>
      <PageLayout title="Add new beans" withAuth goBack="/coffee">
        <CoffeeForm></CoffeeForm>
      </PageLayout>
    </>
  );
};

export default NewCoffeePage;
