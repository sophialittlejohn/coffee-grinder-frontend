import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Coffee } from "./types";
import { CREATE_COFFEE_MUTATION } from "./queries";
import { useUserContext } from "../../lib/userContext";
import { Stack } from "../../layout/Stack";
import { Inline } from "../../layout/Inline";
import { Text } from "../../elements/Text";
import { Input } from "../../elements/Input";
import { Select } from "../../elements/Select";
import { UploadPhoto } from "../../elements/UploadPhoto";
import { Button } from "../../elements/Button";
import { Rating } from "../Rating";

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
  // margin-top: 46px;
`;

type CreateCoffee = {
  createCoffee: Coffee;
};

interface CoffeeFormProps { }

export const CoffeeForm: React.FC<CoffeeFormProps> = () => {
  const [name, setName] = useState<string>();
  const [street, setStreet] = useState<string>();
  const [zip, setZip] = useState<number>();
  const [city, setCity] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [grams, setGrams] = useState<number>(GRAM_OPTIONS[0].value);
  const [rating, setRating] = useState<number>();
  const [photo, setPhoto] = useState<File>();

  const { user } = useUserContext();

  const { push } = useRouter();

  const onCompleted = (data: CreateCoffee) => {
    if (data.createCoffee.name) {
      push("/coffee");
    }
  };

  const [createCoffeeMutation, { error }] = useMutation<CreateCoffee>(
    CREATE_COFFEE_MUTATION,
    { onCompleted },
  );

  const cloudinaryUpload = async () => {
    if (photo) {
      try {
        const formData = new FormData();
        formData.append("file", photo);
        formData.append("upload_preset", "coffee-image");
        formData.append("api_key", process.env.CLOUDINARY_API_KEY as string);

        // TODO: use env
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/coffee-grinder/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.text();
        return JSON.parse(data);
      } catch (error) {
        console.info("this is the stupid error that occured", error.message);
      }
    } else {
      return Promise.reject("unable to upload ");
    }
  };

  const handleSubmitForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      // tags are not in db yet
      const { tags, ...image } = await cloudinaryUpload();
      createCoffeeMutation({
        variables: {
          name,
          street,
          city,
          zip,
          price,
          grams,
          rating,
          coffeeMachineId: Number(user?.coffeeMachines[0].id),
          photo: image,
        },
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <StyledForm gap="24px" justifyContent="flex-end">
      <Stack gap="24px">
        <UploadPhoto setPhoto={setPhoto} />
      </Stack>
      <Input
        type="text"
        label="Name"
        value={name}
        onChange={(value) => setName(value as string)}
      />
      <Input
        type="text"
        label="Street"
        value={street}
        onChange={(value) => setStreet(value as string)}
      />
      <Inline gap="8px">
        <Input
          type="number"
          label="Zip"
          value={zip}
          onChange={(value) => setZip(Number(value))}
          width="75px"
        />

        <Input
          type="text"
          label="City"
          value={city}
          onChange={(value) => setCity(value as string)}
        />
      </Inline>
      <Inline alignItems="center" gap="12px">
        <Text>CHF</Text>
        <Input
          type="number"
          label="Price"
          value={price}
          onChange={(value) => setPrice(Number(value))}
          width="75px"
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
      {error && <Text>An error occured {error.message}</Text>}
    </StyledForm>
  );
};
