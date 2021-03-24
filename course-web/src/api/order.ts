import { Order, SearchOrderOptions } from "../models/order";
import { Payment } from "../models/payment";
import mAxios from "./m-axios";

export const getOrderList = (opt: SearchOrderOptions) => {
  return mAxios({
    method: "post",
    url: "/admin/order/list",
    data: opt,
  }).then((res) => res.data);
};

export const addOrder = (order: Order) => {
  return mAxios({
    method: "post",
    url: "/admin/order/add",
    data: order,
  }).then((res) => res.data);
};

export const editOrder = (order: Order) => {
  return mAxios({
    method: "post",
    url: "/admin/order/edit",
    data: order,
  }).then((res) => {
    console.log("editOrder: ", res);

    return res.data;
  });
};

export const delOrder = (order: Order) => {
  return mAxios({
    method: "post",
    url: "/admin/order/del",
    data: order,
  }).then((res) => {
    return res.data;
  });
};

export const payOrder = (payment: Payment) => {
  return mAxios({
    method: "post",
    url: "/admin/order/pay",
    data: payment,
  }).then((res) => res.data);
};

export const getPayList = (orderID: string) => {
  return mAxios({
    method: "post",
    url: "/admin/order/pay/list",
    data: {
      order_id: orderID,
    },
  }).then((res) => res.data);
};

export const cancelPayment = (payment: Payment) => {
  return mAxios({
    method:"post",
    url:"/admin/order/unpay",
    data: payment
  }).then(res => res.data)
}