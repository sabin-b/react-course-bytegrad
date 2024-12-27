import H1 from "./H1";

interface StatProps {
  title: string;
  description: string;
}

export default function Stat({ title, description }: StatProps) {
  return (
    <div className="sm:text-center">
      <H1>{title}</H1>
      <p className="text-xl">{description}</p>
    </div>
  );
}
