import { db } from "../../clients/db";

type GetPaymentItemSettingFn = (id: string) => Promise<{ item: any }>;
export const getPaymentItemSetting: GetPaymentItemSettingFn = async (id) => {
  console.log("getPaymentItemSetting");
  const [item] = (await db?.select(`PaymentInfoItemDefinition:${id}`)) ?? [];
  return { item };
};

type UpdatePaymentItemSettingFn = (
  id: string,
  body: any
) => Promise<{ item: any }>;
export const updatePaymentItemSetting: UpdatePaymentItemSettingFn = async (
  id,
  body
) => {
  console.log("updatePaymentItemSetting", {
    id,
    body,
  });
  const updated = await db?.change(`PaymentInfoItemDefinition:${id}`, body);
  return { item: updated };
};
