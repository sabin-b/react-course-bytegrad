import Stat from "./Stat";

interface StatsProps {
  charactersCount: number;
  wordsCount: number;
  instagramCount: number;
  facebookCount: number;
}

export default function Stats({
  charactersCount,
  wordsCount,
  facebookCount,
  instagramCount,
}: StatsProps) {
  return (
    <section className="stats">
      <Stat label="Words" value={wordsCount} />
      <Stat label="Characters" value={charactersCount} />
      <Stat label="Instagram" value={instagramCount} />
      <Stat label="Facebook" value={facebookCount} />
    </section>
  );
}
