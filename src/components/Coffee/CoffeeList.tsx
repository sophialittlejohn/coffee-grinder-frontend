import React from "react";
import Link from "next/link";
import { CoffeeCard } from "./CoffeeCard";
import { Coffee } from "./types";
import { StyledLi, StyledUl } from "../../elements/List";

interface CoffeeListProps {
  coffees?: Coffee[];
  variant: "configure" | "buy";
}

export const CoffeeList: React.FC<CoffeeListProps> = ({
  coffees,
  ...props
}) => {
  return (
    <StyledUl>
      {coffees?.map((coffee) => {
        return (
          <StyledLi key={String(coffee.id)}>
            <Link href={`/coffee/${coffee.id}`} passHref>
              <a href={`/coffee/${coffee.id}`}>
                <CoffeeCard coffee={coffee} {...props} />
              </a>
            </Link>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
