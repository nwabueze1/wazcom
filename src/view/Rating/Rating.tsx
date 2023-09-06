import { Wrapper } from "../../core";
import { RatingInput } from "../../io";
import { useState } from "react";
import { OpinionScale } from "../../io/OpinionScale";

export const Rating = () => {
  const [rating, setRating] = useState<number>(1);

  const handleChange = (e: { name: string; value: number }) => {
    setRating(e.value);
  };
  return (
    <Wrapper title={"RatingInput & Opinion Scale"}>
      <RatingInput
        variant={"outlined"}
        name={"rating"}
        isError={false}
        helperText={"Welcome"}
        value={rating}
        onChange={handleChange}
        label={"Rating"}
      />
      <OpinionScale variant={"outlined"} name={"rating"} value={rating} onChange={handleChange} />
    </Wrapper>
  );
};
