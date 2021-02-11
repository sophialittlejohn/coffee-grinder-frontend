import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        id
        primaryMachine
        name
        email
        coffeeMachines {
          id
          name
        }
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        name
        primaryMachine
        coffeeMachines {
          id
          name
        }
      }
    }
  }
`;
