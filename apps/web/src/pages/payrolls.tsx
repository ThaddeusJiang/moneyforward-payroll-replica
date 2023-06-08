import Header from "../components/Layout/Header";
import MainContent from "../components/Layout/MainContent";
import MemberList from "../components/MemberList/MemberList";
import PayrollForm from "../modules/Payroll/PayrollForm/PayrollForm";
import PayrollsHeader from "../modules/Payroll/PayrollsHeader/PayrollsHeader";

export default function Page() {
  const hasAlert = false;
  return (
    <>
      <Header title="給与計算" icon="💰" />
      <MainContent>
        {hasAlert ? <div className="w-full alert alert-info"></div> : null}
        <PayrollsHeader />
        {/* TODO: should use grid */}
        <div className="flex mt-5">
          <div className="w-1/5">
            <MemberList />
          </div>
          <div className="ml-[30px] w-full">
            <PayrollForm />
          </div>
        </div>
      </MainContent>
    </>
  );
}
