import { gql } from "@apollo/client";

export const COFFEE_LIST_QUERY = gql`
  query coffeeQuery {
    coffee(orderBy: { updatedAt: desc }) {
      id
      name
      rating
      street
      photo {
        asset_id
        secure_url
      }
      coffeeMachine {
        id
        name
      }
      prices {
        id
        price
        grams
      }
      configurations {
        id
        size
        amount
        createdAt
        status
      }
    }
  }
`;

export const COFFEE_DETAIL_QUERY = gql`
  query CoffeeDetail($id: Int) {
    coffeeDetail(id: $id, orderBy: { createdAt: desc }) {
      id
      name
      rating
      street
      city
      zip
      configurations {
        id
        size
        amount
        createdAt
        status
      }
    }
  }
`;

export const UPDATE_COFFEE_MUTATION = gql`
  mutation updateCoffee(
    $id: Int
    $size: String
    $amount: String
    $status: Status
    $rating: Int
  ) {
    updateCoffee(
      id: $id
      size: $size
      amount: $amount
      status: $status
      rating: $rating
    ) {
      id
      name
      rating
      street
      photo {
        asset_id
        secure_url
      }
      configurations {
        id
        size
        amount
        createdAt
        status
      }
    }
  }
`;

export const CREATE_COFFEE_MUTATION = gql`
  mutation CreateCoffee(
    $name: String!
    $street: String
    $coffeeMachineId: Int
    $photo: CloudinaryImageInput
    $price: String
    $grams: Int
    $rating: Int
  ) {
    createCoffee(
      name: $name
      street: $street
      price: $price
      grams: $grams
      coffeeMachineId: $coffeeMachineId
      photo: $photo
      rating: $rating
    ) {
      id
      name
      rating
      street
      photo {
        asset_id
        secure_url
      }
      coffeeMachine {
        id
        name
      }
      prices {
        id
        price
        grams
      }
    }
  }
`;
