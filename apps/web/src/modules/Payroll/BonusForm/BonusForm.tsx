type EditableListProps = {
  title: string;
  items: { name: string; value: number }[];
  hasSum?: boolean;
};
const EditableList = ({ title, items, hasSum }: EditableListProps) => {
  const sum = hasSum
    ? items.map((item) => item.value).reduce((a, b) => a + b)
    : 0;

  return (
    <div className="w-full bg-white border flex flex-col justify-between">
      <div>
        <p className="p-2 text-center">{title}</p>
        {items.map((item) => (
          <dl key={item.name} className="p-2 flex justify-between border-t">
            <dt>{item.name}</dt>
            <dd>{item.value}</dd>
          </dl>
        ))}
      </div>

      {hasSum ? (
        <div>
          <dl className="p-2 flex justify-between border-t">
            <dt>合計</dt>
            <dd>{sum}</dd>
          </dl>
        </div>
      ) : null}
    </div>
  );
};

const EditableTable = () => {
  return <table className="w-full h-80 bg-white">勤怠 TODO:</table>;
};

const BonusForm = () => {
  const payItems = [
    {
      name: "役員報酬",
      value: 10000,
    },
    {
      name: "基本給	",
      value: 240000,
    },
    {
      name: "役職手当",
      value: 230000,
    },
    {
      name: "職務給（PJ）	",
      value: 100000,
    },
  ];

  const divideItems = [
    {
      name: "健康保険料	",
      value: 27468,
    },
    {
      name: "介護保険料		",
      value: 4592,
    },
    {
      name: "厚生年金保険料	",
      value: 51240,
    },
    {
      name: "雇用保険料		",
      value: 2850,
    },
    {
      name: "所得税			",
      value: 28420,
    },
    {
      name: "住民税			",
      value: 34200,
    },
  ];

  const resultItems = [
    {
      name: "振込支給額		",
      value: 431230,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      <EditableList items={payItems} title="支給" hasSum />

      <EditableList items={divideItems} title="控除" hasSum />

      <EditableList items={resultItems} title="差引合計" hasSum />

      <div className="flex col-span-3">
        <span className=" w-16">備考</span>
        <div className=" form-control w-full">
          <input type="text" className="input " />
        </div>
      </div>
    </div>
  );
};

export default BonusForm;
