import FeatureCard from "../components/FeatureCard/FeatureCard";
import Header from "../components/Layout/Header";
import SystemAlert from "../modules/System/SystemAlert/SystemAlert";
import SystemGuide from "../modules/System/SystemGuide/SystemGuide";

export default function Page() {
  const mainFeatures = [
    {
      title: "初期設定チュートリアル",
      description: "説明を見ながら給与計算に必要な事業所設定を行いましょう。",
      description2: "使い方の詳細はこちらです。",
    },
    {
      title: "従業員設定",
      description: "従業員の基本情報を登録しましょう。",
      description2: "従業員の詳細設定はこちらです。",
    },
    {
      title: "メンバー追加",
      description:
        "従業員をマネーフォワード クラウド給与にログインできるようにしましょう。",
      description2: "Web給与明細で紙の業務を減らしましょう。      ",
    },
    {
      title: "連携設定",
      description:
        "マネーフォワード クラウド給与と勤怠サービスや労務サービスを連携して、",
      description2: "給与計算をラクにしましょう。      ",
    },
  ];

  return (
    <>
      <Header title="ホーム" icon="🏠" />
      <main className="px-[30px] py-5 max-w-screen-lg">
        <div className="mt-5 mb-[30px]">
          <SystemAlert />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full ">
            {mainFeatures.map((item) => (
              <div key={item.title} className="mb-4">
                <FeatureCard
                  title={item.title}
                  description={item.description}
                  description2={item.description2}
                />
              </div>
            ))}
          </div>
          <div className="w-full">
            <SystemGuide />
          </div>
        </div>
      </main>
    </>
  );
}
