import EmployeesTable from "../components/EmployeesTable/EmployeesTable";
import Header from "../components/Layout/Header";
import MainContent from "../components/Layout/MainContent";
import EmployeeFilter from "../modules/Employee/EmployeeFilter/EmployeeFilter";

export default function Page() {
  const hasAlert = false;
  return (
    <>
      <Header title="従業員情報" icon="👨‍👩‍👧‍👦" />
      <MainContent>
        {hasAlert ? <div className="w-full alert alert-info"></div> : null}
        <EmployeeFilter />
        {/* TODO: should use grid */}
        <div className="flex justify-between my-4">
          <div className=" form-control ">
            <div>
              <span>表示件数：</span>
              <select name="" id="" className="select select-bordered">
                <option value="">25件</option>
              </select>
            </div>
          </div>
          <div>
            <button className="btn ">従業員の追加／更新</button>
          </div>
        </div>

        <EmployeesTable />
      </MainContent>
    </>
  );
}
