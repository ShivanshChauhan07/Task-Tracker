import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskColumn = ({ title, color }) => {
  const data = useSelector((store) => store?.pending);
  const filter = useSelector((store) => store?.result);

  return (
    <div className=" bg-white flex flex-col rounded-lg w-1/6  ">
      <header
        style={{ backgroundColor: color }}
        className={`text-center p-2 text-white rounded-t-lg`}
      >
        <h4 className="font-bold text-lg">{title}</h4>
      </header>
      <div className="p-2 flex flex-col flex-1 gap-y-1">
        {filter.length
          ? filter.map((singleItem, index) => {
              if (singleItem.status === title)
                return <Task key={index} {...singleItem} />;
              return;
            })
          : data.map((singleItem, index) => {
              if (singleItem.status === title)
                return <Task key={index} {...singleItem} />;
              return;
            })}
      </div>
    </div>
  );
};

export default TaskColumn;
