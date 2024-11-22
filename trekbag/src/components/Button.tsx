import React from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnType?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  btnType,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "btn",
        className,
        btnType === "secondary" ? "btn--secondary" : ""
      )}
    >
      {children}
    </button>
  );
}
