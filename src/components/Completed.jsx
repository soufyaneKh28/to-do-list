import React from "react";
import { completed_dark, completed_light } from "../assets";
const Completed = ({ mode }) => {
  return (
    <div className="mx-5 my-6 min-h-[250px]">
      <div className=" text-gray-300 my-2">Completed</div>

      <div className="flex flex-col items-center">
        <div className=" w-[200px]">
          <img src={mode ? completed_light : completed_dark} alt="" />
        </div>

        <h1
          className={` text-[28px] text-center ${
            mode ? "text-black" : "text-white"
          }`}
        >
          Let&apos;s Add New Tasks :)
        </h1>
      </div>
    </div>
  );
};

export default Completed;
