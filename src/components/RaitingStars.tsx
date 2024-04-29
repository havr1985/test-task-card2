import { Star } from "lucide-react";
import { FC } from "react";

interface IRaitingStarsProps {
  raiting: number;
}

export const RaitingStars: FC<IRaitingStarsProps> = ({ raiting }) => {
  const newRaiting = Math.ceil(raiting);

  return (
    <ul className=" flex">
      {Array.from({ length: newRaiting }).map((_, idx) => (
        <li key={idx}>
          <Star color="black" fill="black" />
        </li>
      ))}
    </ul>
  );
};
