import DashLinkItem from "./DashLink";
import Logo from "./Logo";

const dashLinks = [
  {
    name: "Dashboard",
    pathName: "/app/dashboard",
  },
  {
    name: "Account",
    pathName: "/app/account",
  },
];

export default function Header() {
  return (
    <header className="py-3 mb-3 flex border-b border-white/35 items-center justify-between">
      <Logo />
      <nav>
        <ul className="flex gap-x-6">
          {dashLinks.map((link) => (
            <DashLinkItem key={link.pathName} {...link} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
