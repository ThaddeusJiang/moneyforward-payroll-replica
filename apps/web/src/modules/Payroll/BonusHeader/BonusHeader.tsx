const BonusHeader = () => {
  return (
    <div className="flex justify-between w-full py-4 border-b-2">
      <div className="flex space-x-4">
        <div>2022年夏賞与 (2022年07月29日支給)</div>
        <div>対象者数：15</div>
      </div>
      <div className="space-x-2">
        <button className="btn">メモ</button>
        <button className="btn">振込業務</button>
        <button className="btn">メニュー</button>
      </div>
    </div>
  );
};

export default BonusHeader;
