import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const NAV_LINKS = [
    { title: "home", href: "/", icon: "🏠" },
    { title: "payrolls", href: "/payrolls", icon: "💰" },
    { title: "bonuses", href: "/bonuses", icon: "🎁" },
    { title: "employees", href: "/employees", icon: "👨‍👩‍👧‍👦" },
    { title: "configurations", href: "/configurations", icon: "⚙️" },
    { title: "reports", href: "/reports", icon: "📊" },
    { title: "integrations", href: "/integrations", icon: "🔌" },
  ];
  return (
    <div className="flex">
      <aside className=" fixed  w-60 border-r h-screen flex flex-col justify-between">
        <nav>
          <header className=" border-b flex items-center justify-center py-4 text-3xl">
            クラウド給与
          </header>
          <ul className="menu">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className=" border-b">
                <Link href={link.href}>
                  <span>{link.icon}</span>
                  {link.title}
                </Link>
              </li>
            ))}
            <li className=" border-b">
              <span>
                <span>🔮</span>その他業務
              </span>
            </li>
          </ul>
        </nav>
        <footer className="menu">
          <button className=" border-t">メニューを閉じる</button>
          <div className=" flex items-center justify-center py-4 border-t">
            <div>
              <p>Amami, Inc.</p>
              <p>利用規約</p>
              <p>個人情報保護方針</p>
            </div>
          </div>
        </footer>
      </aside>
      <main className="ml-60 bg-gray-100 w-full">{children}</main>
    </div>
  );
};

export default MainLayout;
