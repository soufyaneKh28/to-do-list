import { Edit, Delete } from "@mui/icons-material";
import EditModal from "./EditModal";
import { useCallback, useEffect, useState } from "react";
import { changeStatus, changeTask, getTodos } from "../handleApi";
const Task = ({
  mode,
  task,
  tasksList,
  handleSetTask,
  CompletedTasks,
  handlesetCompletedTasks,
}) => {
  const [deleteTask, setDeleteTask] = useState(false);

  async function handleDeleteTask() {
    //  handleSetTask(() => tasksList.filter((tas) => tas.task !== task.id));

    try {
      const response = await fetch("http://localhost:5000/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: task._id }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setDeleteTask(true);
      console.log(":deleted succesfulluy ", result);
    } catch (error) {
      console.log(error);
    } finally {
      //  setLoading(false); // Set loading to false after the request
    }
    setDeleteTask(false);
  }

  // function changeTasksStatus() {
  //   handlesetCompletedTasks(() => [...CompletedTasks, task]);
  //   changeStatus({ status: !task.status });
  //   // handleDeleteTask();
  // }

  async function changeTasksStatus() {
    if (task.status === true) {
      try {
        const response = await fetch("http://localhost:5000/updateStatus", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: task._id,
            status: false,
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(":Updates succesfulluy ", result);
      } catch (error) {
        console.log(error);
      } finally {
        //  setLoading(false); // Set loading to false after the request
      }
    }
    if (task.status === false) {
      try {
        const response = await fetch("http://localhost:5000/updateStatus", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: task._id,
            status: true,
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(":Updates succesfulluy ", result);
      } catch (error) {
        console.log(error);
      } finally {
        //  setLoading(false); // Set loading to false after the request
      }
    }
  }
  // const changeTasksStatus = useCallback(() => {
  //   async function func() {
  //     if (task.status === true) {
  //       try {
  //         const response = await fetch("http://localhost:5000/updateStatus", {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             _id: task._id,
  //             status: false,
  //           }),
  //         });
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }

  //         const result = await response.json();
  //         console.log(":Updates succesfulluy ", result);
  //       } catch (error) {
  //         console.log(error);
  //       } finally {
  //         //  setLoading(false); // Set loading to false after the request
  //       }
  //     }
  //     if (task.status === false) {
  //       try {
  //         const response = await fetch("http://localhost:5000/updateStatus", {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             _id: task._id,
  //             status: true,
  //           }),
  //         });
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }

  //         const result = await response.json();
  //         console.log(":Updates succesfulluy ", result);
  //       } catch (error) {
  //         console.log(error);
  //       } finally {
  //         //  setLoading(false); // Set loading to false after the request
  //       }
  //     }
  //   }
  //   func();
  // }, [changeStatus]);

  // function changeTasksStatus(task) {
  //   // handlesetCompletedTasks((prevCompletedTasks) => [
  //   //   ...prevCompletedTasks,
  //   //   task,
  //   // ]);
  //   changeStatus({ _id: task._id, status: !task.status });
  //   // handleDeleteTask();
  // }

  useEffect(() => {
    getTodos();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [taskChange, setTaskChange] = useState(task.task);

  function confirmChange() {
    if (!taskChange) {
      alert("please add task");
      return;
    } else {
      // handleSetTask(() =>
      //   tasksList.map((tas) =>
      //     tas.id === task.id
      //       ? { status: false, id: taskChange, task: taskChange }
      //       : tas
      //   )
      // );
      changeTask({ _id: task._id, task: taskChange });
      handleClose();
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
        key={task._id}
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
