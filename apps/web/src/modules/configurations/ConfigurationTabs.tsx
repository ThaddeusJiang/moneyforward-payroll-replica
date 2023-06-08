import Tabs from "../../components/Tabs/Tabs";

const ConfigurationTabs = () => {
  const tabs = [
    {
      text: "全般",
      link: "/configurations",
    },
    {
      text: "住民税",
      link: "/configurations",
    },
    {
      text: "事業所",
      link: "/configurations",
    },
    {
      text: "支給項目",
      link: "/configurations/payment-items-monthly",
    },
    {
      text: "控除項目",
      link: "/configurations",
    },
    {
      text: "勤怠項目",
      link: "/configurations",
    },
    {
      text: "社会保険",
      link: "/configurations",
    },
    {
      text: "労働保険",
      link: "/configurations",
    },
    {
      text: "年度",
      link: "/configurations",
    },
    {
      text: "システム",
      link: "/configurations",
    },
  ];

  return <Tabs tabs={tabs} />;
};

export default ConfigurationTabs;
