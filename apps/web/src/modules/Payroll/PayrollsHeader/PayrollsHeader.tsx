const PayrollsHeader = () => {
  return (
    <div className="flex justify-between w-full py-4 border-b-2">
      <div className="flex space-x-4">
        <div>F15</div>
        <div>2022年11月15日支給</div>
        <div>対象者数：1</div>
      </div>
      <div className="space-x-2">
        <button className="btn">メモ</button>
        <button className="btn">振込業務</button>
        <button className="btn">メニュー</button>
      </div>
    </div>
  );
};

export default PayrollsHeader;
