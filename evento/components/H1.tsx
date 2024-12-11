import { cn } from "@/lib/utils";
import React from "react";

type H1Props = React.HTMLAttributes<HTMLHeadingElement> & {
  size?: "small" | "big";
};

const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, children, size, ...props }, ref) => {
    return (
      <h1 className={cn(className, size)} ref={ref} {...props}>
        {children}
      </h1>
    );
  }
);

H1.displayName = "H1";
export default H1;
