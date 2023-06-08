const EmployeeFilter = () => {
  return (
    <form className="bg-white w-full p-5 border">
      <div className="grid grid-cols-4 gap-4 form-control">
        <div>
          <label className="label">所属事業所</label>
          <select name="" id="" className="select select-bordered w-full">
            <option value="">指定なし</option>
          </select>
        </div>
        <div>
          <label className="label">部門</label>
          <select name="" id="" className="select select-bordered w-full">
            <option value="">指定なし</option>
          </select>
        </div>
        <div>
          <label className="label">職種</label>
          <select name="" id="" className="select select-bordered w-full">
            <option value="">指定なし</option>
          </select>
        </div>
        <div>
          <label className="label">契約種別</label>
          <select name="" id="" className="select select-bordered w-full">
            <option value="">指定なし</option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="label">
            苗字
          </label>
          <input type="text" className="input input-bordered w-full" />
        </div>
        <div>
          <label htmlFor="" className="label">
            名前
          </label>
          <input type="text" className="input input-bordered w-full" />
        </div>
        <div>
          <label htmlFor="" className="label">
            従業員コード
          </label>
          <input type="text" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="label">在籍状況</label>
          <select name="" id="" className="select select-bordered w-full">
            <option value="">指定なし</option>
          </select>
        </div>
      </div>
      <div className=" divider"></div>
      <div className="flex justify-center space-x-4">
        <button className="btn btn-primary">検索</button>
        <button className="btn">クリア</button>
      </div>
    </form>
  );
};

export default EmployeeFilter;
