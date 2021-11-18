import { NextPage, NextPageContext } from "next";

import { COFFEE_DETAIL_QUERY } from "../../components/Coffee/queries";
import { Configure } from "../../components/Configure";
import { H2 } from "../../elements/Heading";
import { PageLayout } from "../../components/Layout/PageLayout";
import React from "react";
import { initializeApollo } from "../../lib/apolloClient";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

const PagePadding = styled.div`
  padding: 0 16px;
`;

interface CoffeeConfigureProps {
  query: { coffeeId: number };
}

const CoffeeConfigurePage: NextPage<CoffeeConfigureProps, null> = ({
  query,
}) => {
  const { data, loading, error } = useQuery(COFFEE_DETAIL_QUERY, {
    variables: {
      id: query.coffeeId,
    },
  });

  return (
    <PageLayout title="Configure" withAuth goBack="coffee">
      <PagePadding>
        {error && <H2>{error.message}</H2>}
        {loading && <H2>Loading...</H2>}
        {data && <Configure coffee={data.coffeeDetail} />}
      </PagePadding>
    </PageLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const coffeeId = Number(context.query.id);

  const apolloClient = initializeApollo(context);

  try {
    await apolloClient.query({
      query: COFFEE_DETAIL_QUERY,
      variables: { id: coffeeId },
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
        query: { coffeeId },
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Error",
      },
    };
  }
}

export default CoffeeConfigurePage;
