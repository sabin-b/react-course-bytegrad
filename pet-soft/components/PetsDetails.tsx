import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

interface PetsDetailsProps {
  className?: string;
}

export default function PetsDetails({ className }: PetsDetailsProps) {
  return (
    <Card
      className={cn(
        "w-full h-full sm:col-start-2 sm:col-span-full rounded border-primary/20 shadow-sm sm:row-start-1 sm:row-span-full",
        className
      )}
    >
      PetsDetails
    </Card>
  );
}
