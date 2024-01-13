import { Edit, Delete } from "@mui/icons-material";

const Task = ({ mode, task, tasksList, handleSetTask }) => {
  function handleDeleteTask() {
    handleSetTask(() => tasksList.filter((tas) => tas.task !== task.id));
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
      }  rounded-[10px] my-2 ${mode ? " box-shadow" : ""}`}
    >
      <div className=" flex items-center">
        <div
          className={`w-[20px] h-[20px] bg-white rounded-full cursor-pointer border-[1px] border-gray-400`}
          onClick={""}
        ></div>

        <div
          className={` ms-5 ${mode ? "text-gray-950" : "text-white"} ${
            task.status ? " underline" : ""
          }`}
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
            onClick={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
