import { ActionTypes } from "../constants";
import { IAction } from "../models";
import { Employee, createEmployee } from "../models";

const initState = createEmployee();
const reducer = (state = initState, action: IAction<Employee>) => {
  switch (action.type) {
    case ActionTypes.SAVE_EMPLOYEE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
