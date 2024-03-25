import React from "react";
import TaskColumn from "./TaskColumn";

const TaskBody = () => {
  return (
    <div className="my-4 flex flex-col justify-center gap-y-2 lg:px-10 lg:flex lg:flex-row lg:flex-1 lg:justify-around  ">
      <TaskColumn title="Pending" color="#8c8b8f" />
      <TaskColumn title="In Progress" color="#e89924" />
      <TaskColumn title="Completed" color="#42a81e" />
      <TaskColumn title="Deloyed" color="#353976" />
      <TaskColumn title="Deffered" color="#f68871" />
    </div>
  );
};

export default TaskBody;
