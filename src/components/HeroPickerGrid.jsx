import { useLayoutEffect, useRef, useState } from "react";

// Measures actual rendered position of each button in the (responsive,
// auto-fill) grid and flags which ones sit on an outer edge. Positions are
// re-measured whenever the hero list changes or the grid is resized, since
// column count depends on the container's width, not a fixed value we could
// hard-code with :nth-child.
function measureEdges(grid) {
  const items = Array.from(grid.children).filter(el => el.tagName === "BUTTON");
  if (items.length === 0) return [];

  const tops = items.map(el => el.offsetTop);
  const lefts = items.map(el => el.offsetLeft);
  const minTop = Math.min(...tops);
  const maxTop = Math.max(...tops);
  const minLeft = Math.min(...lefts);
  const maxLeft = Math.max(...lefts);

  return items.map(el => {
    const classes = [];
    if (el.offsetTop === minTop) classes.push("edge-top");
    if (el.offsetTop === maxTop) classes.push("edge-bottom");
    if (el.offsetLeft === minLeft) classes.push("edge-left");
    if (el.offsetLeft === maxLeft) classes.push("edge-right");
    return classes.join(" ");
  });
}

export default function HeroPickerGrid({ heroes, selectedId, onSelect, emptyMessage }) {
  const gridRef = useRef(null);
  const [edgeClasses, setEdgeClasses] = useState([]);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    function measure() {
      setEdgeClasses(measureEdges(grid));
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [heroes]);

  return (
    <div className="cw-picker-grid" ref={gridRef}>
      {heroes.map((h, i) => (
        <button
          key={h.id}
          type="button"
          className={`cw-picker-btn ${h.role.toLowerCase()}${selectedId === h.id ? " active" : ""}${edgeClasses[i] ? ` ${edgeClasses[i]}` : ""}`}
          onClick={() => onSelect(h)}
        >
          <img src={h.image} alt={h.name} className="cw-picker-img" />
          <span>{h.name}</span>
        </button>
      ))}
      {heroes.length === 0 && emptyMessage && (
        <p className="picker-empty">{emptyMessage}</p>
      )}
    </div>
  );
}
