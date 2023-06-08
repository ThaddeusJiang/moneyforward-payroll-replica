import Link from "next/link";
import Header from "../components/Layout/Header";
import MainContent from "../components/Layout/MainContent";

const LinkCards = ({ items }: { items: { text: string; link: string }[] }) => {
  return (
    <div className="flex justify-start flex-wrap gap-2">
      {items.map((item) => (
        <div key={item.text} className="border bg-white p-4  w-96 mr-1">
          <Link href={item.link} className="link link-info  link-hover">
            {item.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  const list1 = [
    {
      text: "給与明細",
      link: "#",
    },
    {
      text: "給与振込一覧表",
      link: "#",
    },
    {
      text: "支給控除一覧表",
      link: "#",
    },
    {
      text: "支給控除一覧表（部門別）",
      link: "#",
    },
  ];
  const list2 = [
    {
      text: "所得税徴収高計算書",
      link: "#",
    },
    {
      text: "所得税徴収高計算書(納期の特例)",
      link: "#",
    },
  ];
  const list3 = [
    {
      text: "住民税徴収額一覧表      ",
      link: "#",
    },
    {
      text: "住民税徴収額一覧表(月単位)      ",
      link: "#",
    },
  ];

  const list4 = [
    {
      text: "賞与明細      ",
      link: "#",
    },
    {
      text: "賞与振込一覧表",
      link: "#",
    },
    {
      text: "支給控除一覧表（賞与）",
      link: "#",
    },
    {
      text: "支給控除一覧表（賞与部門別）",
      link: "#",
    },
  ];

  const list5 = [
    {
      text: "賞与支払届",
      link: "#",
    },
    {
      text: "賞与支払届総括表（※2021/04/01 廃棄）",
      link: "#",
    },
  ];

  const list6 = [
    {
      text: "退職者の源泉徴収票",
      link: "#",
    },
  ];

  const list7 = [
    {
      text: "賃金台帳",
      link: "#",
    },
    {
      text: "労働者名簿",
      link: "#",
    },
  ];

  const list8 = [
    {
      text: "源泉徴収簿",
      link: "#",
    },
  ];

  return (
    <>
      <Header title="帳票一覧" icon="📊" />
      <MainContent>
        <section>
          <h2 className=" text-xl border-b-2 mt-5">毎月確認するもの</h2>
          <div className="my-4">
            <LinkCards items={list1} />
          </div>
          <h3 className=" my-4">税務署へ届出が必要な書類</h3>
          <div>
            <LinkCards items={list2} />
          </div>
          <h3 className=" my-4">住民税額の確認に使うもの</h3>
          <div>
            <LinkCards items={list3} />
          </div>
        </section>
        <section>
          <h2 className=" text-xl border-b-2 mt-5">
            賞与を支給した際に確認するもの
          </h2>
          <div className="my-4">
            <LinkCards items={list4} />
          </div>

          <h3 className="my-4">年金事務所へ届出が必要な書類</h3>
          <div>
            <LinkCards items={list5} />
          </div>
        </section>
        <section>
          <h2 className=" text-xl border-b-2 mt-5">退職者へ発行するもの</h2>
          <div className="my-4">
            <LinkCards items={list6} />
          </div>
        </section>
        <section>
          <h2 className=" text-xl border-b-2 mt-5">
            帳簿作成・保管義務のある書類
          </h2>
          <div className="my-4">
            <LinkCards items={list7} />
          </div>
        </section>
        <section>
          <h2 className=" text-xl border-b-2 mt-5">年末調整関係書類</h2>
          <div className="my-4">
            <LinkCards items={list8} />
          </div>
        </section>
      </MainContent>
    </>
  );
}
