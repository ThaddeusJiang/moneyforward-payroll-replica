import Image from "next/image";
import Link from "next/link";
import NewsLink from "../../../components/NewsLink/NewsLink";

const SystemGuide = () => {
  const guides = [
    {
      title:
        "CSVファイルによる従業員情報の追加・更新に関する仕様変更のお知らせ",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-11-06",
    },
    {
      title:
        "2022年10月の法改正に伴う育児休業中の社会保険料に関する変更のお知らせ",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-10-06",
    },
  ];

  const news = [
    {
      title:
        "「マネーフォワード クラウド人事管理」との連携における従業員情報インポートの仕様変更について",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-11-09",
    },
    {
      title: "「支給控除一覧表」の表示に関する変更のお知らせ",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-11-09",
    },
    {
      title: "支給/控除/勤怠インポートのサンプルCSVに関する変更のお知らせ",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-10-26",
    },
    {
      title:
        "「マネーフォワード クラウド人事管理」との連携における従業員情報インポートの仕様変更について",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-11-09",
    },
    {
      title: "「支給控除一覧表」の表示に関する変更のお知らせ",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-11-09",
    },
    {
      title: "支給/控除/勤怠インポートのサンプルCSVに関する変更のお知らせ",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-10-26",
    },
    {
      title: "支給/控除/勤怠インポートのサンプルCSVに関する変更のお知らせ",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-10-26",
    },
  ];

  const faqs = [
    {
      title: "＞複数の従業員情報を簡単に登録する方法はありますか？",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-11-09",
    },
    {
      title:
        "＞確定処理した給与計算結果を修正することはできないのでしょうか？",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-11-09",
    },
    {
      title: "＞勤怠サービスとのデータ連携は可能ですか？      ",
      link: "https://support.moneyforward.com/hc/ja/articles/900001999563",
      updatedAt: "2021-11-09",
    },
  ];

  return (
    <>
      <div>
        <h4 className="py-2 border-b">重要なご案内</h4>
        <div className="py-2">
          {guides.map((guide) => (
            <NewsLink key={guide.title} news={guide} />
          ))}
        </div>
      </div>

      <div>
        <h4 className="py-2 border-b">お知らせ</h4>
        <div className="py-2">
          {news.map((news) => (
            <NewsLink key={news.title} news={news} />
          ))}
        </div>
        <a href="">お知らせ一覧へ</a>
      </div>

      <div>
        <h4 className="py-2 border-b">よくあるご質問</h4>
        <div className="py-2">
          {faqs.map((item) => (
            <p key={item.title}>
              <Link href={item.link} className="link ">
                {item.title}
              </Link>
            </p>
          ))}
        </div>
        <a href="" className="link link-info">
          FAQページへ
        </a>
      </div>

      <div>
        <h4 className="py-2 border-b">お問い合わせ先</h4>

        <a href="" className="link link-info">
          サポートページで確認する
        </a>
      </div>
      <div>
        <h4 className="py-2 border-b">事業者番号:8082-7062</h4>
      </div>

      <div>
        <img src="https://assets-payroll.moneyforward.com/assets/dashboards/banner_cloud_community-3aa8a8ef17ab31c927cb3437efb37ec0eedec61ff90703c5a3772f8acf4784f6.png" />

        <img
          className="mt-4"
          src="https://assets-payroll.moneyforward.com/assets/dashboards/banner_si_login-412b54b383db5f87832a9492d1ff11f6fea6dbf8db727df7470d30dad79fbb5a.png"
          alt=""
        />
      </div>
    </>
  );
};

export default SystemGuide;
