import "./index.css";
import PropTypes from "prop-types";
import { addToDo, getTodos } from "./handleApi.js";
import { AddTask, Completed, Header, TasksList } from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [display, setDisplay] = useState("All");
  const [tasksList, setTasksList] = useState([]);
  const [CompletedTasks, setCompletedTasks] = useState([]);

  useEffect(
    function () {
      setCompletedTasks(tasksList.filter((task) => task.status));
    },
    [tasksList]
  );

  const [newTask, setNewTask] = useState();
  async function handleAddTask() {
    if (!task) return;
    let newTask2 = {
      task: task,

      status: false,
    };
    //  setTasksList([...tasksList, newTask]);

    addToDo(newTask2);
    setNewTask(newTask2);
    // getTodos(tasksList, setTasksList);
    setTask("");
  }

  const [mode, setMode] = useState(false);
  function handleMode() {
    setMode(!mode);
  }

  useEffect(() => {
    getTodos(setTasksList);
  }, []);

  useEffect(() => {
    getTodos(setTasksList);
  }, [handleAddTask]);

  const handleDeleteRequest = async (task) => {
    try {
      const response = await fetch("https://api.example.com/data/1", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: taskId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result); // Store the response data in state
    } catch (error) {
      setError(error); // Store any error in state
    } finally {
      setLoading(false); // Set loading to false after the request
    }
  };

  return (
    <div
      className={`app h-full min-h-[100vh] ${
        mode ? "bg-white" : " bg-main_color"
      } transition-all`}
    >
      <div className=" max-w-[700px] mx-auto">
        <Header
          mode={mode}
          handleMode={handleMode}
          handleSetDisplay={setDisplay}
        />
        <AddTask
          task={task}
          setTask={setTask}
          mode={mode}
          handleAddTask={handleAddTask}
        />
        <div className="w-[95%] my-3 mx-auto h-[1px] bg-slate-600"></div>
        {display == "All" && (
          <>
            <TasksList
              tasksList={tasksList}
              mode={mode}
              handleSetTask={setTasksList}
              CompletedTasks={CompletedTasks}
              handlesetCompletedTasks={setCompletedTasks}
            />
            <Completed
              mode={mode}
              tasksList={tasksList}
              handleSetTask={setTasksList}
              CompletedTasks={CompletedTasks}
              handlesetCompletedTasks={setCompletedTasks}
            />
          </>
        )}
        {display == "Not" && (
          <TasksList
            tasksList={tasksList}
            mode={mode}
            handleSetTask={setTasksList}
            CompletedTasks={CompletedTasks}
            handlesetCompletedTasks={setCompletedTasks}
          />
        )}
        {display == "Completed" && (
          <Completed
            mode={mode}
            tasksList={tasksList}
            handleSetTask={setTasksList}
            CompletedTasks={CompletedTasks}
            handlesetCompletedTasks={setCompletedTasks}
          />
        )}
      </div>
    </div>
  );
};

export default App;
