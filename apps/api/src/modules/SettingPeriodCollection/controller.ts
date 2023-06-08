import {
  getSettingPeriodCollections,
  updateSettingPeriodCollection,
} from "./db";

export const JsonGetSettingPeriodCollections = async (req, res) => {
  const data = await getSettingPeriodCollections();
  return res.json(data);
};

export const UpdateSettingPeriodCollection = async (req, res) => {
  console.log(req.body);
  const { items } = req.body;
  await updateSettingPeriodCollection({ items });
  return res.json({ items });
};
