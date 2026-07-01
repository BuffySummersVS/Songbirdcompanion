export default function HeroCard({ hero, onSelectHero }) {
  const roleClass = hero.role.toLowerCase();

  return (
    <button
      type="button"
      className={`hero-card ${roleClass}`}
      onClick={() => onSelectHero(hero)}
    >
      <div className="hero-portrait-wrap">
        <img src={hero.image} alt={hero.name} className="hero-portrait" />
      </div>

      <div>
        <h3>{hero.name}</h3>
        <p>{hero.role}</p>
      </div>
    </button>
  );
}