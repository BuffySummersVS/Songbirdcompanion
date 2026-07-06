import matchupReasons from "../data/matchupReasons.json";

export function getCounterReason(attacker, defender) {
  return matchupReasons.counters[`${attacker} > ${defender}`] ?? null;
}

export function getSynergyReason(nameA, nameB) {
  const [a, b] = [nameA, nameB].sort();
  return matchupReasons.synergies[`${a} + ${b}`] ?? null;
}
