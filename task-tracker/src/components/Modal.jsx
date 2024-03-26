import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalClose, modalOpenEdit } from "./utils/modalSlice";
import { currentEditModal } from "./utils/editModalSlice";
import { findTask } from "./utils/pendingSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.editModal);
  const { title, description, team, assignees, priority, status } = data;
  const [checkStatus, setCheckStatus] = useState(status);
  const [updatePriority, setUpdatePriority] = useState(priority);
  const [button, setbutton] = useState(true);
  const validStatus = [
    "Pending",
    "In Progress",
    "Completed",
    "Deloyed",
    "Deffered",
  ];

  const resetHandler = () => {
    setUpdatePriority("P0");
    setCheckStatus("Pending");
    dispatch(
      findTask({
        ...data,
        priority: "P0",
        status: "Pending",
        endDate: "",
      })
    );
    dispatch(modalClose());
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  useEffect(() => {
    if (validStatus.includes(checkStatus)) {
      document.getElementById("submit").style.backgroundColor = "#24689e";
      setbutton(false);
    } else {
      document.getElementById("submit").style.backgroundColor = "#1a4264";
      setbutton(true);
    }
  }, [checkStatus]);

  return (
    <div className=" z-20 fixed top-0 left-0 w-full h-full  bg-black/35">
      <div className=" z-20 border-2 fixed  rounded-md lg:w-1/5 lg:h-4/6 top-1/2 left-1/2 lg:-translate-x-40 lg:-translate-y-60 min-[320px]:-translate-x-36 min-[320px]:-translate-y-40">
        <header className="flex justify-between p-2 bg-white">
          <h4>EDIT TASK</h4>
          <span
            className="bg-red-500 p-1 px-2 text-white cursor-pointer"
            onClick={() => dispatch(modalClose())}
          >
            X
          </span>
        </header>
        <div className="bg-gradient-to-r from-[#f4dbf9] to-[#dfdbfc] p-3 flex flex-col h-[85%] justify-around">
          <div className="">
            <h5>Title:</h5>
            <input
              className="border-2 border-slate-200 rounded-md w-full"
              type="text"
              value={title}
              disabled={true}
            />
          </div>
          <div>
            <h5>Description:</h5>
            <textarea
              className="border-2 border-slate-200 rounded-md w-full"
              rows="2"
              cols="22"
              value={description}
              disabled={true}
            />
          </div>
          <div>
            <h5>Team:</h5>
            <input
              className="border-2 border-slate-200 rounded-md w-full"
              type="text"
              value={team}
              disabled={true}
            />
          </div>
          <div>
            <h5>Assignee:</h5>
            <input
              className="border-2 border-slate-200 rounded-md w-full"
              type="text"
              value={assignees}
              disabled={true}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <h5>Priority:</h5>
              <select
                name="priority"
                className="border-2 border-zinc-200 rounded-md"
                value={updatePriority}
                onChange={(e) => setUpdatePriority(e.target.value)}
              >
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
            </div>
            <div className="flex w-32">
              <h5>Status:</h5>
              <input
                className="w-5/6"
                type="text"
                value={checkStatus}
                onChange={(e) => setCheckStatus(e.target.value)}
              />
            </div>
          </div>
        </div>
        <footer className="bg-white h-[7%] flex justify-end gap-x-2 py-1">
          <button
            className="rounded-sm px-2 w-20 text-white bg-[#24689e]"
            id="submit"
            type="button"
            disabled={button}
            onClick={() => {
              let date = "";
              dispatch(modalClose());
              if (checkStatus === "Completed") date = new Date().toISOString();
              console.log(date);
              dispatch(
                findTask({
                  ...data,
                  priority: updatePriority,
                  status: checkStatus,
                  endDate: date.split("T")[0],
                })
              );
            }}
          >
            Submit
          </button>
          <button
            className="rounded-sm px-2 w-20 text-white bg-[#24689e]"
            type="button"
            onClick={resetHandler}
          >
            Reset
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
