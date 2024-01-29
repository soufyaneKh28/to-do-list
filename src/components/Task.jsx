import { Edit, Delete } from "@mui/icons-material";
import EditModal from "./EditModal";
import { useState } from "react";
const Task = ({
  mode,
  task,
  tasksList,
  handleSetTask,
  CompletedTasks,
  handlesetCompletedTasks,
}) => {
  function handleDeleteTask() {
    handleSetTask(() => tasksList.filter((tas) => tas.task !== task.id));
  }

  function changeTasksStatus() {
    handlesetCompletedTasks(() => [...CompletedTasks, task]);
    handleDeleteTask();
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [taskChange, setTaskChange] = useState(task.task);

  function confirmChange() {
    if (!taskChange) {
      alert("please add task");
      return;
    } else {
      handleSetTask(() =>
        tasksList.map((tas) =>
          tas.id === task.id
            ? { status: false, id: taskChange, task: taskChange }
            : tas
        )
      );
    }
  }
  // function updateStatus(task) {
  //   handleSetTask(() =>
  //     tasksList.map((tas) =>
  //       tas.id === task.id ? { ...tas, status: !task.status } : tas
  //     )
  //   );
  // }

  function handlechange() {
    handleOpen();
    setTaskChange(() => task.task);
  }
  return (
    <>
      <div
        key={task.task}
        className={` flex items-center justify-between px-3 py-5 ${
          mode ? "bg-white " : "bg-tasks_darkColor "
        }  rounded-[10px] my-2 ${mode ? " box-shadow" : ""}`}
      >
        <div className=" flex items-center">
          <div
            className={`w-[20px] h-[20px] bg-white rounded-full cursor-pointer border-[1px] border-gray-400`}
            onClick={changeTasksStatus}
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
              onClick={handlechange}
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
      <EditModal
        open={open}
        handleSetOpen={handleOpen}
        handleSetClose={handleClose}
        task={task}
        tasksList={tasksList}
        handleSetTask={handleSetTask}
        taskChange={taskChange}
        mode={mode}
        setTaskChange={setTaskChange}
        confirmChange={confirmChange}
      />
    </>
  );
};

export default Task;
