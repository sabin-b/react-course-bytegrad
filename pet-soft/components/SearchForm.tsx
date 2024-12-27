import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

interface SearchFormProps {
  className?: string;
}

export default function SearchForm({ className }: SearchFormProps) {
  return (
    <form
      className={cn(
        "w-full h-full sm:col-start-1 sm:col-span-1 sm:row-start-1 sm:row-span-1",
        className
      )}
    >
      <Input className="w-full h-full min-h-[45px] rounded text-base bg-white sm:bg-white/50 border-primary/20 shadow-sm text-zinc-800" />
    </form>
  );
}
