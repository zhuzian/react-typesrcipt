import API from "../api"
import { ActionTypes } from "../constants";
import { Employee, IAction, LoginForm } from "../models"

export const login = (form: LoginForm) => {
    return (dispatch) => {
      return  API.Login(form).then((res) => {
            dispatch(saveEmployee(res.data.employee))
            return res
        })
        
    }
}


const saveEmployee = (employee: Employee): IAction<Employee> => ({
    type: ActionTypes.SAVE_EMPLOYEE,
    payload: employee
})