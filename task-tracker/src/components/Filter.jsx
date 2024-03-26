import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalOpenCreate } from "./utils/modalSlice";
import { addResult } from "./utils/resultSlice";
import _, { map } from "underscore";

const Filter = () => {
  //-------------hooks-----------------------
  const [name, setName] = useState(undefined);
  const [select, setSelect] = useState("priority");
  const [sort, setSort] = useState("priority");
  const [date, setDate] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState("");
  //--------------Redux Store Hooks--------------
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.pending);
  //----------------variables---------------------
  let result = "";
  let flag = true;

  // -------------------------Name Filter logic----------------------------
  if (data && name) result = data.filter((item) => item.assignees === name);
  // --------------------------xxxxxxxxxxxxxxxx----------------------------

  //----------------- Priority Select Option Filter logic-------------------
  if (select !== "priority" && result.length)
    result = result.filter((item) => item.priority === select);
  else if (select !== "priority")
    result = data.filter((item) => item.priority === select);
  //-------------------------xxxxxxxxxxxxxxxxxxxx---------------------------

  //-------------------- Sorting Filter logic ------------------
  if (result.length && sort !== "priority" && sort === "P0")
    result = _.sortBy(result, "priority");
  else if (result.length && sort !== "priority" && sort === "P2")
    result = _.sortBy(result, "priority").reverse();
  else if (sort !== "priority" && sort === "P0") {
    const temp = data;
    result = _.sortBy(temp, "priority");
  } else if (sort === "P2") {
    const temp = data;
    result = _.sortBy(temp, "priority").reverse();
  }
  //-------------------------xxxxxxxxx--------------------------

  //-------------------------Date Filter Logic-------------------------------
  if (result.length && date)
    result = result.filter(
      (item) => item.startDate === date || item.endDate === date
    );
  else if (data && date) {
    result = data.filter((item) => {
      // console.log(item);
      return (
        item.startDate === date ||
        item.endDate === date ||
        (new Date(item.startDate) < new Date(date) &&
          new Date(date) < new Date(item.endDate))
      );
    });
  }

  //-------------------------xxxxxxxxxxxxxxxxx--------------------------------
  if (date && result.length === 0) flag = true;
  else flag = false;

  if (result !== undefined) dispatch(addResult(result));
  // console.log(date);

  return (
    <div className="flex flex-col gap-y-2  lg:flex lg:flex-row lg:justify-between lg:px-4 ">
      <div className=" w-3/5 flex flex-col gap-y-4 min-[320px]:mx-auto lg:mx-0">
        <div className="flex flex-col  lg:flex lg:flex-row lg:justify-around">
          <h6 className="text-lg font-medium">Filter By:</h6>
          <input
            className="border-2 border-zinc-200 px-2 rounded-md text-slate-500"
            type="text"
            placeholder="Assignee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            name="priority"
            className=" border-2 border-zinc-200 rounded-md text-slate-500 lg:w-1/5"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            defaultValue="priority"
          >
            <option value="priority" selected>
              Priority
            </option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <input
            className="border-2 border-zinc-200 px-2 rounded-md text-slate-500 lg:w-1/4"
            type="date"
            placeholder="DD/MM/YYY - DD/MM/YYY"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className=" flex justify-start lg:px-7 lg:gap-x-14">
          <h6 className="text-lg font-medium">Sort By:</h6>
          <select
            name="priority"
            className="border-2 border-zinc-200 rounded-md text-slate-500 lg:w-1/5"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="priority" selected>
              Priority
            </option>
            <option value="P0">Ascending</option>
            <option value="P2">Decending</option>
          </select>
        </div>
      </div>
      <div
        className="flex flex-col justify-center lg:items-start lg:w-56"
        id="toast"
      >
        <button
          className="rounded-sm bg-[#25689c] text-white p-2 px-8  lg:w-56 "
          onClick={() => dispatch(modalOpenCreate(true))}
        >
          {" "}
          Add New Task
        </button>
        <p className={flag ? "text-red-500" : "hidden"}>
          No Result Matched ! Showing all Task.
        </p>
      </div>
    </div>
  );
};

export default Filter;
