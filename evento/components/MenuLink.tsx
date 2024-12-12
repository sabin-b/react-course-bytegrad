"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  path: string;
  label: string;
}

export default function MenuLink({ label, path }: MenuLinkProps) {
  const pathName = usePathname();
  const isSamePath = pathName === path;
  return (
    <li className="relative flex items-center h-full">
      <Link
        className={cn("text-white/25 hover:text-white", {
          "text-white": isSamePath,
        })}
        href={path}
      >
        {label}
      </Link>
      {isSamePath && (
        <motion.div
          layoutId={"link"}
          className="bg-accent w-full h-1 absolute bottom-0"
        ></motion.div>
      )}
    </li>
  );
}
