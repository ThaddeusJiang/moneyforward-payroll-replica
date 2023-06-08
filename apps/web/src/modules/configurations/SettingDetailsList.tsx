import { MockSettingDetails } from "../../data/mock/MockSettingDetails";

const SettingDetailsList = () => {
  const data = MockSettingDetails.items;
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="py-2">締め日グループ</h2>
        <button className="">編集</button>
      </div>
      <div className="border">
        <dl className="w-full  divide-y bg-white">
          {data.map((item) => (
            <div key={item.name} className="flex w-full  divide-x">
              <dt className="p-2 w-1/5">{item.name}</dt>
              <dd className="p-2 ">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default SettingDetailsList;
