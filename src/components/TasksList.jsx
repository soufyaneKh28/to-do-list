import Task from "./Task";

const TasksList = ({ tasksList, handleSetTask }) => {
  return (
    <div className="mx-5 my-3 ">
      <div className=" text-gray-300 my-2">To Do</div>
      {tasksList.map((task) => (
        <Task
          key={task.task}
          task={task}
          tasksList={tasksList}
          handleSetTask={handleSetTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
