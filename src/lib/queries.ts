// random queries belong here for now

import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query User {
    user {
      id
      name
      email
      primaryMachine
      coffeeMachines {
        id
        name
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($primaryMachine: Int) {
    updateUser(primaryMachine: $primaryMachine) {
      name
      email
      id
      primaryMachine
      coffeeMachines {
        id
        name
      }
    }
  }
`;
