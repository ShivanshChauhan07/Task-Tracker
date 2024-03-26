import React, { useEffect } from "react";
import { modalClose } from "./utils/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./utils/pendingSlice";

const ModalDelete = () => {
  const dispatch = useDispatch();
  const currentTask = useSelector((store) => store?.editModal);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <div className="z-10 fixed w-screen h-screen  bg-black/35">
      <div className="border-2 z-20 absolute lg:w-1/4 lg:h-1/5  rounded-md  top-1/2 left-1/2 lg:-translate-x-40 lg:-translate-y-40 min-[320px]:-translate-x-28 min-[320px]:-translate-y-12">
        <header className="flex justify-between p-2 bg-white">
          <h4>DELETE TASK</h4>
          <span
            className="bg-red-500 p-1 px-2 text-white cursor-pointer"
            onClick={() => dispatch(modalClose())}
          >
            X
          </span>
        </header>
        <div className="bg-gradient-to-r from-[#f4dbf9] to-[#dfdbfc] p-3 flex flex-col h-[72%]  justify-around">
          <div className="">
            <h5>Do You Wish to Delete Task</h5>
          </div>
          <div className="flex justify-between">
            <div>
              <h3>Task</h3>
            </div>
            <div className="flex gap-x-10">
              <button
                className="bg-[#24689e] text-white h-8 w-16 rounded-sm "
                onClick={() => {
                  dispatch(modalClose());
                  dispatch(deleteTask(currentTask));
                }}
              >
                Yes
              </button>
              <button
                className="bg-[#24689e] text-white h-8 w-16 rounded-sm "
                onClick={() => {
                  dispatch(modalClose());
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
