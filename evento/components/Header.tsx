import { pageLinks } from "@/config/site";
import Logo from "./Logo";
import MenuLink from "./MenuLink";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-14 border-b border-b-white/10 px-4 sm:px-9">
      {/* logo */}
      <Logo />

      {/* nav links */}
      <nav className="h-full">
        <ul className="h-full relative flex items-center gap-x-6">
          {pageLinks.slice(0, 2).map(({ label, path }) => (
            <MenuLink key={path} label={label} path={path} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
