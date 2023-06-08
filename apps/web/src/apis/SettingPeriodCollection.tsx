import { API_HOST } from "../data/mock/const/api";

export const getSettingPeriodCollections = async () => {
  const response = await fetch(`${API_HOST}/settings/period-collections`);
  const data = await response.json();
  return data;
};

export const updateSettingPeriodCollections = async (data: any) => {
  const response = await fetch(`${API_HOST}/settings/period-collections`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
