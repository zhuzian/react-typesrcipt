
import { IAction } from "../models";
import { Company, createCompany } from "../models/company";

// 使用这种方式，后续每次变更 都创建这个接口的对象
export interface ICompanyTable {
  companies: Company[];
  editIndex: number;
  recordIndex: number;
  editCompany: Company;
  total: number;
}

export const SetEditIndex = "SetEditIndex";
export const SetCompanies = "RefreshCompanyList";
export const CancelEdit = "CancelEdit";
export const UpdateEditCompany = "UpdateEditCompany";
export const SetRecordIndex = "SetRecordIndex";

export const initCompanyTable = (): ICompanyTable => ({
  companies: [],
  editIndex: -1,
  recordIndex: -1,
  editCompany: createCompany(),
  total: 0,
});

const reducer = (
  state = initCompanyTable(),
  action: IAction<ICompanyTable>
): ICompanyTable => {
  if (action.payload === undefined) {
    return state;
  }

  switch (action.type) {
    case SetEditIndex:
      let editCompany = createCompany();
      if (action.payload.editIndex >= 0) {
        editCompany = state.companies[action.payload.editIndex];
      }
      return {
        ...state,
        editIndex: action.payload.editIndex,
        editCompany,
      };

    case SetCompanies:
      return {
        ...state,
        editIndex: -1,
        companies: action.payload.companies,
        total: action.payload.total,
      };

    case CancelEdit:
      return {
        ...state,
        editIndex: -1,
      };
    case UpdateEditCompany:
      var tmp = { ...state };
      let tmpCompanies = [...tmp.companies];
      tmpCompanies[tmp.editIndex] = action.payload.editCompany;
      tmp.editCompany = action.payload.editCompany;
      tmp.companies = tmpCompanies;
      console.log("get tmp value: ", tmp);

      return tmp;
    case SetRecordIndex:
      let editCompany1 = createCompany();
      if (action.payload.recordIndex >= 0) {
        editCompany1 = state.companies[action.payload.recordIndex];
      }
      return {
        ...state,
        recordIndex: action.payload.recordIndex,
        editCompany: editCompany1,
      };

    default:
      return state;
  }
};

export default reducer;
