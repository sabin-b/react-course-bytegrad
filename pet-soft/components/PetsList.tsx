import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

interface PetsListProps {
  className?: string;
}

export default function PetsList({ className }: PetsListProps) {
  return (
    <Card
      className={cn(
        "w-full h-full sm:col-start-1 rounded shadow-sm border-primary/20 sm:col-span-1 sm:row-start-2 sm:row-span-full",
        className
      )}
    >
      <CardContent className="p-0">Petslist</CardContent>
    </Card>
  );
}
