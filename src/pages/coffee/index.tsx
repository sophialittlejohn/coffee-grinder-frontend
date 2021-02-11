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
import { useScroll } from "../../lib/hooks/useScroll";
import { H1 } from "../../elements/Heading";
import Image from "next/image";
import { Text } from "../../elements/Text";
import { HEADER_MAX_HEIGHT, HEADER_TABS_HEIGHT } from "../../lib/constants";
import { Tabs } from "../../components/Tabs";

const PagePadding = styled.div`
  padding: 16px 16px;
`;

const StyledHeaderWrapper = styled.div`
  position: relative;
  max-width: 600px;
  min-height: 216px;
  height: 100%;
`;

const StyledBackground = styled.div`
  position: fixed;
  z-index: -1;
  margin: 0 auto;
`;

const StyledGreeting = styled(H1)`
  max-width: 230px;
  padding-left: 16px;
  font-weight: normal;
  z-index: 10;
  position: relative;

  @media (min-width: 410px) {
    padding: 10px 16px;
  }

  @media (min-width: 519px) {
    font-size: 55px;
    padding: 33px 16px;
  }

  @media (min-width: 599px) {
    font-size: 73px;
    padding: 35px 16px;
  }
`;

interface CoffeeProps {}

const CoffeePage: NextPage<CoffeeProps> = () => {
  const timeOfDay = useTimeOfDay();
  const { scrollY, windowWidth } = useScroll();
  const { data, error, loading } = useQuery(COFFEE_LIST_QUERY);

  return (
    <PageLayout title="" withAuth>
      <Tabs defaultActive="configure">
        <StyledHeaderWrapper>
          <StyledBackground
            style={{
              top:
                scrollY <= windowWidth * 0.304
                  ? `-${scrollY}px`
                  : -(windowWidth * 0.304),
              zIndex: scrollY > 5 ? 1 : -1,
            }}
          >
            <Image
              src={`/assets/${timeOfDay}-bg.jpg`}
              height={345} // scaled 1.6
              width={600} // scaled 1.6
            />
          </StyledBackground>
        </StyledHeaderWrapper>
        <div style={{ position: "relative", bottom: "208px" }}>
          <StyledGreeting size="48px" color="white" fontWeight="regular">
            Good {timeOfDay}
          </StyledGreeting>
          <Inline
            // @ts-ignore
            style={{
              height: `${HEADER_MAX_HEIGHT}px`,
              position: "sticky",
              zIndex: 10,
              width: "100%",
              maxWidth: "600px",
              top:
                scrollY === 0
                  ? HEADER_TABS_HEIGHT
                  : scrollY < HEADER_TABS_HEIGHT - HEADER_MAX_HEIGHT
                  ? `${HEADER_TABS_HEIGHT - scrollY}px`
                  : HEADER_MAX_HEIGHT + 7,
            }}
          >
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
          </Inline>

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
        </div>
      </Tabs>
    </PageLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const apolloClient = initializeApollo(context);

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
