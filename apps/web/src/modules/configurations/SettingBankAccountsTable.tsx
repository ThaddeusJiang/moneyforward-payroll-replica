import DataTable from "../../components/DataTable/DataTable";
import { MockBankAccounts } from "../../data/mock/MockBankAccounts";

const SettingBankAccountsTable = () => {
  const data = MockBankAccounts.items;
  const columns = [
    "口座名",
    "金融機関名",
    "支店名",
    "種類",
    "口座番号",
    "名義人",
    "振込方法",
    "振込依頼人コード",
  ];

  return (
    <section className="w-full">
      <div className="flex justify-between">
        <h2 className="py-2">支払口座</h2>
        <button className="">編集</button>
      </div>
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default SettingBankAccountsTable;
