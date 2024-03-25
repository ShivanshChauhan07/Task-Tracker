import React from "react";
import TaskColumn from "./TaskColumn";

const TaskBody = () => {
  return (
    <div className="my-4 px-10 flex flex-1 justify-around  border-2 border-black ">
      <TaskColumn title="Pending" color="#8c8b8f" />
      <TaskColumn title="In Progress" color="#e89924" />
      <TaskColumn title="Completed" color="#42a81e" />
      <TaskColumn title="Deloyed" color="#353976" />
      <TaskColumn title="Deffered" color="#f68871" />
    </div>
  );
};

export default TaskBody;
