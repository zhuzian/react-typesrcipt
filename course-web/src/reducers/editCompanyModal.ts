import { ActionTypes } from "../constants";
import { IAction } from "../models";
import { Company, createCompany } from "../models/company";


interface IEditCompanyModal {
  visible: false
  company: Company
}


const initState = ():IEditCompanyModal => ({
  visible: false,
  company:createCompany()
});

const reducer = (state = initState, action: IAction<IEditCompanyModal>) => {
  switch (action.type) {
    case ActionTypes.ShowEditCompanyModal:
      return {
        ...state,
        visible: true,
      };
    case ActionTypes.HideEditCompanyModal:
      return {
        ...state,
        visible: false,
      };
    case ActionTypes.SetEditCompany:
      return {
        ...state,
        company: action.payload?.company
      }  
  }
};

export default reducer;
