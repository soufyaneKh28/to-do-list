import { Edit, Delete } from "@mui/icons-material";

const Task = ({ task, tasksList, handleSetTask }) => {
  function handleDeleteTask() {
    handleSetTask(() => tasksList.filter((tas) => tas.task !== task.id));
  }
  return (
    <div
      key={task.task}
      className=" flex items-center justify-between px-3 py-5 bg-tasks_darkColor rounded-[10px] my-2"
    >
      <div className=" flex items-center">
        <div
          className="w-[20px] h-[20px] bg-white rounded-full cursor-pointer"
          onClick={""}
        ></div>

        <div className={` ms-5 text-white ${task.status ? " underline" : ""}`}>
          {task.task}
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <div className="mx-2 bg-">
          <Edit className=" text-white  p-[2px] cursor-pointer " />
        </div>
        <div className="mx-2">
          <Delete
            className=" text-white p-[2px] cursor-pointer"
            onClick={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
