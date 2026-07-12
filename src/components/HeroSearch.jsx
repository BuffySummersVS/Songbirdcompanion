import { useHazardSearchTrigger } from "../hooks/useHazardSearchTrigger";

export default function HeroSearch({ search, setSearch }) {
  const checkHazardTrigger = useHazardSearchTrigger();

  return (
    <input
      className="hero-search"
      type="text"
      placeholder="Search heroes..."
      value={search}
      onChange={(event) => {
        setSearch(event.target.value);
        checkHazardTrigger(event.target.value);
      }}
    />
  );
}
