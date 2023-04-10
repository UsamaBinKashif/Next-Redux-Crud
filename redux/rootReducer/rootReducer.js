import { combineReducers } from "redux";
import authReducer from "redux/reducers/authReducer";
import crudReducer from "redux/reducers/crudReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  data: crudReducer,
});

export default rootReducer;
