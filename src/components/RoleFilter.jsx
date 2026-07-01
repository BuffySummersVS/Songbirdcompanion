const filters = ["All", "Tank", "Damage", "Support"];

export default function RoleFilter({ filter, setFilter }) {
  return (
    <div className="filter-row">
      {filters.map((item) => (
        <button
          key={item}
          className={filter === item ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}