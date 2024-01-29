import React from "react";
import TaskCompleted from "./TaskCompleted";
import { completed_dark, completed_light } from "../assets";
const Completed = ({
  mode,
  tasksList,
  handleSetTask,
  CompletedTasks,
  handlesetCompletedTasks,
}) => {
  function updateTask() {}
  return (
    <div className="mx-5 py-5 min-h-[300px]">
      <div className=" text-gray-300 my-2">Completed</div>

      {CompletedTasks.length === 0 ? (
        <div className="flex flex-col items-center">
          <div className=" w-[200px]">
            <img src={mode ? completed_light : completed_dark} alt="" />
          </div>

          <h1
            className={` text-[28px] text-center ${
              mode ? "text-black" : "text-white"
            }`}
          >
            Complete Tasks :)
          </h1>
        </div>
      ) : (
        CompletedTasks.map((task) => (
          <TaskCompleted
            key={task.task}
            task={task}
            tasksList={tasksList}
            handleSetTask={handleSetTask}
            mode={mode}
            CompletedTasks={CompletedTasks}
            handlesetCompletedTasks={handlesetCompletedTasks}
          />
        ))
      )}
    </div>
  );
};

export default Completed;


