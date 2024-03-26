import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { modalClose } from "./utils/modalSlice";
import { addPendingTask } from "./utils/pendingSlice";

const ModalCreate = () => {
  const titleRef = useRef(null);
  const desRef = useRef(null);
  const teamRef = useRef(null);
  const assigneeRef = useRef(null);
  const priorityRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div className="z-10 fixed w-full h-full  bg-black/35">
      <div className="z-20 absolute top-1/2 left-1/2 border-2 rounded-lg lg:w-3/12 -translate-x-40 -translate-y-40">
        <header className="flex bg-white justify-between px-4">
          <h3 className="text-lg font-semibold">CREATE A TASK</h3>
          <span
            className="p-1 bg-red-500 text-sm px-2 cursor-pointer text-white"
            onClick={() => dispatch(modalClose())}
          >
            X
          </span>
        </header>
        <div className="bg-gradient-to-r from-[#f4dbf9] to-[#dfdbfc] p-6 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <h5>Title:</h5>
            <input
              ref={titleRef}
              className="border-2 border-slate-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex justify-between ">
            <h5>Description:</h5>
            <input
              ref={desRef}
              className="border-2 border-slate-200 rounded-md h-12"
              type="text"
            />
          </div>
          <div className="flex justify-between ">
            <h5>Team:</h5>
            <input
              ref={teamRef}
              className="border-2 border-slate-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex justify-between ">
            <h5>Assignees:</h5>
            <input
              ref={assigneeRef}
              className="border-2 border-slate-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex justify-between ">
            <h5>Priority:</h5>
            <select ref={priorityRef} className="w-1/6" name="priority" id="">
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              className="text-white p-1 px-2 rounded-md bg-blue-600 "
              onClick={() => {
                const date = new Date().toISOString();
                //date.split("T")[0]
                const data = {
                  title: titleRef.current.value,
                  description: desRef.current.value,
                  team: teamRef.current.value,
                  assignees: assigneeRef.current.value,
                  priority: priorityRef.current.value,
                  status: "Pending",
                  startDate: date.split("T")[0],
                  endDate: "",
                };
                dispatch(addPendingTask(data));
                dispatch(modalClose());
              }}
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
