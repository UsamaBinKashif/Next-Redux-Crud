import { v4 as uuidv4 } from "uuid";

import { addData, deleteData, updateData } from "redux/actions/actions";
import { toast } from "react-toastify";
const initialState = {
  data: [],
};

const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case addData: {
      const { task } = action.payload;
      const updatedTask = { task, id: uuidv4(), completed: "false" };
      const updatedData = [...state.data, updatedTask];
      const updatedState = {
        ...state,
        data: updatedData,
      };
      toast.success("Added task", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      });
      return updatedState;
    }
    case deleteData: {
      const { id } = action.payload;
      const updatedDataList = state.data.filter((d) => d.id !== id);
      const updatedState = {
        ...state,
        data: updatedDataList,
      };
      toast.info("Deleted task", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      });
      return updatedState;
    }
    case updateData: {
      const { id } = action.payload;
      const updatedData = state.data.map((d) => {
        if (d.id === id) {
          return {
            ...d,
            completed: true,
          };
        }
        return d;
      });
      toast.success("Completed Task", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      });
      return {
        ...state,
        data: updatedData,
      };
    }

    default:
      return state;
  }
};

export default crudReducer;
