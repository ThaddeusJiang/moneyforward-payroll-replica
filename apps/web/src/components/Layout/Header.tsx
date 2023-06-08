type Props = {
  title: string;
  icon: string;
  guideTitle?: string;
  guideLink?: string;
};

const Header = ({ title, icon, guideTitle, guideLink }: Props) => {
  return (
    <header className="w-full h-[60px] bg-white py-2 px-[30px]">
      <div className="flex  justify-between w-full items-center h-full">
        <h1 className="  text-2xl">
          <span>{icon}</span>
          <span className="ml-2">{title}</span>
        </h1>
        <div className="flex space-x-4">
          <span className="">ℹ️</span>
          {guideLink ? <a href={guideLink}>{guideTitle}</a> : null}
          <div>天海株式会社</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
