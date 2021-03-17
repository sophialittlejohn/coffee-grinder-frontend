import React from "react";
import { NextPage, NextPageContext } from "next";
import styled from "styled-components";
import { CoffeeList } from "../../components/Coffee/CoffeeList";
import { PageLayout } from "../../components/Layout/PageLayout";
import { Stack } from "../../layout/Stack";
import { COFFEE_LIST_QUERY } from "../../components/Coffee/queries";
import { useTimeOfDay } from "../../lib/utils/timeOfDay";
import { Select } from "../../elements/Select";
import { Inline } from "../../layout/Inline";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apolloClient";
import { H2 } from "../../elements/Heading";
import { H1 } from "../../elements/Heading";
import Image from "next/image";
import { Text } from "../../elements/Text";
import { HEADER_MAX_HEIGHT } from "../../lib/constants";
import { Tabs } from "../../components/Tabs";

const PagePadding = styled.div`
  padding: 16px 16px;
  position: relative;
  top: -${HEADER_MAX_HEIGHT}px;
`;

const StyledContentWrapper = styled.div`
  position: relative;
  top: -${HEADER_MAX_HEIGHT}px;
`

const StyledHeaderWrapper = styled.div`
  position: sticky;
  top: -100px;
  z-index: 1;

  @media (min-width: 500px) {
    top: -200px;
  }
`;

const StyledTabsWrapper = styled(Inline)`
  height: ${HEADER_MAX_HEIGHT}px;
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 600px;
  top: -${HEADER_MAX_HEIGHT + 8}px;
`

const StyledBackground = styled.div`
  z-index: -1;
  margin: 0 auto;
`;

const StyledGreeting = styled(H1)`
  max-width: 230px;
  padding-left: 16px;
  font-weight: normal;
  z-index: 10;
  position: absolute;
  top: 40px;
  
  @media (min-width: 500px) {
    top: 90px;
    font-size: 72px;
  }
`;

interface CoffeeProps { }

const CoffeePage: NextPage<CoffeeProps> = () => {
  const timeOfDay = useTimeOfDay();
  const { data, error, loading } = useQuery(COFFEE_LIST_QUERY);

  return (
    <PageLayout title="" withAuth>
      <StyledContentWrapper>
        <Tabs defaultActive="configure">
          <StyledHeaderWrapper>
            <StyledGreeting size="48px" color="white" fontWeight="regular">
              Good {timeOfDay}
            </StyledGreeting>
            <StyledBackground>
              <Image
                src={`/assets/${timeOfDay}-bg.jpg`}
                height={345} // scaled 1.6
                width={600} // scaled 1.6 
              />
            </StyledBackground>
            <StyledTabsWrapper >
              <Tabs.Label id="configure">
                <Text bold color="white">
                  Configure
              </Text>
              </Tabs.Label>
              <Tabs.Label id="buy">
                <Text bold color="white">
                  Buy
              </Text>
              </Tabs.Label>
            </StyledTabsWrapper>
          </StyledHeaderWrapper>
          <PagePadding>
            {loading ? (
              <H2>Loading...</H2>
            ) : error ? (
              <H2>{error.message}</H2>
            ) : (
              <>
                <Inline alignItems="center">
                  <Select
                    label="Sort by:"
                    width="100px"
                    options={[{ label: "Name A-Z", value: 1 }]}
                    onChange={() => {
                      console.log("select filter");
                    }}
                  />
                </Inline>
                <Stack
                  gap="12px"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Tabs.Content id="configure">
                    {data?.coffee && (
                      <CoffeeList coffees={data.coffee} variant="configure" />
                    )}
                  </Tabs.Content>
                  <Tabs.Content id="buy">
                    {data?.coffee && (
                      <CoffeeList coffees={data.coffee} variant="buy" />
                    )}
                  </Tabs.Content>
                </Stack>
              </>
            )}
          </PagePadding>
        </Tabs>
      </StyledContentWrapper>
    </PageLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const apolloClient = initializeApollo(context);
  // verify token, send user data

  try {
    await apolloClient.query({
      query: COFFEE_LIST_QUERY,
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  } catch (error) {
    console.error("ERROR", error);
    return {
      props: {
        error: error.message,
      },
    };
  }
}

export default CoffeePage;
