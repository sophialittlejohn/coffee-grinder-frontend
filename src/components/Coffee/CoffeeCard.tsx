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
  overflow: hidden;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`


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
      <Inline>
        <div style={{ position: "relative", minWidth: '104px' }}>
          <Image height="129" width="104" alt="coffee" src="https://res.cloudinary.com/coffee-grinder/image/upload/v1613857811/coffee/e25ufze3hynn6n0l5woy.jpg" />
        </div>
        <StyledStack justifyContent="space-between" gap="4px">
          <Rating maxRating={5} rating={rating} />
          <H2 fontWeight="bold" size="18px" styles={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}>{name}</H2>
          {variant === "configure" && (
            <StyledGrid>
              <div>
                <Text size="18px" styles={{ lineHeight: 1 }}>Grind size</Text>
                <Text size="18px" styles={{ lineHeight: 1 }}>Amount</Text>
              </div>
              <div>
                <Text size="18px" styles={{ lineHeight: 1 }} color="black">{size || 0}</Text>
                <Text size="18px" styles={{ lineHeight: 1 }}>{amount || 0} sec</Text>
              </div>
            </StyledGrid>
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
