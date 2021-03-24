export interface Employee {
  employee_id: string;
  name: string;
  phone: string;
  duty: string;
  key?: number;
}

export const createEmployee = (): Employee => ({
  employee_id: "",
  name: "",
  phone: "",
  duty: ""
});
