import DataTable from "../../components/DataTable/DataTable";
import { MockPeriodCollections } from "../../data/mock/SettingPeriodCollections";

const SettingPeriodCollectionsTable = () => {
  const data = MockPeriodCollections.items;
  const columns = [
    "項目名",
    "締め日",
    "支給日",
    "社会保険料徴収方法",
    "最終給与の翌月に退職者を表示する",
    "有効/無効",
    "従業員数（退職者含む）",
  ];
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <h2 className="py-2">締め日グループ</h2>
        <button className="">編集</button>
      </div>
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default SettingPeriodCollectionsTable;
