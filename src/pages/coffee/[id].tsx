import React from "react";
import styled from "styled-components";
import { NextPage, NextPageContext } from "next";
import { PageLayout } from "../../components/Layout/PageLayout";
import { initializeApollo } from "../../lib/apolloClient";
import { COFFEE_DETAIL_QUERY } from "../../components/Coffee/queries";
import { Configure } from "../../components/Configure";
import { useQuery } from "@apollo/client";
import { H2 } from "../../elements/Heading";
import { ApolloServerSideProps } from "../../lib/types";

const PagePadding = styled.div`
  padding: 0 16px;
`;

interface CoffeeConfigureProps {
  coffeeId: number;
}

const CoffeeConfigurePage: NextPage<CoffeeConfigureProps, null> = ({
  coffeeId,
}) => {
  const { data, loading, error } = useQuery(COFFEE_DETAIL_QUERY, {
    variables: {
      id: coffeeId,
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

export async function getServerSideProps(
  context: NextPageContext
): Promise<ApolloServerSideProps<CoffeeConfigureProps>> {
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
        query: { coffeeId }
      }
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}

export default CoffeeConfigurePage;
