/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Chart } from "./Chart";
import UserDetail from "./UserDetail";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, updateData } from "redux/actions/actions";

const HomePage = () => {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch({ type: deleteData, payload: { id } });
  };
  const update = (id) => {
    dispatch({ type: updateData, payload: { id } });
  };

  return (
    <>
      <section className="min-h-screen bg-black flex flex-col ">
        <UserDetail />
        {/* TODOS */}
        <section>
          <div className="container px-5 mx-auto">
            <div className="text-center">
              <h1 className="sm:text-2xl text-xl font-medium text-center  text-white mb-4">
                Tasks
              </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {data.map((todos) => (
                <>
                  <div className="p-2 sm:w-80 w-full">
                    <div
                      className={
                        todos.completed === true
                          ? "bg-gray-400 rounded flex p-4 h-full items-center line-through "
                          : "bg-gray-100 rounded flex p-4 h-full items-center "
                      }
                    >
                      <p className=" font-medium text-[18px]">{todos.task}</p>
                      <span className="ml-auto space-x-2">
                        <button
                          title="COMPLETED"
                          onClick={() => update(todos.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-hara-rang"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </button>
                        <button title="DELETE" onClick={() => remove(todos.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        {/* TODOS END*/}

        {/* CHART */}
        <Chart />
        {/* CHART */}
      </section>
    </>
  );
};

export default HomePage;
