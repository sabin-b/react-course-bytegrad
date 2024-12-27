import { cn } from "@/lib/utils";
import React from "react";

type H1Props = React.HTMLAttributes<HTMLHeadingElement>;

const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn("text-3xl  font-semibold", className)}
      >
        {children}
      </h1>
    );
  }
);

H1.displayName = "H1";
export default H1;
