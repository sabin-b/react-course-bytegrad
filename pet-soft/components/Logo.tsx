import siteLogo from "@/public/Logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={siteLogo} alt="site-logo" />
    </Link>
  );
}
