import React, { useEffect, useMemo, useState } from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { Button } from "../../elements/Button";
import { Inline } from "../../layout/Inline";

interface RatingProps {
  maxRating: number;
  rating?: number;
  onClick?: (value: number) => Promise<void> | void;
}

export const Rating: React.FC<RatingProps> = ({
  maxRating,
  rating = 0,
  onClick,
}) => {
  const ratingArray = useMemo(() => new Array(maxRating).fill(0), [maxRating]);
  const [_, forceRerender] = useState(0);

  useEffect(() => {
    forceRerender(rating);
  }, [rating]);

  return (
    <Inline gap="4px">
      {ratingArray.map((_, index) =>
        index < rating ? (
          <Button
            key={index}
            variant="icon"
            disabled={!onClick}
            onClick={() => {
              onClick && onClick(index + 1);
            }}
          >
            <StarFill size={15} />
          </Button>
        ) : (
          <Button
            key={index}
            variant="icon"
            disabled={!onClick}
            onClick={() => {
              onClick && onClick(index + 1);
            }}
          >
            <Star size={15} key={index} />
          </Button>
        )
      )}
    </Inline>
  );
};
