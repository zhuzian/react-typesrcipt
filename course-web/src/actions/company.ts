import API from "../api";
import { IAction } from "../models";
import { Company } from "../models/company";
import {
  CancelEdit,
  ICompanyTable,
  initCompanyTable,
  SetCompanies,
  SetEditIndex,
  SetRecordIndex,
  UpdateEditCompany,
} from "../reducers/companyTable";

export const updateCompanies = (page: number) => {
  return (dispatch) => {
    API.getCompanies(page).then((res) => {
      var tmp: Company[] = [];
      let key = 1;
      let total = 0;

      if (res.data.companies) {
        res.data.companies.forEach((item) => {
          item.key = key;
          key += 1;
          tmp.push(item);
        });
        total = res.data.total;
      }
      console.log("get total ", res.data);

      dispatch(setCompanies(tmp, total));
    });
  };
};

const setCompanies = (
  cl: Company[],
  total: number = 0
): IAction<ICompanyTable> => ({
  type: SetCompanies,
  payload: { ...initCompanyTable(), companies: cl, total },
});

export const openEditCompanyModal = (
  index: number
): IAction<ICompanyTable> => ({
  type: SetEditIndex,
  payload: { ...initCompanyTable(), editIndex: index },
});

export const openRecordCompanyModal = (
  index: number
): IAction<ICompanyTable> => ({
  type: SetRecordIndex,
  payload: { ...initCompanyTable(), recordIndex: index },
});

export const cancelRecordCompanyModal = (): IAction<ICompanyTable> => ({
  type: SetRecordIndex,
  payload: { ...initCompanyTable(), recordIndex: -1 },
});

export const cancelEditCompanyModal = (): IAction<ICompanyTable> => ({
  type: CancelEdit,
  payload: initCompanyTable(),
});

export const updateEditCompany = (c: Company, cancelModel = false) => {
  return (dispatch) => {
    API.editCompany(c).then((res) => {
      let company: Company = res.data;
      company.key = c.key;
      dispatch(updateEditCompany1(company));
      if (cancelModel) {
        dispatch(cancelEditCompanyModal());
      }
    });
  };
};

const updateEditCompany1 = (c: Company): IAction<ICompanyTable> => ({
  type: UpdateEditCompany,
  payload: { ...initCompanyTable(), editCompany: c },
});
