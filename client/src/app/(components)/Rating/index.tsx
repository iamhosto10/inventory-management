import React from "react";
import { FaStar } from "react-icons/fa";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <FaStar
      key={index}
      color={index <= rating ? "#FFC107" : "#E4E5E9"}
      className="w-4 h-4"
    />
  ));
};

export default Rating;
