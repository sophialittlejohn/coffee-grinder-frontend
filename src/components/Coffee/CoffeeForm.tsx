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
import { formatAddress } from "../../lib/utils/formatAddress";
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
  const [googleLoaded, setGoogleLoaded] = useState(false);
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

  useEffect(() => {
    if (inputRef.current && typeof window !== "undefined") {
      // doesn't work on client side navigation b/c window.google is undefined
      const autocomplete = loadAutocompleteApi(inputRef.current);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const formattedAddress = formatAddress(place);
        setAddress(formattedAddress);
        setStreet(
          `${place.name}, ${formattedAddress.street} ${formattedAddress.city}`
        );
      });
    }
  }, []);

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
