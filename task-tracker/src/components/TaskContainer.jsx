import React from "react";
import Filter from "./Filter";
import TaskBody from "./TaskBody";
import Modal from "./Modal";

const TaskContainer = () => {
  // Container Two component filter option body and task body container to maintain readibility.
  return (
    <div className="border-2 border-white p-4 rounded-lg min-h-[75vh] flex flex-col ">
      <Filter />
      <TaskBody />
    </div>
  );
};

export default TaskContainer;
