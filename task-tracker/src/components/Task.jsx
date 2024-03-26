import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalOpenDelete, modalOpenEdit } from "./utils/modalSlice";
import { currentEditModal } from "./utils/editModalSlice";

const Task = ({
  title,
  description,
  team,
  assignees,
  priority,
  status,
  startDate,
  endDate,
}) => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const [deleteDisable, setDeleteDisable] = useState(false);

  return (
    <div className="bg-[#f3f1f2] rounded-sm p-2 h-1/2  flex flex-col justify-around box-border">
      <header className="flex justify-between border-b border-zinc-500 py-2">
        <h5>{title}</h5>
        <p className="bg-[#24689e] text-white text-xs p-1">{priority}</p>
      </header>
      <div className="flex flex-col  flex-1 justify-around">
        <div>
          <p className="text-xs">{description}</p>
        </div>
        <div className="z-0 relative flex justify-between">
          <h5>@{assignees}</h5>
          <span
            className="bg-[#24689e] text-white text-xs p-1 px-2 hover: cursor-pointer"
            onClick={() => {
              setMenu(!menu);
              const data = {
                title: title,
                description: description,
                team: team,
                assignees: assignees,
                priority: priority,
                status: status,
                startDate: startDate,
                endDate: endDate,
              };
              dispatch(currentEditModal(data));
              if (status === "Completed") setDeleteDisable(true);
              else setDeleteDisable(false);
            }}
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
          <div
            className={`absolute bg-zinc-200 p-2 w-1/2 h-16 -right-2 top-6 rounded-md flex flex-col justify-around text-left ${
              !menu && "hidden"
            }`}
          >
            <h5
              className="hover:cursor-pointer hover:bg-zinc-300"
              onClick={() => {
                setMenu(!menu);
                dispatch(modalOpenEdit(true));
              }}
            >
              Edit
            </h5>
            <div className={deleteDisable && "cursor-not-allowed"}>
              <h5
                className={
                  deleteDisable
                    ? "border-2 border-t-white  pointer-events-none hover:bg-zinc-300  text-red-500"
                    : "border-2 border-t-white hover:cursor-pointer hover:bg-zinc-300"
                }
                onClick={() => {
                  setMenu(!menu);
                  dispatch(modalOpenDelete(true));
                }}
              >
                Delete
              </h5>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#24689e] text-white rounded-md  w-3/4">
            {status === "Pending" ? "Assign" : status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
