export default function HeroSearch({ search, setSearch }) {
  return (
    <input
      className="hero-search"
      type="text"
      placeholder="Search heroes..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}