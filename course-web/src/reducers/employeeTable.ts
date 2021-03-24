import { ActionTypes } from "../constants";
import { createEmployee, Employee, IAction } from "../models";

interface IEmployeeTable {
  employees: Employee[],
  editEmployee: Employee
}




const initState = ():IEmployeeTable => ({
  employees:[],
  editEmployee: createEmployee(),
})


const reducer = (state = initState, action: IAction<any>) => {
  
  switch(action.type) {
  }

}


export default reducer 