import { db } from "../../clients/db";

// type UpdateSettingPeriodCollectionFn = ({
//   items,
// }: {
//   items: any;
// }) => Promise<{ items }>;

export const getSettingPeriodCollections = async () => {
  const [item] = (await db?.select("SettingPeriodCollection:single")) ?? [];
  return item;
};
// FIXME: 分开存储 or 一起存储
// 分开存储 read 简单，但是 write 复杂
// 一起存储 read 复杂，但是 write 简单
export const updateSettingPeriodCollection = async ({ items }) => {
  await db?.update("SettingPeriodCollection:single", { items });
  return { items };
};
