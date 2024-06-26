import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { plus } from "../assets";

const AddTask = ({ task, setTask, mode, handleAddTask }) => {
  useEffect(
    function () {
      document.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
          handleAddTask();
        }
      });
    },
    [handleAddTask]
  );

  return (
    <div className="my-2">
      <div className=" px-4 relative">
        <input
          type="text"
          value={task}
          className={` w-full py-3 rounded-full ${
            mode ? "text-gray-900" : "text-white"
          }  px-4 ${mode ? " bg-gray-300" : "bg-main_dark"}`}
          placeholder="Add Item"
          onChange={(e) => setTask(e.target.value)}
        />
        <div>
          <img
            src={plus}
            alt="plus"
            className=" absolute right-[22px] top-1 w-[40px] rounded-full p-2 cursor-pointer z-30 bg-blue-900 transition-all hover:rotate-90"
            onClick={handleAddTask}
          />
        </div>
      </div>
    </div>
  );
};
AddTask.prototype = {
  task: PropTypes.object.isRequired,
  setTask: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
};
export default AddTask;
