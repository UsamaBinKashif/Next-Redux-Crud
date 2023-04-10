/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addData } from "redux/actions/actions";
const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    if (task === "") {
      toast.error("Please add some task", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch({ type: addData, payload: { task } });
      setTask("");
    }
  };
  return (
    <>
      <section className="bg-black text-white h-screen ">
        <div className=" px-5 py-24 mx-auto">
          <Link href="/" className="flex text-sm items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            Go Back
          </Link>

          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-2xl text-xl font-medium ">
              Add your tasks here...
            </h1>
          </div>
          <div className="flex  sm:w-1/2 sm:flex-row  flex-col mx-auto  px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 sm:items-end">
            <div className="flex-grow w-full">
              <label for="task" className=" text-sm ">
                TASK
              </label>
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-hara-rang focus:bg-white  text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black"
              />
            </div>

            <button
              onClick={add}
              className="text-white bg-blue-500 border-0 py-2 px-6  rounded text-base"
            >
              ADD
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTask;
