import { H2, H3 } from "../../elements/Heading";

import { COLORS } from "../../materials/colors";
import { Coffee } from "./types";
import { FALLBACK_COFFEE_URL } from "../../lib/constants";
import Image from "next/image";
import { Inline } from "../../layout/Inline";
import { Rating } from "../Rating";
import React from "react";
import { Stack } from "../../layout/Stack";
import { Text } from "../../elements/Text";
import { formatCurrency } from "../../lib/utils/formatCurrency";
import styled from "styled-components";

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
`;

interface CoffeeCardProps {
  coffee: Coffee;
  variant: "buy" | "configure";
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee, variant }) => {
  const { name, rating, configurations, photo } = coffee;
  const { size, amount } =
    configurations.length > 0 ? configurations[0] : { size: "", amount: "" };

  return (
    <StyledCard>
      <Inline>
        <div style={{ position: "relative", minWidth: "104px" }}>
          <Image
            height="129"
            width="104"
            alt="coffee"
            src={photo.secure_url || FALLBACK_COFFEE_URL}
          />
        </div>
        <StyledStack justifyContent="space-between" gap="4px">
          <Rating maxRating={5} rating={rating} />
          <H2
            fontWeight="bold"
            size="18px"
            styles={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              lineHeight: 1.5,
            }}
          >
            {name}
          </H2>
          {variant === "configure" && (
            <StyledGrid>
              <div>
                <Text size="18px" styles={{ lineHeight: 1.5 }}>
                  Grind size
                </Text>
                <Text size="18px" styles={{ lineHeight: 1.5 }}>
                  Amount
                </Text>
              </div>
              <div>
                <Text size="18px" styles={{ lineHeight: 1.5 }} color="black">
                  {size || 0}
                </Text>
                <Text size="18px" styles={{ lineHeight: 1.5 }}>
                  {amount || 0} sec
                </Text>
              </div>
            </StyledGrid>
          )}
          {variant === "buy" && (
            <Stack>
              <Text color="black" italic styles={{ lineHeight: 1.5 }}>
                {coffee.address.street} {coffee.address.postal_code}{" "}
                {coffee.address.city}
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
