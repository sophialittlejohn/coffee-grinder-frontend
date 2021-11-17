import { Address, Coffee } from "./types";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "../../elements/Button";
import { CREATE_COFFEE_MUTATION } from "./queries";
import { Inline } from "../../layout/Inline";
import { Input } from "../../elements/Input";
import { Rating } from "../Rating";
import { Select } from "../../elements/Select";
import { Stack } from "../../layout/Stack";
import { Text } from "../../elements/Text";
import { UploadPhoto } from "../../elements/UploadPhoto";
import { cloudinaryUpload } from "../../lib/utils/cloudinaryUpload";
import { loadAutocompleteApi } from "../../lib/utils/loadMapsApi";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useUserContext } from "../../lib/userContext";

const GRAM_OPTIONS = [
  {
    value: 250,
    label: "250g",
  },
  {
    value: 500,
    label: "500g",
  },
  {
    value: 1000,
    label: "1000g",
  },
];

// TODO: convert to html form element
const StyledForm = styled(Stack)`
  padding: 46px 30px 0px 30px;
  width: initial !important;
`;

type CreateCoffee = {
  createCoffee: Coffee;
};

export const CoffeeForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState<Partial<Address>>({});
  const [street, setStreet] = useState<string>("");
  const [price, setPrice] = useState("");
  const [grams, setGrams] = useState<number>(GRAM_OPTIONS[0].value);
  const [rating, setRating] = useState<number>();
  const [photo, setPhoto] = useState<File>();

  const { user } = useUserContext();
  const { push } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const onCompleted = (data: CreateCoffee) => {
    console.log("➜ ~ data", data);
    if (data?.createCoffee.name) {
      push("/coffee");
    }
  };

  const [createCoffeeMutation, { error }] = useMutation<CreateCoffee>(
    CREATE_COFFEE_MUTATION,
    { onCompleted }
  );

  const handleSubmitForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (photo && name && address.street && price && rating) {
      try {
        // tags are not in db yet
        const {
          tags,
          original_extension,
          ...uploadedPhoto
        } = await cloudinaryUpload(photo);
        // saving doesn't work yet with address
        console.log({
          price,
          grams,
          rating,
          coffeeMachineId: Number(user?.coffeeMachines[0].id),
          photo: uploadedPhoto,
          address,
          name,
        });
        createCoffeeMutation({
          variables: {
            price,
            grams,
            rating,
            coffeeMachineId: Number(user?.coffeeMachines[0].id),
            photo: uploadedPhoto,
            address,
            name,
          },
        });
      } catch (error) {
        console.warn(error);
      }
    } else {
      console.error("form validation failed");
    }
  };

  const formatAddress = (
    place: google.maps.places.PlaceResult
  ): Partial<Address> => {
    if (place.address_components) {
      const address = place.address_components.reduce<Partial<Address>>(
        (prev, curr) => {
          let key = curr.types[0];
          if (key.includes("administrative_area")) {
            return prev;
          }
          if (key === "route") {
            key = "street";
          } else if (key === "locality") {
            key = "city";
          }
          return {
            ...prev,
            [key]: curr.long_name,
          };
        },
        {}
      );

      const lat = `${place.geometry?.location?.lat()}`;
      const lng = `${place.geometry?.location?.lng()}`;

      return { ...address, lat, lng };
    } else {
      return {};
    }
  };

  useEffect(() => {
    if (inputRef.current && window !== "undefined") {
      const autocomplete = loadAutocompleteApi(inputRef.current);
      autocomplete.addListener("place_changed", () => {
        const formattedAddress = formatAddress(autocomplete.getPlace());
        console.log("➜ ~ formattedAddress", formattedAddress);
        setAddress(formattedAddress);
      });
    }
  }, [inputRef]);

  return (
    <StyledForm gap="24px" justifyContent="flex-end">
      <Stack gap="24px">
        <UploadPhoto setPhoto={setPhoto} />
      </Stack>
      <Input
        type="text"
        label="Coffee"
        value={name}
        onChange={(value) => setName(value as string)}
      />
      <Stack gap="4px">
        <Text
          size="12px"
          bold
          color="orange"
          styles={{ letterSpacing: "0.5px" }}
        >
          Where did you buy the coffee?
        </Text>
        <Input
          id="pac-input"
          label=""
          ref={inputRef}
          type="text"
          placeholder="Name or address of coffee shop"
          value={street}
          onChange={(value) => {
            console.log("vale", value);
            setStreet(value as string);
          }}
        />
      </Stack>
      <Inline alignItems="center" gap="12px">
        <Text>CHF</Text>
        <Input
          type="text"
          label="Price"
          value={price}
          onChange={(value) => setPrice(value)}
          width="75px"
          errorMessage={
            price && !parseFloat(price) ? "Invalid value" : undefined
          }
        />{" "}
        <Text>/</Text>
        <Select options={GRAM_OPTIONS} onChange={(value) => setGrams(value)} />
      </Inline>
      <Inline justifyContent="center">
        <Rating
          maxRating={5}
          rating={rating}
          onClick={(value) => setRating(value)}
        />
      </Inline>
      <Button variant="secondary" onClick={handleSubmitForm}>
        Save
      </Button>
      {error && (
        <>
          <Text>An error occured {error.message}</Text>
          <Text>{JSON.stringify(error)}</Text>
        </>
      )}
    </StyledForm>
  );
};
