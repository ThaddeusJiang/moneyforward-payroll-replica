import Link from "next/link";
import Header from "../../components/Layout/Header";
import MainContent from "../../components/Layout/MainContent";
import Tabs from "../../components/Tabs/Tabs";
import APIIntegrationsList from "../../modules/Integration/APIIntegrationsList";
import APIKey from "../../modules/Integration/APIKey";
import CSVIntegrationsList from "../../modules/Integration/CSVIntegrationsList";

export default function Page() {
  const tabs = [
    {
      text: "勤怠管理",
      link: "/integrations",
    },
    {
      text: "労務",
      link: "/integrations",
    },
    {
      text: "タレントマネジメント",
      link: "/integrations",
    },
    {
      text: "銀行振込",
      link: "/integrations",
    },
    {
      text: "マイナンバー",
      link: "/integrations",
    },
    {
      text: "経費計算",
      link: "/integrations",
    },
    {
      text: "福利厚生",
      link: "/integrations",
    },
    {
      text: "社会保険",
      link: "/integrations",
    },
    {
      text: "年末調整",
      link: "/integrations",
    },
    {
      text: "システム",
      link: "/integrations",
    },
  ];

  return (
    <>
      <Header title="連携設定" icon="⚙️" />
      <MainContent>
        <h1 className=" text-lg my-5">連携サービス一覧</h1>
        <Tabs tabs={tabs} />
        <div>
          <APIIntegrationsList />
        </div>
        <div>
          <CSVIntegrationsList />
        </div>

        <div>
          <APIKey />
        </div>
      </MainContent>
    </>
  );
}
