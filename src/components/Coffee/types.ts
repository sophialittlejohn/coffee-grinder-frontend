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
  photo: CloudinaryImage;
  coffeeMachine: CoffeeMachine;
  prices: Price[];
  configurations: Configuration[];
}

type CloudinaryImage = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  // tags: [];
  bytes: number;
  type: string;
  etag: string;
  placeholder: false;
  url: string;
  secure_url: string;
  access_mode: string;
  original_filename: string;
  // original_extension?: string;
};
