export interface UserTrace {
  trace_id: string;
  company_id: string;
  employee_id: string;
  info: string;
  trace_at: number;
  key?: number;
}

export const createUserTrace = (): UserTrace => ({
  trace_id: "",
  company_id: "",
  employee_id: "",
  info: "",
  trace_at: 0,
});
