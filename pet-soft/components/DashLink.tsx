"use client";

import { cn } from "@/lib/utils";
import { DashLink } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DashLinkProps = DashLink;
export default function DashLinkItem({ name, pathName }: DashLinkProps) {
  const routeUrl = usePathname();
  return (
    <li
      className={cn(" px-2 py-[2px] font-normal rounded-md", {
        " bg-secondary/20 ": routeUrl === pathName,
      })}
    >
      <Link href={pathName}>{name}</Link>
    </li>
  );
}
