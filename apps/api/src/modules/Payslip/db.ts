import { db } from "../../clients/db";

export const getPaySlips = async () => {
  console.log("getPaySlips");
  const items = await db?.select("Payslip");
  return { items };
};

export const getPaySlip = async (id: string) => {
  console.log("getPaySlip", id);
  const [item] = (await db?.select(`Payslip:${id}`)) ?? [];
  return { item };
};
