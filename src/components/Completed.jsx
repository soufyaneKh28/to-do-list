import React from "react";
import Task from "./Task";
import { completed_dark, completed_light } from "../assets";
const Completed = ({ mode, tasksList, handleSetTask }) => {
  return (
    <div className="mx-5 py-5 min-h-[300px]">
      <div className=" text-gray-300 my-2">Completed</div>

      {tasksList.length === 0 ? (
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
      ) : (
        tasksList
          .filter((task) => task.status == true)
          .map((task) => (
            <Task
              key={task.task}
              task={task}
              tasksList={tasksList}
              handleSetTask={handleSetTask}
              mode={mode}
            />
          ))
      )}
    </div>
  );
};

export default Completed;


