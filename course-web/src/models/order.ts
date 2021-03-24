import { Business, createBusiness } from "./business";
import { Company, createCompany } from "./company";
import { createEmployee, Employee } from "./employee";

export interface Order {
  order_id: string;
  business_id: string;
  business: Business;
  company_id: string;
  company: Company;
  employee_id: string;
  employee: Employee;
  price: string;
  status: number;
  paid: string;
  sign_at: number;
  start_at: number;
  end_at: number;
  create_at?: number;
  desc?: string;
  key?: number;
}

export const createOrder = (): Order => ({
  order_id: "",
  business: createBusiness(),
  business_id: "",
  company: createCompany(),
  company_id: "",

  employee: createEmployee(),
  employee_id: "",
  price: "",
  status: 1,
  desc: "",
  start_at: 0,
  end_at: 0,
  sign_at: 0,
  paid: "0",
});

export interface SearchOrderOptions {
  page?: number;
  company?: string;
  employee?: string;
}

export const createSearchOrderOptions = (): SearchOrderOptions => ({
  page: 1,
});
