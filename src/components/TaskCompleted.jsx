import { Edit, Delete } from "@mui/icons-material";
import { check } from "../assets";
import { useState } from "react";

const TaskCompleted = ({
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

  // function updateStatus(task) {
  //   handleSetTask(() =>
  //     tasksList.map((tas) =>
  //       tas.id === task.id ? { ...tas, status: !task.status } : tas
  //     )
  //   );
  // }

  return (
    <div
      key={task._id}
      className={` flex items-center justify-between px-3 py-5 ${
        mode ? "bg-white " : "bg-tasks_darkColor "
      }  rounded-[10px] my-2 ${mode ? " box-shadow" : ""} opacity-50`}
    >
      <div className=" flex items-center">
        <div
          className={`w-[20px] h-[20px] bg-green-200 rounded-full cursor-pointer border-[1px] border-gray-400 p-[2px] flex justify-center items-center`}
          onClick={changeTasksStatus}
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
            onClick={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCompleted;
