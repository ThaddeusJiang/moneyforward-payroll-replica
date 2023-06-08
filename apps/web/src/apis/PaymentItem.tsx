import { API_HOST } from "../data/mock/const/api";

// export const getPaymentItems = async () => {
//   const response = await fetch(`${API_HOST}/payment-item-settings/monthly`);
//   const data = await response.json();
//   return data;
// };

// TODO: interface.d.tsに移動
export type PaymentItemType = "monthly" | "hourly" | "daily" | "bonus";

export const updatePaymentItemSettings = async (params: {
  type: PaymentItemType;
  data: any;
}) => {
  const { type, data } = params;
  const response = await fetch(`${API_HOST}/payment-item-settings/${type}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

type GetPaymentItemsFn = (type: PaymentItemType) => Promise<any>;
export const getPaymentItems: GetPaymentItemsFn = async (type) => {
  const response = await fetch(`${API_HOST}/payment-item-settings/${type}`);
  const data = await response.json();
  return data;
};
