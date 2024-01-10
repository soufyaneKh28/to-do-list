import "./index.css";
import PropTypes from "prop-types";

import { AddTask, Completed, Header, TasksList } from "./components";
import { useState } from "react";
const App = () => {
  const tasks = [];
  const [task, setTask] = useState("");

  const [tasksList, setTasksList] = useState(tasks);

  function handleAddTask() {
    if (!task) return;
    let newTask = {
      task: task,
      id: task,
      status: true,
    };
    setTasksList([...tasksList, newTask]);
    setTask("");
  }
  return (
    <div className="app ">
      <div className=" max-w-[700px] mx-auto">
        <Header />
        <AddTask task={task} setTask={setTask} handleAddTask={handleAddTask} />
        <div className="w-[95%] my-3 mx-auto h-[1px] bg-slate-600"></div>
        <TasksList tasksList={tasksList} />
        <Completed />
      </div>
    </div>
  );
};

export default App;
