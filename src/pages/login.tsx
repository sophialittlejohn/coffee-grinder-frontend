import React from "react";
import { NextPage } from "next";

import { Login } from "../components/Login";
import { PageLayout } from "../components/Layout/PageLayout";

const LoginPage: NextPage = (props) => {
  return (
    <PageLayout title="" background="login">
      <Login />
    </PageLayout>
  );
};

export default LoginPage;
