import Header from "../../components/Layout/Header";
import MainContent from "../../components/Layout/MainContent";
import ConfigurationTabs from "../../modules/configurations/ConfigurationTabs";
import SettingBankAccountsTable from "../../modules/configurations/SettingBankAccountsTable";
import SettingDetailsList from "../../modules/configurations/SettingDetailsList";

import SettingPeriodCollectionsTable from "../../modules/SettingPeriodCollections/SettingPeriodCollectionsTable";

export default function Page() {
  return (
    <>
      <Header title="基本設定" icon="⚙️" />
      <MainContent>
        <div>
          <ConfigurationTabs />
        </div>

        {/* TODO: should use grid */}
        <div>
          <SettingPeriodCollectionsTable />
        </div>

        <div>
          <SettingDetailsList />
        </div>

        <div>
          <SettingBankAccountsTable />
        </div>
      </MainContent>
    </>
  );
}
