import { gql } from "@apollo/client";

export const CREATE_COFFEE_MACHINE = gql`
  mutation createCoffeeMachine($name: String!, $brand: String) {
    createCoffeeMachine(name: $name, brand: $brand) {
      name
      brand
      id
      code
    }
  }
`;

export const COFFEE_MACHINE_LIST_QUERY = gql`
  query {
    coffeeMachines {
      name
      brand
      id
      code
    }
  }
`;

export const CONNECT_COFFEE_MACHINE = gql`
  mutation connectCoffeeMachineToUser($code: String!) {
    connectCoffeeMachineToUser(code: $code) {
      id
    }
  }
`;

// preferredMachine is used to pre-select a machine on login
export const UPDATE_USER_PREFERRED_MACHINE = gql`
  mutation updateUserPreferredMachine($id: Int!) {
    updateUserPreferredMachine(id: $id) {
      token
    }
  }
`;
