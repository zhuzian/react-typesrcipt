import { combineReducers } from "redux";
import { Employee } from "../models";
import { ICompanyTable } from "./companyTable";
import employeeReducer from "./employee";
import companyTableReducer from "./companyTable";

export interface IState {
  employee: Employee;
  companyTable: ICompanyTable;
}

const rootReducer = combineReducers<IState>({
  employee: employeeReducer,
  companyTable: companyTableReducer,
});

export default rootReducer;
