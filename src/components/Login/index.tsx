import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { H1, H2 } from "../../elements/Heading";
import { LOGIN_MUTATION, SIGNUP_MUTATION } from "./mutations";
import React, { useEffect, useState } from "react";

import { Button } from "../../elements/Button";
import { COLORS } from "../../materials/colors";
import { Inline } from "../../layout/Inline";
import { Input } from "../../elements/Input";
import { Stack } from "../../layout/Stack";
import { Text } from "../../elements/Text";
import { setCookie } from "nookies";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useUserContext } from "../../lib/userContext";

const StyledFormContainer = styled(Stack)`
  margin: 0 auto;
  width: 343px;
  background: ${COLORS.lightYellow};
  border: 1px solid ${COLORS.lightYellow};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 32px 30px;
  margin-top: 42px;
  min-height: 363px;
`;

const StyledInput = styled(Input)`
  background: ${COLORS.lightYellow};
`;

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { setUser, updateUser } = useUserContext();
  const { push } = useRouter();

  const [
    loginMutation,
    { data: dataLogin, loading: loadingLogin, error: errorLogin },
  ] = useMutation(LOGIN_MUTATION, { errorPolicy: "all" });
  const [
    signupMutation,
    { data: dataSignup, loading: loadingSignup, error: errorSignup },
  ] = useMutation(SIGNUP_MUTATION);

  useEffect(() => {
    if (dataSignup) {
      const { user, token } = dataSignup.signup;
      setUser && setUser(user);
      setCookie(null, "token", token, { maxAge: 30 * 24 * 60 * 60 });
      updateUser({ primaryMachine: Number(user.coffeeMachines[0].id) }).then(
        () => {
          push("/coffee");
        }
      );
    }
  }, [dataSignup, push, setUser]);

  useEffect(() => {
    if (dataLogin && dataLogin.login) {
      const { user, token } = dataLogin.login;
      setCookie(null, "token", token, { maxAge: 30 * 24 * 60 * 60 });
      setUser && setUser(user);
      // if (user.primaryMachine) {
      push("/coffee");
      // }
    }
  }, [dataLogin, push, setUser]);

  useEffect(() => {
    if (errorLogin || errorSignup) {
      setEmail("");
      setPassword("");
    }
  }, [errorSignup, errorLogin, setEmail, setPassword]);

  return (
    <Stack alignItems="center" marginOnLastChild styles={{ padding: "0 16px" }}>
      <H1 color="white" size="72px">
        Coffee Grinder
      </H1>
      <form>
        <StyledFormContainer gap="8px">
          <H2 color="black">{isLogin ? "Welcome" : "Create an account"}</H2>
          <Text color="black" size="18px">
            {isLogin ? "Log in to continue!" : "Sign up to get started!"}
          </Text>
          <Stack gap="24px" marginOnLastChild>
            <StyledInput
              label="Email"
              value={email}
              onChange={(value) => setEmail(value as string)}
              type="text"
              errorMessage={
                errorLogin?.message || errorSignup?.message
                  ? "Something went wrong"
                  : ""
              }
              styles={{
                background: COLORS.lightYellow,
              }}
            />
            <StyledInput
              label="Password"
              value={password}
              onChange={(value) => setPassword(value as string)}
              type={showPassword ? "text" : "password"}
              styles={{ background: COLORS.lightYellow }}
              errorMessage={
                errorLogin?.message || errorSignup?.message
                  ? "Something went wrong"
                  : ""
              }
              endIcon={
                <Button
                  tabIndex={-1}
                  padding="0"
                  variant="icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashFill size={16} />
                  ) : (
                    <EyeFill size={16} />
                  )}
                </Button>
              }
            />
          </Stack>
          <Stack gap="24px">
            <Button
              loading={loadingLogin || loadingSignup}
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                if (isLogin) {
                  loginMutation({ variables: { email, password } });
                } else {
                  signupMutation({ variables: { email, password } });
                }
              }}
            >
              <Text color="black">{isLogin ? "Log in" : "Sign up"}</Text>
            </Button>
            <Inline>
              <Text color="black" styles={{ lineHeight: "16px" }}>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Text>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setIsLogin(!isLogin);
                }}
                variant="ghost"
              >
                <Text color="black" styles={{ lineHeight: "16px" }}>
                  {isLogin ? "Sign up" : "Login"}
                </Text>
              </Button>
            </Inline>
          </Stack>
        </StyledFormContainer>
      </form>
    </Stack>
  );
};

export default Login;
