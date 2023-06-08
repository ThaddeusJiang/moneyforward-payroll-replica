const SystemAlert = () => {
  const messages = [
    {
      text: "年末調整機能は、2021年10月6日をもって、提供を終了しました(詳細はこちら)",
    },
    {
      text: "2021年以降の年末調整については、マネーフォワード クラウド年末調整をご利用ください。            ",
    },
  ];
  return (
    <div className="alert border border-info text-info">
      <div className="w-full ">
        <div className="">
          <div>
            {messages.map((item) => (
              <div key={item.text} className="">
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAlert;
