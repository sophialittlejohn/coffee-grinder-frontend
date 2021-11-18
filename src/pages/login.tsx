import { Login } from "../components/Login";
import { NextPage } from "next";
import { PageLayout } from "../components/Layout/PageLayout";
import React from "react";

const LoginPage: NextPage = () => {
  return (
    <PageLayout title="" background="login">
      <Login />
    </PageLayout>
  );
};

export default LoginPage;
