import { getPaySlip, getPaySlips } from "./db";

export const JsonGetPayslips = async (req, res) => {
  const { items } = await getPaySlips();
  return res.json({ items });
};

export const JsonGetPayslip = async (req, res) => {
  const { item } = await getPaySlip(req.params.id);
  return res.json({ item });
};
