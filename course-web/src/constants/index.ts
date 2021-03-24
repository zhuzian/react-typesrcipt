export const TOKEN = "x-c-token";
export const REFRESH_TOKEN = "x-c-refresh-token";
export const ErrCode = {
  OK: 200,
  TokenTimeout: 12001,
  TokenError: 12002,
};

export const ActionTypes = {
  SAVE_EMPLOYEE: "SAVE_EMPLOYEE",
  FETCH_MEMBER_BY_ID_COMPLETED: "FETCH_MEMBER_BY_ID_COMPLETED",
  UPDATE_MEMBER_FIELD: "UPDATE_MEMBER_FIELD",
  SAVE_MEMBER: "SAVE_MEMBER",

  // 编辑客户公司信息弹窗
  ShowEditCompanyModal: "ShowEditCompanyModal",
  HideEditCompanyModal: "HideEditCompanyModal",
  SetEditCompany: "SetEditCompany",
  RefreshCompanyList: "RefreshCompanyList",
};

export const MEvents = {
  TokenError: "TokenError",
};
