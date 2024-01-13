import "./index.css";
import PropTypes from "prop-types";

import { AddTask, Completed, Header, TasksList } from "./components";
import { useState } from "react";
const App = () => {
  const tasks = [
    {
      task: "qqqq",
      id: "qqqq",
      status: true,
    },
    {
      task: "aqwdfe",
      id: "aqwdfe",
      status: true,
    },
  ];
  const [task, setTask] = useState("");

  const [tasksList, setTasksList] = useState([]);
  const [CompletedTasks, setCompletedTasks] = useState(tasks);

  function handleAddTask() {
    if (!task) return;
    let newTask = {
      task: task,
      id: task,
      status: false,
    };
    setTasksList([...tasksList, newTask]);
    setTask("");
  }

  const [mode, setMode] = useState(false);
  function handleMode() {
    setMode(!mode);
  }

  return (
    <div
      className={`app h-full min-h-[100vh] ${
        mode ? "bg-white" : " bg-main_color"
      } transition-all`}
    >
      <div className=" max-w-[700px] mx-auto">
        <Header mode={mode} handleMode={handleMode} />
        <AddTask
          task={task}
          setTask={setTask}
          mode={mode}
          handleAddTask={handleAddTask}
        />
        <div className="w-[95%] my-3 mx-auto h-[1px] bg-slate-600"></div>
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
      </div>
    </div>
  );
};

export default App;
