import { NextPageContext } from "next";
import React from "react";
import { PageLayout } from "../components/Layout/PageLayout";

function HomePage() {
  return (
    <PageLayout title="Home">
      An error occured, please reload the page
    </PageLayout>
  );
}

export default HomePage;

export async function getServerSideProps(context: NextPageContext) {
  if (context?.res) {
    context.res.writeHead(301, {
      Location: "/coffee",
    });
    context.res.end();
    return { props: {} };
  }
}
