import { getPaymentItemSetting, updatePaymentItemSetting } from "./db";

export const JsonGetPaymentItemSetting = async (req, res) => {
  const { id } = req.params;
  const { item } = await getPaymentItemSetting(id);
  return res.json({ item });
};

export const UpdatePaymentItemSetting = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const { item } = await updatePaymentItemSetting(id, body);
  return res.json({ item });
};
