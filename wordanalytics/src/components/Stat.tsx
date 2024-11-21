import { cn } from "../lib/utils";

interface StatProps {
  value: number;
  label: string;
}

export default function Stat({ label, value }: StatProps) {
  return (
    <section className="stat">
      <span className={cn("stat__number", value < 0 && "stat__number--limit")}>
        {value}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
