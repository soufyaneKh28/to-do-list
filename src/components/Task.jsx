import { Edit, Delete } from "@mui/icons-material";

const Task = ({ task }) => {
  return (
    <div
      key={task}
      className=" flex items-center justify-between px-3 py-5 bg-tasks_darkColor rounded-[10px] my-2"
    >
      <div className=" flex items-center">
        <div
          className="w-[20px] h-[20px] bg-white rounded-full cursor-pointer"
          onClick={""}
        ></div>

        <div className={` ms-5 text-white ${task.status ? " underline" : ""}`}>
          {task}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="">
          <Edit className=" text-white  p-[2px] cursor-pointer " />
        </div>
        <div>
          <Delete className=" text-white p-[2px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Task;
