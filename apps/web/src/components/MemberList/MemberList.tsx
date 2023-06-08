const MemberList = () => {
  const members = [
    {
      id: "1",
      code: "F0001",
      firstName: "日進",
      lastName: "太郎",
    },
    {
      id: "2",
      code: "F0002",
      firstName: "日進",
      lastName: "次郎",
    },
  ];
  return (
    <div className="w-full form-control h-screen">
      <div className="w-full flex flex-col space-y-4">
        <select name="" id="" className="select">
          <option value="">全社</option>
        </select>

        <select name="" id="" className="select">
          <option value="">全部門</option>
        </select>

        <select name="" id="" className="select">
          <option value="">全職種</option>
        </select>

        <select name="" id="" className="select">
          <option value="">全契約種別</option>
        </select>
        <input
          type="text"
          className="input input-bordered"
          placeholder="従業員コード／氏名"
        />
      </div>
      <div className="w-full mt-5 bg-white h-full">
        <div className="h-full">
          {members.map((item) => (
            <div key={item.id} className="px-4 py-4 ">
              {item.code} / {item.firstName} {item.lastName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberList;
