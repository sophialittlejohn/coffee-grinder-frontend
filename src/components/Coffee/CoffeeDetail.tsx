import React, { useEffect, useState } from "react";
import { Text } from "../../elements/Text";
import { H2 } from "../../elements/Heading";
import { Image } from "../../elements/Image";
import { Stack } from "../../layout/Stack";
import { Rating } from "../Rating";
import { Coffee } from "./types";
import { storage } from "../../lib/firebase/index";
import { FALLBACK_COFFEE_URL } from "../../lib/constants";
import { Inline } from "../../layout/Inline";
import { useMutation } from "@apollo/client";
import { UPDATE_COFFEE_MUTATION } from "./queries";

interface CoffeeDetailProps {
  coffee: Coffee;
}

export type GrindType = "single" | "double";

const grindOptions: Array<GrindType> = ["single", "double"];

export const CoffeeDetail: React.FC<CoffeeDetailProps> = ({ coffee }) => {
  const [clientCoffee, setClientCoffee] = useState(coffee);
  const [image, setImage] = useState<string>(FALLBACK_COFFEE_URL);
  const [grindType, setGrindType] = useState<GrindType>("single");

  useEffect(() => {
    storage
      .ref(`coffee/${coffee.photo || "default-coffee.png"}`)
      .getDownloadURL()
      .then((url) => {
        setImage(url);
      });
  }, [coffee]);

  const [updateCoffeeMutation, { data }] = useMutation<any>(
    UPDATE_COFFEE_MUTATION
  );

  useEffect(() => {
    if (data) {
      setClientCoffee(data.updateCoffee);
    }
  }, [data]);

  const handleUpdateRating = async (value: number) => {
    updateCoffeeMutation({
      variables: { rating: value, id: Number(clientCoffee.id) },
    });
  };

  // const grindSize =
  //   grindType === "single"
  //     ? clientCoffee.grindSizeSingle
  //     : clientCoffee.grindSizeDouble;
  // const grindAmount =
  //   grindType === "single"
  //     ? clientCoffee.grindAmountSingle
  //     : clientCoffee.grindAmountDouble;

  return (
    <Stack gap="12px">
      <Inline alignItems="center" gap="12px">
        <Image alt="coffee" src={image} />
        <Stack justifyContent="space-between" gap="4px">
          <Rating
            maxRating={5}
            rating={clientCoffee.rating}
            onClick={handleUpdateRating}
          />
          <H2 fontWeight="bold">{clientCoffee.name}</H2>
          <Text color="gray" italic>
            {clientCoffee.street}
          </Text>
          {/* <H3>{formatCurrency(clientCoffee.pricePer250g)} / 250g</H3> */}
        </Stack>
      </Inline>
      <Stack gap="16px">
        <H2>Configuration</H2>
        {/* <Grind
          onChange={(type) => setGrindType(type as GrindType)}
          options={grindOptions}
        >
          <GrindSize coffeeId={clientCoffee.id} grindSize={grindSize} />
          <GrindAmount coffeeId={clientCoffee.id} grindAmount={grindAmount} />
        </Grind> */}
      </Stack>
    </Stack>
  );
};
