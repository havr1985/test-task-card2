import { useState } from "react";
import { Features } from "./Features";
import { Reviews } from "./Reviews";
import { Delivery } from "./Delivery";
import { Faq } from "./Faq";
import { Separator } from "./ui/separator";

type MenuItem = "features" | "reviews" | "delivery" | "faq";

export const NavButtons = () => {
  const [select, setSelect] = useState<MenuItem>("features");

  const onClickSelect = (item: MenuItem) => {
    setSelect(item);
  };

  return (
    <>
      <ul className=" flex gap-5 mb-3 font-bold text-gray-400">
        <li className={`${select === "features" && "text-black"}`}>
          <button onClick={() => onClickSelect("features")}>FEATURES</button>
        </li>
        <li className={`${select === "reviews" && "text-black"}`}>
          <button onClick={() => onClickSelect("reviews")}>REVIEWS</button>
        </li>
        <li className={`${select === "delivery" && "text-black"}`}>
          <button onClick={() => onClickSelect("delivery")}>DELIVERY</button>
        </li>
        <li className={`${select === "faq" && "text-black"}`}>
          <button onClick={() => onClickSelect("faq")}>FAQ</button>
        </li>
      </ul>
      <Separator />
      {select === "features" && <Features />}
      {select === "reviews" && <Reviews />}
      {select === "delivery" && <Delivery />}
      {select === "faq" && <Faq />}
    </>
  );
};
