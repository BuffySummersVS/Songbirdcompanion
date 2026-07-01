import HeroCard from "./HeroCard";

export default function HeroGrid({ heroes, onSelectHero }) {
  return (
    <section className="hero-grid">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          onSelectHero={onSelectHero}
        />
      ))}
    </section>
  );
}