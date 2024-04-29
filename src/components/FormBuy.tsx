import { useFormik } from "formik";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import { FC } from "react";
import { Button } from "./ui/button";

interface IFormBuy {
  color: string[];
}

export const FormBuy: FC<IFormBuy> = ({ color }) => {
  console.log(color[0]);
  const formik = useFormik({
    initialValues: {
      color: "",
      count: 1,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className=" font-bold mb-4">COLOR:</h2>
      <RadioGroup defaultValue="black" className=" flex">
        {color.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2 ">
            <div className={`w-8 h-8 bg-[${item}] rounded-md`}></div>
            <RadioGroupItem value={item} id={item} />
          </div>
        ))}
      </RadioGroup>
      <div className=" flex mt-10 gap-4 ">
        <input
          className=" text-black boorder-2 bg-white rounded-md px-4 py-4"
          id="count"
          name="count"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.count}
        />
        <Button type="submit" size="lg">ADD TO BAG</Button>
      </div>
    </form>
  );
};
