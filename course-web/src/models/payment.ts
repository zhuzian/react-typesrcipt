export interface Payment {
  payment_id: string;
  order_id: string;
  value: string;
  paid: string;
  last_paid: string;
  create_at: number;
  status: number;
  key?: number;
}

export const createPayment = (): Payment => ({
  payment_id: "",
  order_id: "",
  value: "0",
  paid: "0",
  last_paid: "0",
  create_at: 0,
  status: 1,
});
