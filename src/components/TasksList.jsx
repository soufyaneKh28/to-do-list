import { character_dark, character_light } from "../assets";
import Task from "./Task";

const TasksList = ({
  mode,
  tasksList,
  handleSetTask,
  CompletedTasks,
  handlesetCompletedTasks,
}) => {
  return (
    <div className="mx-5 pt-5 min-h-[300px]">
      <div className=" text-gray-300 my-2">To Do</div>

      {tasksList.length === 0 ? (
        <div className="flex flex-col items-center">
          <div className=" w-[200px]">
            <img src={mode ? character_light : character_dark} alt="" />
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
          .filter((task) => !task.status == true)
          .map((task) => (
            <Task
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

export default TasksList;
