import { CoffeeMachine } from "../CoffeeMachine/types";
import { Configuration } from "../Configure/types";

type Price = {
  price: number;
  grams: number;
  id: number;
};

type Address = {
  street: string;
  city: string;
  zip: string;
};

export interface Coffee extends Address {
  id: number;
  name: string;
  rating: number;
  photo: string;
  coffeeMachine: CoffeeMachine;
  prices: Price[];
  configurations: Configuration[];
}
