import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "../../elements/Text";
import { H2, H3 } from "../../elements/Heading";
// import { Image } from "../../elements/Image";
import Image from "next/image";
import { Stack } from "../../layout/Stack";
import { formatCurrency } from "../../lib/utils/formatCurrency";
import { Rating } from "../Rating";
import { Coffee } from "./types";
import { storage } from "../../lib/firebase/index";
import { FALLBACK_COFFEE_URL } from "../../lib/constants";
import { Inline } from "../../layout/Inline";
import { COLORS } from "../../materials/colors";

const StyledCard = styled.div`
  width: 100%;
  border-radius: 4px;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  background-color: ${COLORS.white};
`;

const StyledStack = styled(Stack)`
  padding: 16px;
`;

interface CoffeeCardProps {
  coffee: Coffee;
  variant: "buy" | "configure";
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee, variant }) => {
  // place image url directly in db to prevent loading here
  const [image, setImage] = useState<string>(FALLBACK_COFFEE_URL);

  useEffect(() => {
    storage
      .ref(`coffee/${coffee.photo}.${coffee.name.replace(" ", "")}`)
      .getDownloadURL()
      .then((url) => {
        setImage(url);
      });
  }, [coffee.photo]);

  const { name, rating, configurations } = coffee;
  const { size, amount } =
    configurations.length > 0 ? configurations[0] : { size: "", amount: "" };

  return (
    <StyledCard>
      <Inline alignItems="center" gap="12px">
        <div style={{ height: "129px", width: "104px", position: "relative" }}>
          <Image layout="fill" alt="coffee" src={image} />
        </div>
        <StyledStack justifyContent="space-between" gap="4px">
          <Rating maxRating={5} rating={rating} />
          <H2 fontWeight="bold">{name}</H2>
          {variant === "configure" && (
            <table>
              <tbody>
                <tr>
                  <td>
                    <Text>Grind size</Text>
                  </td>
                  <td>
                    <Text>{size}</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>Amount</Text>
                  </td>
                  <td>
                    <Text>{amount}</Text>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {variant === "buy" && (
            <Stack>
              <Text color="black" italic>
                {coffee.street} {coffee.zip} {coffee.city}
              </Text>
              <Inline gap="4px" alignItems="baseline">
                <Text size="16px">
                  {formatCurrency(coffee.prices[0].price)} /{" "}
                </Text>
                <Text size="12px">{coffee.prices[0].grams}</Text>
              </Inline>
            </Stack>
          )}
        </StyledStack>
      </Inline>
    </StyledCard>
  );
};
