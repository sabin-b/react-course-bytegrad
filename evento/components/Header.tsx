import { pageLinks } from "@/config/site";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-14 border-b border-b-white/10 px-4 sm:px-9">
      {/* logo */}
      <Logo />

      {/* nav links */}
      <nav>
        <ul className="flex items-center gap-x-6">
          {pageLinks.map((link) => (
            <li key={link.path}>
              <Link className="text-white/40 hover:text-white" href={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
