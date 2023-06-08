import Link from "next/link";

type Props = {
  tabs: {
    text: string;
    link: string;
  }[];
};

const Tabs = ({ tabs }: Props) => {
  return (
    <div className="tabs w-full py-5">
      {tabs.map((item) => (
        <span
          key={item.text}
          className="block tab tab-bordered min-w-min flex-auto"
        >
          <Link href={item.link}>{item.text}</Link>
        </span>
      ))}
    </div>
  );
};

export default Tabs;
