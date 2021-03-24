import { Employee } from "./employee";

export interface Company {
  company_id: string;
  name: string;
  desc: string;
  status: number;
  update_at: number;
  owners: Employee[];
  owner_ids: string[];
  user_ids: string[];
  trace_count: number;
  key?: string;
}

export const createCompany = (): Company => ({
  company_id: "",
  name: "",
  desc: "",
  status: 1,
  trace_count: 0,
  owners: [],
  owner_ids: [],
  update_at: 0,
  user_ids: [],
});
