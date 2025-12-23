import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./theme.css";

export default function Star() {
  const [rating, setRating] = useState(0);

  return (
    <>
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;

        return (
          <FaStar
            key={starValue}
            className={starValue <= rating ? "active" : "inactive"}
            onClick={() => setRating(starValue)}
          />
        );
      })}
    </>
  );
}
