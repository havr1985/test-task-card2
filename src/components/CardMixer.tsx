import { CarouselImg } from "./CarouselImg";
import card from "../../card.json";
import { RaitingStars } from "./RaitingStars";
import { FormBuy } from "./FormBuy";
import { NavButtons } from "./NavButtons";

const { title, price, raiting, color } = card;

export const CardMixer = () => {
  return (
    <div className=" max-w-[1440px] mx-auto mt-20">
      <div className=" flex justify-between">
        <CarouselImg />
        <div className="w-[45%]">
          <div className="  flex justify-between">
            <h1 className=" text-3xl font-bold">{title}</h1>
            <p className=" text-3xl">${price}</p>
          </div>
          <div className=" mt-4 flex gap-4">
            <RaitingStars raiting={raiting} />
            <p>{raiting}</p>
          </div>
          <div className=" mt-10">
            <FormBuy color={color} />
          </div>
          <div className=" mt-10">
            <NavButtons />
          </div>
        </div>
      </div>
    </div>
  );
};
