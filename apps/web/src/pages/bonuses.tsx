import Header from "../components/Layout/Header";
import MainContent from "../components/Layout/MainContent";
import MemberList from "../components/MemberList/MemberList";
import BonusForm from "../modules/Payroll/BonusForm/BonusForm";
import BonusHeader from "../modules/Payroll/BonusHeader/BonusHeader";

export default function Page() {
  const hasAlert = false;
  return (
    <>
      <Header title="賞与計算" icon="🎁" />

      <MainContent>
        {hasAlert ? <div className="w-full alert alert-info"></div> : null}

        <BonusHeader />
        {/* TODO: should use grid */}
        <div className="flex mt-5">
          <div className="w-1/5">
            <MemberList />
          </div>
          <div className="ml-[30px] w-full">
            <BonusForm />
          </div>
        </div>
      </MainContent>
    </>
  );
}
