import { cn } from "@/lib/utils";
import React from "react";

type H1Props = React.HTMLAttributes<HTMLHeadingElement>;
const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "text-3xl lg:text-6xl font-bold tracking-tight",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

H1.displayName = "H1";
export default H1;
