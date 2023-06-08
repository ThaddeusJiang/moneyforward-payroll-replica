import Link from "next/link";

interface News {
  title: string;
  link: string;
  updatedAt: string;
}

type Props = { news: News };

const NewsLink = ({ news }: Props) => {
  return (
    <div key={news.title} className="flex ">
      <div className=" flex-none  w-32">{news.updatedAt}</div>
      <div>
        <Link href={news.link} className="link link-info">
          {news.title}
        </Link>
      </div>
    </div>
  );
};

export default NewsLink;
