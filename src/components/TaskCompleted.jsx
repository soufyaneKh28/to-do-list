import { Edit, Delete } from "@mui/icons-material";
import { check } from "../assets";

const TaskCompleted = ({
  mode,
  task,
  tasksList,
  handleSetTask,
  CompletedTasks,
  handlesetCompletedTasks,
}) => {
  function handleDeleteCompletedTask() {
    handlesetCompletedTasks(() =>
      CompletedTasks.filter((tas) => tas.task !== task.id)
    );
  }
    function changeTasks() {
      handleSetTask(() => [...tasksList, task]);
      handleDeleteCompletedTask();
    }

    // function updateStatus(task) {
    //   handleSetTask(() =>
    //     tasksList.map((tas) =>
    //       tas.id === task.id ? { ...tas, status: !task.status } : tas
    //     )
    //   );
    // }

    return (
      <div
        key={task.task}
        className={` flex items-center justify-between px-3 py-5 ${
          mode ? "bg-white " : "bg-tasks_darkColor "
        }  rounded-[10px] my-2 ${mode ? " box-shadow" : ""} opacity-50`}
      >
        <div className=" flex items-center">
          <div
            className={`w-[20px] h-[20px] bg-green-200 rounded-full cursor-pointer border-[1px] border-gray-400 p-[2px] flex justify-center items-center`}
            onClick={changeTasks}
          >
            <img src={check} alt="" className="w-full object-cover" />
          </div>

          <div
            className={` ms-5 ${
              mode ? "text-gray-950" : "text-white"
            } ${" line-through"}`}
          >
            {task.task}
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <div className="mx-2 bg-">
            <Edit
              className={` ${
                mode ? "text-gray-950" : "text-white"
              }  p-[2px] cursor-pointer `}
            />
          </div>
          <div className="mx-2">
            <Delete
              className={` ${
                mode ? "text-gray-950" : "text-white"
              } p-[2px] cursor-pointer`}
              onClick={handleDeleteCompletedTask}
            />
          </div>
        </div>
      </div>
    );
};

export default TaskCompleted;
